// COSMO CRAFT (team Miku☆Miku☆Beam) — main game controller.
// First-person campus exploration + console "terminals" + mission operations + report.
// Code written with AI assistance (Claude, Anthropic) for NASA Space Apps Challenge 2026.
import './ui/style.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { loadData } from './game/data.js';
import { compute, defaultState, realState, capacityFor, SECONDARY, INSTRUMENT_ORDER } from './game/model.js';
import { Mission } from './game/mission.js';
import { fmt, visViva, solarPower, commDelaySeconds } from './game/physics.js';
import { earthPos, bennuPos, transferPos, len, dist, parseDate, isoDate } from './game/orbits.js';
import { drawWindows, drawCapacity } from './ui/charts.js';
import { sfx, setSound, soundOn } from './ui/audio.js';
import { T, L, getLang, setLang, onLang, instName, instDesc, objName } from './ui/i18n.js';
import { LaunchScene } from './scenes/LaunchScene.js';
import { SpaceScene } from './scenes/SpaceScene.js';
import { FPController } from './game/fpcontrols.js';
import { createSpacecraft, updateSpacecraft } from './models/spacecraft.js';

// optional modules (built in parallel; the game still runs without them)
const campusMods = import.meta.glob('./scenes/CampusScene.js');
const rigMods = import.meta.glob('./models/fpRig.js');

const $ = (s, r = document) => r.querySelector(s);
const panel = $('#panel');
const params = new URLSearchParams(location.search);
let QUALITY = params.get('render') === 'cheap' ? 'low' : (() => { try { return localStorage.getItem('mmb-q') || 'high'; } catch (e) { return 'high'; } })();

let D, S, C;
let screen = null;
let maxReached = 0;
let mission = null, report = null;
let MODE = 'menu'; // explore | terminal | menu
const visited = { briefing: false, flight_dynamics: false, assembly: false, launch_control: false };
const SCREENS = ['briefing', 'launch', 'build', 'ops', 'report'];
const screenName = (id) => ({ briefing: T('Briefing', '브리핑'), launch: T('Launch', '발사'), build: T('Build', '조립'), ops: T('Operations', '운영'), report: T('Report', '리포트') })[id];

// ------------------------------------------------------------------ renderer
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: QUALITY === 'high', powerPreference: 'high-performance' });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
composer.addPass(renderPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.7, 0.5, 0.85);
composer.addPass(bloom);
composer.addPass(new OutputPass());
function applyQuality() {
  const hi = QUALITY === 'high';
  renderer.setPixelRatio(hi ? Math.min(devicePixelRatio, 1.75) : 0.75);
  renderer.shadowMap.enabled = hi;
  bloom.enabled = hi;
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
}
applyQuality();

let launchScene = null, spaceScene = null, campus = null, fp = null, rig = null, active = null, orbitOn = null;
function setStage(which, mode, opts) {
  const target = which === 'launch' ? launchScene : which === 'campus' ? campus : spaceScene;
  if (!target) return;
  if (orbitOn && orbitOn !== target) { orbitOn.disableOrbit?.(); orbitOn = null; }
  active = target;
  active.resize?.(innerWidth, innerHeight);
  if (which === 'space' && mode) spaceScene.setMode(mode, opts || {});
}
function enableOrbit() { if (active?.enableOrbit && active !== campus) { active.enableOrbit(canvas); orbitOn = active; } }

const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  if (!active) return;
  if (active === campus && fp) {
    fp.update(dt);
    rig?.update(dt, { ...fp.state, time: clock.elapsedTime });
  }
  active.update?.(dt);
  renderPass.scene = active.scene; renderPass.camera = active.camera;
  composer.render();
}
addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
  active?.resize?.(innerWidth, innerHeight);
  if (screen === 'launch' && MODE !== 'explore') drawLaunchCharts();
});

// ------------------------------------------------------------------ helpers
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2800); }
const money = (m) => `$${fmt(m, Math.abs(m % 1) > 0.001 ? 1 : 0)}M`;
const dotStatus = (st) => { const s = (st || '').split(' ')[0]; const c = s === 'verified' ? 'v' : s === 'game_defined' || s === 'needs_source' ? 'g' : 'e'; return `<i class="sd ${c}" title="${s.replace('_', ' ')}"></i>`; };
function recompute() { C = compute(D, S); }
function speak(text, rate = 1.05) {
  if (!soundOn() || !('speechSynthesis' in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = getLang() === 'ko' ? 'ko-KR' : 'en-US'; u.rate = rate; u.pitch = 0.95; u.volume = 0.9;
    speechSynthesis.speak(u);
  } catch (e) { /* no voices */ }
}

let skipCine = false;
function cine(on, caption = '', sub = '') {
  $('#cine').classList.toggle('hidden', !on);
  $('#cine-caption').textContent = caption; $('#cine-sub').textContent = sub;
  panel.classList.toggle('hidden', on);
  $('#console').style.display = on ? 'none' : '';
}
$('#cine-skip').onclick = () => { skipCine = true; };
async function runCinematic(caption, sub, ms, fn) {
  skipCine = false; cine(true, caption, sub);
  let done = false;
  const p = new Promise((r) => fn(() => { done = true; r(); }));
  await Promise.race([p, (async () => { const t0 = performance.now(); while (!done && !skipCine && performance.now() - t0 < ms) await wait(60); })()]);
  cine(false);
}
function modal(html, { alarm = false } = {}) {
  const m = $('#modal'), card = $('#modal-card');
  card.className = alarm ? 'alarm' : '';
  card.innerHTML = html; m.classList.remove('hidden');
  fp?.unlock();
  return new Promise((resolve) => {
    card.querySelectorAll('[data-choice]').forEach((b) => b.addEventListener('click', () => { sfx.click(); m.classList.add('hidden'); resolve(b.dataset.choice); }));
  });
}

// ------------------------------------------------------------------ chrome
function renderTopbar() {
  const idx = SCREENS.indexOf(screen);
  $('#stepper').innerHTML = SCREENS.map((id, i) => {
    const done = MODE === 'explore' || MODE === 'terminal' ? stepDone(id) : i < idx || (i <= maxReached && i !== idx);
    const cls = i === idx && MODE !== 'explore' ? 'active' : done ? 'done' : '';
    return (i ? '<span class="step-sep">›</span>' : '') + `<button class="step ${cls}" data-step="${id}"><b>${i + 1}</b><span>${screenName(id)}</span></button>`;
  }).join('');
  $('#btn-lang').textContent = getLang() === 'ko' ? 'EN' : '한';
  $('#btn-q').textContent = QUALITY === 'high' ? 'HQ' : 'LQ';
}
function stepDone(id) {
  return { briefing: visited.briefing, launch: visited.flight_dynamics, build: visited.assembly, ops: !!report, report: !!report }[id];
}
$('#stepper').addEventListener('click', (e) => {
  const b = e.target.closest('[data-step]'); if (!b) return;
  const id = b.dataset.step;
  if (id === 'ops' || id === 'report' || screen === 'ops') return;
  if (MODE === 'menu') { if (b.classList.contains('done')) go(id); return; }
  openStation({ briefing: 'briefing', launch: 'flight_dynamics', build: 'assembly' }[id]);
});

function renderElements() {
  const c = C, o = c.opt;
  const chips = [
    [T('Objectives', '목표'), `1+${S.secondary.size}`, true],
    [T('Spacecraft', '우주선'), `${fmt(c.dryKg)} kg`, visited.assembly || maxReached >= 2],
    [T('Instruments', '과학장비'), `${[...S.instruments].filter((x) => !['tagsam', 'src'].includes(x)).length}/5`, visited.assembly || maxReached >= 2],
    [T('Launcher', '발사체'), c.vehicle.name.replace('Falcon ', 'F'), visited.flight_dynamics || maxReached >= 1, c.wetKg > c.capacityKg],
    [T('Budget', '예산'), `${money(c.costMusd)}`, true, c.costMusd > c.budget],
    [T('Power', '전력'), `${fmt(c.loadW)}/${fmt(c.pAph)} W`, visited.assembly || maxReached >= 2, false, !c.powerOk],
    [T('Mass', '중량'), `${fmt(c.wetKg)}/${fmt(c.capacityKg)} kg`, visited.assembly || maxReached >= 2, c.wetKg > c.capacityKg],
    [T('Comms', '통신'), o ? `${o.comm_delay_at_arrival_min} min` : '—', visited.flight_dynamics || maxReached >= 1, false, c.dataFraction < 1],
    [T('Orbit', '궤도'), o ? `C3 ${o.c3_km2_s2}` : '—', visited.flight_dynamics || maxReached >= 1, false, o && !o.brakable_like_osiris_rex],
  ];
  $('#elements').innerHTML = chips.map(([n, v, on, bad, warn]) => `<span class="el-chip ${bad ? 'bad' : warn ? 'warn' : on ? 'on' : ''}">${n}<i>${on ? v : ''}</i></span>`).join('');
}

let consoleExtra = null;
function renderConsole() {
  const c = C, k = D.game_config.constants;
  const u = (c.prop.isp_s * 9.80665) / 1000;
  $('#console-toggle').innerHTML = `${T('PHYSICS CONSOLE', '물리 콘솔')} <b>▲</b>`;
  $('#console-body').innerHTML = `
    <div class="eq"><div class="n">${T('Tsiolkovsky rocket equation', '치올콥스키 로켓 방정식')}</div>
      <div class="f">v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub>/m<sub>f</sub>)</div>
      <div class="v">u = ${c.prop.isp_s} s × g₀ = ${u.toFixed(3)} km/s · ${fmt(c.wetKg)} → ${fmt(c.dryKg)} kg<br>Δv = <b>${c.dvAvailable.toFixed(2)}</b> km/s / ${T('need', '필요')} ${c.dvRequired.toFixed(2)}</div></div>
    <div class="eq"><div class="n">${T('Vis-viva equation', '활력 방정식')}</div>
      <div class="f">v² = μ (2/r − 1/a)</div>
      <div class="v">r = ${fmt(c.rPark)} km: ${T('circular', '원궤도')} ${c.vCircPark.toFixed(2)} → ${T('departure', '탈출 궤도')} ${c.vDepart.toFixed(2)} km/s (C3 ${c.c3.toFixed(1)})</div></div>
    <div class="eq"><div class="n">${T('Escape velocity', '탈출 속도')}</div>
      <div class="f">v<sub>e</sub> = √(2GM/r)</div>
      <div class="v">${T('surface', '지표')} ${c.vEscSurface.toFixed(2)} km/s · ${k.parking_orbit_alt_km.value} km ${c.vEscPark.toFixed(2)} km/s</div></div>
    <div class="eq"><div class="n">${T('Solar power · light-time', '태양광 출력 · 통신 지연')}</div>
      <div class="f">P = P<sub>1AU</sub>/r² · t = d/c</div>
      <div class="v">${fmt(c.pPeri)}–${fmt(c.pAph)} W ${T('at Bennu', '(베누 궤도)')} · ${T('load', '부하')} ${fmt(c.loadW)} W${c.opt ? ` · ${c.opt.comm_delay_at_arrival_min} min` : ''}</div></div>
    ${consoleExtra ? consoleExtra() : ''}`;
}
$('#console-toggle').onclick = () => { $('#console').classList.toggle('collapsed'); sfx.click(); };
function refreshChrome() { recompute(); renderTopbar(); renderElements(); renderConsole(); drawWall(); updateObjectiveHud(); }

// ------------------------------------------------------------------ screens
function go(name) {
  screen = name;
  maxReached = Math.max(maxReached, SCREENS.indexOf(name));
  consoleExtra = null;
  panel.classList.remove('hidden');
  document.body.classList.remove('explore');
  setExploreHud(false);
  sfx.select();
  ({ briefing: showBriefing, launch: showLaunch, build: showBuild, ops: showOps, report: showReport })[name]();
  refreshChrome();
  panel.scrollTop = 0;
}
function rerenderScreen() {
  const keep = panel.scrollTop;
  ({ briefing: showBriefing, launch: () => showLaunch(true), build: () => showBuild(true), report: showReport })[screen]?.();
  refreshChrome(); panel.scrollTop = keep;
}
function termBar(name) {
  if (MODE !== 'terminal') return '';
  return `<div class="terminal-bar"><span class="tname">● ${name}</span><button class="btn ghost sm" id="term-close">${T('Back to campus', '캠퍼스로')} <kbd>Esc</kbd></button></div>`;
}
function bindTermClose() { const b = $('#term-close'); if (b) b.onclick = () => returnToCampus(); }
function primaryBtn(id, label, disabled = false) { return `<button class="btn block" id="${id}" ${disabled ? 'disabled' : ''}>${label}</button>`; }

// ---------- 1. Briefing (holo table)
function showBriefing() {
  setStage('space', 'briefing');
  const objs = D.game_config.objectives;
  const rm = D.real_mission;
  panel.innerHTML = `${termBar(T('MISSION BRIEFING', '임무 브리핑'))}
    <h1>${T('Bring a piece of Bennu home.', '베누의 조각을 지구로.')}</h1>
    <p class="lead">${T('Design an asteroid sample-return mission under real limits, fly it through real solar storms, then compare with NASA’s OSIRIS-REx.', '실제 제약 안에서 소행성 샘플 귀환 임무를 설계하고, 실제 태양 폭풍을 뚫고 비행한 뒤 NASA OSIRIS-REx와 비교해요.')}</p>
    <div class="stats">
      <div><b>${money(D.game_config.budget_musd.value)}</b><span>${T('budget', '예산')}</span></div>
      <div><b>${D.brakableOptions.length}/${D.futureOptions.length}</b><span>${T('usable windows', '쓸 수 있는 발사창')}</span></div>
      <div><b>${rm.bennu_orbit.mean_diameter_m} m</b><span>${T('Bennu size', '베누 지름')}</span></div>
    </div>
    <h2>${T('Primary objective', '주 목표')}</h2>
    <div class="row locked"><span class="ic">◎</span><div><b>${objName('sample')}</b><small>TAGSAM + SRC · OSIRIS-REx: ${rm.sample_returned_g.value} g</small></div></div>
    <h2>${T('Secondary objectives', '부 목표')} <span class="tag">+250 / −100</span></h2>
    ${SECONDARY.map((id) => `
      <button class="row pick ${S.secondary.has(id) ? 'sel' : ''}" data-sec="${id}"><span class="box">${S.secondary.has(id) ? '✓' : ''}</span><div><b>${objName(id)}</b><small>${objs[id].needs_any.map((x) => x.toUpperCase()).join(' / ')}</small></div></button>`).join('')}
    <div class="btn-row">${primaryBtn('next', MODE === 'terminal' ? T('Confirm objectives', '목표 확정') : T('Next: launch window →', '다음: 발사창 →'))}</div>`;
  panel.querySelectorAll('[data-sec]').forEach((el) => el.onclick = () => { const id = el.dataset.sec; S.secondary.has(id) ? S.secondary.delete(id) : S.secondary.add(id); sfx.click(); rerenderScreen(); });
  $('#next').onclick = () => { visited.briefing = true; MODE === 'terminal' ? returnToCampus() : go('launch'); };
  bindTermClose();
}

// ---------- 2. Launch window (flight dynamics console)
function drawLaunchCharts() {
  const w = $('#chart-win'); if (!w) return;
  const hit = drawWindows(w, D.futureOptions, S.optionKey, 1.97);
  w.onclick = (e) => { const r = w.getBoundingClientRect(); const k = hit(e.clientX - r.left, e.clientY - r.top); if (k) { S.optionKey = k; sfx.select(); rerenderScreen(); } };
  const cap = $('#chart-cap');
  if (cap) { const curves = {}; for (const id of Object.keys(D.vehicles)) curves[id] = (c3) => capacityFor(D, id, c3); drawCapacity(cap, curves, C.c3, visited.assembly || maxReached >= 2 ? C.wetKg : null, S.vehicleId); }
}
function showLaunch(keep) {
  recompute();
  if (!keep || active !== launchScene) { setStage('launch'); launchScene.reset?.(); }
  launchScene.setVehicle?.(S.vehicleId);
  enableOrbit();
  const o = C.opt;
  const vm = D.game_config.launch_vehicle_model.vehicles;
  const list = [...D.futureOptions].sort((a, b) => a.arrival_braking_dv_km_s - b.arrival_braking_dv_km_s);
  const showMass = visited.assembly || maxReached >= 2;
  panel.innerHTML = `${termBar('FLIGHT DYNAMICS')}
    <h1>${T('Launch window & rocket', '발사창과 로켓')}</h1>
    <canvas id="chart-win" class="chart"></canvas>
    <div class="legend"><span><i style="background:#39c5bb"></i>${T('can stop at Bennu', '베누에서 정지 가능')} (${D.brakableOptions.length})</span><span><i style="background:#ff4d5e"></i>${T('too fast', '너무 빠름')} (${D.futureOptions.length - D.brakableOptions.length})</span></div>
    <select id="win-select" class="select">
      ${list.map((x) => { const k = x.launch_date + '|' + x.arrival_date; return `<option value="${k}" ${k === S.optionKey ? 'selected' : ''}>${x.brakable_like_osiris_rex ? '●' : '○'} ${x.launch_date} · ${x.flight_days} d · C3 ${x.c3_km2_s2} · Δv ${x.arrival_braking_dv_km_s}</option>`; }).join('')}
    </select>
    ${o ? `<div class="stats four">
      <div><b>${o.flight_days}</b><span>${T('days', '비행 일수')}</span></div>
      <div><b>${o.c3_km2_s2}</b><span>C3 km²/s²</span></div>
      <div class="${o.brakable_like_osiris_rex ? 'good' : 'badv'}"><b>${o.arrival_braking_dv_km_s}</b><span>${T('arrival Δv km/s', '도착 감속 km/s')}</span></div>
      <div><b>${o.comm_delay_at_arrival_min}</b><span>${T('light-min', '통신 지연 분')}</span></div>
    </div>
    ${o.brakable_like_osiris_rex ? '' : `<div class="alert bad">${T(`Needs ${o.braking_propellant_per_kg_dry} kg of hydrazine per kg of spacecraft just to stop. Expect a fly-by.`, `정지에만 우주선 1 kg당 하이드라진 ${o.braking_propellant_per_kg_dry} kg 필요. 그냥 지나칠 가능성 큼.`)}</div>`}` : ''}
    <h2>${T('Rocket', '발사체')} <span class="tag">C3 ${C.c3.toFixed(1)}</span></h2>
    ${Object.values(D.vehicles).map((v) => { const cap = capacityFor(D, v.id, C.c3); const m = vm[v.id]; const fits = !showMass || C.wetKg <= cap; return `
      <button class="row pick radio ${S.vehicleId === v.id ? 'sel' : ''}" data-veh="${v.id}"><span class="box"></span><div class="grow"><b>${v.name}</b>
        <small>${m.propellants.map((p) => `<span class="pc ${p.class}">${T(p.class, { liquid: '액체', solid: '고체', hybrid: '하이브리드' }[p.class])}</span>`).join('')} ${m.site.split(',')[0]}</small>
        <div class="capbar"><i style="width:${Math.min(100, cap / 70)}%"></i>${showMass ? `<em style="left:${Math.min(100, C.wetKg / 70)}%"></em>` : ''}</div></div>
        <div class="num"><b class="${fits ? '' : 'neg'}">${fmt(cap)} kg</b><small>${money(v.cost_musd)}</small></div></button>`; }).join('')}
    <canvas id="chart-cap" class="chart small"></canvas>
    <details class="src"><summary>${T('How capacity is computed · sources', '탑재 능력 계산법 · 출처')}</summary>${T('Upper-stage escape burn from a 185 km parking orbit (vis-viva + escape velocity) fed into the rocket equation, calibrated to one sourced point each: Atlas V 411 = real OSIRIS-REx launch (2,105 kg at C3 29.3); Falcon = NASA LSP data. Trajectories: JPL Small-Body Mission Design API.', '185 km 주차 궤도에서의 탈출 연소 Δv(활력 방정식 + 탈출 속도)를 로켓 방정식에 넣고, 발사체마다 출처 있는 실측점 하나로 보정함. Atlas V 411 = 실제 OSIRIS-REx 발사(C3 29.3에서 2,105 kg), Falcon = NASA LSP 자료. 궤도: JPL 소천체 임무 설계 API.')}</details>
    <div class="btn-row">${primaryBtn('next', MODE === 'terminal' ? T('Lock in window & rocket', '발사창·로켓 확정') : T('Next: build →', '다음: 조립 →'), !o)}</div>`;
  $('#win-select').onchange = (e) => { S.optionKey = e.target.value; sfx.select(); rerenderScreen(); };
  panel.querySelectorAll('[data-veh]').forEach((el) => el.onclick = () => { S.vehicleId = el.dataset.veh; sfx.select(); rerenderScreen(); });
  $('#next').onclick = () => { visited.flight_dynamics = true; campus?.setVehicle?.(S.vehicleId); MODE === 'terminal' ? returnToCampus() : go('build'); };
  bindTermClose();
  requestAnimationFrame(drawLaunchCharts);
}

// ---------- 3. Build (clean-room terminal)
let buildTab = 'science';
function gauge(label, val, max, unit, { invert = false, warnOnly = false, wide = false } = {}) {
  const pct = max > 0 ? (val / max) * 100 : 0;
  const over = invert ? val < max : val > max;
  const cls = over ? (warnOnly ? 'warn' : 'bad') : '';
  const d = unit === 'km/s' ? 2 : unit === 'GB' ? 2 : 0;
  return `<div class="gauge ${cls} ${wide ? 'wide' : ''}"><div class="lbl">${label}<b>${fmt(val, d)}<span>/${fmt(max, d)} ${unit}</span></b></div><div class="track"><div class="fill" style="width:${Math.min(100, pct)}%"></div></div></div>`;
}
function scCfg() { return { instruments: [...S.instruments], solar: S.solar, antenna: S.antenna, shield: S.shield }; }
function showBuild(keep) {
  recompute();
  if (!keep || active !== spaceScene) { setStage('space', 'build'); enableOrbit(); }
  spaceScene.setSpacecraftConfig?.(scCfg());
  const c = C, gc = D.game_config, P = D.instruments;
  const tabs = [['science', T('Science', '과학장비')], ['power', T('Power · Comms', '전력·통신')], ['prop', T('Propulsion', '추진')], ['cost', T('Cost', '비용')]];
  let body = '';
  if (buildTab === 'science') {
    body = INSTRUMENT_ORDER.map((id) => { const p = P[id]; const on = S.instruments.has(id); return `
      <button class="row pick ${on ? 'sel' : ''}" data-inst="${id}"><span class="box">${on ? '✓' : ''}</span><div class="grow"><b>${instName(id)} ${dotStatus(p.mass_status || p.status)}${p.required ? `<span class="pc req">${T('primary', '주 목표')}</span>` : ''}</b><small>${instDesc(id)}</small></div>
      <div class="num"><b>${fmt(p.mass_kg, 1)} kg</b><small>${fmt(p.power_w_avg, 0)} W · ${money(p.cost_musd)}</small></div></button>`; }).join('') +
      `<div class="legend"><span><i class="sd v"></i>${T('sourced', '출처 확인')}</span><span><i class="sd e"></i>${T('estimate', '추정')}</span><span><i class="sd g"></i>${T('game value', '게임용 값')}</span></div>`;
  } else if (buildTab === 'power') {
    body = `<h3>${T('Solar arrays', '태양전지판')}</h3>
      <div class="seg">${Object.values(D.solar).map((s) => `<button data-solar="${s.id}" class="${S.solar === s.id ? 'sel' : ''}">${{ solar_small: T('Small', '소'), solar_medium: T('Medium', '중'), solar_large: T('Large', '대') }[s.id]}<small>${fmt(s.power_w_at_1au)} W · ${s.mass_kg} kg</small></button>`).join('')}</div>
      <div class="kv"><span>${T('At aphelion', '원일점')} (${D.real_mission.bennu_orbit.aphelion_au} AU)</span><b class="${c.powerOk ? '' : 'warnc'}">${fmt(c.pAph)} W</b><span>${T('Load', '부하')}</span><b>${fmt(c.loadW)} W</b></div>
      <h3>${T('Antenna', '안테나')}</h3>
      <div class="seg">${Object.values(D.antennas).map((a) => `<button data-ant="${a.id}" class="${S.antenna === a.id ? 'sel' : ''}">${a.id === 'hga' ? T('High-gain', '고이득') : T('Low-gain only', '저이득만')}<small>${a.downlink_kbps_at_bennu} kbit/s</small></button>`).join('')}</div>
      <div class="kv"><span>${T('Downlink / science', '전송량 / 관측량')}</span><b class="${c.dataFraction < 1 ? 'warnc' : ''}">${c.linkGB.toFixed(2)} / ${c.dataPerDay.toFixed(2)} GB/d</b></div>
      <h3>${T('Radiation shielding', '방사선 차폐')}</h3>
      <div class="seg">${D.shields.map((s) => `<button data-shield="${s.level}" class="${S.shield === s.level ? 'sel' : ''}">Lv ${s.level}<small>${s.mass_kg} kg</small></button>`).join('')}</div>`;
  } else if (buildTab === 'prop') {
    body = gc.propulsion_options.map((p) => `
      <button class="row pick radio ${S.propulsionId === p.id ? 'sel' : ''}" data-prop="${p.id}"><span class="box"></span><div class="grow"><b>${{ mono_n2h4: T('Hydrazine monoprop', '하이드라진 단일추진제'), biprop_mmh_nto: T('MMH / NTO biprop', 'MMH/NTO 이원추진제'), solid_kick: T('Solid kick motor', '고체 킥 모터'), hybrid: T('Hybrid motor', '하이브리드 모터') }[p.id]} <span class="pc ${p.class}">${T(p.class, { liquid: '액체', solid: '고체', hybrid: '하이브리드' }[p.class])}</span></b>
      <small>${p.fuel.split(' (')[0]} + ${p.oxidizer.split(' (')[0]}</small></div>
      <div class="num"><b>${p.isp_s} s</b><small>${p.max_burns >= 99 ? T('restartable', '재점화 가능') : T(`${p.max_burns} burn${p.max_burns > 1 ? 's' : ''}`, `${p.max_burns}회 점화`)}</small></div></button>`).join('') + `
      <h3>${T('Propellant load', '추진제 양')}</h3>
      <button class="row pick ${S.autoProp ? 'sel' : ''}" id="auto-prop"><span class="box">${S.autoProp ? '✓' : ''}</span><div class="grow"><b>${T('Auto-size', '자동 계산')}</b><small>m<sub>p</sub> = m<sub>dry</sub>(e<sup>Δv/u</sup> − 1)</small></div><div class="num"><b>${fmt(c.autoProp)} kg</b></div></button>
      <input type="range" id="prop-slider" min="0" max="${c.tankMax}" step="10" value="${Math.round(c.propKg)}" ${S.autoProp ? 'disabled' : ''}>
      <div class="kv"><span>${T('Δv budget (brake + ops + return)', 'Δv 예산 (감속+운용+귀환)')}</span><b>${c.dvArrival.toFixed(2)} + ${c.dvProx} + ${c.dvReturn}</b></div>`;
  } else {
    body = `<div class="kv">${c.costItems.map((x) => `<span>${x.label}</span><b>${money(x.musd)}</b>`).join('')}<span><b class="plain">${T('Total', '합계')}</b></span><b class="${c.costMusd > c.budget ? 'neg' : 'pos'}">${money(c.costMusd)} / ${money(c.budget)}</b></div>
      <p class="src">${T('Real OSIRIS-REx: ≈ $800M + $183.5M launch.', '실제 OSIRIS-REx: 약 8억 달러 + 발사 1억 8,350만 달러.')}</p>`;
  }
  const issues = [...c.blockers.map((b) => ['bad', b]), ...c.warnings.map((w) => ['warn', w])];
  panel.innerHTML = `${termBar(T('SPACECRAFT ASSEMBLY', '우주선 조립'))}
    <div class="gauges">
      ${gauge(T('MASS', '중량'), c.wetKg, c.capacityKg, 'kg')}
      ${gauge(T('BUDGET', '예산'), c.costMusd, c.budget, '$M')}
      ${gauge(T('POWER', '전력'), c.loadW, c.pAph, 'W', { warnOnly: true })}
      ${gauge(T('DATA', '데이터'), c.dataPerDay, c.linkGB, 'GB', { warnOnly: true })}
      ${gauge('Δv', c.dvAvailable, c.dvRequired, 'km/s', { invert: true, wide: true })}
    </div>
    <div class="tabs">${tabs.map(([id, n]) => `<button data-tab="${id}" class="${buildTab === id ? 'sel' : ''}">${n}</button>`).join('')}</div>
    <div class="tabbody">${body}</div>
    ${issues.length ? `<div class="alerts">${issues.slice(0, 3).map(([k, x]) => `<div class="alert ${k}">${x}</div>`).join('')}${issues.length > 3 ? `<div class="src">+${issues.length - 3} ${T('more', '개 더')}</div>` : ''}</div>` : `<div class="alert ok">${T('Design closes. Ready for launch.', '설계 완료. 발사 준비됨.')}</div>`}
    <div class="btn-row"><button class="btn ghost" id="load-real">${T('Load real OSIRIS-REx', '실제 OSIRIS-REx 불러오기')}</button>${primaryBtn('next', MODE === 'terminal' ? T('Lock design', '설계 확정') : T('Launch 🚀', '발사 🚀'), c.blockers.length > 0 && MODE !== 'terminal')}</div>`;
  const rr = () => { sfx.click(); rerenderScreen(); syncCampusSpacecraft(); };
  panel.querySelectorAll('[data-tab]').forEach((el) => el.onclick = () => { buildTab = el.dataset.tab; rr(); });
  panel.querySelectorAll('[data-inst]').forEach((el) => el.onclick = () => { const id = el.dataset.inst; S.instruments.has(id) ? S.instruments.delete(id) : S.instruments.add(id); rr(); });
  panel.querySelectorAll('[data-solar]').forEach((el) => el.onclick = () => { S.solar = el.dataset.solar; rr(); });
  panel.querySelectorAll('[data-ant]').forEach((el) => el.onclick = () => { S.antenna = el.dataset.ant; rr(); });
  panel.querySelectorAll('[data-shield]').forEach((el) => el.onclick = () => { S.shield = +el.dataset.shield; rr(); });
  panel.querySelectorAll('[data-prop]').forEach((el) => el.onclick = () => { S.propulsionId = el.dataset.prop; rr(); });
  const ap = $('#auto-prop'); if (ap) ap.onclick = () => { S.autoProp = !S.autoProp; S.propKg = Math.round(C.propKg); rr(); };
  const ps = $('#prop-slider'); if (ps) ps.oninput = (e) => { S.propKg = +e.target.value; rerenderScreen(); };
  $('#load-real').onclick = () => { Object.assign(S, { ...realState(D), secondary: S.secondary, optionKey: S.optionKey }); toast(T('Loaded the real OSIRIS-REx configuration.', '실제 OSIRIS-REx 구성을 불러왔어요.')); rr(); };
  $('#next').onclick = () => { visited.assembly = true; if (MODE === 'terminal') returnToCampus(); else if (!C.blockers.length) go('ops'); };
  bindTermClose();
}

// ---------- 4. Operations
const PHASES = ['launch', 'cruise', 'arrival', 'proximity', 'tag', 'return', 'reentry'];
const phaseName = (id) => ({ launch: T('Launch', '발사'), cruise: T('Cruise to Bennu', '베누로 순항'), arrival: T('Arrival braking', '도착 감속'), proximity: T('Proximity science', '근접 관측'), tag: T('Touch-And-Go', '터치 앤 고 채취'), return: T('Return cruise', '지구 귀환'), reentry: T('Capsule re-entry', '캡슐 재진입') })[id];
let opsState = null;
function renderOpsPanel() {
  const m = mission, st = opsState;
  panel.innerHTML = `<h1>${T('Mission control', '임무 관제')}</h1>
    <div class="phases">${PHASES.map((id) => `<div class="phase ${st.phase[id] || ''}"><span class="dot"></span>${phaseName(id)}<span class="when">${st.when[id] || ''}</span></div>`).join('')}</div>
    <div class="telemetry">
      <div class="tm"><div class="k">${T('Date', '날짜')}</div><div class="v" id="tm-date">${st.date || '—'}</div></div>
      <div class="tm"><div class="k">${T('Sun distance', '태양 거리')}</div><div class="v" id="tm-r">${st.r ? st.r.toFixed(3) + ' <small>AU</small>' : '—'}</div></div>
      <div class="tm"><div class="k">${T('Speed (vis-viva)', '속도 (활력)')}</div><div class="v" id="tm-v">${st.v ? st.v.toFixed(2) + ' <small>km/s</small>' : '—'}</div></div>
      <div class="tm"><div class="k">${T('Solar power', '태양광')}</div><div class="v" id="tm-p">${st.p ? fmt(st.p) + ' <small>W</small>' : '—'}</div></div>
      <div class="tm"><div class="k">${T('Light-time', '통신 지연')}</div><div class="v" id="tm-c">${st.delay ? st.delay.toFixed(1) + ' <small>min</small>' : '—'}</div></div>
      <div class="tm"><div class="k">${T('Propellant', '추진제')}</div><div class="v" id="tm-prop">${fmt(m.propLeft)} <small>kg</small></div></div>
    </div>
    <div class="log" id="log">${st.log.map((l) => `<div class="${l.cls || ''}"><b>${l.t}</b>${L(l.msg)}</div>`).join('')}</div>`;
  const lg = $('#log'); if (lg) lg.scrollTop = lg.scrollHeight;
}
function opsLog(msg, cls = '', t) { opsState.log.push({ msg, cls, t: t || opsState.date || '' }); renderOpsPanel(); }
function setTelemetry(dateMs, scPos) {
  const k = D.game_config.constants;
  const r = len(scPos);
  const aAU = (1 + len(bennuPos(parseDate(C.opt.arrival_date)))) / 2;
  const v = visViva(k.mu_sun_km3_s2.value, r * k.au_km.value, aAU * k.au_km.value);
  opsState.date = isoDate(dateMs); opsState.r = r; opsState.v = v; opsState.p = solarPower(C.p1au, r);
  opsState.delay = commDelaySeconds(dist(earthPos(dateMs), scPos) * k.au_km.value) / 60;
  const set = (id, h) => { const e = $(id); if (e) e.innerHTML = h; };
  set('#tm-date', opsState.date); set('#tm-r', r.toFixed(3) + ' <small>AU</small>'); set('#tm-v', v.toFixed(2) + ' <small>km/s</small>');
  set('#tm-p', fmt(opsState.p) + ' <small>W</small>'); set('#tm-c', opsState.delay.toFixed(1) + ' <small>min</small>');
  set('#tm-prop', `${fmt(mission.propLeft)} <small>kg</small>`);
}
async function eventDecision(ev) {
  sfx.alarm();
  speak(T('Space weather alert.', '우주 날씨 경보.'));
  const pRun = mission.failProb(ev, false), pSafe = mission.failProb(ev, true);
  const sw = D.game_config.space_weather;
  const typeName = { solar_flare: T('Solar flare', '태양 플레어'), geomagnetic_storm: T('Geomagnetic storm', '지자기 폭풍') }[ev.type] || T('Coronal mass ejection', '코로나 질량 방출');
  const choice = await modal(`
    <div class="alarm-k">⚠ ${T('SPACE WEATHER ALERT', '우주 날씨 경보')} · ${phaseName(ev.phase)}</div>
    <h3>${typeName} ${ev.detail && ev.type === 'solar_flare' ? ev.detail : ''}</h3>
    <div class="stats"><div class="badv"><b>${ev.severity}/5</b><span>${T('severity', '위험도')}</span></div><div><b>Lv ${S.shield}</b><span>${T('your shielding', '내 차폐')}</span></div><div><b>${ev.time.slice(0, 10)}</b><span>${T('real DONKI record', '실제 DONKI 기록')}</span></div></div>
    <button class="choice" data-choice="safe"><b>🛡 ${T('Safe mode', '안전 모드')}</b><span>${T('risk', '고장 위험')} ${Math.round(pSafe * 100)}% · +${sw.safe_mode_days} ${T('days', '일')} · +${money(sw.safe_mode_days * sw.extra_day_cost_musd)}</span></button>
    <button class="choice" data-choice="run"><b>▶ ${T('Keep operating', '계속 운영')}</b><span>${T('risk', '고장 위험')} ${Math.round(pRun * 100)}%</span></button>
    <p class="src"><a href="${ev.source}" target="_blank" rel="noopener">NASA DONKI ↗</a> ${ev.scale}</p>`, { alarm: true });
  const out = mission.resolveEvent(ev, choice);
  opsLog(out.text, out.hit ? 'bad' : 'ok');
  if (out.hit) sfx.error();
}
async function animateCruise(fromMs, toMs, fromBody, toBody, evs, isReturn) {
  const dur = 9000, t0 = performance.now();
  const p0 = fromBody(fromMs), p1 = toBody(toMs);
  const pending = [...evs].sort((a, b) => (a.dayFrac ?? 0.5) - (b.dayFrac ?? 0.5));
  const setP = (p) => isReturn ? spaceScene.setReturn?.({ departDate: isoDate(fromMs), arriveDate: isoDate(toMs), progress: p }) : spaceScene.setCruise?.({ launchDate: isoDate(fromMs), arrivalDate: isoDate(toMs), progress: p });
  setP(0);
  let paused = 0;
  while (true) {
    const p = Math.min(1, (performance.now() - t0 - paused) / dur);
    setP(p);
    setTelemetry(fromMs + (toMs - fromMs) * p, transferPos(p0, p1, p));
    if (pending.length && p >= (pending[0].dayFrac ?? 0.5)) { const tp = performance.now(); await eventDecision(pending.shift()); paused += performance.now() - tp; }
    if (p >= 1) break;
    await wait(50);
  }
}
async function showOps() {
  recompute();
  setExploreHud(false); document.body.classList.remove('explore');
  mission = new Mission(D, S, C, params.get('seed') ? +params.get('seed') : undefined);
  report = null;
  opsState = { phase: {}, when: {}, log: [], date: C.opt.launch_date };
  const setPhase = (id, cls, when) => { opsState.phase[id] = cls; if (when) opsState.when[id] = when; renderOpsPanel(); };
  renderOpsPanel();
  const site = D.game_config.launch_vehicle_model.vehicles[S.vehicleId].site;

  setPhase('launch', 'active', C.opt.launch_date);
  setStage('launch'); launchScene.reset?.(); launchScene.setVehicle?.(S.vehicleId);
  for (const ev of mission.eventsFor('launch')) await eventDecision(ev);
  sfx.launch();
  setTimeout(() => speak(getLang() === 'ko' ? '점화. 3, 2, 1, 발사!' : 'Ignition. Three, two, one, and liftoff!', 1.0), 300);
  await runCinematic(`${C.vehicle.name} · ${T('LIFTOFF', '발사')}`, `${C.opt.launch_date} · ${site} · ${fmt(C.wetKg)} kg → C3 ${C.c3.toFixed(1)}`, 16000, (done) => launchScene.startLaunch ? launchScene.startLaunch(done) : setTimeout(done, 3000));
  opsLog(mission.launch().text, 'ok', C.opt.launch_date);
  setPhase('launch', 'done');

  setPhase('cruise', 'active');
  setStage('space', 'cruise');
  await animateCruise(parseDate(C.opt.launch_date), parseDate(C.opt.arrival_date), earthPos, bennuPos, mission.eventsFor('cruise'), false);
  setPhase('cruise', 'done', `${C.opt.flight_days} d`);

  setPhase('arrival', 'active', C.opt.arrival_date);
  sfx.burn();
  const arr = mission.arrival();
  opsLog(arr.text, arr.ok ? 'ok' : 'bad', C.opt.arrival_date);
  if (!arr.ok) { setPhase('arrival', 'fail'); speak(T('We have overshot Bennu.', '베누를 지나쳤습니다.')); await wait(1500); return finishMission(); }
  setPhase('arrival', 'done');

  setPhase('proximity', 'active');
  setStage('space', 'proximity');
  opsLog({ en: `Arrived at Bennu. Commands take ${C.opt.comm_delay_at_arrival_min * 2} min round-trip.`, ko: `베누 도착. 명령 왕복에 ${C.opt.comm_delay_at_arrival_min * 2}분 걸림.` });
  for (const ev of mission.eventsFor('proximity')) { await wait(800); await eventDecision(ev); }
  const prox = mission.proximity();
  opsLog(prox.text, prox.ok ? 'ok' : 'bad');
  if (!prox.ok) { setPhase('proximity', 'fail'); await wait(1500); return finishMission(); }
  setPhase('proximity', 'done', `${mission.proxDays} d`);

  setPhase('tag', 'active');
  let tagRes;
  while (true) {
    speak(T('Go for TAG.', '채취 진행.'));
    await runCinematic('TOUCH-AND-GO', `Nightingale · ${T('success chance', '성공 확률')} ${Math.round(mission.tagChance() * 100)}%`, 14000, (done) => spaceScene.playTAG ? spaceScene.playTAG(done) : setTimeout(done, 3000));
    tagRes = mission.tag();
    opsLog(tagRes.text, tagRes.ok ? 'ok' : 'bad');
    tagRes.ok ? sfx.success() : sfx.error();
    if (tagRes.final) break;
    const again = await modal(`<h3>${T('Not enough sample.', '샘플이 부족해요.')}</h3><p>${L(tagRes.text)}</p><button class="choice" data-choice="retry"><b>${T('Try again', '다시 시도')}</b><span>−${D.game_config.sampling.second_attempt_prop_margin_kg} kg ${T('propellant', '추진제')}</span></button><button class="choice" data-choice="go"><b>${T('Head home empty', '빈손으로 귀환')}</b></button>`);
    if (again !== 'retry') { mission.causes.push({ kind: 'fail', text: { en: 'Chose not to retry sampling.', ko: '채취 재시도를 포기함.' } }); mission.result.ended = 'tag'; break; }
  }
  setPhase('tag', tagRes.ok ? 'done' : 'fail');
  if (!S.instruments.has('tagsam') || !S.instruments.has('src')) { await wait(1200); return finishMission(); }

  setPhase('return', 'active', isoDate(mission.departMs));
  sfx.burn();
  const dep = mission.departure();
  opsLog(dep.text, dep.ok ? 'ok' : 'bad', isoDate(mission.departMs));
  if (!dep.ok) { setPhase('return', 'fail'); await wait(1500); return finishMission(); }
  setStage('space', 'cruise');
  await animateCruise(mission.departMs, mission.returnMs, bennuPos, earthPos, mission.eventsFor('return'), true);
  setPhase('return', 'done', `${mission.returnDays} d`);

  setPhase('reentry', 'active', isoDate(mission.returnMs));
  for (const ev of mission.eventsFor('reentry')) await eventDecision(ev);
  setStage('space', 'reentry');
  sfx.whoosh();
  await runCinematic(T('CAPSULE RE-ENTRY', '캡슐 재진입'), `${isoDate(mission.returnMs)} · Utah Test and Training Range`, 9000, (done) => spaceScene.playReentry ? spaceScene.playReentry(done) : setTimeout(done, 3000));
  const re = mission.reentry();
  opsLog(re.text, re.ok ? 'ok' : 'bad', isoDate(mission.returnMs));
  setPhase('reentry', re.ok ? 'done' : 'fail');
  await wait(1000);
  finishMission();
}
function finishMission() {
  report = { score: mission.score(), timeline: mission.timeline(), cost: mission.finalCost() };
  if (mission.result.primary) { sfx.success(); speak(T('Sample recovered. Mission success.', '샘플 회수 완료. 임무 성공.')); } else { sfx.fail(); }
  visited.launch_control = true;
  go('report');
}

// ---------- 5. Report
function showReport() {
  const m = mission, rm = D.real_mission, c = C;
  if (!m) { go('briefing'); return; }
  setStage('space', 'briefing'); enableOrbit();
  const sc = report.score, tl = report.timeline;
  const win = m.result.primary;
  const done = m.result.ended === 'complete';
  const realDays = Math.round((Date.parse(rm.sample_capsule_landing.date) - Date.parse(rm.launch.date)) / 864e5);
  const rows = [
    [T('Rocket', '발사체'), c.vehicle.name, rm.launch.vehicle],
    [T('Launch', '발사'), tl.launch, rm.launch.date],
    ['C3', `${c.c3.toFixed(1)}`, `${rm.launch.c3_km2_s2.toFixed(1)}`],
    [T('Mission length', '임무 기간'), done ? `${tl.totalDays} d` : '—', `${realDays} d`],
    [T('Launch mass', '발사 질량'), `${fmt(c.wetKg)} kg`, `${fmt(rm.launch_mass_kg.value)} kg`],
    [T('Dry mass', '건조 질량'), `${fmt(c.dryKg)} kg`, `${fmt(rm.dry_mass_kg.value)} kg`],
    [T('Propellant', '추진제'), `${fmt(c.propKg)} kg`, `${fmt(rm.propellant_and_helium_kg.value)} kg`],
    [T('Instruments', '과학장비'), `${[...S.instruments].filter((x) => !['tagsam', 'src'].includes(x)).length}/5`, '5/5'],
    [T('Cost', '비용'), money(report.cost), money(rm.cost_musd.mission_excluding_launch + rm.cost_musd.launch)],
    [T('Sample', '샘플'), win ? `${m.sampleG} g` : '0 g', `${rm.sample_returned_g.value} g`],
  ];
  panel.innerHTML = `
    <div class="verdict ${win ? 'win' : 'lose'}">${win ? T('MISSION SUCCESS', '임무 성공') : T('MISSION FAILED', '임무 실패')}</div>
    <div class="scoreline"><span class="score-big">${fmt(sc.total)}</span><span class="src">${T('points', '점')}</span>${win ? `<span class="pill">${m.sampleG} g ${T('of Bennu', '베누 샘플')}</span>` : ''}</div>
    <div class="kv tight">${sc.rows.map((r) => `<span>${L(r[0])}</span><b class="${r[1] < 0 ? 'neg' : ''}">${r[1] > 0 ? '+' : ''}${fmt(r[1])}</b>`).join('')}</div>
    <h2>${T('Why', '원인')}</h2>
    <ul class="causes">${m.causes.map((x) => `<li class="${x.kind}">${L(x.text)}</li>`).join('')}</ul>
    <h2>${T('You vs OSIRIS-REx', '나 vs OSIRIS-REx')}</h2>
    <table class="cmp"><tr><th></th><th>${T('YOU', '나')}</th><th>OSIRIS-REx</th></tr>${rows.map((r) => `<tr><td>${r[0]}</td><td class="n">${r[1]}</td><td class="n">${r[2]}</td></tr>`).join('')}</table>
    <details class="src"><summary>${T('Space weather flown through (NASA DONKI)', '겪은 우주 날씨 (NASA DONKI)')}</summary><ul class="causes">${m.events.filter((e) => e.choice).map((e) => `<li class="${e.outcome?.hit ? 'fail' : 'ok'}"><a href="${e.source}" target="_blank" rel="noopener">${e.title_en}</a> ${e.time.slice(0, 10)} — ${L(e.outcome?.text)}</li>`).join('')}</ul></details>
    <details class="src"><summary>${T('Data sources', '데이터 출처')}</summary>NASA CCMC DONKI · JPL Small-Body Mission Design API · NASA Science OSIRIS-REx · NASA press kit · OLA/OVIRS/OTES/REXIS papers · eoPortal · L3Harris MR-107S · NASA DART &amp; Psyche contracts · NASA LSP. ${T('Game-defined values are listed in the README. Built with AI assistance (Claude).', '게임용 값은 README에 정리. AI(Claude) 도움으로 제작.')}</details>
    <div class="btn-row"><button class="btn" id="again">${MODE === 'menu' ? T('Redesign', '다시 설계') : T('Back to campus', '캠퍼스로')}</button><button class="btn ghost" id="restart">${T('New mission', '새 임무')}</button></div>`;
  $('#again').onclick = () => { mission = null; if (MODE === 'menu') go('build'); else returnToCampus(); };
  $('#restart').onclick = () => { mission = null; report = null; S = defaultState(D); maxReached = 0; Object.keys(visited).forEach((k) => (visited[k] = false)); syncCampusSpacecraft(); if (MODE === 'menu') go('briefing'); else returnToCampus(true); };
}

// ------------------------------------------------------------------ first-person campus
const STATION = {
  briefing: () => [T('Mission Briefing', '임무 브리핑'), T('Choose objectives', '목표 정하기')],
  flight_dynamics: () => ['FLIGHT DYNAMICS', T('Launch window & rocket', '발사창·로켓 선택')],
  assembly: () => [T('Spacecraft Assembly', '우주선 조립'), T('Build the spacecraft', '우주선 만들기')],
  launch_control: () => ['LAUNCH DIRECTOR', T('GO for launch', '발사 승인')],
  board_tsiolkovsky: () => [T('Rocket equation', '로켓 방정식'), T('Read the exhibit', '안내판 읽기')],
  board_visviva: () => [T('Vis-viva equation', '활력 방정식'), T('Read the exhibit', '안내판 읽기')],
  board_escape: () => [T('Escape velocity', '탈출 속도'), T('Read the exhibit', '안내판 읽기')],
  board_propellant: () => [T('Rocket propellants', '로켓 추진제'), T('Read the exhibit', '안내판 읽기')],
  pad: () => [T('Launch pad', '발사대'), T('Look at your rocket', '로켓 살펴보기')],
};
const ORDER = ['briefing', 'flight_dynamics', 'assembly', 'launch_control'];
function nextObjective() { return ORDER.find((id) => !visited[id]) || 'launch_control'; }
function setExploreHud(on) {
  ['#crosshair', '#objective', '#fasttravel'].forEach((s) => $(s).classList.toggle('hidden', !on));
  if (!on) $('#prompt').classList.add('hidden');
}
function updateObjectiveHud() {
  if (!campus) return;
  const next = nextObjective();
  campus.setObjective?.(MODE === 'explore' ? next : null);
  $('#objective').innerHTML = `<div class="k">${T('OBJECTIVE', '목표')}</div><div class="t">${STATION[next]()[1]}</div>
    <ul>${ORDER.map((id) => `<li class="${visited[id] ? 'done' : id === next ? 'cur' : ''}">${STATION[id]()[0]}</li>`).join('')}</ul>`;
  $('#fasttravel').innerHTML = [...ORDER, 'board_tsiolkovsky', 'pad'].map((id, i) => `<button data-ft="${id}"><b>${i + 1}</b>${STATION[id]()[0]}</button>`).join('');
  $('#fasttravel').querySelectorAll('[data-ft]').forEach((b) => b.onclick = () => fastTravel(b.dataset.ft));
}
function fastTravel(id) {
  const it = campus?.interactables?.find((x) => x.id === id); if (!it || !fp) return;
  const spawn = campus.spawn.position;
  const dir = new THREE.Vector3().subVectors(spawn, it.position).setY(0).normalize();
  const pos = it.position.clone().addScaledVector(dir, Math.min(2.2, (it.radius || 3) * 0.6));
  if (fp.blocked(pos.x, pos.z)) pos.copy(it.position).addScaledVector(dir, (it.radius || 3) * 0.85);
  fp.teleport(pos); fp.lookAt(it.position);
  sfx.whoosh();
}
function syncCampusSpacecraft() {
  if (!campus?.spacecraftAnchor) return;
  const a = campus.spacecraftAnchor;
  if (!a.userData.sc) { a.userData.sc = createSpacecraft(scCfg()); a.add(a.userData.sc); }
  else updateSpacecraft(a.userData.sc, scCfg());
}
function drawWall() {
  if (!campus?.screenCanvas || !C) return;
  const cv = campus.screenCanvas, g = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  g.fillStyle = '#030b14'; g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(57,197,187,.25)'; g.lineWidth = 1;
  for (let x = 0; x < W; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  g.fillStyle = '#39c5bb'; g.font = 'bold 30px Orbitron, sans-serif'; g.fillText('COSMO CRAFT · DESIGN YOUR OWN ASTEROID MISSION', 30, 52);
  g.font = '22px JetBrains Mono, monospace'; g.fillStyle = '#e6eef5';
  const o = C.opt;
  const lines = [
    [T('WINDOW', '발사창'), o ? `${o.launch_date} → ${o.arrival_date}` : '—', o?.brakable_like_osiris_rex ? '#7ff3e9' : '#ff6b7a'],
    [T('ROCKET', '발사체'), `${C.vehicle.name}  ${fmt(C.wetKg)} / ${fmt(C.capacityKg)} kg`, C.wetKg > C.capacityKg ? '#ff6b7a' : '#7ff3e9'],
    [T('BUDGET', '예산'), `${money(C.costMusd)} / ${money(C.budget)}`, C.costMusd > C.budget ? '#ff6b7a' : '#7ff3e9'],
    ['ΔV', `${C.dvAvailable.toFixed(2)} / ${C.dvRequired.toFixed(2)} km/s`, C.dvAvailable < C.dvRequired ? '#ff6b7a' : '#7ff3e9'],
    [T('POWER', '전력'), `${fmt(C.loadW)} / ${fmt(C.pAph)} W`, C.powerOk ? '#7ff3e9' : '#ffb547'],
  ];
  lines.forEach(([k, v, col], i) => { g.fillStyle = '#5d7083'; g.fillText(k, 30, 120 + i * 52); g.fillStyle = col; g.fillText(v, 240, 120 + i * 52); });
  const status = C.blockers.length ? T('NO-GO', '발사 불가') : T('GO FOR LAUNCH', '발사 가능');
  g.font = 'bold 44px Orbitron, sans-serif'; g.fillStyle = C.blockers.length ? '#ff4d5e' : '#4ade80';
  g.fillText(status, 30, H - 40);
  if (campus.screenTexture) campus.screenTexture.needsUpdate = true;
}
function drawTablet() {
  if (!rig?.tabletCanvas || !C) return;
  const cv = rig.tabletCanvas, g = cv.getContext('2d'); const W = cv.width, H = cv.height;
  g.fillStyle = '#04101a'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#39c5bb'; g.font = 'bold 40px Orbitron, sans-serif'; g.fillText(T('MISSION TABLET', '임무 태블릿'), 40, 70);
  g.font = '30px JetBrains Mono, monospace';
  ORDER.forEach((id, i) => { g.fillStyle = visited[id] ? '#4ade80' : id === nextObjective() ? '#ffffff' : '#5d7083'; g.fillText(`${visited[id] ? '✓' : id === nextObjective() ? '▶' : '·'} ${STATION[id]()[0]}`, 40, 150 + i * 56); });
  g.fillStyle = '#8fa3b5'; g.font = '26px JetBrains Mono, monospace';
  g.fillText(`${T('Mass', '중량')} ${fmt(C.wetKg)}/${fmt(C.capacityKg)} kg`, 40, 420);
  g.fillText(`${T('Budget', '예산')} ${money(C.costMusd)}/${money(C.budget)}`, 40, 466);
  g.fillText(`Δv ${C.dvAvailable.toFixed(2)}/${C.dvRequired.toFixed(2)} km/s`, 40, 512);
  g.fillStyle = C.blockers.length ? '#ff4d5e' : '#4ade80'; g.font = 'bold 34px Orbitron, sans-serif';
  g.fillText(C.blockers.length ? 'NO-GO' : 'GO', 40, 590);
  void W; void H;
  rig.tabletNeedsUpdate?.();
}

function enterExplore(lock = true) {
  MODE = 'explore'; screen = null;
  document.body.classList.add('explore');
  setStage('campus');
  setExploreHud(true);
  refreshChrome(); drawTablet();
  if (lock) fp?.lock();
}
function returnToCampus(reset) {
  if (!campus) { MODE = 'menu'; go('briefing'); return; }
  if (reset) fp.teleport(campus.spawn.position, campus.spawn.yaw);
  campus.setVehicle?.(S.vehicleId);
  syncCampusSpacecraft();
  enterExplore(true);
}
function openStation(id) {
  if (!id) return;
  sfx.open();
  if (id.startsWith('board_') || id === 'pad') { showBoard(id); return; }
  if (id === 'launch_control') { launchControl(); return; }
  fp?.unlock();
  MODE = 'terminal';
  setExploreHud(false);
  go({ briefing: 'briefing', flight_dynamics: 'launch', assembly: 'build' }[id]);
}
async function launchControl() {
  recompute();
  const missing = ORDER.slice(0, 3).filter((id) => !visited[id]);
  if (missing.length || C.blockers.length) {
    await modal(`<div class="alarm-k">LAUNCH DIRECTOR</div><h3>${T('NO-GO', '발사 불가')}</h3>
      <ul class="causes">${missing.map((id) => `<li class="fail">${T('Visit', '먼저 방문:')} ${STATION[id]()[0]}</li>`).join('')}${C.blockers.map((b) => `<li class="fail">${b}</li>`).join('')}</ul>
      <button class="choice" data-choice="ok"><b>${T('Understood', '확인')}</b></button>`, { alarm: true });
    fp?.lock(); return;
  }
  const ch = await modal(`<div class="alarm-k" style="color:var(--green)">LAUNCH DIRECTOR</div><h3>${T('All stations GO.', '모든 부서 GO.')}</h3>
    <div class="stats"><div><b>${C.vehicle.name}</b><span>${C.opt.launch_date}</span></div><div><b>${fmt(C.wetKg)} kg</b><span>${T('launch mass', '발사 질량')}</span></div><div><b>${money(C.costMusd)}</b><span>${T('cost', '비용')}</span></div></div>
    <button class="choice" data-choice="go"><b>🚀 ${T('GO for launch', '발사 승인')}</b><span>${T('Start mission operations', '임무 운영 시작')}</span></button>
    <button class="choice" data-choice="no"><b>${T('Hold', '대기')}</b></button>`);
  if (ch !== 'go') { fp?.lock(); return; }
  MODE = 'terminal';
  setExploreHud(false);
  speak(T('Launch director: we are go for launch.', '발사 책임자: 발사를 승인합니다.'));
  go('ops');
}
function showBoard(id) {
  recompute();
  const c = C, k = D.game_config.constants;
  const u = (c.prop.isp_s * 9.80665) / 1000;
  const B = {
    board_tsiolkovsky: [T('Tsiolkovsky rocket equation', '치올콥스키 로켓 방정식'), 'v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub> / m<sub>f</sub>)',
      T('A rocket speeds up by throwing mass backwards. The faster the exhaust (u) and the bigger the mass ratio, the more Δv.', '로켓은 질량을 뒤로 던져서 가속해요. 배기 속도(u)가 빠르고 질량비가 클수록 Δv가 커져요.'),
      `${T('Your spacecraft', '내 우주선')}: u = ${c.prop.isp_s}×9.80665 = ${u.toFixed(2)} km/s, ln(${fmt(c.wetKg)}/${fmt(c.dryKg)}) → <b>Δv = ${c.dvAvailable.toFixed(2)} km/s</b>`],
    board_visviva: [T('Vis-viva equation', '활력 방정식'), 'v² = μ (2/r − 1/a)',
      T('Speed anywhere on an orbit, from energy conservation. Closer to the planet (small r) means faster.', '에너지 보존으로 궤도 위 어느 지점의 속도든 구해요. 천체에 가까울수록(r이 작을수록) 빨라요.'),
      `${T('Parking orbit', '주차 궤도')} r = ${fmt(c.rPark)} km → v = ${c.vCircPark.toFixed(2)} km/s · ${T('to reach C3', 'C3')} ${c.c3.toFixed(1)}: <b>${c.vDepart.toFixed(2)} km/s</b>`],
    board_escape: [T('Escape velocity', '탈출 속도'), 'v<sub>e</sub> = √(2GM / r) = √(2μ / r)',
      T('The minimum speed to coast away from a body forever: vis-viva with a → ∞.', '천체 중력을 완전히 벗어나는 최소 속도. 활력 방정식에서 a → ∞일 때예요.'),
      `${T('Earth surface', '지구 표면')}: <b>${c.vEscSurface.toFixed(2)} km/s</b> · ${k.parking_orbit_alt_km.value} km: ${c.vEscPark.toFixed(2)} km/s · v∞ = √C3 = ${Math.sqrt(c.c3).toFixed(2)} km/s`],
    board_propellant: [T('Rocket propellants', '로켓 추진제'), T('fuel + oxidizer → hot gas → thrust', '연료 + 산화제 → 고온 가스 → 추력'),
      T('In space there is no air, so rockets carry their own oxidizer. Gas thrown back pushes the rocket forward (Newton’s 3rd law).', '우주에는 공기가 없어서 로켓은 산화제를 직접 싣고 가요. 뒤로 뿜는 가스의 반작용으로 앞으로 나아가요(뉴턴 제3법칙).'),
      `<span class="pc liquid">${T('liquid', '액체')}</span> ${T('kerosene / LH2 + LOX — throttle & restart (Nuri, Atlas V core)', '케로신·액체수소 + 액체산소 — 추력 조절·재점화 가능 (누리호, Atlas V 1단)')}<br><span class="pc solid">${T('solid', '고체')}</span> ${T('Al powder + ammonium perchlorate — simple, cannot stop (Atlas V booster)', '알루미늄 분말 + 과염소산암모늄 — 단순, 멈출 수 없음 (Atlas V 부스터)')}<br><span class="pc hybrid">${T('hybrid', '하이브리드')}</span> ${T('solid fuel + liquid oxidizer', '고체 연료 + 액체 산화제')}`],
    pad: [`${c.vehicle.name}`, D.game_config.launch_vehicle_model.vehicles[S.vehicleId].site,
      T('Your rocket on the pad. Capacity drops as launch energy C3 rises.', '발사대 위의 내 로켓. 발사 에너지 C3가 클수록 실을 수 있는 질량이 줄어요.'),
      `C3 ${c.c3.toFixed(1)} km²/s² → ${T('capacity', '탑재 능력')} <b>${fmt(c.capacityKg)} kg</b> · ${T('your mass', '내 질량')} ${fmt(c.wetKg)} kg`],
  }[id];
  modal(`<div class="alarm-k" style="color:var(--miku)">${T('EXHIBIT', '전시')}</div><h3>${B[0]}</h3><div class="bigeq">${B[1]}</div><p>${B[2]}</p><div class="live">${B[3]}</div><button class="choice" data-choice="ok"><b>${T('Close', '닫기')}</b></button>`).then(() => { fp?.lock(); });
}

function setupCampus(CampusScene) {
  campus = new CampusScene({ vehicleId: S.vehicleId });
  campus.setRenderer?.(renderer);
  campus.camera.near = 0.05; campus.camera.updateProjectionMatrix();
  campus.scene.add(campus.camera);
  fp = new FPController(campus.camera, canvas, { colliders: campus.colliders, bounds: campus.bounds, interactables: campus.interactables });
  fp.teleport(campus.spawn.position, campus.spawn.yaw);
  fp.onFocus = (it) => {
    campus.highlight?.(it ? it.id : null);
    const pr = $('#prompt');
    if (it && MODE === 'explore') { const [n, a] = (STATION[it.id] || (() => [it.label, it.prompt || '']))(); pr.innerHTML = `<b><kbd>E</kbd>${n}</b><span>${a}</span>`; pr.classList.remove('hidden'); $('#crosshair').classList.add('focus'); sfx.focus(); }
    else { pr.classList.add('hidden'); $('#crosshair').classList.remove('focus'); }
  };
  fp.onStep = (s) => { const p = campus.camera.position; sfx.step(campus.footstepSurface ? campus.footstepSurface(p.x, p.z) : 'concrete', s.sprint); };
  fp.onLand = (k) => sfx.land(k);
  fp.onJump = () => sfx.jump();
  fp.onUnlock = () => { if (MODE === 'explore' && $('#modal').classList.contains('hidden')) showStart(true); };
  fp.onLock = () => { $('#start').classList.add('hidden'); };
  syncCampusSpacecraft();
}
function showStart(paused) {
  const st = $('#start'); st.classList.remove('hidden');
  $('#start-btn').textContent = paused ? T('Resume', '계속하기') : T('Enter the launch campus', '발사 캠퍼스 입장');
  $('#menu-btn').textContent = T('Play without walking (menu mode)', '걷지 않고 플레이 (메뉴 모드)');
  st.querySelector('.start-sub').textContent = T('Space Launch Complex · Cape Canaveral · dusk', '우주 발사 단지 · 케이프커내버럴 · 해 질 녘');
  st.querySelector('p').innerHTML = T('You are the lead designer of an asteroid sample-return mission to <b>101955 Bennu</b>. Walk the campus, use the consoles, build the spacecraft, launch.', '당신은 소행성 <b>101955 베누</b> 샘플 귀환 임무의 수석 설계자예요. 캠퍼스를 걸어다니며 콘솔을 쓰고, 우주선을 만들고, 발사하세요.');
  st.querySelector('.keys').innerHTML = `<span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${T('move', '이동')}</span><span><kbd>Shift</kbd> ${T('sprint', '달리기')}</span><span><kbd>C</kbd> ${T('crouch', '앉기')}</span><span><kbd>Space</kbd> ${T('jump', '점프')}</span><span><kbd>E</kbd> ${T('use', '사용')}</span><span><kbd>Tab</kbd> ${T('tablet', '태블릿')}</span><span><kbd>1</kbd>–<kbd>6</kbd> ${T('fast travel', '빠른 이동')}</span>`;
}
$('#start-btn').onclick = () => { sfx.click(); $('#start').classList.add('hidden'); if (MODE !== 'explore') enterExplore(true); else fp.lock(); };
$('#menu-btn').onclick = () => { sfx.click(); $('#start').classList.add('hidden'); MODE = 'menu'; go('briefing'); };

addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && MODE === 'terminal' && screen !== 'ops' && $('#modal').classList.contains('hidden')) { returnToCampus(); return; }
  if (MODE !== 'explore' || !fp?.locked) return;
  if (e.code === 'KeyE' && fp.focus) { openStation(fp.focus.id); }
  if (e.code === 'Tab') { e.preventDefault(); if (rig) { rig.raise(!rig.isRaised()); drawTablet(); } }
  const n = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4, Digit6: 5 }[e.code];
  if (n !== undefined) fastTravel([...ORDER, 'board_tsiolkovsky', 'pad'][n]);
});

// ------------------------------------------------------------------ top-bar buttons & boot
$('#btn-help').onclick = () => { sfx.click(); modal(`<h3>${T('How to play', '플레이 방법')}</h3><ol class="howto">
  <li>${T('<b>Briefing</b> (holo table): pick science goals.', '<b>브리핑</b>(홀로 테이블): 과학 목표 고르기.')}</li>
  <li>${T('<b>Flight Dynamics</b>: real JPL launch window + rocket.', '<b>FLIGHT DYNAMICS</b>: 실제 JPL 발사창 + 로켓.')}</li>
  <li>${T('<b>Clean room</b>: build the spacecraft, keep gauges in range.', '<b>클린룸</b>: 우주선 조립, 게이지를 범위 안으로.')}</li>
  <li>${T('<b>Launch Director</b>: GO — then survive real NASA DONKI solar storms.', '<b>LAUNCH DIRECTOR</b>: 발사 후 실제 NASA DONKI 태양 폭풍 대응.')}</li>
  <li>${T('<b>Report</b>: why it worked or failed, vs the real OSIRIS-REx.', '<b>리포트</b>: 성공·실패 원인과 실제 OSIRIS-REx 비교.')}</li></ol>
  <button class="choice" data-choice="ok"><b>OK</b></button>`).then(() => { if (MODE === 'explore') fp?.lock(); }); };
$('#btn-sound').onclick = () => { setSound(!soundOn()); $('#btn-sound').textContent = soundOn() ? '🔊' : '🔇'; };
$('#btn-lang').onclick = () => { setLang(getLang() === 'ko' ? 'en' : 'ko'); sfx.click(); };
$('#btn-q').onclick = () => { QUALITY = QUALITY === 'high' ? 'low' : 'high'; try { localStorage.setItem('mmb-q', QUALITY); } catch (e) { /* ignore */ } applyQuality(); renderTopbar(); toast(QUALITY === 'high' ? T('High quality graphics', '고품질 그래픽') : T('Performance mode', '성능 모드')); };
$('.logo').onclick = () => { if (MODE === 'menu' && screen !== 'ops') go('briefing'); };
onLang(() => {
  if (screen === 'ops' && opsState) renderOpsPanel(); else if (screen && MODE !== 'explore') rerenderScreen();
  refreshChrome(); drawTablet();
  if (!$('#start').classList.contains('hidden')) showStart(MODE === 'explore');
});

async function boot() {
  D = await loadData();
  S = defaultState(D);
  recompute();
  spaceScene = new SpaceScene({ renderer });
  launchScene = new LaunchScene({ vehicleId: S.vehicleId, renderer });
  const loader = campusMods['./scenes/CampusScene.js'];
  const touch = matchMedia('(pointer: coarse)').matches;
  const forceMenu = params.get('mode') === 'menu' || params.get('screen') || touch;
  if (loader && !forceMenu) {
    try {
      const mod = await loader();
      setupCampus(mod.CampusScene);
      const rl = rigMods['./models/fpRig.js'];
      if (rl) {
        try { const rm = await rl(); rig = rm.createFPRig(); campus.camera.add(rig.group); rig.tabletCanvas = document.createElement('canvas'); rig.tabletCanvas.width = 1024; rig.tabletCanvas.height = 640; rig.setTablet?.(rig.tabletCanvas); } catch (e) { console.warn('fp rig failed', e); rig = null; }
      }
    } catch (e) { console.error('campus failed', e); campus = null; }
  }
  frame();
  if (campus) {
    MODE = 'explore';
    setStage('campus');
    document.body.classList.add('explore');
    refreshChrome(); drawTablet();
    showStart(false);
  } else {
    MODE = 'menu';
    const start = params.get('screen');
    if (start === 'build' || start === 'launch') maxReached = 2;
    if (start === 'ops') { maxReached = 3; Object.assign(S, realState(D), { optionKey: S.optionKey, secondary: new Set(SECONDARY) }); go('ops'); }
    else go(SCREENS.includes(start) && start !== 'report' ? start : 'briefing');
  }
  setTimeout(() => $('#loading').classList.add('done'), 300);
}
window.__mmb = { openStation: (id) => openStation(id), fastTravel: (id) => fastTravel(id), enter: () => enterExplore(false), state: () => ({ MODE, screen, visited, C }) };
boot().catch((e) => { console.error(e); $('.load-sub').textContent = 'Error: ' + e.message; });
