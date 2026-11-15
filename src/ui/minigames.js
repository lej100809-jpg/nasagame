// COSMO CRAFT minigames: Touch-And-Go timing, NASA-style GO/NO-GO launch poll, alert countdown ring.
// Each creates its own overlay (z-index 45), cleans up, and resolves a Promise. (AI-assisted: Claude.)
import { T } from './i18n.js';
import { sfx } from './audio.js';

function overlay(cls) {
  const el = document.createElement('div');
  el.className = `mg-overlay ${cls}`;
  document.body.appendChild(el);
  return el;
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const pct = (x) => `${Math.round(x * 100)}%`;

/**
 * Touch-And-Go descent timing. Press Space/Enter/click when the marker is inside the green contact window.
 * @returns Promise<{ bonus, grade }>
 */
export function tagMinigame({ chance = 0.7 } = {}) {
  return new Promise((resolve) => {
    const el = overlay('mg-tag');
    el.innerHTML = `
      <div class="mg-card">
        <div class="mg-k">TOUCH-AND-GO · NIGHTINGALE</div>
        <div class="mg-title">${T('Time the contact', '접촉 타이밍을 맞추세요')}</div>
        <div class="mg-tagbody">
          <div class="mg-alt">
            <div class="mg-zone good"></div><div class="mg-zone perfect"></div>
            <div class="mg-ground"></div>
            <div class="mg-craft"><i></i></div>
          </div>
          <div class="mg-readout">
            <div><span>${T('altitude', '고도')}</span><b class="mg-h">40.0 m</b></div>
            <div><span>${T('descent', '하강 속도')}</span><b class="mg-v">0.00 m/s</b></div>
            <div><span>${T('base chance', '기본 확률')}</span><b>${pct(chance)}</b></div>
            <div><span>${T('with timing', '타이밍 반영')}</span><b class="mg-mod">—</b></div>
          </div>
        </div>
        <div class="mg-count">3</div>
        <div class="mg-hint"><kbd>Space</kbd> / ${T('click', '클릭')} — ${T('fire contact in the green window', '초록 구간에서 접촉')}</div>
      </div>`;
    const alt = el.querySelector('.mg-alt');
    const craft = el.querySelector('.mg-craft');
    const hEl = el.querySelector('.mg-h'), vEl = el.querySelector('.mg-v'), modEl = el.querySelector('.mg-mod');
    const countEl = el.querySelector('.mg-count');
    // geometry in "fraction of bar from top": 0 = 40 m, 1 = ground
    const PERFECT = [0.86, 0.91], GOOD = [0.80, 0.95];
    const setZone = (z, r) => { z.style.top = `${r[0] * 100}%`; z.style.height = `${(r[1] - r[0]) * 100}%`; };
    setZone(el.querySelector('.mg-zone.good'), GOOD);
    setZone(el.querySelector('.mg-zone.perfect'), PERFECT);

    let y = 0, live = false, done = false, raf = 0, t0 = 0, last = 0;
    const seed = Math.random() * 10;
    const finish = (grade) => {
      if (done) return; done = true; live = false;
      cancelAnimationFrame(raf);
      const bonus = grade === 'PERFECT' ? 0.15 : grade === 'GOOD' ? 0.06 : -0.15;
      const mod = Math.max(0.05, Math.min(0.97, chance + bonus));
      modEl.textContent = pct(mod);
      modEl.className = `mg-mod ${bonus > 0 ? 'pos' : 'neg'}`;
      countEl.textContent = grade === 'MISS' ? T('MISS', '실패') : grade;
      countEl.className = `mg-count show ${grade.toLowerCase()}`;
      grade === 'MISS' ? sfx.error() : sfx.success();
      cleanup();
      setTimeout(() => { el.remove(); resolve({ bonus, grade }); }, 1100);
    };
    const press = (e) => {
      if (e && e.type === 'keydown' && !['Space', 'Enter'].includes(e.code)) return;
      if (e) e.preventDefault?.();
      if (!live) return;
      if (y >= PERFECT[0] && y <= PERFECT[1]) finish('PERFECT');
      else if (y >= GOOD[0] && y <= GOOD[1]) finish('GOOD');
      else finish('MISS');
    };
    const cleanup = () => { window.removeEventListener('keydown', press, true); el.removeEventListener('pointerdown', press); };
    window.addEventListener('keydown', press, true);
    el.addEventListener('pointerdown', press);

    const tick = (now) => {
      if (!live) return;
      const t = (now - t0) / 1000;
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      // speed varies (fraction of bar per second): fast start, slows near the window, gusts; ~4-5 s total
      const base = 0.24 + 0.08 * Math.sin(t * 2.3 + seed) + 0.06 * Math.sin(t * 5.1 + seed * 2);
      const slow = y > 0.7 ? 0.5 : 1;
      const rate = Math.max(0.08, base) * slow;
      y += rate * dt;
      const hM = Math.max(0, (1 - y) * 40);
      const vMs = rate * 0.8; // display scaled so the window reads ≈0.1 m/s like OSIRIS-REx's 10 cm/s contact
      craft.style.top = `${Math.min(1, y) * 100}%`;
      hEl.textContent = `${hM.toFixed(1)} m`;
      vEl.textContent = `${vMs.toFixed(2)} m/s`;
      alt.classList.toggle('inzone', y >= GOOD[0] && y <= GOOD[1]);
      if (y >= 1) { finish('MISS'); return; }
      raf = requestAnimationFrame(tick);
    };
    (async () => {
      for (const n of ['3', '2', '1']) { countEl.textContent = n; countEl.className = 'mg-count show'; sfx.beep(); await wait(600); }
      countEl.textContent = T('DESCEND', '하강'); sfx.burn?.();
      await wait(350);
      countEl.className = 'mg-count';
      live = true; t0 = last = performance.now(); raf = requestAnimationFrame(tick);
    })();
  });
}

/**
 * NASA-style GO/NO-GO launch poll.
 * items: array of names or { name, go = true, reason }.
 * @returns Promise<{ go: boolean }>
 */
export function goNoGoPoll({ items = ['Flight Dynamics', 'Propulsion', 'Power', 'Comms', 'Range', 'Weather', 'Spacecraft'] } = {}) {
  const list = items.map((i) => (typeof i === 'string' ? { name: i, go: true } : { go: true, ...i }));
  return new Promise((resolve) => {
    const el = overlay('mg-poll');
    el.innerHTML = `
      <div class="mg-card">
        <div class="mg-k">LAUNCH DIRECTOR · ${T('GO / NO-GO POLL', '발사 승인 점검')}</div>
        <div class="mg-title">${T('Stations, report status for launch.', '각 부서, 발사 상태 보고 바람.')}</div>
        <ul class="mg-list">${list.map((it) => `<li><span>${it.name}</span><b>…</b>${it.reason ? `<small>${it.reason}</small>` : ''}</li>`).join('')}</ul>
        <button class="btn block mg-launch" disabled>${T('Polling…', '점검 중…')}</button>
      </div>`;
    const lis = [...el.querySelectorAll('.mg-list li')];
    const btn = el.querySelector('.mg-launch');
    let ready = false, scrub = false, finished = false;
    const end = () => {
      if (!ready || finished) return; finished = true;
      sfx.click();
      window.removeEventListener('keydown', key, true);
      el.classList.add('out');
      setTimeout(() => { el.remove(); resolve({ go: !scrub }); }, 250);
    };
    const key = (e) => { if (['Space', 'Enter'].includes(e.code)) { e.preventDefault(); end(); } };
    window.addEventListener('keydown', key, true);
    btn.addEventListener('click', end);
    (async () => {
      await wait(400);
      for (let i = 0; i < list.length; i++) {
        const it = list[i], li = lis[i];
        li.classList.add(it.go ? 'go' : 'nogo');
        li.querySelector('b').textContent = it.go ? 'GO' : 'NO-GO';
        it.go ? sfx.beep() : sfx.error();
        if (!it.go) scrub = true;
        await wait(350);
      }
      ready = true;
      btn.disabled = false;
      btn.textContent = scrub ? T('SCRUB', '발사 취소') : `🚀 ${T('LAUNCH', '발사')}`;
      btn.classList.toggle('danger', scrub);
      btn.classList.add('pulse');
      if (!scrub) sfx.select();
    })();
  });
}

/**
 * Countdown ring for alert modals. Returns { el, stop }. Calls onTimeout at 0.
 */
export function alertTimer(seconds = 10, onTimeout = () => {}) {
  const el = document.createElement('div');
  el.className = 'mg-timer';
  const R = 18, C = 2 * Math.PI * R;
  el.innerHTML = `<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="${R}" class="bg"/><circle cx="22" cy="22" r="${R}" class="fg" stroke-dasharray="${C}" stroke-dashoffset="0"/></svg><b>${seconds}</b><span>${T('decide', '결정')}</span>`;
  const fg = el.querySelector('.fg'), num = el.querySelector('b');
  const t0 = performance.now();
  let raf = 0, stopped = false, lastSec = seconds;
  const tick = (now) => {
    if (stopped) return;
    const left = Math.max(0, seconds - (now - t0) / 1000);
    fg.setAttribute('stroke-dashoffset', String(C * (1 - left / seconds)));
    const s = Math.ceil(left);
    if (s !== lastSec) { lastSec = s; num.textContent = s; if (s <= 3 && s > 0) sfx.beep(); }
    el.classList.toggle('urgent', left <= 3);
    if (left <= 0) { stopped = true; onTimeout(); return; }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return { el, stop() { stopped = true; cancelAnimationFrame(raf); } };
}
