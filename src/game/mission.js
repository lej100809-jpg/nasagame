// Mission operations simulation: launch → cruise → arrival braking → proximity science → TAG →
// return → capsule re-entry. Real DONKI space-weather records are replayed as mission events.
// Probabilities and score are game_defined (see game_config.json / README). (AI-assisted: Claude.)
// All player-facing strings are bilingual { en, ko }; use L(value, lang) to pick one.
import { parseDate, addDays, isoDate } from './orbits.js';
import { deltaV } from './physics.js';

export const L = (v, lang) => (v && typeof v === 'object' && 'en' in v ? (v[lang] ?? v.en) : v);

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SCIENCE = ['ocams', 'ola', 'ovirs', 'otes', 'rexis'];
const CLASS_KO = { liquid: '액체', solid: '고체', hybrid: '하이브리드' };
const LABEL_KO = {
  'Bennu arrival braking': '베누 도착 감속',
  'Proximity operations': '근접 운용',
  'Bennu departure (return) burn': '베누 출발(귀환) 분사',
};
const OBJ_KO = {
  sample: '60 g 이상의 순수한 탄소질 표토 샘플 귀환',
  global: '베누 전체 특성 지도화',
  chem_map: '화학 조성·광물 지도화',
  yarkovsky: '야르콥스키 효과 측정',
  site: '채취 지점 표토 기록',
};

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
    this.causes = []; // { kind: 'fail'|'warn'|'ok', text: { en, ko } }
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

  objLabel(id) {
    return { en: this.gc.objectives[id].label, ko: OBJ_KO[id] || this.gc.objectives[id].label };
  }

  get departMs() { return addDays(this.arrivalMs, this.proxDays + this.extraDaysProx()); }
  extraDaysProx() { return this.events.filter((e) => e.phase === 'proximity' && e.choice === 'safe').length * this.gc.space_weather.safe_mode_days; }
  get returnMs() { return addDays(this.departMs, this.returnDays); }

  dvLeft() { return deltaV(this.c.prop.isp_s, this.dryKg + this.propLeft, this.dryKg); }
  burn(dv, label) {
    const isp = this.c.prop.isp_s;
    const u = (isp * 9.80665) / 1000;
    const need = (this.dryKg + this.propLeft) * (1 - Math.exp(-dv / u)); // propellant used (rocket eq)
    const labelKo = LABEL_KO[label] || label;
    this.burnsUsed++;
    if (this.burnsUsed > this.c.prop.max_burns) {
      const cls = this.c.prop.class;
      return {
        ok: false,
        reason: {
          en: `${this.c.prop.name} cannot be restarted: ${label} needed burn #${this.burnsUsed}, but this ${cls} motor allows only ${this.c.prop.max_burns}.`,
          ko: `${this.c.prop.name}은(는) 재점화할 수 없음: ${labelKo}에 ${this.burnsUsed}번째 분사가 필요하지만 이 ${CLASS_KO[cls] || cls} 추진기는 ${this.c.prop.max_burns}번만 가능함.`,
        },
      };
    }
    if (need > this.propLeft + 1e-6) {
      return {
        ok: false,
        reason: {
          en: `${label} needs Δv ${dv.toFixed(2)} km/s, but only ${this.dvLeft().toFixed(2)} km/s is left (Tsiolkovsky: Δv = ${isp}·g₀·ln(mᵢ/m_f)).`,
          ko: `${labelKo}에 Δv ${dv.toFixed(2)} km/s가 필요하지만 남은 Δv는 ${this.dvLeft().toFixed(2)} km/s뿐임 (치올콥스키: Δv = ${isp}·g₀·ln(mᵢ/m_f)).`,
        },
      };
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
      const cost = (sw.safe_mode_days * sw.extra_day_cost_musd).toFixed(1);
      if (safe) {
        text = {
          en: `Safe mode held. Instruments powered down for ${sw.safe_mode_days} days (+$${cost}M operations). No damage.`,
          ko: `안전 모드 유지. 장비를 ${sw.safe_mode_days}일간 껐음 (운영비 +$${cost}M). 피해 없음.`,
        };
      } else if (p === 0) {
        text = {
          en: `Rode it out at full operations. Shielding level ${this.s.shield} ≥ event severity ${ev.severity}: no risk.`,
          ko: `정상 운영으로 버팀. 차폐 레벨 ${this.s.shield} ≥ 이벤트 위험도 ${ev.severity}: 위험 없음.`,
        };
      } else {
        text = {
          en: `Rode it out at full operations. Lucky: no damage (risk was ${Math.round(p * 100)}%).`,
          ko: `정상 운영으로 버팀. 운 좋게 피해 없음 (위험 확률 ${Math.round(p * 100)}%).`,
        };
      }
      ev.outcome = { hit: false, text };
      return ev.outcome;
    }
    const candidates = SCIENCE.filter((x) => this.alive.has(x));
    const evDate = ev.time.slice(0, 10);
    if (candidates.length) {
      const lost = candidates[Math.floor(this.r() * candidates.length)];
      this.alive.delete(lost);
      const name = this.D.instruments[lost].name;
      text = {
        en: `Radiation upset! ${name} failed (severity ${ev.severity} > shielding ${this.s.shield}, risk ${Math.round(p * 100)}%).`,
        ko: `방사선 오작동! ${name} 고장 (위험도 ${ev.severity} > 차폐 ${this.s.shield}, 확률 ${Math.round(p * 100)}%).`,
      };
      this.causes.push({
        kind: 'fail',
        text: {
          en: `${ev.title_en} (${ev.scale}, DONKI ${evDate}) knocked out ${name}: severity ${ev.severity} vs shielding ${this.s.shield}${safe ? ' even in safe mode' : ' while operating normally'}.`,
          ko: `${ev.title_en} (${ev.scale}, DONKI ${evDate})로 ${name} 고장: 위험도 ${ev.severity} vs 차폐 ${this.s.shield}${safe ? ' (안전 모드였는데도)' : ' (정상 운영 중)'}.`,
        },
      });
    } else {
      this.damage.tagsamPenalty += 0.15;
      text = {
        en: `Radiation upset hit the avionics: sampling guidance degraded (−15% TAG success).`,
        ko: `방사선이 항전 장비를 강타: 샘플 채취 유도 성능 저하 (TAG 성공률 −15%).`,
      };
      this.causes.push({
        kind: 'fail',
        text: {
          en: `${ev.title_en} degraded the guidance computer (severity ${ev.severity} vs shielding ${this.s.shield}).`,
          ko: `${ev.title_en}로 유도 컴퓨터 성능 저하 (위험도 ${ev.severity} vs 차폐 ${this.s.shield}).`,
        },
      });
    }
    ev.outcome = { hit: true, text };
    return ev.outcome;
  }

  launch() {
    const c = this.c;
    const alt = this.gc.constants.parking_orbit_alt_km.value;
    return {
      ok: true,
      text: {
        en: `${c.vehicle.name} lifted ${Math.round(c.wetKg)} kg (capacity ${Math.round(c.capacityKg)} kg at C3 ${c.c3.toFixed(2)} km²/s²). Upper stage escape burn Δv ${c.escapeDv.toFixed(2)} km/s → departure speed ${c.vDepart.toFixed(2)} km/s vs escape speed ${c.vEscPark.toFixed(2)} km/s at ${alt} km.`,
        ko: `${c.vehicle.name}이(가) ${Math.round(c.wetKg)} kg 발사 (C3 ${c.c3.toFixed(2)} km²/s²에서 최대 ${Math.round(c.capacityKg)} kg). 상단 탈출 분사 Δv ${c.escapeDv.toFixed(2)} km/s → 출발 속도 ${c.vDepart.toFixed(2)} km/s (고도 ${alt} km 탈출 속도 ${c.vEscPark.toFixed(2)} km/s).`,
      },
    };
  }

  arrival() {
    const dv = this.c.dvArrival;
    const b = this.burn(dv, 'Bennu arrival braking');
    if (!b.ok) {
      this.result.ended = 'arrival';
      const nb = this.D.brakableOptions.length, nf = this.D.futureOptions.length;
      this.causes.push({
        kind: 'fail',
        text: {
          en: `Could not stop at Bennu. ${b.reason.en} The fast launch window (arrival braking ${dv.toFixed(2)} km/s) needs more propellant or a higher-Isp engine. Only ${nb} of ${nf} future windows are brakable with an OSIRIS-REx-class spacecraft.`,
          ko: `베누에서 멈추지 못함. ${b.reason.ko} 빠른 발사창(도착 감속 ${dv.toFixed(2)} km/s)은 추진제가 더 많거나 Isp가 더 높은 엔진이 필요함. 미래 발사창 ${nf}개 중 OSIRIS-REx급 우주선으로 감속 가능한 건 ${nb}개뿐임.`,
        },
      });
      return { ok: false, text: { en: 'Arrival burn failed — the spacecraft flew past Bennu.', ko: '도착 감속 실패 — 우주선이 베누를 지나쳐 버림.' } };
    }
    this.causes.push({
      kind: 'ok',
      text: {
        en: `Arrival braking ${dv.toFixed(2)} km/s used ${Math.round(b.used)} kg of propellant.`,
        ko: `도착 감속 ${dv.toFixed(2)} km/s에 추진제 ${Math.round(b.used)} kg 사용.`,
      },
    });
    return {
      ok: true,
      text: {
        en: `Braking burn complete: Δv ${dv.toFixed(2)} km/s, ${Math.round(b.used)} kg propellant used, ${Math.round(this.propLeft)} kg left.`,
        ko: `베누 도착 감속 완료: Δv ${dv.toFixed(2)} km/s, 추진제 ${Math.round(b.used)} kg 사용, ${Math.round(this.propLeft)} kg 남음.`,
      },
    };
  }

  proximity() {
    const c = this.c;
    const b = this.burn(c.dvProx, 'Proximity operations');
    if (!b.ok) {
      this.result.ended = 'proximity';
      this.causes.push({ kind: 'fail', text: { en: `Could not maneuver around Bennu. ${b.reason.en}`, ko: `베누 주변에서 기동하지 못함. ${b.reason.ko}` } });
      return { ok: false, text: { en: 'No propellant / restarts for proximity operations.', ko: '근접 운용에 쓸 추진제나 재점화 횟수가 없음.' } };
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
    const aph = this.D.real_mission.bennu_orbit.aphelion_au;
    if (powerFactor < 1) this.causes.push({
      kind: 'warn',
      text: {
        en: `Power: arrays give ${Math.round(c.pAph)} W at aphelion (P = ${c.p1au}/${aph}²) but the load is ${Math.round(c.loadW)} W. Instruments were switched off for part of every orbit (${Math.round(powerFactor * 100)}% observing time).`,
        ko: `전력: 원일점에서 태양전지 출력 ${Math.round(c.pAph)} W (P = ${c.p1au}/${aph}²)인데 부하는 ${Math.round(c.loadW)} W. 공전할 때마다 일부 구간에서 장비를 꺼야 했음 (관측 시간 ${Math.round(powerFactor * 100)}%).`,
      },
    });
    if (dataFraction < 1) this.causes.push({
      kind: 'warn',
      text: {
        en: `Communications: ${c.ant.name} returns ${c.linkGB.toFixed(2)} GB/day but instruments made ${dataPerDay.toFixed(2)} GB/day. ${Math.round((1 - dataFraction) * 100)}% of observations were lost.`,
        ko: `통신: ${c.ant.name}은(는) 하루 ${c.linkGB.toFixed(2)} GB를 보내는데 장비는 하루 ${dataPerDay.toFixed(2)} GB를 만들었음. 관측 데이터의 ${Math.round((1 - dataFraction) * 100)}%를 잃음.`,
      },
    });
    for (const id of ['global', 'chem_map', 'yarkovsky', 'site']) {
      const o = this.gc.objectives[id];
      const lbl = this.objLabel(id);
      const equipped = o.needs_any.some((x) => this.alive.has(x));
      const ok = equipped && science >= 0.6;
      this.result.secondary[id] = ok;
      if (this.s.secondary.has(id)) {
        const needs = o.needs_any.map((x) => x.toUpperCase());
        if (!equipped) this.causes.push({
          kind: 'fail',
          text: {
            en: `"${lbl.en}" failed: needs ${needs.join(' or ')}, none working.`,
            ko: `"${lbl.ko}" 실패: ${needs.join(' 또는 ')}이(가) 필요한데 작동하는 장비가 없음.`,
          },
        });
        else if (!ok) this.causes.push({
          kind: 'fail',
          text: {
            en: `"${lbl.en}" failed: only ${Math.round(science * 100)}% of the science data came home (need 60%).`,
            ko: `"${lbl.ko}" 실패: 과학 데이터가 ${Math.round(science * 100)}%만 돌아옴 (60% 필요).`,
          },
        });
        else this.causes.push({ kind: 'ok', text: { en: `"${lbl.en}" achieved.`, ko: `"${lbl.ko}" 달성.` } });
      }
    }
    const sp = Math.round(science * 100), pp = Math.round(powerFactor * 100), dp = Math.round(dataFraction * 100);
    return {
      ok: true,
      text: {
        en: `Global survey complete: ${sp}% science return (power ${pp}%, downlink ${dp}%).`,
        ko: `전체 탐사 완료: 과학 데이터 회수율 ${sp}% (전력 ${pp}%, 다운링크 ${dp}%).`,
      },
    };
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
      this.causes.push({
        kind: 'fail',
        text: {
          en: 'No TAGSAM sampling arm and/or Sample Return Capsule on board: no way to collect or return a sample.',
          ko: 'TAGSAM 채취 팔 또는 샘플 귀환 캡슐이 없음: 샘플을 모으거나 가져올 방법이 없음.',
        },
      });
      return { ok: false, final: true, text: { en: 'Sampling impossible — hardware not installed.', ko: '샘플 채취 불가 — 장비가 실려 있지 않음.' } };
    }
    this.tagAttempts++;
    const p = this.tagChance();
    const pct = Math.round(p * 100);
    const sp = this.gc.sampling;
    const success = this.r() < p;
    if (success) {
      const [lo, hi] = sp.sample_mass_g_range;
      this.sampleG = Math.round((lo + this.r() * (hi - lo)) * 10) / 10;
      const helpers = ['ocams', 'ola'].filter((x) => this.alive.has(x)).map((x) => x.toUpperCase()).join(' + ');
      this.causes.push({
        kind: 'ok',
        text: {
          en: `Touch-And-Go #${this.tagAttempts} succeeded (chance ${pct}%${helpers ? ', boosted by ' + helpers + ' site selection' : ''}): ${this.sampleG} g collected.`,
          ko: `Touch-And-Go ${this.tagAttempts}차 성공 (확률 ${pct}%${helpers ? ', ' + helpers + ' 덕분에 채취 지점 선정 보너스' : ''}): ${this.sampleG} g 채취.`,
        },
      });
      if (this.tagAttempts > 1) { this.propLeft -= sp.second_attempt_prop_margin_kg; }
      return { ok: true, final: true, text: { en: `TAG success! Estimated sample: ${this.sampleG} g.`, ko: `TAG 성공! 추정 샘플량: ${this.sampleG} g.` } };
    }
    const retry = this.canRetryTag();
    if (!retry) {
      const noMargin = this.tagAttempts < 2;
      this.causes.push({
        kind: 'fail',
        text: {
          en: `Touch-And-Go failed (chance was ${pct}%)${noMargin ? ' and there was not enough propellant margin for a second attempt' : ''}.`,
          ko: `Touch-And-Go 실패 (확률 ${pct}%)${noMargin ? ', 두 번째 시도에 쓸 추진제 여유도 없었음' : ''}.`,
        },
      });
      this.result.ended = 'tag';
    }
    return {
      ok: false, final: !retry, retry,
      text: {
        en: `TAG attempt ${this.tagAttempts} collected too little material (chance was ${pct}%).`,
        ko: `TAG ${this.tagAttempts}차 시도에서 채취량이 너무 적음 (확률 ${pct}%).`,
      },
    };
  }

  departure() {
    const b = this.burn(this.c.dvReturn, 'Bennu departure (return) burn');
    if (!b.ok) {
      this.result.ended = 'return';
      this.causes.push({ kind: 'fail', text: { en: `Could not leave Bennu: ${b.reason.en}`, ko: `베누를 떠나지 못함: ${b.reason.ko}` } });
      return { ok: false, text: { en: 'Return burn impossible — the sample is stranded at Bennu.', ko: '귀환 분사 불가 — 샘플이 베누에 발이 묶임.' } };
    }
    return {
      ok: true,
      text: {
        en: `Departure burn Δv ${this.c.dvReturn.toFixed(2)} km/s done, ${Math.round(this.propLeft)} kg propellant left. Heading home.`,
        ko: `출발 분사 Δv ${this.c.dvReturn.toFixed(2)} km/s 완료, 추진제 ${Math.round(this.propLeft)} kg 남음. 지구로 귀환 중.`,
      },
    };
  }

  reentry() {
    if (this.sampleG > 0) {
      this.result.primary = this.sampleG >= 60;
      const real = this.D.real_mission.sample_returned_g.value;
      this.causes.push({
        kind: 'ok',
        text: {
          en: `Sample Return Capsule landed with ${this.sampleG} g (goal ≥ 60 g; OSIRIS-REx returned ${real} g).`,
          ko: `샘플 귀환 캡슐이 ${this.sampleG} g을 싣고 착륙 (목표 ≥ 60 g, OSIRIS-REx는 ${real} g 귀환).`,
        },
      });
    }
    this.result.ended = this.result.ended || 'complete';
    return {
      ok: this.result.primary,
      text: this.result.primary
        ? { en: `Capsule recovered — ${this.sampleG} g of Bennu in hand.`, ko: `캡슐 회수 완료 — 베누 샘플 ${this.sampleG} g 확보.` }
        : { en: 'Capsule recovered — but empty.', ko: '캡슐은 회수했지만 비어 있음.' },
    };
  }

  finalCost() {
    const sw = this.gc.space_weather;
    return this.c.costMusd + this.extraDays * sw.extra_day_cost_musd;
  }

  score() {
    const sc = this.gc.score;
    const rows = [];
    if (this.result.primary) rows.push([{ en: 'Primary objective: sample ≥ 60 g returned', ko: '주 목표: 샘플 60 g 이상 귀환' }, sc.primary_success]);
    else rows.push([{ en: 'Primary objective failed', ko: '주 목표 실패' }, 0]);
    for (const id of this.s.secondary) {
      const ok = this.result.secondary[id];
      const lbl = this.objLabel(id);
      rows.push([{ en: `${ok ? '✓' : '✗'} ${lbl.en}`, ko: `${ok ? '✓' : '✗'} ${lbl.ko}` }, ok ? sc.secondary_selected_success : sc.secondary_selected_failed]);
    }
    if (this.result.primary && this.sampleG > 60) {
      const over = (this.sampleG - 60).toFixed(1);
      rows.push([{ en: `Extra sample mass (${over} g over goal)`, ko: `추가 샘플량 (목표보다 ${over} g 많음)` }, Math.round((this.sampleG - 60) * sc.sample_mass_bonus_per_g_over_60)]);
    }
    const left = this.c.budget - this.finalCost();
    if (left > 0 && this.result.primary) rows.push([{ en: `Budget left: $${left.toFixed(1)}M`, ko: `남은 예산: $${left.toFixed(1)}M` }, Math.min(sc.budget_bonus_cap, Math.round(left * sc.budget_bonus_per_musd_left))]);
    if (left < 0) rows.push([{ en: `Over budget by $${(-left).toFixed(1)}M (safe-mode days)`, ko: `예산 $${(-left).toFixed(1)}M 초과 (안전 모드 일수)` }, Math.round(left * sc.budget_bonus_per_musd_left)]);
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
