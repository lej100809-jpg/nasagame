// Physics used by Miku☆Miku☆Beam. Every function here is a real equation; the inputs come from
// /public/data/*.json. (Written with AI assistance — Claude.)
//
//  Tsiolkovsky rocket equation   v_f = v_i + u ln(m_i / m_f)
//  Vis-viva equation             v^2 = mu (2/r - 1/a)
//  Escape velocity               v_e = sqrt(2 mu / r)        (vis-viva with a -> infinity)

export const G0 = 9.80665; // m/s^2

/** Tsiolkovsky: final speed after a burn. u in km/s, masses in kg. */
export function tsiolkovsky(vi, u, mi, mf) {
  return vi + u * Math.log(mi / mf);
}

/** Exhaust velocity u (km/s) from specific impulse Isp (s): u = Isp * g0 */
export function exhaustVelocity(isp) {
  return (isp * G0) / 1000;
}

/** Delta-v (km/s) a stage can give: u ln(mi/mf) */
export function deltaV(isp, mi, mf) {
  return tsiolkovsky(0, exhaustVelocity(isp), mi, mf);
}

/** Propellant needed for a delta-v (rocket equation rearranged): m_p = m_dry (e^(dv/u) - 1) */
export function propellantFor(dryKg, dvKmS, isp) {
  return dryKg * (Math.exp(dvKmS / exhaustVelocity(isp)) - 1);
}

/** Vis-viva: orbital speed (km/s) at distance r (km) on an orbit with semi-major axis a (km).
 *  a < 0 for hyperbolic orbits, a = Infinity for parabolic (escape). */
export function visViva(mu, r, a) {
  const inv = Number.isFinite(a) ? 1 / a : 0;
  return Math.sqrt(mu * (2 / r - inv));
}

/** Escape velocity (km/s): v_e = sqrt(2 mu / r) */
export function escapeVelocity(mu, r) {
  return Math.sqrt((2 * mu) / r);
}

/** Speed needed at parking-orbit radius r to leave Earth with characteristic energy C3 (= v_inf^2).
 *  Vis-viva with a = -mu/C3 gives v^2 = 2mu/r + C3 = v_e^2 + C3. */
export function departureSpeed(mu, r, c3) {
  const ve = escapeVelocity(mu, r);
  return Math.sqrt(ve * ve + c3);
}

/** Upper-stage escape burn delta-v from a circular parking orbit to a given C3. */
export function escapeBurnDv(mu, r, c3) {
  const vCirc = visViva(mu, r, r); // circular: a = r
  return departureSpeed(mu, r, c3) - vCirc;
}

/**
 * Launch vehicle payload capacity at a given C3.
 * The upper stage (dry mass md, calibrated usable propellant mp, exhaust velocity u) must give the
 * escape-burn delta-v to (payload + itself):   dv = u ln((md + mp + P) / (md + P))
 * Solve for payload P:   P = (md + mp - R md) / (R - 1),   R = e^(dv/u)
 * mp is calibrated from one sourced data point (c3Ref, massRef).
 */
export function makeCapacityModel(vehicleModel, consts) {
  const mu = consts.mu_earth_km3_s2.value;
  const r = consts.r_earth_km.value + consts.parking_orbit_alt_km.value;
  const u = exhaustVelocity(vehicleModel.isp_s.value);
  const md = vehicleModel.stage_dry_kg.value;
  const cal = vehicleModel.calibration_point;
  const Rref = Math.exp(escapeBurnDv(mu, r, cal.c3_km2_s2) / u);
  const mp = (Rref - 1) * (md + cal.mass_kg); // usable propellant in parking orbit
  const capacity = (c3) => {
    const R = Math.exp(escapeBurnDv(mu, r, c3) / u);
    return Math.max(0, (md + mp - R * md) / (R - 1));
  };
  return { capacity, calibratedPropKg: mp, u, md, r, mu };
}

/** Solar array output scales with inverse square of Sun distance: P = P_1AU / r^2 (r in AU) */
export function solarPower(p1au, rAU) {
  return p1au / (rAU * rAU);
}

/** One-way light-time delay (s) = distance (km) / c */
export function commDelaySeconds(distKm, cKmS = 299792.458) {
  return distKm / cKmS;
}

/** Data a link can return per day (GB) from a rate in kbit/s and pass hours. */
export function downlinkGBPerDay(kbps, hours) {
  return (kbps * 1000 * hours * 3600) / 8 / 1e9;
}

export function fmt(n, d = 0) {
  if (n === null || n === undefined || Number.isNaN(n)) return '—';
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
}
