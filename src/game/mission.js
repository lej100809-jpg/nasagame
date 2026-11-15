// Mission operations simulation: launch → cruise → arrival braking → proximity science → TAG →
// return → capsule re-entry. Real DONKI space-weather records are replayed as mission events.
// Probabilities and score are game_defined (see game_config.json / README). (AI-assisted: Claude.)
import { parseDate, addDays, isoDate } from './orbits.js';
import { deltaV } from './physics.js';

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SCIENCE = ['ocams', 'ola', 'ovirs', 'otes', 'rexis'];

export class Mission {
  constructor(D, state, c, seed = (Math.random() * 1e9) | 0) {
    this.D = D; this.s = state; this.c = c; this.seed = seed;
    this.rng = mulberry32(seed);
    const gc = D.game_config;
    this.gc = gc;
    this.alive = new Set(state.instruments);
    this.damage = { tagsamPenalty: 0 };
    this.extraDays = 0;
    this.log = [];
    this.causes = []; // { kind: 'fail'|'warn'|'ok', text }
    this.burnsUsed = 0;
    this.dryKg = c.dryKg;
    this.propLeft = c.propKg;
    this.sampleG = 0;
    this.tagAttempts = 0;
    this.result = { primary: false, secondary: {}, ended: null };

    const o = c.opt;
    this.launchMs = parseDate(o.launch_date);
    this.arrivalMs = parseDate(o.arrival_date);
    this.proxDays = gc.timeline_days.proximity_ops.value;
    this.returnDays = gc.timeline_days.return_cruise.value;
    this.events = this.pickEvents();
  }

  r() { return this.rng(); }

  get departMs() { return addDays(this.arrivalMs, this.proxDays + this.extraDaysProx()); }
  extraDaysProx() { return this.events.filter((e) => e.phase === 'proximity' && e.choice === 'safe').length * this.gc.space_weather.safe_mode_days; }
  get returnMs() { return addDays(this.departMs, this.returnDays); }

  dvLeft() { return deltaV(this.c.prop.isp_s, this.dryKg + this.propLeft, this.dryKg); }
  burn(dv, label) {
    const isp = this.c.prop.isp_s;
    const u = (isp * 9.80665) / 1000;
    const need = (this.dryKg + this.propLeft) * (1 - Math.exp(-dv / u)); // propellant used (rocket eq)
    this.burnsUsed++;
    if (this.burnsUsed > this.c.prop.max_burns) {
      return { ok: false, reason: `${this.c.prop.name} cannot be restarted: ${label} needed burn #${this.burnsUsed}, but this ${this.c.prop.class} motor allows only ${this.c.prop.max_burns}.` };
    }
    if (need > this.propLeft + 1e-6) {
      return { ok: false, reason: `${label} needs Δv ${dv.toFixed(2)} km/s, but only ${this.dvLeft().toFixed(2)} km/s is left (Tsiolkovsky: Δv = ${isp}·g₀·ln(mᵢ/m_f)).` };
    }
    this.propLeft -= need;
    return { ok: true, used: need };
  }

  pickEvents() {
    const all = this.D.events.events;
    const sw = this.gc.space_weather;
    const pick = (arr) => arr[Math.floor(this.r() * arr.length)];
    const storms = all.filter((e) => e.type === 'geomagnetic_storm');
    const bigFlares = all.filter((e) => e.type === 'solar_flare' && e.severity >= 3);
    const cmes = all.filter((e) => e.type !== 'solar_flare' && e.type !== 'geomagnetic_storm');
    const smallFlares = all.filter((e) => e.type === 'solar_flare' && e.severity < 3);
    const evs = [];
    const flightDays = this.c.opt.flight_days;
    const nearEarthPhase = this.r() < 0.5 ? 'launch' : 'reentry';
    evs.push({ ...pick(storms), phase: nearEarthPhase });
    evs.push({ ...pick(bigFlares), phase: 'cruise', dayFrac: 0.3 + this.r() * 0.3 });
    evs.push({ ...pick(cmes.length ? cmes : bigFlares), phase: 'proximity' });
    const extra = Math.floor(this.r() * (sw.events_max - sw.events_min + 1));
    for (let k = 0; k < extra; k++) {
      evs.push({ ...pick(smallFlares.concat(bigFlares)), phase: k % 2 ? 'return' : 'cruise', dayFrac: 0.65 + this.r() * 0.3 });
    }
    evs.forEach((e) => { e.choice = null; e.outcome = null; });
    this.flightDays = flightDays;
    return evs;
  }

  eventsFor(phase) { return this.events.filter((e) => e.phase === phase); }

  failProb(ev, safe) {
    const sw = this.gc.space_weather;
    const excess = Math.max(0, ev.severity - this.s.shield);
    let p = Math.min(0.9, excess * sw.failure_prob_per_level);
    if (safe) p *= sw.safe_mode_prob_factor;
    return p;
  }

  resolveEvent(ev, choice) {
    const sw = this.gc.space_weather;
    ev.choice = choice;
    const safe = choice === 'safe';
    const p = this.failProb(ev, safe);
    if (safe) this.extraDays += sw.safe_mode_days;
    const hit = this.r() < p;
    let text;
    if (!hit) {
      text = safe
        ? `Safe mode held. Instruments powered down for ${sw.safe_mode_days} days (+$${(sw.safe_mode_days * sw.extra_day_cost_musd).toFixed(1)}M operations). No damage.`
        : `Rode it out at full operations. ${p === 0 ? 'Shielding level ' + this.s.shield + ' ≥ event severity ' + ev.severity + ': no risk.' : 'Lucky: no damage (risk was ' + Math.round(p * 100) + '%).'}`;
      ev.outcome = { hit: false, text };
      return ev.outcome;
    }
    const candidates = SCIENCE.filter((x) => this.alive.has(x));
    if (candidates.length) {
      const lost = candidates[Math.floor(this.r() * candidates.length)];
      this.alive.delete(lost);
      const name = this.D.instruments[lost].name;
      text = `Radiation upset! ${name} failed (severity ${ev.severity} > shielding ${this.s.shield}, risk ${Math.round(p * 100)}%).`;
      this.causes.push({ kind: 'fail', text: `${ev.title_en} (${ev.scale}, DONKI ${ev.time.slice(0, 10)}) knocked out ${name}: severity ${ev.severity} vs shielding ${this.s.shield}${safe ? ' even in safe mode' : ' while operating normally'}.` });
    } else {
      this.damage.tagsamPenalty += 0.15;
      text = `Radiation upset hit the avionics: sampling guidance degraded (−15% TAG success).`;
      this.causes.push({ kind: 'fail', text: `${ev.title_en} degraded the guidance computer (severity ${ev.severity} vs shielding ${this.s.shield}).` });
    }
    ev.outcome = { hit: true, text };
    return ev.outcome;
  }

  launch() {
    const c = this.c;
    return { ok: true, text: `${c.vehicle.name} lifted ${Math.round(c.wetKg)} kg (capacity ${Math.round(c.capacityKg)} kg at C3 ${c.c3.toFixed(2)} km²/s²). Upper stage escape burn Δv ${c.escapeDv.toFixed(2)} km/s → departure speed ${c.vDepart.toFixed(2)} km/s vs escape speed ${c.vEscPark.toFixed(2)} km/s at ${this.gc.constants.parking_orbit_alt_km.value} km.` };
  }

  arrival() {
    const dv = this.c.dvArrival;
    const b = this.burn(dv, 'Bennu arrival braking');
    if (!b.ok) {
      this.result.ended = 'arrival';
      this.causes.push({ kind: 'fail', text: `Could not stop at Bennu. ${b.reason} The fast launch window (arrival braking ${dv.toFixed(2)} km/s) needs more propellant or a higher-Isp engine. Only ${this.D.brakableOptions.length} of ${this.D.futureOptions.length} future windows are brakable with an OSIRIS-REx-class spacecraft.` });
      return { ok: false, text: 'Arrival burn failed — the spacecraft flew past Bennu.' };
    }
    this.causes.push({ kind: 'ok', text: `Arrival braking ${dv.toFixed(2)} km/s used ${Math.round(b.used)} kg of propellant.` });
    return { ok: true, text: `Braking burn complete: Δv ${dv.toFixed(2)} km/s, ${Math.round(b.used)} kg propellant used, ${Math.round(this.propLeft)} kg left.` };
  }

  proximity() {
    const c = this.c;
    const b = this.burn(c.dvProx, 'Proximity operations');
    if (!b.ok) {
      this.result.ended = 'proximity';
      this.causes.push({ kind: 'fail', text: `Could not maneuver around Bennu. ${b.reason}` });
      return { ok: false, text: 'No propellant / restarts for proximity operations.' };
    }
    // Power factor (inverse square law) at perihelion and aphelion
    const instW = [...this.alive].reduce((a, id) => a + (this.D.instruments[id].power_w_avg || 0), 0);
    const base = this.gc.bus.power_w.value + this.gc.antenna_game[this.s.antenna].power_w;
    const f = (p) => (instW <= 0 ? 1 : Math.max(0, Math.min(1, (p - base) / instW)));
    const powerFactor = (f(c.pPeri) + f(c.pAph)) / 2;
    const dataPerDay = [...this.alive].reduce((a, id) => a + this.D.instruments[id].data_gb_day, 0);
    const dataFraction = dataPerDay > 0 ? Math.min(1, c.linkGB / dataPerDay) : 1;
    const science = powerFactor * dataFraction;
    this.science = { powerFactor, dataFraction, science };
    if (powerFactor < 1) this.causes.push({ kind: 'warn', text: `Power: arrays give ${Math.round(c.pAph)} W at aphelion (P = ${c.p1au}/${this.D.real_mission.bennu_orbit.aphelion_au}²) but the load is ${Math.round(c.loadW)} W. Instruments were switched off for part of every orbit (${Math.round(powerFactor * 100)}% observing time).` });
    if (dataFraction < 1) this.causes.push({ kind: 'warn', text: `Communications: ${c.ant.name} returns ${c.linkGB.toFixed(2)} GB/day but instruments made ${dataPerDay.toFixed(2)} GB/day. ${Math.round((1 - dataFraction) * 100)}% of observations were lost.` });
    for (const id of ['global', 'chem_map', 'yarkovsky', 'site']) {
      const o = this.gc.objectives[id];
      const equipped = o.needs_any.some((x) => this.alive.has(x));
      const ok = equipped && science >= 0.6;
      this.result.secondary[id] = ok;
      if (this.s.secondary.has(id)) {
        if (!equipped) this.causes.push({ kind: 'fail', text: `"${o.label}" failed: needs ${o.needs_any.map((x) => x.toUpperCase()).join(' or ')}, none working.` });
        else if (!ok) this.causes.push({ kind: 'fail', text: `"${o.label}" failed: only ${Math.round(science * 100)}% of the science data came home (need 60%).` });
        else this.causes.push({ kind: 'ok', text: `"${o.label}" achieved.` });
      }
    }
    return { ok: true, text: `Global survey complete: ${Math.round(science * 100)}% science return (power ${Math.round(powerFactor * 100)}%, downlink ${Math.round(dataFraction * 100)}%).` };
  }

  tagChance() {
    const sp = this.gc.sampling;
    let p = sp.base_success - this.damage.tagsamPenalty;
    for (const [id, b] of Object.entries(sp.bonus)) if (this.alive.has(id)) p += b;
    return Math.max(0.05, Math.min(0.97, p));
  }

  canRetryTag() {
    const sp = this.gc.sampling;
    const u = (this.c.prop.isp_s * 9.80665) / 1000;
    const returnProp = (this.dryKg) * (Math.exp(this.c.dvReturn / u) - 1);
    return this.tagAttempts < 2 && this.propLeft - returnProp > sp.second_attempt_prop_margin_kg && this.c.prop.max_burns >= 99;
  }

  tag() {
    if (!this.s.instruments.has('tagsam') || !this.s.instruments.has('src')) {
      this.result.ended = this.result.ended || 'tag';
      this.causes.push({ kind: 'fail', text: 'No TAGSAM sampling arm and/or Sample Return Capsule on board: no way to collect or return a sample.' });
      return { ok: false, final: true, text: 'Sampling impossible — hardware not installed.' };
    }
    this.tagAttempts++;
    const p = this.tagChance();
    const sp = this.gc.sampling;
    const success = this.r() < p;
    if (success) {
      const [lo, hi] = sp.sample_mass_g_range;
      this.sampleG = Math.round((lo + this.r() * (hi - lo)) * 10) / 10;
      this.causes.push({ kind: 'ok', text: `Touch-And-Go #${this.tagAttempts} succeeded (chance ${Math.round(p * 100)}%${this.alive.has('ocams') || this.alive.has('ola') ? ', boosted by ' + ['ocams', 'ola'].filter((x) => this.alive.has(x)).map((x) => x.toUpperCase()).join(' + ') + ' site selection' : ''}): ${this.sampleG} g collected.` });
      if (this.tagAttempts > 1) { this.propLeft -= sp.second_attempt_prop_margin_kg; }
      return { ok: true, final: true, text: `TAG success! Estimated sample: ${this.sampleG} g.` };
    }
    const retry = this.canRetryTag();
    if (!retry) {
      this.causes.push({ kind: 'fail', text: `Touch-And-Go failed (chance was ${Math.round(p * 100)}%)${this.tagAttempts < 2 ? ' and there was not enough propellant margin for a second attempt' : ''}.` });
      this.result.ended = 'tag';
    }
    return { ok: false, final: !retry, retry, text: `TAG attempt ${this.tagAttempts} collected too little material (chance was ${Math.round(p * 100)}%).` };
  }

  departure() {
    const b = this.burn(this.c.dvReturn, 'Bennu departure (return) burn');
    if (!b.ok) {
      this.result.ended = 'return';
      this.causes.push({ kind: 'fail', text: `Could not leave Bennu: ${b.reason}` });
      return { ok: false, text: 'Return burn impossible — the sample is stranded at Bennu.' };
    }
    return { ok: true, text: `Departure burn Δv ${this.c.dvReturn.toFixed(2)} km/s done, ${Math.round(this.propLeft)} kg propellant left. Heading home.` };
  }

  reentry() {
    if (this.sampleG > 0) {
      this.result.primary = this.sampleG >= 60;
      this.causes.push({ kind: 'ok', text: `Sample Return Capsule landed with ${this.sampleG} g (goal ≥ 60 g; OSIRIS-REx returned ${this.D.real_mission.sample_returned_g.value} g).` });
    }
    this.result.ended = this.result.ended || 'complete';
    return { ok: this.result.primary, text: this.result.primary ? `Capsule recovered — ${this.sampleG} g of Bennu in hand.` : 'Capsule recovered — but empty.' };
  }

  finalCost() {
    const sw = this.gc.space_weather;
    return this.c.costMusd + this.extraDays * sw.extra_day_cost_musd;
  }

  score() {
    const sc = this.gc.score;
    const rows = [];
    if (this.result.primary) rows.push(['Primary objective: sample ≥ 60 g returned', sc.primary_success]);
    else rows.push(['Primary objective failed', 0]);
    for (const id of this.s.secondary) {
      const ok = this.result.secondary[id];
      rows.push([`${ok ? '✓' : '✗'} ${this.gc.objectives[id].label}`, ok ? sc.secondary_selected_success : sc.secondary_selected_failed]);
    }
    if (this.result.primary && this.sampleG > 60) rows.push([`Extra sample mass (${(this.sampleG - 60).toFixed(1)} g over goal)`, Math.round((this.sampleG - 60) * sc.sample_mass_bonus_per_g_over_60)]);
    const left = this.c.budget - this.finalCost();
    if (left > 0 && this.result.primary) rows.push([`Budget left: $${left.toFixed(1)}M`, Math.min(sc.budget_bonus_cap, Math.round(left * sc.budget_bonus_per_musd_left))]);
    if (left < 0) rows.push([`Over budget by $${(-left).toFixed(1)}M (safe-mode days)`, Math.round(left * sc.budget_bonus_per_musd_left)]);
    const total = rows.reduce((a, r) => a + r[1], 0);
    return { rows, total };
  }

  timeline() {
    return {
      launch: isoDate(this.launchMs),
      arrival: isoDate(this.arrivalMs),
      depart: isoDate(this.departMs),
      landing: isoDate(this.returnMs),
      totalDays: Math.round((this.returnMs - this.launchMs) / 86400000),
    };
  }
}
