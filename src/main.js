// Miku☆Miku☆Beam — main game controller (UI flow + 3D stage switching).
// Code written with AI assistance (Claude, Anthropic) for NASA Space Apps Challenge 2026.
import './ui/style.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { loadData } from './game/data.js';
import { compute, defaultState, realState, getOption, capacityFor, SECONDARY, INSTRUMENT_ORDER } from './game/model.js';
import { Mission } from './game/mission.js';
import { fmt, visViva, solarPower, commDelaySeconds } from './game/physics.js';
import { earthPos, bennuPos, transferPos, len, dist, parseDate, addDays, isoDate } from './game/orbits.js';
import { drawWindows, drawCapacity } from './ui/charts.js';
import { sfx, setSound, soundOn } from './ui/audio.js';
import { LaunchScene } from './scenes/LaunchScene.js';
import { SpaceScene } from './scenes/SpaceScene.js';

const $ = (s, r = document) => r.querySelector(s);
const panel = $('#panel');
const params = new URLSearchParams(location.search);
const CHEAP = params.get('render') === 'cheap';

let D, S, C; // data, state, computed
let screen = 'briefing';
let maxReached = 0;
let mission = null;
let report = null;
const SCREENS = [
  ['briefing', 'Mission Briefing'],
  ['launch', 'Launch Window'],
  ['build', 'Spacecraft Build'],
  ['ops', 'Operations'],
  ['report', 'Mission Report'],
];

// ------------------------------------------------------------------ 3D stage
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !CHEAP, powerPreference: 'high-performance' });
renderer.setPixelRatio(CHEAP ? 0.6 : Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = !CHEAP;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
composer.addPass(renderPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.55, 0.82);
if (!CHEAP) composer.addPass(bloom);
composer.addPass(new OutputPass());

let launchScene = null, spaceScene = null, active = null, orbitOn = null;
function ensureScenes() {
  if (!spaceScene) { spaceScene = new SpaceScene({ renderer }); }
  if (!launchScene) { launchScene = new LaunchScene({ vehicleId: S.vehicleId, renderer }); }
}
function setStage(which, mode, opts) {
  ensureScenes();
  const target = which === 'launch' ? launchScene : spaceScene;
  if (orbitOn && orbitOn !== target) { orbitOn.disableOrbit?.(); orbitOn = null; }
  if (which === 'space' && mode) spaceScene.setMode(mode, opts || {});
  active = target;
  active.resize?.(window.innerWidth, window.innerHeight);
  renderPass.scene = active.scene; renderPass.camera = active.camera;
}
function enableOrbit() { if (active?.enableOrbit) { active.enableOrbit(canvas); orbitOn = active; } }

const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  if (active) {
    active.update?.(dt);
    renderPass.scene = active.scene; renderPass.camera = active.camera;
    composer.render();
  }
}
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  active?.resize?.(window.innerWidth, window.innerHeight);
  if (screen === 'launch') drawLaunchCharts();
});

// ------------------------------------------------------------------ helpers
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600); }
const badge = (status) => status ? `<span class="badge ${status.split(' ')[0]}">${status.split(' ')[0].replace('_', ' ')}</span>` : '';
const money = (m) => `$${fmt(m, m % 1 ? 1 : 0)}M`;
function recompute() { C = compute(D, S); }
let skipCine = false;
function cine(on, caption = '', sub = '') {
  const el = $('#cine');
  el.classList.toggle('hidden', !on);
  $('#cine-caption').textContent = caption; $('#cine-sub').textContent = sub;
  panel.classList.toggle('hidden', on);
  $('#console').style.display = on ? 'none' : '';
}
$('#cine-skip').onclick = () => { skipCine = true; };
async function cineWait(ms) { const t0 = performance.now(); while (performance.now() - t0 < ms && !skipCine) await wait(60); }

function modal(html, { alarm = false } = {}) {
  const m = $('#modal'), card = $('#modal-card');
  card.className = alarm ? 'alarm' : '';
  card.innerHTML = html; m.classList.remove('hidden');
  return new Promise((resolve) => {
    card.querySelectorAll('[data-choice]').forEach((b) => b.addEventListener('click', () => { sfx.click(); m.classList.add('hidden'); resolve(b.dataset.choice); }));
  });
}

// ------------------------------------------------------------------ chrome: stepper / elements / console
function renderStepper() {
  const idx = SCREENS.findIndex((s) => s[0] === screen);
  $('#stepper').innerHTML = SCREENS.map(([id, label], i) => {
    const cls = i === idx ? 'active' : i <= maxReached && screen !== 'ops' ? 'done' : '';
    return (i ? '<span class="step-sep">›</span>' : '') + `<button class="step ${cls}" data-step="${id}"><b>${i + 1}</b><span>${label}</span></button>`;
  }).join('');
}
$('#stepper').addEventListener('click', (e) => {
  const b = e.target.closest('[data-step]'); if (!b || !b.classList.contains('done')) return;
  const i = SCREENS.findIndex((s) => s[0] === b.dataset.step);
  if (b.dataset.step === 'ops' || b.dataset.step === 'report') return;
  if (screen === 'report' && i < 3) { mission = null; }
  go(b.dataset.step);
});

function renderElements() {
  const c = C, o = c.opt;
  const chips = [
    ['Objectives', `1 + ${S.secondary.size}`, true],
    ['Spacecraft', `${fmt(c.dryKg)} kg dry`, maxReached >= 2],
    ['Instruments', `${[...S.instruments].filter((x) => !['tagsam', 'src'].includes(x)).length}/5`, maxReached >= 2],
    ['Launcher', c.vehicle.name, maxReached >= 1, c.wetKg > c.capacityKg && maxReached >= 2],
    ['Budget', `${money(c.costMusd)} / ${money(c.budget)}`, true, c.costMusd > c.budget],
    ['Power', `${fmt(c.loadW)} W / ${fmt(c.pAph)} W`, maxReached >= 2, false, !c.powerOk],
    ['Mass', `${fmt(c.wetKg)} / ${fmt(c.capacityKg)} kg`, maxReached >= 2, c.wetKg > c.capacityKg],
    ['Comms', o ? `${o.comm_delay_at_arrival_min} min` : '—', maxReached >= 1, false, c.dataFraction < 1],
    ['Orbit', o ? `C3 ${o.c3_km2_s2} · Δv ${o.arrival_braking_dv_km_s}` : '—', maxReached >= 1, false, o && !o.brakable_like_osiris_rex],
  ];
  $('#elements').innerHTML = chips.map(([n, v, on, bad, warn]) => `<span class="el-chip ${bad ? 'bad' : warn ? 'warn' : on ? 'on' : ''}" title="${n}">${n}<i>${on ? v : ''}</i></span>`).join('');
}

let consoleExtra = null;
function renderConsole() {
  const c = C, k = D.game_config.constants;
  const isp = c.prop.isp_s;
  const u = (isp * 9.80665) / 1000;
  const extra = consoleExtra ? consoleExtra() : '';
  $('#console-body').innerHTML = `
    <div class="eq"><div class="n">Tsiolkovsky rocket equation — spacecraft propulsion</div>
      <div class="f">v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub> / m<sub>f</sub>)</div>
      <div class="v">u = Isp·g₀ = ${isp}×9.80665 = ${u.toFixed(3)} km/s (${c.prop.class})<br>m<sub>i</sub> = ${fmt(c.wetKg)} kg, m<sub>f</sub> = ${fmt(c.dryKg)} kg<br>Δv = ${c.dvAvailable.toFixed(3)} km/s  · needed ${c.dvRequired.toFixed(2)} km/s (${c.dvArrival.toFixed(2)} brake + ${c.dvProx} ops + ${c.dvReturn} return)</div></div>
    <div class="eq"><div class="n">Vis-viva equation — parking orbit → Earth departure</div>
      <div class="f">v² = μ (2/r − 1/a)</div>
      <div class="v">μ⊕ = ${fmt(k.mu_earth_km3_s2.value, 1)} km³/s², r = ${fmt(c.rPark, 0)} km<br>circular (a = r): v = ${c.vCircPark.toFixed(3)} km/s<br>hyperbolic (a = −μ/C3, C3 = ${c.c3.toFixed(2)}): v = ${c.vDepart.toFixed(3)} km/s → burn Δv ${c.escapeDv.toFixed(3)} km/s</div></div>
    <div class="eq"><div class="n">Escape velocity</div>
      <div class="f">v<sub>e</sub> = √(2GM / r) = √(2μ / r)</div>
      <div class="v">Earth surface (r = ${fmt(k.r_earth_km.value, 1)} km): ${c.vEscSurface.toFixed(2)} km/s<br>parking orbit (${k.parking_orbit_alt_km.value} km): ${c.vEscPark.toFixed(2)} km/s · v∞ = √C3 = ${Math.sqrt(c.c3).toFixed(2)} km/s</div></div>
    <div class="eq"><div class="n">Solar power (inverse square) · light-time delay</div>
      <div class="f">P = P<sub>1AU</sub> / r² · t = d / c</div>
      <div class="v">${fmt(c.p1au)} W → ${fmt(c.pPeri)} W at ${D.real_mission.bennu_orbit.perihelion_au} AU, ${fmt(c.pAph)} W at ${D.real_mission.bennu_orbit.aphelion_au} AU (load ${fmt(c.loadW)} W)<br>${c.opt ? `Earth–Bennu at arrival ${c.opt.earth_dist_at_arrival_au} AU → ${c.opt.comm_delay_at_arrival_min} min one-way` : ''}</div></div>
    ${extra}`;
}
$('#console-toggle').onclick = () => { $('#console').classList.toggle('collapsed'); sfx.click(); };

function refreshChrome() { recompute(); renderStepper(); renderElements(); renderConsole(); }

// ------------------------------------------------------------------ screens
function go(name) {
  screen = name;
  const i = SCREENS.findIndex((s) => s[0] === name);
  maxReached = Math.max(maxReached, i);
  consoleExtra = null;
  panel.classList.remove('hidden');
  document.querySelector('.hint3d')?.remove();
  sfx.select();
  ({ briefing: showBriefing, launch: showLaunch, build: showBuild, ops: showOps, report: showReport })[name]();
  refreshChrome();
  panel.scrollTop = 0;
}
function hint3d(t) { const h = document.createElement('div'); h.className = 'hint3d'; h.textContent = t; document.body.appendChild(h); }

// ---------- 1. Briefing
function showBriefing() {
  setStage('space', 'briefing');
  const rm = D.real_mission;
  const objs = D.game_config.objectives;
  panel.innerHTML = `
    <div class="kicker">NASA Space Apps Challenge 2026 · Mission Design</div>
    <h1>Bring a piece of asteroid Bennu home.</h1>
    <p class="lead">You are the mission designer. Within a real budget, real launch-vehicle limits and real orbital mechanics, design a spacecraft that flies to near-Earth asteroid <b>101955 Bennu</b>, grabs a sample and returns it to Earth — then see how your choices compare with NASA's real <b>OSIRIS-REx</b>.</p>
    <h2>Primary objective <span class="tag">required</span></h2>
    <div class="card primary"><div class="t">🎯 ${objs.sample.label}</div><div class="d">Needs the TAGSAM sampling arm and a Sample Return Capsule. OSIRIS-REx's goal was ≥ ${rm.sample_goal_g.value} g; it returned ${rm.sample_returned_g.value} g on ${rm.sample_capsule_landing.date}.</div></div>
    <h2>Secondary objectives <span class="tag">choose 0–4 · more points, more instruments</span></h2>
    ${SECONDARY.map((id) => `
      <div class="opt ${S.secondary.has(id) ? 'sel' : ''}" data-sec="${id}"><div class="box">${S.secondary.has(id) ? '✓' : ''}</div><div class="body">
        <div class="name">${objs[id].label}</div>
        <div class="meta">+${objs[id].points} pts if achieved · −100 if it fails · needs ${objs[id].needs_any.map((x) => x.toUpperCase()).join(' or ')}</div>
      </div></div>`).join('')}
    <p class="src">These are OSIRIS-REx's real five science objectives (NASA Science · OSIRIS-REx In Depth). Instrument mapping is simplified for the game.</p>
    <h2>Mission at a glance</h2>
    <div class="kv">
      <span>Target</span><b>${rm.target} · ⌀ ${rm.bennu_orbit.mean_diameter_m} m</b>
      <span>Bennu orbit</span><b>${rm.bennu_orbit.perihelion_au}–${rm.bennu_orbit.aphelion_au} AU</b>
      <span>Budget (incl. launch)</span><b>${money(D.game_config.budget_musd.value)}</b>
      <span>Launch windows (JPL)</span><b>${D.futureOptions.length} future, ${D.brakableOptions.length} brakable</b>
      <span>Space weather</span><b>${D.events.count} real DONKI events</b>
    </div>
    <div class="btn-row"><button class="btn block" id="next">Choose launch window →</button></div>`;
  panel.querySelectorAll('[data-sec]').forEach((el) => el.onclick = () => {
    const id = el.dataset.sec; S.secondary.has(id) ? S.secondary.delete(id) : S.secondary.add(id);
    // auto-add obvious instrument so the build screen starts sensible
    sfx.click(); showBriefing(); refreshChrome();
  });
  $('#next').onclick = () => go('launch');
}

// ---------- 2. Launch
function drawLaunchCharts() {
  const w = $('#chart-win'); if (!w) return;
  const hit = drawWindows(w, D.futureOptions, S.optionKey, 1.97);
  w.onclick = (e) => { const r = w.getBoundingClientRect(); const k = hit(e.clientX - r.left, e.clientY - r.top); if (k) { S.optionKey = k; sfx.select(); showLaunch(true); refreshChrome(); } };
  const cap = $('#chart-cap');
  if (cap) {
    const curves = {}; for (const id of Object.keys(D.vehicles)) curves[id] = (c3) => capacityFor(D, id, c3);
    drawCapacity(cap, curves, C.c3, maxReached >= 2 ? C.wetKg : null, S.vehicleId);
  }
}
function showLaunch(keepStage) {
  recompute();
  if (!keepStage || active !== launchScene) { setStage('launch'); }
  launchScene.reset?.(); launchScene.setVehicle?.(S.vehicleId);
  enableOrbit();
  hint3d('Drag to orbit · scroll to zoom');
  const o = C.opt;
  const vm = D.game_config.launch_vehicle_model.vehicles;
  const list = [...D.futureOptions].sort((a, b) => a.arrival_braking_dv_km_s - b.arrival_braking_dv_km_s);
  panel.innerHTML = `
    <div class="kicker">Step 2 · Orbital constraints & launch vehicle</div>
    <h1>Pick when to launch — and on what.</h1>
    <p>Each dot is a real Earth→Bennu trajectory from the <b>JPL Small-Body Mission Design API</b>. Higher launch energy (C3) means the rocket can lift less mass. Faster trips arrive faster — and must brake harder at Bennu.</p>
    <canvas id="chart-win" class="chart"></canvas>
    <div class="legend"><span><i style="background:#39c5bb"></i>brakable like OSIRIS-REx (${D.brakableOptions.length})</span><span><i style="background:#ff4d5e"></i>too fast to stop (${D.futureOptions.length - D.brakableOptions.length})</span><span>click a dot</span></div>
    <h2>Launch windows <span class="tag">sorted by arrival braking Δv</span></h2>
    <select id="win-select" style="width:100%;padding:10px;border-radius:8px;background:#0b1420;color:var(--text);border:1px solid var(--line-2);font-family:var(--mono);font-size:12px">
      ${list.map((x) => { const k = x.launch_date + '|' + x.arrival_date; return `<option value="${k}" ${k === S.optionKey ? 'selected' : ''}>${x.brakable_like_osiris_rex ? '●' : '○'} ${x.launch_date} → ${x.arrival_date} · ${x.flight_days} d · C3 ${x.c3_km2_s2} · Δv ${x.arrival_braking_dv_km_s}</option>`; }).join('')}
    </select>
    ${o ? `<div class="kv" style="margin-top:12px">
      <span>Launch → arrival</span><b>${o.launch_date} → ${o.arrival_date}</b>
      <span>Flight time</span><b>${o.flight_days} days</b>
      <span>Launch energy C3 = v∞²</span><b>${o.c3_km2_s2} km²/s² (v∞ ${o.vinf_dep_km_s.toFixed(2)} km/s)</b>
      <span>Arrival braking Δv</span><b style="color:${o.brakable_like_osiris_rex ? 'var(--miku-2)' : 'var(--red)'}">${o.arrival_braking_dv_km_s} km/s</b>
      <span>Propellant per kg dry (Isp 230 s)</span><b>${o.braking_propellant_per_kg_dry} kg</b>
      <span>Earth distance at arrival</span><b>${o.earth_dist_at_arrival_au} AU · ${o.comm_delay_at_arrival_min} min light-time</b>
    </div>
    ${o.brakable_like_osiris_rex ? '<div class="alert ok">An OSIRIS-REx-class spacecraft (Isp 230 s, 880 kg dry, 1,230 kg propellant → max ≈1.97 km/s) can brake into orbit at Bennu on this trajectory.</div>' : `<div class="alert bad">Arriving at ${o.arrival_braking_dv_km_s} km/s: with hydrazine (Isp 230 s) you would need ${o.braking_propellant_per_kg_dry} kg of propellant per kg of spacecraft just to stop. Expect a fly-by unless you change propulsion.</div>`}` : ''}
    <h2>Launch vehicle <span class="tag">capacity at C3 ${C.c3.toFixed(1)}</span></h2>
    ${Object.values(D.vehicles).map((v) => { const cap = capacityFor(D, v.id, C.c3); const m = vm[v.id]; return `
      <div class="opt radio ${S.vehicleId === v.id ? 'sel' : ''}" data-veh="${v.id}"><div class="box"></div><div class="body">
        <div class="name">${v.name} ${badge(m.calibration_point.status)}</div>
        <div class="meta"><span>cost <b>${money(v.cost_musd)}</b></span><span>capacity <b>${fmt(cap)} kg</b></span></div>
        <div class="desc">${m.site}. ${m.propellants.map((p) => `<span class="badge ${p.class}">${p.class}</span> ${p.stage}: ${p.fuel} + ${p.oxidizer}`).join('<br>')}</div>
      </div></div>`; }).join('')}
    <canvas id="chart-cap" class="chart small"></canvas>
    <p class="src">Capacity curves: upper-stage escape burn from a ${D.game_config.constants.parking_orbit_alt_km.value} km parking orbit (vis-viva + escape velocity) through the rocket equation, each calibrated to one data point: Atlas V 411 = real OSIRIS-REx launch (2,105 kg at C3 29.3, Lauretta et al. 2017); Falcon = NASA LSP figures (via Spaceflight101). Costs: NASA contract announcements / Wikipedia.</p>
    <div class="btn-row"><button class="btn ghost" id="back">← Briefing</button><button class="btn" id="next" ${o ? '' : 'disabled'}>Build spacecraft →</button></div>`;
  $('#win-select').onchange = (e) => { S.optionKey = e.target.value; sfx.select(); showLaunch(true); refreshChrome(); };
  panel.querySelectorAll('[data-veh]').forEach((el) => el.onclick = () => { S.vehicleId = el.dataset.veh; sfx.select(); showLaunch(true); refreshChrome(); });
  $('#back').onclick = () => go('briefing');
  $('#next').onclick = () => go('build');
  requestAnimationFrame(drawLaunchCharts);
}

// ---------- 3. Build
function gauge(label, val, max, unit, { invert = false, wide = false, warnOnly = false } = {}) {
  const pct = max > 0 ? (val / max) * 100 : 0;
  const over = invert ? val < max : val > max;
  const cls = over ? (warnOnly ? 'warn' : 'bad') : pct > 90 && !invert ? 'warn' : '';
  return `<div class="gauge ${cls} ${wide ? 'wide' : ''}"><div class="lbl">${label}<b>${fmt(val, unit === 'km/s' ? 2 : 0)} / ${fmt(max, unit === 'km/s' ? 2 : 0)} ${unit}</b></div><div class="track"><div class="fill" style="width:${Math.min(100, invert ? (max > 0 ? (val / max) * 100 : 0) : pct)}%"></div></div></div>`;
}
function scCfg() { return { instruments: [...S.instruments], solar: S.solar, antenna: S.antenna, shield: S.shield }; }
function showBuild(keep) {
  recompute();
  if (!keep || active !== spaceScene) { setStage('space', 'build'); enableOrbit(); }
  spaceScene.setSpacecraftConfig?.(scCfg());
  hint3d('Drag to rotate your spacecraft');
  const c = C;
  const parts = D.instruments;
  const gc = D.game_config;
  const scroll = panel.scrollTop;
  panel.innerHTML = `
    <div class="gauges">
      ${gauge('MASS vs LAUNCHER', c.wetKg, c.capacityKg, 'kg')}
      ${gauge('BUDGET', c.costMusd, c.budget, '$M')}
      ${gauge('POWER @ APHELION', c.loadW, c.pAph, 'W', { warnOnly: true })}
      ${gauge('DATA vs DOWNLINK', c.dataPerDay, c.linkGB, 'GB/d', { warnOnly: true })}
      ${gauge('Δv AVAILABLE vs NEEDED', c.dvAvailable, c.dvRequired, 'km/s', { invert: true, wide: true })}
    </div>
    <div class="kicker">Step 3 · Spacecraft design</div>
    <h1>Build your spacecraft.</h1>
    <p>Gauges update live. Red = the design can't fly (mass, budget, Δv); amber = it will fly but lose science.</p>
    <div class="btn-row" style="margin-top:6px"><button class="btn ghost" id="load-real">Load real OSIRIS-REx design</button></div>

    <h2>Science instruments & sampling</h2>
    ${INSTRUMENT_ORDER.map((id) => { const p = parts[id]; const on = S.instruments.has(id); const st = p.mass_status || p.status; return `
      <div class="opt ${on ? 'sel' : ''}" data-inst="${id}"><div class="box">${on ? '✓' : ''}</div><div class="body">
        <div class="name">${p.name} ${badge(st)} ${p.required ? '<span class="badge req">primary</span>' : ''}</div>
        <div class="meta"><span><b>${fmt(p.mass_kg, 1)}</b> kg</span><span><b>${fmt(p.power_w_avg, 1)}</b> W</span><span><b>${p.data_gb_day}</b> GB/d</span><span><b>${money(p.cost_musd)}</b></span></div>
        <div class="desc">Objectives: ${p.objectives.map((x) => gc.objectives[x]?.label.split(' ').slice(0, 4).join(' ')).join(' · ')}</div>
      </div></div>`; }).join('')}

    <h2>Power · solar arrays <span class="tag">P = P₁ₐᵤ / r²</span></h2>
    <div class="seg">${Object.values(D.solar).map((s) => `<button data-solar="${s.id}" class="${S.solar === s.id ? 'sel' : ''}">${s.name.replace(' solar array', '')}<small>${fmt(s.power_w_at_1au)} W · ${s.mass_kg} kg · ${money(gc.solar_cost_musd[s.id])}</small></button>`).join('')}</div>
    <div class="kv"><span>Output at perihelion (${D.real_mission.bennu_orbit.perihelion_au} AU)</span><b>${fmt(c.pPeri)} W</b><span>Output at aphelion (${D.real_mission.bennu_orbit.aphelion_au} AU)</span><b style="color:${c.powerOk ? 'inherit' : 'var(--amber)'}">${fmt(c.pAph)} W</b><span>Load (bus ${gc.bus.power_w.value} + instruments ${fmt(c.instPower, 1)} + radio ${gc.antenna_game[S.antenna].power_w})</span><b>${fmt(c.loadW)} W</b></div>

    <h2>Communications</h2>
    <div class="seg">${Object.values(D.antennas).map((a) => `<button data-ant="${a.id}" class="${S.antenna === a.id ? 'sel' : ''}">${a.name}<small>${a.downlink_kbps_at_bennu} kbit/s · ${gc.antenna_game[a.id].mass_kg} kg</small></button>`).join('')}</div>
    <div class="kv"><span>Downlink (${gc.downlink_hours_per_day.value} h Deep Space Network pass/day)</span><b>${c.linkGB.toFixed(2)} GB/day</b><span>Science data generated</span><b style="color:${c.dataFraction < 1 ? 'var(--amber)' : 'inherit'}">${c.dataPerDay.toFixed(2)} GB/day</b><span>Light-time delay at arrival (t = d/c)</span><b>${c.commDelayMin ?? '—'} min</b></div>
    <p class="src">HGA 412 kbit/s from Bennu distance: eoPortal (verified). Low-gain rate is game-defined.</p>

    <h2>Radiation shielding <span class="tag">vs DONKI event severity 1–5</span></h2>
    <div class="seg">${D.shields.map((s) => `<button data-shield="${s.level}" class="${S.shield === s.level ? 'sel' : ''}">Level ${s.level}<small>${s.mass_kg} kg · ${money(gc.shield_cost_musd[String(s.level)])}</small></button>`).join('')}</div>

    <h2>Spacecraft propulsion <span class="tag">fuel + oxidizer chemistry</span></h2>
    ${gc.propulsion_options.map((p) => `
      <div class="opt radio ${S.propulsionId === p.id ? 'sel' : ''}" data-prop="${p.id}"><div class="box"></div><div class="body">
        <div class="name">${p.name} <span class="badge ${p.class}">${p.class}</span></div>
        <div class="meta"><span>Isp <b>${p.isp_s} s</b></span><span>u <b>${(p.isp_s * 9.80665 / 1000).toFixed(2)} km/s</b></span><span>burns <b>${p.max_burns >= 99 ? '∞' : p.max_burns}</b></span><span><b>${p.extra_cost_musd >= 0 ? '+' : ''}${money(p.extra_cost_musd)}</b></span></div>
        <div class="desc">Fuel: ${p.fuel} · Oxidizer: ${p.oxidizer}<br>${p.pros} ${p.cons}</div>
      </div></div>`).join('')}

    <h2>Propellant load <span class="tag">m_p = m_dry (e^(Δv/u) − 1)</span></h2>
    <div class="opt ${S.autoProp ? 'sel' : ''}" id="auto-prop"><div class="box">${S.autoProp ? '✓' : ''}</div><div class="body"><div class="name">Auto-size to the Δv budget (+3% margin)</div><div class="meta">recommended <b>${fmt(c.autoProp)} kg</b> · tank max ${fmt(c.tankMax)} kg</div></div></div>
    <input type="range" id="prop-slider" min="0" max="${c.tankMax}" step="10" value="${Math.round(c.propKg)}" ${S.autoProp ? 'disabled' : ''}>
    <div class="kv">
      <span>Dry mass</span><b>${fmt(c.dryKg, 1)} kg</b>
      <span>Propellant</span><b>${fmt(c.propKg)} kg</b>
      <span>Launch (wet) mass</span><b>${fmt(c.wetKg)} kg</b>
      <span>Δv budget: brake ${c.dvArrival.toFixed(2)} + ops ${c.dvProx} + return ${c.dvReturn}</span><b>${c.dvRequired.toFixed(2)} km/s</b>
      <span>Δv available = u ln(mᵢ/m_f)</span><b style="color:${c.dvAvailable >= c.dvRequired ? 'var(--miku-2)' : 'var(--red)'}">${c.dvAvailable.toFixed(2)} km/s</b>
    </div>

    <h2>Cost breakdown</h2>
    <div class="kv">${c.costItems.map((x) => `<span>${x.label}</span><b>${money(x.musd)}</b>`).join('')}<span><b style="color:var(--text);font-family:var(--sans)">Total</b></span><b style="color:${c.costMusd > c.budget ? 'var(--red)' : 'var(--miku-2)'}">${money(c.costMusd)} / ${money(c.budget)}</b></div>

    <div class="alerts">
      ${c.blockers.map((b) => `<div class="alert bad">⛔ ${b}</div>`).join('')}
      ${c.warnings.map((w) => `<div class="alert warn">⚠ ${w}</div>`).join('')}
      ${!c.blockers.length && !c.warnings.length ? '<div class="alert ok">✓ Design closes: all gauges green. Ready for launch.</div>' : ''}
    </div>
    <div class="btn-row"><button class="btn ghost" id="back">← Launch window</button><button class="btn" id="next" ${c.blockers.length ? 'disabled' : ''}>Confirm design & launch 🚀</button></div>
    ${c.blockers.length ? '<p class="src">Fix the ⛔ items to unlock launch. ⚠ items are allowed — the mission report will show what they cost you.</p>' : ''}`;
  panel.scrollTop = scroll;
  const rerender = () => { sfx.click(); showBuild(true); refreshChrome(); };
  panel.querySelectorAll('[data-inst]').forEach((el) => el.onclick = () => { const id = el.dataset.inst; S.instruments.has(id) ? S.instruments.delete(id) : S.instruments.add(id); rerender(); });
  panel.querySelectorAll('[data-solar]').forEach((el) => el.onclick = () => { S.solar = el.dataset.solar; rerender(); });
  panel.querySelectorAll('[data-ant]').forEach((el) => el.onclick = () => { S.antenna = el.dataset.ant; rerender(); });
  panel.querySelectorAll('[data-shield]').forEach((el) => el.onclick = () => { S.shield = +el.dataset.shield; rerender(); });
  panel.querySelectorAll('[data-prop]').forEach((el) => el.onclick = () => { S.propulsionId = el.dataset.prop; rerender(); });
  $('#auto-prop').onclick = () => { S.autoProp = !S.autoProp; S.propKg = Math.round(C.propKg); rerender(); };
  $('#prop-slider').oninput = (e) => { S.propKg = +e.target.value; recompute(); showBuild(true); refreshChrome(); };
  $('#load-real').onclick = () => { const r = realState(D); Object.assign(S, { ...r, secondary: S.secondary, optionKey: S.optionKey }); toast('Loaded the real OSIRIS-REx configuration (1,230 kg propellant, Atlas V 411).'); rerender(); };
  $('#back').onclick = () => go('launch');
  $('#next').onclick = () => { if (!C.blockers.length) go('ops'); };
}

// ---------- 4. Operations
const PHASES = [
  ['launch', 'Launch'], ['cruise', 'Cruise to Bennu'], ['arrival', 'Arrival braking'], ['proximity', 'Proximity science'],
  ['tag', 'Touch-And-Go sampling'], ['return', 'Return cruise'], ['reentry', 'Capsule re-entry'],
];
let opsState = null;
function renderOpsPanel() {
  const m = mission, st = opsState;
  panel.innerHTML = `
    <div class="kicker">Step 4 · Mission operations</div>
    <h1>Mission control</h1>
    <div class="phases">${PHASES.map(([id, label]) => `<div class="phase ${st.phase[id] || ''}"><span class="dot"></span>${label}<span class="when">${st.when[id] || ''}</span></div>`).join('')}</div>
    <div class="telemetry">
      <div class="tm"><div class="k">Mission date</div><div class="v" id="tm-date">${st.date || '—'}</div></div>
      <div class="tm"><div class="k">Sun distance r</div><div class="v" id="tm-r">${st.r ? st.r.toFixed(3) + ' <small>AU</small>' : '—'}</div></div>
      <div class="tm"><div class="k">Helio speed (vis-viva)</div><div class="v" id="tm-v">${st.v ? st.v.toFixed(2) + ' <small>km/s</small>' : '—'}</div></div>
      <div class="tm"><div class="k">Solar power P₁/r²</div><div class="v" id="tm-p">${st.p ? fmt(st.p) + ' <small>W</small>' : '—'}</div></div>
      <div class="tm"><div class="k">Earth light-time d/c</div><div class="v" id="tm-c">${st.delay ? st.delay.toFixed(1) + ' <small>min</small>' : '—'}</div></div>
      <div class="tm"><div class="k">Propellant / Δv left</div><div class="v" id="tm-prop">${fmt(m.propLeft)} <small>kg · ${m.dvLeft().toFixed(2)} km/s</small></div></div>
    </div>
    <h2>Mission log</h2>
    <div class="log" id="log">${st.log.map((l) => `<div class="${l.cls || ''}"><b>${l.t}</b>${l.msg}</div>`).join('')}</div>
    <p class="src">Seed ${m.seed} · Space-weather events replay real NASA DONKI records (May–June 2024 solar storms).</p>`;
  const lg = $('#log'); if (lg) lg.scrollTop = lg.scrollHeight;
}
function opsLog(msg, cls = '', t) { opsState.log.push({ msg, cls, t: t || opsState.date || '' }); renderOpsPanel(); }
function setTelemetry(dateMs, scPos) {
  const k = D.game_config.constants;
  const r = len(scPos);
  const aT = (len(scPos) + 1) / 2; // rough transfer semi-major axis (AU)
  const v = visViva(k.mu_sun_km3_s2.value, r * k.au_km.value, ((1 + len(bennuPos(parseDate(C.opt.arrival_date)))) / 2) * k.au_km.value);
  const ePos = earthPos(dateMs);
  opsState.date = isoDate(dateMs);
  opsState.r = r; opsState.v = v; opsState.p = solarPower(C.p1au, r);
  opsState.delay = commDelaySeconds(dist(ePos, scPos) * k.au_km.value) / 60;
  const set = (id, h) => { const e = $(id); if (e) e.innerHTML = h; };
  set('#tm-date', opsState.date); set('#tm-r', r.toFixed(3) + ' <small>AU</small>'); set('#tm-v', v.toFixed(2) + ' <small>km/s</small>');
  set('#tm-p', fmt(opsState.p) + ' <small>W</small>'); set('#tm-c', opsState.delay.toFixed(1) + ' <small>min</small>');
  set('#tm-prop', `${fmt(mission.propLeft)} <small>kg · ${mission.dvLeft().toFixed(2)} km/s</small>`);
  consoleExtra = () => `<div class="eq"><div class="n">Vis-viva — spacecraft around the Sun (live)</div><div class="f">v² = μ<sub>☉</sub> (2/r − 1/a)</div><div class="v">r = ${r.toFixed(3)} AU, a ≈ ${(((1 + len(bennuPos(parseDate(C.opt.arrival_date)))) / 2)).toFixed(3)} AU → v = ${v.toFixed(2)} km/s<br>P = ${fmt(C.p1au)}/${r.toFixed(3)}² = ${fmt(opsState.p)} W · delay ${opsState.delay.toFixed(1)} min</div></div>`;
}

async function eventDecision(ev) {
  sfx.alarm();
  const pRun = mission.failProb(ev, false), pSafe = mission.failProb(ev, true);
  const sw = D.game_config.space_weather;
  const typeName = { solar_flare: 'Solar flare', geomagnetic_storm: 'Geomagnetic storm', cme: 'Coronal mass ejection' }[ev.type] || ev.type.replace(/_/g, ' ');
  const choice = await modal(`
    <div class="kicker" style="color:var(--red)">⚠ Space weather alert · ${PHASES.find((p) => p[0] === ev.phase)?.[1]}</div>
    <h3>${typeName}: ${ev.title_en}</h3>
    <p>Replaying a real event recorded by NASA's DONKI on <b>${ev.time.replace('T', ' ')}</b> (${ev.scale}${ev.detail ? ', ' + ev.detail : ''}). Severity <b>${ev.severity}/5</b> vs your shielding level <b>${S.shield}</b>.${ev.type === 'geomagnetic_storm' ? ' Geomagnetic storms are measured at Earth, so they only threaten launch and capsule return.' : ''}</p>
    <p class="src"><a href="${ev.source}" target="_blank" rel="noopener">DONKI record ↗</a></p>
    <button class="choice" data-choice="safe"><b>🛡 Enter safe mode</b><span>Instrument failure risk ${Math.round(pSafe * 100)}% · +${sw.safe_mode_days} days · +${money(sw.safe_mode_days * sw.extra_day_cost_musd)} operations cost</span></button>
    <button class="choice" data-choice="run"><b>▶ Keep operating</b><span>Instrument failure risk ${Math.round(pRun * 100)}% · no delay</span></button>`, { alarm: true });
  const out = mission.resolveEvent(ev, choice);
  opsLog(`${typeName} ${ev.detail || ''} (${ev.scale}) — ${out.text}`, out.hit ? 'bad' : 'ok');
  if (out.hit) sfx.error();
}

async function animateCruise(fromMs, toMs, fromBody, toBody, evs, label, isReturn) {
  const dur = 9000;
  const t0 = performance.now();
  const p0 = fromBody(fromMs), p1 = toBody(toMs);
  const pending = [...evs].sort((a, b) => (a.dayFrac ?? 0.5) - (b.dayFrac ?? 0.5));
  if (isReturn) spaceScene.setMode('cruise', {}), spaceScene.setReturn?.({ departDate: isoDate(fromMs), arriveDate: isoDate(toMs), progress: 0 });
  else spaceScene.setMode('cruise', {}), spaceScene.setCruise?.({ launchDate: isoDate(fromMs), arrivalDate: isoDate(toMs), progress: 0 });
  let paused = 0;
  while (true) {
    const p = Math.min(1, (performance.now() - t0 - paused) / dur);
    const dateMs = fromMs + (toMs - fromMs) * p;
    const pos = transferPos(p0, p1, p);
    if (isReturn) spaceScene.setReturn?.({ departDate: isoDate(fromMs), arriveDate: isoDate(toMs), progress: p });
    else spaceScene.setCruise?.({ launchDate: isoDate(fromMs), arrivalDate: isoDate(toMs), progress: p });
    setTelemetry(dateMs, pos);
    if (pending.length && p >= (pending[0].dayFrac ?? 0.5)) {
      const ev = pending.shift();
      const tp = performance.now();
      await eventDecision(ev);
      paused += performance.now() - tp;
    }
    if (p >= 1) break;
    await wait(50);
  }
}

async function runCinematic(caption, sub, ms, fn) {
  skipCine = false;
  cine(true, caption, sub);
  let done = false;
  const p = new Promise((r) => { fn(() => { done = true; r(); }); });
  await Promise.race([p, (async () => { const t0 = performance.now(); while (!done && !skipCine && performance.now() - t0 < ms) await wait(60); })()]);
  cine(false);
}

async function showOps() {
  recompute();
  mission = new Mission(D, S, C, params.get('seed') ? +params.get('seed') : undefined);
  opsState = { phase: {}, when: {}, log: [], date: C.opt.launch_date };
  const setPhase = (id, cls, when) => { opsState.phase[id] = cls; if (when) opsState.when[id] = when; renderOpsPanel(); };
  renderOpsPanel();
  const tl = () => mission.timeline();

  // LAUNCH
  setPhase('launch', 'active', C.opt.launch_date);
  setStage('launch'); launchScene.reset?.(); launchScene.setVehicle?.(S.vehicleId);
  for (const ev of mission.eventsFor('launch')) { opsLog('Pre-launch weather briefing: geomagnetic activity reported.', 'warn'); await eventDecision(ev); }
  sfx.launch();
  await runCinematic(`${C.vehicle.name} · LIFTOFF`, `${C.opt.launch_date} · ${D.game_config.launch_vehicle_model.vehicles[S.vehicleId].site} · ${fmt(C.wetKg)} kg to C3 ${C.c3.toFixed(1)} km²/s²`, 16000, (done) => launchScene.startLaunch ? launchScene.startLaunch(done) : setTimeout(done, 3000));
  opsLog(mission.launch().text, 'ok', C.opt.launch_date);
  setPhase('launch', 'done');

  // CRUISE
  setPhase('cruise', 'active');
  setStage('space', 'cruise');
  await animateCruise(parseDate(C.opt.launch_date), parseDate(C.opt.arrival_date), earthPos, bennuPos, mission.eventsFor('cruise'), 'cruise');
  setPhase('cruise', 'done', `${C.opt.flight_days} d`);

  // ARRIVAL
  setPhase('arrival', 'active', C.opt.arrival_date);
  sfx.burn();
  const arr = mission.arrival();
  opsLog(arr.text, arr.ok ? 'ok' : 'bad', C.opt.arrival_date);
  if (!arr.ok) { setPhase('arrival', 'fail'); await wait(1500); return finishMission(); }
  setPhase('arrival', 'done');

  // PROXIMITY
  setPhase('proximity', 'active');
  setStage('space', 'proximity');
  opsLog(`Arrived at Bennu. One-way light-time ${C.opt.comm_delay_at_arrival_min} min — every command is sent ${C.opt.comm_delay_at_arrival_min * 2} min round-trip before we see the result.`);
  for (const ev of mission.eventsFor('proximity')) { await wait(800); await eventDecision(ev); }
  const prox = mission.proximity();
  opsLog(prox.text, prox.ok ? 'ok' : 'bad');
  if (!prox.ok) { setPhase('proximity', 'fail'); await wait(1500); return finishMission(); }
  setPhase('proximity', 'done', `${mission.proxDays} d`);

  // TAG
  setPhase('tag', 'active');
  let tagRes;
  while (true) {
    await runCinematic('TOUCH-AND-GO', `Nightingale site · attempt ${mission.tagAttempts + 1} · success chance ${Math.round(mission.tagChance() * 100)}%`, 14000, (done) => spaceScene.playTAG ? spaceScene.playTAG(done) : setTimeout(done, 3000));
    tagRes = mission.tag();
    opsLog(tagRes.text, tagRes.ok ? 'ok' : 'bad');
    tagRes.ok ? sfx.success() : sfx.error();
    if (tagRes.final) break;
    const again = await modal(`<div class="kicker">TAG result</div><h3>Not enough sample collected.</h3><p>${tagRes.text} You still have propellant margin for one more attempt (it costs ${D.game_config.sampling.second_attempt_prop_margin_kg} kg).</p><button class="choice" data-choice="retry"><b>Try a second Touch-And-Go</b><span>Same success chance; burns extra propellant</span></button><button class="choice" data-choice="go"><b>Head home empty-handed</b><span>Primary objective fails</span></button>`);
    if (again !== 'retry') { mission.causes.push({ kind: 'fail', text: 'Chose not to retry sampling after a failed TAG.' }); mission.result.ended = 'tag'; break; }
  }
  if (!tagRes.ok) { setPhase('tag', 'fail'); }
  else setPhase('tag', 'done');
  if (!tagRes.ok && !mission.s.instruments.has('tagsam')) { await wait(1200); return finishMission(); }

  // RETURN
  setPhase('return', 'active', isoDate(mission.departMs));
  sfx.burn();
  const dep = mission.departure();
  opsLog(dep.text, dep.ok ? 'ok' : 'bad', isoDate(mission.departMs));
  if (!dep.ok) { setPhase('return', 'fail'); await wait(1500); return finishMission(); }
  setStage('space', 'cruise');
  await animateCruise(mission.departMs, mission.returnMs, bennuPos, earthPos, mission.eventsFor('return'), 'return', true);
  setPhase('return', 'done', `${mission.returnDays} d`);

  // REENTRY
  setPhase('reentry', 'active', isoDate(mission.returnMs));
  for (const ev of mission.eventsFor('reentry')) { await eventDecision(ev); }
  setStage('space', 'reentry');
  sfx.whoosh();
  await runCinematic('SAMPLE CAPSULE RE-ENTRY', `${isoDate(mission.returnMs)} · Utah Test and Training Range`, 9000, (done) => spaceScene.playReentry ? spaceScene.playReentry(done) : setTimeout(done, 3000));
  const re = mission.reentry();
  opsLog(re.text, re.ok ? 'ok' : 'bad', isoDate(mission.returnMs));
  setPhase('reentry', re.ok ? 'done' : 'fail');
  await wait(1200);
  finishMission();
}
function finishMission() {
  report = { score: mission.score(), timeline: mission.timeline(), cost: mission.finalCost() };
  report.primary ? null : null;
  mission.result.primary ? sfx.success() : sfx.fail();
  go('report');
}

// ---------- 5. Report
function showReport() {
  setStage('space', mission?.result.primary ? 'reentry' : 'briefing');
  if (mission?.result.primary) spaceScene.setMode('briefing');
  enableOrbit();
  const m = mission, rm = D.real_mission, c = C;
  if (!m) { go('briefing'); return; }
  const sc = report.score, tl = report.timeline;
  const secOk = [...S.secondary].filter((id) => m.result.secondary[id]).length;
  const verdict = m.result.primary ? (secOk === S.secondary.size ? ['MISSION SUCCESS', 'win'] : ['PRIMARY SUCCESS', 'win']) : ['MISSION FAILED', 'lose'];
  const endedAt = { arrival: 'at Bennu arrival', proximity: 'during proximity operations', tag: 'at sampling', return: 'at Bennu departure', complete: '' }[m.result.ended] || '';
  const realDays = Math.round((Date.parse(rm.sample_capsule_landing.date) - Date.parse(rm.launch.date)) / 864e5);
  const yourInst = INSTRUMENT_ORDER.filter((x) => S.instruments.has(x)).map((x) => x.toUpperCase()).join(', ');
  const rows = [
    ['Launcher', c.vehicle.name, rm.launch.vehicle],
    ['Launch date', tl.launch, rm.launch.date],
    ['Launch energy C3', `${c.c3.toFixed(2)} km²/s²`, `${rm.launch.c3_km2_s2.toFixed(2)} km²/s²`],
    ['Arrival at Bennu', tl.arrival, rm.arrival_at_bennu.date],
    ['Sample landing', m.result.ended === 'complete' ? tl.landing : '—', rm.sample_capsule_landing.date],
    ['Total mission time', m.result.ended === 'complete' ? `${tl.totalDays} days` : '—', `${realDays} days`],
    ['Launch mass', `${fmt(c.wetKg)} kg`, `${fmt(rm.launch_mass_kg.value)} kg`],
    ['Dry mass', `${fmt(c.dryKg)} kg`, `${fmt(rm.dry_mass_kg.value)} kg`],
    ['Propellant', `${fmt(c.propKg)} kg (${c.prop.class}, Isp ${c.prop.isp_s} s)`, `${fmt(rm.propellant_and_helium_kg.value)} kg incl. helium (hydrazine, 230 s)`],
    ['Solar power', `${fmt(c.pAph)}–${fmt(c.pPeri)} W at Bennu`, `${fmt(rm.power_w.min)}–${fmt(rm.power_w.max)} W`],
    ['Instruments', yourInst || 'none', rm.instruments.map((x) => x.split(' ')[0]).join(', ')],
    ['Cost', `${money(report.cost)} incl. launch`, `≈ ${money(rm.cost_musd.mission_excluding_launch + rm.cost_musd.launch)} incl. launch`],
    ['Sample returned', m.result.primary ? `${m.sampleG} g` : '0 g', `${rm.sample_returned_g.value} g (goal ≥ ${rm.sample_goal_g.value} g)`],
  ];
  panel.innerHTML = `
    <div class="kicker">Step 5 · Mission report</div>
    <div class="verdict ${verdict[1]}">${verdict[0]}</div>
    <p class="lead">${m.result.primary ? `Your spacecraft brought ${m.sampleG} g of Bennu home on ${tl.landing}.` : `The mission ended ${endedAt}.`}</p>
    <div style="display:flex;align-items:baseline;gap:10px"><div class="score-big">${fmt(sc.total)}</div><span class="src">points</span></div>
    <div class="kv">${sc.rows.map((r) => `<span>${r[0]}</span><b style="color:${r[1] < 0 ? 'var(--red)' : 'inherit'}">${r[1] > 0 ? '+' : ''}${fmt(r[1])}</b>`).join('')}</div>
    <h2>Why it happened <span class="tag">each choice → its effect</span></h2>
    <ul class="causes">${m.causes.map((x) => `<li class="${x.kind}">${x.text}</li>`).join('')}</ul>
    <h2>Space weather you flew through <span class="tag">NASA DONKI</span></h2>
    <ul class="causes">${m.events.filter((e) => e.choice).map((e) => `<li class="${e.outcome?.hit ? 'fail' : 'ok'}"><a href="${e.source}" target="_blank" rel="noopener">${e.title_en}</a> · ${e.time.slice(0, 10)} · ${e.scale} — ${e.choice === 'safe' ? 'safe mode' : 'kept operating'}: ${e.outcome?.text}</li>`).join('')}</ul>
    <h2>Your design vs the real OSIRIS-REx</h2>
    <table class="cmp"><tr><th></th><th>YOU</th><th>OSIRIS-REx</th></tr>${rows.map((r) => `<tr><td>${r[0]}</td><td class="n">${r[1]}</td><td class="n">${r[2]}</td></tr>`).join('')}</table>
    <p class="src">Real values: NASA Science OSIRIS-REx, NASA press kit, Lauretta et al. 2017, Wikipedia (real_mission.json).</p>
    <div class="btn-row"><button class="btn" id="again">Redesign & fly again</button><button class="btn ghost" id="restart">New mission</button></div>
    <h2>Data sources</h2>
    <p class="src">NASA CCMC DONKI · JPL Small-Body Mission Design API · NASA Science OSIRIS-REx · NASA OSIRIS-REx press kit · instrument papers (OLA, OVIRS, OTES, REXIS) · eoPortal · L3Harris MR-107S · NASA DART & Psyche launch contracts · NASA LSP performance data. Game-defined values (probabilities, score, some costs) are listed in the README. Built with AI assistance (Claude).</p>`;
  $('#again').onclick = () => { mission = null; go('build'); };
  $('#restart').onclick = () => { mission = null; S = defaultState(D); maxReached = 0; go('briefing'); };
}

// ------------------------------------------------------------------ help & boot
$('#btn-help').onclick = () => { sfx.click(); modal(`<div class="kicker">How to play</div><h3>Design → fly → compare</h3>
  <p><b>1 Briefing:</b> pick secondary science goals (more points, more instruments).<br><b>2 Launch:</b> choose a real JPL launch window and a rocket. Higher C3 = less mass to orbit; fast trips need hard braking at Bennu.<br><b>3 Build:</b> add instruments, arrays, antenna, shielding and propulsion. Keep every gauge in range.<br><b>4 Operations:</b> fly through real NASA DONKI solar storms — choose safe mode or keep going.<br><b>5 Report:</b> see why your mission succeeded or failed, next to the real OSIRIS-REx.</p>
  <p>Open the <b>Physics Console</b> (bottom right) to see every equation with your numbers.</p><button class="choice" data-choice="ok"><b>Got it</b></button>`); };
$('#btn-sound').onclick = () => { setSound(!soundOn()); $('#btn-sound').textContent = soundOn() ? '🔊' : '🔇'; };
$('.logo').onclick = () => { if (screen !== 'ops') go('briefing'); };

async function boot() {
  D = await loadData();
  S = defaultState(D);
  recompute();
  ensureScenes();
  const start = params.get('screen');
  if (start === 'build' || start === 'launch') maxReached = 2;
  go(start && SCREENS.some((s) => s[0] === start) && start !== 'ops' && start !== 'report' ? start : 'briefing');
  if (start === 'ops') { maxReached = 3; Object.assign(S, realState(D), { optionKey: S.optionKey, secondary: new Set(SECONDARY) }); go('ops'); }
  frame();
  setTimeout(() => $('#loading').classList.add('done'), 300);
}
boot().catch((e) => { console.error(e); $('.load-sub').textContent = 'Error: ' + e.message; });
