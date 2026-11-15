// COSMO CRAFT achievements + mission rank. Game-defined rules (listed in README). (AI-assisted: Claude.)
const KEY = 'cc-badges';

export const BADGES = [
  { id: 'flawless', icon: '🛡', name: { en: 'Flawless', ko: '무결점 비행' }, desc: { en: 'No space-weather damage', ko: '우주 날씨 피해 없음' } },
  { id: 'frugal', icon: '💰', name: { en: 'Frugal', ko: '알뜰 설계' }, desc: { en: '≥10% of the budget left', ko: '예산 10% 이상 남김' } },
  { id: 'hauler', icon: '⚖', name: { en: 'Heavy Hauler', ko: '대량 채취' }, desc: { en: 'Returned ≥150 g', ko: '샘플 150 g 이상 귀환' } },
  { id: 'science', icon: '🔭', name: { en: 'Full Science', ko: '완전 관측' }, desc: { en: 'All 4 secondary goals', ko: '부 목표 4개 모두 달성' } },
  { id: 'firsttag', icon: '🎯', name: { en: 'First-Try TAG', ko: '한 번에 채취' }, desc: { en: 'Sample on the first touch', ko: '첫 번째 접촉에서 채취 성공' } },
  { id: 'brave', icon: '🔥', name: { en: 'Braveheart', ko: '강심장' }, desc: { en: 'Kept operating through every alert, no damage', ko: '모든 경보에서 운영 유지, 피해 없음' } },
  { id: 'hybrid', icon: '🧪', name: { en: 'Hybrid Hero', ko: '하이브리드 영웅' }, desc: { en: 'Success with a hybrid motor', ko: '하이브리드 모터로 성공' } },
  { id: 'lean', icon: '🪶', name: { en: 'Lean Machine', ko: '경량 탐사선' }, desc: { en: 'Success with ≤3 science instruments', ko: '과학 장비 3개 이하로 성공' } },
  { id: 'falcon', icon: '🦅', name: { en: 'Falcon Flyer', ko: '팰컨 비행사' }, desc: { en: 'Success on a Falcon rocket', ko: '팰컨 로켓으로 성공' } },
  { id: 'twin', icon: '🪞', name: { en: 'OSIRIS Twin', ko: 'OSIRIS 쌍둥이' }, desc: { en: 'Real OSIRIS-REx suite + Atlas V, success', ko: '실제 OSIRIS-REx 장비 + Atlas V로 성공' } },
];

const SCIENCE = ['ocams', 'ola', 'ovirs', 'otes', 'rexis'];
const ALL_INST = [...SCIENCE, 'tagsam', 'src'];

export function evaluate(mission, state, computed) {
  const m = mission;
  const s = state || m.s;
  const c = computed || m.c;
  const win = !!m.result.primary;
  const flown = (m.events || []).filter((e) => e.choice);
  const hits = flown.filter((e) => e.outcome && e.outcome.hit).length;
  const budget = c.budget;
  const cost = typeof m.finalCost === 'function' ? m.finalCost() : c.costMusd;
  const left = budget - cost;
  const sec = ['global', 'chem_map', 'yarkovsky', 'site'];
  const secAll = sec.every((id) => m.result.secondary?.[id]);
  const inst = s.instruments instanceof Set ? s.instruments : new Set(s.instruments || []);
  const sciCount = SCIENCE.filter((x) => inst.has(x)).length;
  const earned = new Set();
  if (hits === 0 && m.result.ended && m.result.ended !== 'arrival') earned.add('flawless');
  if (win && left >= 0.1 * budget) earned.add('frugal');
  if (win && m.sampleG >= 150) earned.add('hauler');
  if (secAll) earned.add('science');
  if (win && m.tagAttempts === 1) earned.add('firsttag');
  if (flown.length > 0 && flown.every((e) => e.choice === 'run') && hits === 0) earned.add('brave');
  if (win && c.prop?.class === 'hybrid') earned.add('hybrid');
  if (win && sciCount <= 3) earned.add('lean');
  if (win && String(s.vehicleId).startsWith('falcon')) earned.add('falcon');
  if (win && s.vehicleId === 'atlas_v_411' && ALL_INST.every((x) => inst.has(x))) earned.add('twin');

  // Rank: primary success is the floor for A/S; secondaries, damage, budget and badges move it.
  let pts = 0;
  if (win) pts += 50;
  const chosen = [...(s.secondary || [])];
  pts += chosen.filter((id) => m.result.secondary?.[id]).length * 8;
  pts -= chosen.filter((id) => !m.result.secondary?.[id]).length * 6;
  pts -= hits * 6;
  pts += left > 0 ? Math.min(10, (left / budget) * 60) : Math.max(-10, (left / budget) * 60);
  pts += earned.size * 3;
  if (win && m.sampleG >= 120) pts += 5;
  const rank = !win ? (m.result.ended === 'complete' || m.result.ended === 'tag' ? 'C' : 'D')
    : pts >= 95 ? 'S' : pts >= 75 ? 'A' : 'B';

  const badges = BADGES.map((b) => ({ ...b, earned: earned.has(b.id) }));
  // persist
  try {
    const prev = new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
    const fresh = [...earned].filter((id) => !prev.has(id));
    earned.forEach((id) => prev.add(id));
    localStorage.setItem(KEY, JSON.stringify([...prev]));
    badges.forEach((b) => { b.fresh = fresh.includes(b.id); });
  } catch (e) { /* storage blocked */ }
  return { rank, points: Math.round(pts), badges };
}

export function allEarned() {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) { return new Set(); }
}

export function renderBadges(result, lang = 'en') {
  const l = (o) => o[lang] ?? o.en;
  const ever = allEarned();
  const count = result.badges.filter((b) => b.earned).length;
  return `<div class="ach">
    <div class="ach-top"><div class="ach-head">${lang === 'ko' ? '업적' : 'Achievements'} <em>${count}/${result.badges.length}</em></div>
    <div class="ach-rank r-${result.rank}"><b>${result.rank}</b><span>${lang === 'ko' ? '임무 등급' : 'MISSION RANK'}</span></div></div>
    <div class="ach-grid">${result.badges.map((b) => `
      <div class="ach-b ${b.earned ? 'on' : ever.has(b.id) ? 'past' : ''} ${b.fresh ? 'new' : ''}" title="${l(b.desc)}">
        <i>${b.icon}</i><div><b>${l(b.name)}${b.fresh ? ` <u>${lang === 'ko' ? 'NEW' : 'NEW'}</u>` : ''}</b><small>${l(b.desc)}</small></div>
      </div>`).join('')}</div>
  </div>`;
}
