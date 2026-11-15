// Two languages: English (default for international judges) and Korean.
let lang = (() => {
  try { const s = localStorage.getItem('mmb-lang'); if (s) return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en';
})();
const listeners = new Set();
export const getLang = () => lang;
export function setLang(l) {
  lang = l;
  try { localStorage.setItem('mmb-lang', l); } catch (e) { /* ignore */ }
  document.documentElement.lang = l;
  listeners.forEach((f) => f(l));
}
export const onLang = (f) => listeners.add(f);
/** Inline bilingual string: T('Launch', '발사') */
export const T = (en, ko) => (lang === 'ko' && ko != null ? ko : en);
/** Resolve a {en, ko} object or pass a plain string through. */
export const L = (v) => (v && typeof v === 'object' && 'en' in v ? (v[lang] ?? v.en) : v);
document.documentElement.lang = lang;

export const INST = {
  ocams: ['OCAMS', 'Camera suite', '카메라 3종'],
  ola: ['OLA', 'Laser altimeter', '레이저 고도계'],
  ovirs: ['OVIRS', 'Visible/IR spectrometer', '가시광·적외선 분광계'],
  otes: ['OTES', 'Thermal spectrometer', '열 방출 분광계'],
  rexis: ['REXIS', 'X-ray spectrometer', 'X선 분광계'],
  tagsam: ['TAGSAM', 'Sampling arm', '샘플 채취 팔'],
  src: ['SRC', 'Sample return capsule', '샘플 귀환 캡슐'],
};
export const OBJ = {
  sample: ['Return ≥ 60 g of Bennu', '베누 샘플 60 g 이상 귀환'],
  global: ['Global map of Bennu', '베누 전역 지도'],
  chem_map: ['Chemistry & minerals', '화학·광물 지도'],
  yarkovsky: ['Yarkovsky effect', '야르콥스키 효과 측정'],
  site: ['Sample-site survey', '채취 지점 정밀 조사'],
};
export const instName = (id) => INST[id] ? `${INST[id][0]}` : id;
export const instDesc = (id) => INST[id] ? T(INST[id][1], INST[id][2]) : '';
export const objName = (id) => OBJ[id] ? T(OBJ[id][0], OBJ[id][1]) : id;
