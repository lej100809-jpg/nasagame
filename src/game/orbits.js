// Simple heliocentric positions (AU) for telemetry numbers. Earth: circular 1 AU.
// Bennu: Keplerian elements (real_mission.json semi-major axis; e, i, node, peri, M from JPL SBDB).
const DEG = Math.PI / 180;
const J2000 = Date.UTC(2000, 0, 1, 12);
const DAY = 86400000;

export const BENNU_EL = { a: 1.1264, e: 0.20375, i: 6.0349 * DEG, node: 2.0609 * DEG, peri: 66.2231 * DEG, M0: 101.7039 * DEG, epochMs: Date.UTC(2011, 0, 1) };

export function earthPos(dateMs) {
  const d = (dateMs - J2000) / DAY;
  const L = (100.464 + 0.9856474 * d) * DEG; // mean longitude
  return { x: Math.cos(L), y: Math.sin(L), z: 0 };
}

export function keplerPos(el, dateMs) {
  const n = (2 * Math.PI) / (365.25636 * Math.pow(el.a, 1.5)); // rad/day (Kepler's 3rd law)
  let M = el.M0 + n * ((dateMs - el.epochMs) / DAY);
  M = ((M % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  let E = M;
  for (let k = 0; k < 12; k++) E = E - (E - el.e * Math.sin(E) - M) / (1 - el.e * Math.cos(E));
  const xv = el.a * (Math.cos(E) - el.e);
  const yv = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
  const v = Math.atan2(yv, xv), r = Math.hypot(xv, yv);
  const u = v + el.peri;
  const cO = Math.cos(el.node), sO = Math.sin(el.node), ci = Math.cos(el.i), si = Math.sin(el.i);
  return {
    x: r * (cO * Math.cos(u) - sO * Math.sin(u) * ci),
    y: r * (sO * Math.cos(u) + cO * Math.sin(u) * ci),
    z: r * Math.sin(u) * si,
  };
}

export const bennuPos = (t) => keplerPos(BENNU_EL, t);
export const len = (p) => Math.hypot(p.x, p.y, p.z);
export const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

/** Approximate spacecraft position on the transfer: prograde sweep, smooth radius blend. */
export function transferPos(fromPos, toPos, p) {
  const r1 = len(fromPos), r2 = len(toPos);
  const a1 = Math.atan2(fromPos.y, fromPos.x);
  let a2 = Math.atan2(toPos.y, toPos.x);
  while (a2 <= a1) a2 += 2 * Math.PI;
  const s = p * p * (3 - 2 * p);
  const ang = a1 + (a2 - a1) * p;
  const r = r1 + (r2 - r1) * s + Math.sin(Math.PI * p) * 0.08 * (r1 + r2) / 2;
  const z = fromPos.z + (toPos.z - fromPos.z) * s;
  return { x: r * Math.cos(ang), y: r * Math.sin(ang), z };
}

export const addDays = (ms, d) => ms + d * DAY;
export const parseDate = (s) => Date.parse(s + 'T00:00:00Z');
export const isoDate = (ms) => new Date(ms).toISOString().slice(0, 10);
export const DAY_MS = DAY;
