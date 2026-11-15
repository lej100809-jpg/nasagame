// Heliocentric helpers. Frame: ecliptic J2000, 1 AU = 100 scene units.
// Mapping ecliptic (x, y, z) -> three.js (x, z, -y): the ecliptic plane is the XZ plane, +Y = ecliptic north.
// Bennu elements: a=1.1264 AU, e=0.20375, i=6.0349 deg, node=2.0609 deg, peri=66.2231 deg, M=101.7039 deg @ JD 2455562.5.
// Earth: circular 1 AU orbit with the standard mean-longitude approximation.
// AI-assisted code (Claude) — see README.
import * as THREE from 'three';
import { glowSprite, earthTexture } from './textures.js';

export const AU = 100;
const DEG = Math.PI / 180;

export const BENNU_ELEMENTS = {
  a: 1.1264, e: 0.20375, i: 6.0349 * DEG, node: 2.0609 * DEG, peri: 66.2231 * DEG,
  M0: 101.7039 * DEG, epochJD: 2455562.5,
};
// Kepler's third law: P[yr] = a[AU]^1.5
export const BENNU_PERIOD_DAYS = Math.pow(BENNU_ELEMENTS.a, 1.5) * 365.25636;

export function toJD(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.getTime() / 86400000 + 2440587.5;
}

function eclToScene(x, y, z, out = new THREE.Vector3()) {
  return out.set(x * AU, z * AU, -y * AU);
}

export function earthLongitude(date) {
  const d = toJD(date) - 2451545.0;
  return ((100.46 + 0.9856474 * d) % 360) * DEG;
}

export function positionEarth(date, out = new THREE.Vector3()) {
  const L = earthLongitude(date);
  return eclToScene(Math.cos(L), Math.sin(L), 0, out);
}

function solveKepler(M, e) {
  let E = e < 0.8 ? M : Math.PI;
  for (let k = 0; k < 30; k++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-12) break;
  }
  return E;
}

function orbitalToEcliptic(xo, yo, el) {
  const { i, node: O, peri: w } = el;
  const cO = Math.cos(O), sO = Math.sin(O), cw = Math.cos(w), sw = Math.sin(w), ci = Math.cos(i), si = Math.sin(i);
  const x = (cO * cw - sO * sw * ci) * xo + (-cO * sw - sO * cw * ci) * yo;
  const y = (sO * cw + cO * sw * ci) * xo + (-sO * sw + cO * cw * ci) * yo;
  const z = (sw * si) * xo + (cw * si) * yo;
  return [x, y, z];
}

/** Bennu position (scene units) and heliocentric distance in AU */
export function positionBennu(date, out = new THREE.Vector3()) {
  const el = BENNU_ELEMENTS;
  const n = (2 * Math.PI) / BENNU_PERIOD_DAYS;
  const M = el.M0 + n * (toJD(date) - el.epochJD);
  const E = solveKepler(((M % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI), el.e);
  const xo = el.a * (Math.cos(E) - el.e);
  const yo = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
  const [x, y, z] = orbitalToEcliptic(xo, yo, el);
  eclToScene(x, y, z, out);
  out.userData = undefined;
  return out;
}

export function distanceAU(v) { return v.length() / AU; }

function orbitLine(points, color, opacity) {
  const g = new THREE.BufferGeometry().setFromPoints(points);
  const m = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
  return new THREE.LineLoop(g, m);
}

export function createEarthOrbitLine(color = 0x4a90ff, opacity = 0.55) {
  const pts = [];
  for (let k = 0; k < 256; k++) { const a = (k / 256) * Math.PI * 2; pts.push(eclToScene(Math.cos(a), Math.sin(a), 0)); }
  return orbitLine(pts, color, opacity);
}

export function createBennuOrbitLine(color = 0xffb347, opacity = 0.65) {
  const el = BENNU_ELEMENTS, pts = [];
  for (let k = 0; k < 360; k++) {
    const E = (k / 360) * Math.PI * 2;
    const xo = el.a * (Math.cos(E) - el.e), yo = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
    const [x, y, z] = orbitalToEcliptic(xo, yo, el);
    pts.push(eclToScene(x, y, z));
  }
  return orbitLine(pts, color, opacity);
}

export function createSun(radius = 4) {
  const g = new THREE.Group(); g.name = 'Sun';
  const core = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 1.25, 0.85) }));
  g.add(core);
  g.add(glowSprite(new THREE.Color(1.25, 1.0, 0.6), radius * 9, 2.2, 0.6));
  g.add(glowSprite(new THREE.Color(0.55, 0.35, 0.15), radius * 30, 3.0));
  const light = new THREE.PointLight(0xfff4e0, 3, 0, 0);
  g.add(light);
  g.userData.light = light;
  return g;
}

export function createEarth(radius = 1.6) {
  const g = new THREE.Group(); g.name = 'Earth';
  const m = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32), new THREE.MeshStandardMaterial({ map: earthTexture(), roughness: 0.7, metalness: 0, emissive: 0x0a2050, emissiveIntensity: 0.35 }));
  g.add(m);
  g.add(glowSprite(new THREE.Color(0.3, 0.6, 1.4), radius * 5, 2.5));
  g.userData.mesh = m;
  return g;
}

/**
 * Approximate prograde transfer arc from Earth(launch) to Bennu(arrival).
 * Sweep angle chosen so the average angular rate is close to a ~1-year orbit for the flight time.
 * Returns { curve: CatmullRomCurve3, points: Vector3[] }.
 */
export function buildTransferArc(launchDate, arrivalDate, n = 240) {
  const p0 = positionEarth(launchDate), p1 = positionBennu(arrivalDate);
  return arcBetween(p0, p1, (toJD(arrivalDate) - toJD(launchDate)), n, 0.08);
}

/** Return leg: Bennu(depart) -> Earth(arrive) */
export function buildReturnArc(departDate, arriveDate, n = 240) {
  const p0 = positionBennu(departDate), p1 = positionEarth(arriveDate);
  return arcBetween(p0, p1, (toJD(arriveDate) - toJD(departDate)), n, 0.06);
}

function arcBetween(p0, p1, days, n, bulge) {
  const th0 = Math.atan2(-p0.z, p0.x), th1 = Math.atan2(-p1.z, p1.x);
  const r0 = Math.hypot(p0.x, p0.z), r1 = Math.hypot(p1.x, p1.z);
  let sweep = th1 - th0;
  sweep = ((sweep % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const ideal = (Math.max(days, 60) / 365.25) * 2 * Math.PI * 0.92; // avg ~1 AU-ish angular rate
  while (sweep + 2 * Math.PI < ideal + Math.PI) { if (Math.abs(sweep + 2 * Math.PI - ideal) < Math.abs(sweep - ideal)) sweep += 2 * Math.PI; else break; }
  const pts = [];
  for (let k = 0; k <= n; k++) {
    const t = k / n;
    const s = t * t * (3 - 2 * t);
    const th = th0 + sweep * t;
    const r = THREE.MathUtils.lerp(r0, r1, s) * (1 + bulge * Math.sin(Math.PI * t));
    const y = THREE.MathUtils.lerp(p0.y, p1.y, s);
    pts.push(new THREE.Vector3(Math.cos(th) * r, y, -Math.sin(th) * r));
  }
  pts[0].copy(p0); pts[n].copy(p1);
  return { curve: new THREE.CatmullRomCurve3(pts), points: pts, sweep };
}

/** Date helper: interpolate a Date between two dates */
export function lerpDate(a, b, t) {
  const ta = (a instanceof Date ? a : new Date(a)).getTime(), tb = (b instanceof Date ? b : new Date(b)).getTime();
  return new Date(ta + (tb - ta) * t);
}
