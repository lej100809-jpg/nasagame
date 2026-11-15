// Spacecraft / mission design model: turns the player's choices into mass, power, data, cost and
// delta-v numbers. Pure functions so the UI can recompute every keystroke. (AI-assisted: Claude.)
import { makeCapacityModel, propellantFor, deltaV, solarPower, downlinkGBPerDay, escapeBurnDv, escapeVelocity, departureSpeed, visViva } from './physics.js';

export const SECONDARY = ['global', 'chem_map', 'yarkovsky', 'site'];
export const INSTRUMENT_ORDER = ['ocams', 'ola', 'ovirs', 'otes', 'rexis', 'tagsam', 'src'];

export function defaultState(D) {
  const recommended = D.brakableOptions.find((o) => o.launch_date === '2035-09-24') || D.brakableOptions[0];
  return {
    secondary: new Set(),
    optionKey: recommended.launch_date + '|' + recommended.arrival_date,
    vehicleId: 'atlas_v_411',
    instruments: new Set(['tagsam', 'src']),
    solar: 'solar_medium',
    antenna: 'hga',
    shield: 1,
    propulsionId: 'mono_n2h4',
    propKg: 0, // 0 = auto-size
    autoProp: true,
  };
}

/** The real OSIRIS-REx configuration, used for the comparison and the "load real design" button. */
export function realState(D) {
  return {
    secondary: new Set(SECONDARY),
    optionKey: null,
    vehicleId: 'atlas_v_411',
    instruments: new Set(INSTRUMENT_ORDER),
    solar: 'solar_large',
    antenna: 'hga',
    shield: 2,
    propulsionId: 'mono_n2h4',
    propKg: 1230,
    autoProp: false,
  };
}

export function getOption(D, key) {
  if (!key) return null;
  return D.mission_options.options.find((o) => o.launch_date + '|' + o.arrival_date === key) || null;
}

const capCache = new Map();
export function capacityFor(D, vehicleId, c3) {
  if (!capCache.has(vehicleId)) {
    const vm = D.game_config.launch_vehicle_model.vehicles[vehicleId];
    capCache.set(vehicleId, makeCapacityModel(vm, D.game_config.constants));
  }
  return capCache.get(vehicleId).capacity(c3);
}

export function compute(D, s) {
  const gc = D.game_config;
  const opt = getOption(D, s.optionKey);
  const prop = D.propulsion[s.propulsionId];
  const bus = gc.bus;

  // ---------- MASS ----------
  const massItems = [{ label: 'Spacecraft bus (structure, avionics, tanks)', kg: bus.mass_kg.value, status: bus.mass_kg.status }];
  let instMass = 0, instPower = 0, instCost = 0, dataPerDay = 0;
  for (const id of INSTRUMENT_ORDER) {
    if (!s.instruments.has(id)) continue;
    const i = D.instruments[id];
    instMass += i.mass_kg; instPower += i.power_w_avg; instCost += i.cost_musd; dataPerDay += i.data_gb_day;
    massItems.push({ label: i.name, kg: i.mass_kg, status: i.mass_status || i.status });
  }
  const solar = D.solar[s.solar];
  const ant = D.antennas[s.antenna];
  const antG = gc.antenna_game[s.antenna];
  const shield = D.shields[s.shield];
  massItems.push({ label: solar.name, kg: solar.mass_kg, status: solar.status });
  massItems.push({ label: ant.name, kg: antG.mass_kg, status: 'game_defined' });
  massItems.push({ label: `Radiation shielding level ${s.shield}`, kg: shield.mass_kg, status: shield.status });
  if (prop.extra_mass_kg) massItems.push({ label: prop.name + ' hardware', kg: prop.extra_mass_kg, status: 'game_defined' });
  const dryKg = massItems.reduce((a, b) => a + b.kg, 0);

  // ---------- DELTA-V (Tsiolkovsky) ----------
  const dvArrival = opt ? opt.arrival_braking_dv_km_s : 0;
  const dvProx = gc.delta_v_budget_km_s.proximity_ops.value;
  const dvReturn = gc.delta_v_budget_km_s.return_departure.value;
  const dvRequired = dvArrival + dvProx + dvReturn;
  const burnsRequired = 3; // arrival braking, proximity ops, return departure
  const tankMax = gc.tank.max_propellant_kg;
  const autoProp = Math.min(tankMax, Math.ceil(propellantFor(dryKg, dvRequired * 1.03, prop.isp_s)));
  const propKg = s.autoProp ? autoProp : Math.min(tankMax, s.propKg);
  const wetKg = dryKg + propKg;
  const dvAvailable = deltaV(prop.isp_s, wetKg, dryKg);
  // Solid motor: one burn only, it gives all its delta-v in one go (can't be split)
  const canDoAllBurns = prop.max_burns >= burnsRequired;
  const dvMarginKmS = dvAvailable - dvRequired;

  // ---------- LAUNCH ----------
  const c3 = opt ? opt.c3_km2_s2 : 0;
  const capacityKg = capacityFor(D, s.vehicleId, c3);
  const vehicle = D.vehicles[s.vehicleId];
  const k = gc.constants;
  const rPark = k.r_earth_km.value + k.parking_orbit_alt_km.value;
  const vEscSurface = escapeVelocity(k.mu_earth_km3_s2.value, k.r_earth_km.value);
  const vEscPark = escapeVelocity(k.mu_earth_km3_s2.value, rPark);
  const vCircPark = visViva(k.mu_earth_km3_s2.value, rPark, rPark);
  const vDepart = departureSpeed(k.mu_earth_km3_s2.value, rPark, c3);
  const escapeDv = escapeBurnDv(k.mu_earth_km3_s2.value, rPark, c3);

  // ---------- POWER (inverse square law) ----------
  const bennu = D.real_mission.bennu_orbit;
  const loadW = bus.power_w.value + instPower + antG.power_w;
  const pPeri = solarPower(solar.power_w_at_1au, bennu.perihelion_au);
  const pAph = solarPower(solar.power_w_at_1au, bennu.aphelion_au);
  const powerOk = pAph >= loadW;

  // ---------- COMMUNICATIONS ----------
  const linkGB = downlinkGBPerDay(ant.downlink_kbps_at_bennu, gc.downlink_hours_per_day.value);
  const dataFraction = dataPerDay > 0 ? Math.min(1, linkGB / dataPerDay) : 1;
  const commDelayMin = opt ? opt.comm_delay_at_arrival_min : null;

  // ---------- COST ----------
  const costItems = [
    { label: 'Bus, integration & operations', musd: bus.cost_musd.value },
    { label: 'Science instruments', musd: instCost },
    { label: solar.name, musd: gc.solar_cost_musd[s.solar] },
    { label: ant.name, musd: antG.cost_musd },
    { label: `Shielding level ${s.shield}`, musd: gc.shield_cost_musd[String(s.shield)] },
    { label: prop.name, musd: prop.extra_cost_musd },
    { label: `Launch: ${vehicle.name}`, musd: vehicle.cost_musd },
  ].filter((c) => c.musd !== 0);
  const costMusd = costItems.reduce((a, b) => a + b.musd, 0);
  const budget = gc.budget_musd.value;

  // ---------- OBJECTIVES ----------
  const objectives = {};
  for (const [id, o] of Object.entries(gc.objectives)) {
    if (id === 'status') continue;
    const ok = o.needs_all ? o.needs_all.every((x) => s.instruments.has(x)) : o.needs_any.some((x) => s.instruments.has(x));
    objectives[id] = { ...o, equipped: ok };
  }

  // ---------- WARNINGS / GATES ----------
  const warnings = [];
  const blockers = [];
  if (!opt) blockers.push('Pick a launch window on the Launch screen.');
  if (wetKg > capacityKg) blockers.push(`Launch mass ${Math.round(wetKg)} kg exceeds ${vehicle.name} capacity ${Math.round(capacityKg)} kg at C3 ${c3.toFixed(1)} km²/s².`);
  if (costMusd > budget) blockers.push(`Total cost $${Math.round(costMusd)}M exceeds the $${budget}M budget.`);
  if (!objectives.sample.equipped) warnings.push('No TAGSAM + Sample Return Capsule: the primary objective (≥60 g sample) is impossible.');
  for (const id of s.secondary) if (!objectives[id].equipped) warnings.push(`Secondary objective "${objectives[id].label}" has no instrument that can do it.`);
  if (!powerOk) warnings.push(`Power: load ${Math.round(loadW)} W > array output at aphelion ${Math.round(pAph)} W (P = P₁ₐᵤ / r², r = ${bennu.aphelion_au} AU). Instruments will be shut off far from the Sun.`);
  if (dataFraction < 1) warnings.push(`Communications: science data ${dataPerDay.toFixed(2)} GB/day > downlink ${linkGB.toFixed(2)} GB/day. ${Math.round((1 - dataFraction) * 100)}% of observations will be lost.`);
  if (dvAvailable < dvRequired) warnings.push(`Delta-v: ${dvAvailable.toFixed(2)} km/s available < ${dvRequired.toFixed(2)} km/s needed. The spacecraft cannot complete the mission.`);
  if (!canDoAllBurns) warnings.push(`${prop.name} can fire only ${prop.max_burns} time(s); this mission needs ${burnsRequired} separate burns.`);
  if (propKg >= tankMax && s.autoProp && dvAvailable < dvRequired) warnings.push(`Propellant tank is full (${tankMax} kg max).`);

  return {
    opt, prop, vehicle, solar, ant, shield,
    massItems, dryKg, propKg, autoProp, wetKg, tankMax,
    dvArrival, dvProx, dvReturn, dvRequired, dvAvailable, dvMarginKmS, burnsRequired, canDoAllBurns,
    c3, capacityKg, vEscSurface, vEscPark, vCircPark, vDepart, escapeDv, rPark,
    loadW, pPeri, pAph, p1au: solar.power_w_at_1au, powerOk, instPower,
    linkGB, dataPerDay, dataFraction, commDelayMin,
    costItems, costMusd, budget,
    objectives, warnings, blockers,
  };
}
