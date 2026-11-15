// 101955 Bennu: ~490 m mean diameter "spinning top" rubble pile with an equatorial ridge.
// Very dark (geometric albedo ~0.044). Geometry built at radius 1 then scaled by opts.radius.
// AI-assisted code (Claude) — see README.
import * as THREE from 'three';
import { rng, regolithTexture } from './textures.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

// --- tiny 3D value noise -------------------------------------------------
function hash(x, y, z) {
  let h = x * 374761393 + y * 668265263 + z * 1274126177;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const l = THREE.MathUtils.lerp;
  const c = (a, b, cc) => hash(xi + a, yi + b, zi + cc);
  return l(
    l(l(c(0, 0, 0), c(1, 0, 0), u), l(c(0, 1, 0), c(1, 1, 0), u), v),
    l(l(c(0, 0, 1), c(1, 0, 1), u), l(c(0, 1, 1), c(1, 1, 1), u), v),
    w,
  );
}
function fbm(x, y, z, oct = 5) {
  let a = 0.5, f = 1, s = 0;
  for (let i = 0; i < oct; i++) { s += a * (vnoise(x * f, y * f, z * f) * 2 - 1); f *= 2.03; a *= 0.5; }
  return s;
}

// Nightingale site: northern hemisphere crater (~56 N, ~43 E)
const NIGHTINGALE_LAT = THREE.MathUtils.degToRad(56);
const NIGHTINGALE_LON = THREE.MathUtils.degToRad(43);
function dirFromLatLon(lat, lon) {
  return new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon));
}

const CRATERS = (() => {
  const r = rng(99);
  const list = [{ dir: dirFromLatLon(NIGHTINGALE_LAT, NIGHTINGALE_LON), rad: 0.14, depth: 0.035 }];
  for (let i = 0; i < 9; i++) {
    const lat = Math.asin(r() * 2 - 1) * 0.9, lon = r() * Math.PI * 2;
    list.push({ dir: dirFromLatLon(lat, lon), rad: 0.08 + r() * 0.2, depth: 0.012 + r() * 0.03 });
  }
  return list;
})();

function surfaceRadius(dir) {
  const lat = Math.asin(THREE.MathUtils.clamp(dir.y, -1, 1));
  const s = Math.abs(Math.sin(lat)), c = Math.abs(Math.cos(lat));
  // spinning-top: blend sphere with a bicone, plus equatorial ridge
  const bicone = 1 / (s * 0.9 + c);
  let r = THREE.MathUtils.lerp(1, Math.pow(bicone, 0.8), 0.5) * 0.95;
  r += 0.035 * Math.exp(-((lat / 0.11) ** 2));
  // lumpy rubble pile
  r += 0.06 * fbm(dir.x * 1.6 + 3.1, dir.y * 1.6, dir.z * 1.6 - 1.7, 4);
  r += 0.02 * fbm(dir.x * 4.5 - 2, dir.y * 4.5 + 5, dir.z * 4.5, 3);
  r += 0.014 * fbm(dir.x * 9 + 7, dir.y * 9, dir.z * 9, 3);
  r += 0.006 * fbm(dir.x * 26 - 4, dir.y * 26 + 1, dir.z * 26, 3);
  // craters (bowl with slight raised rim)
  for (const k of CRATERS) {
    const d = dir.angleTo(k.dir) / k.rad;
    if (d < 1.4) {
      if (d < 1) r -= k.depth * (1 - d * d);
      else r += k.depth * 0.25 * (1 - (d - 1) / 0.4);
    }
  }
  return r;
}

export const NIGHTINGALE = (() => {
  const dir = dirFromLatLon(NIGHTINGALE_LAT, NIGHTINGALE_LON).normalize();
  const r = surfaceRadius(dir);
  return { dir: dir.clone(), position: dir.clone().multiplyScalar(r), normal: dir.clone(), latDeg: 56, lonDeg: 43 };
})();

let sharedGeo = null;
function bennuGeometry(detail) {
  // PolyhedronGeometry subdivides linearly: triangles = 20 * (n + 1)^2
  let g = new THREE.IcosahedronGeometry(1, Math.max(4, detail * 9));
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g, 1e-5);
  const pos = g.attributes.position;
  const v = new THREE.Vector3();
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    const r = surfaceRadius(v);
    const n = fbm(v.x * 6, v.y * 6, v.z * 6, 3);
    const shade = 0.75 + n * 0.35 + (Math.abs(v.y) < 0.12 ? 0.08 : 0);
    colors[i * 3] = shade * 1.04; colors[i * 3 + 1] = shade; colors[i * 3 + 2] = shade * 0.93;
    v.multiplyScalar(r);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  g.computeVertexNormals();
  return g;
}

/**
 * createBennu({ radius = 245, detail = 6, boulders = 900 })
 * radius: scene units for the 245 m mean radius (use 245 for 1 unit = 1 m hero, ~0.5 for a dot).
 * Returns a Group; userData.surface(dir) -> point on surface (local unit-radius space * radius),
 * userData.nightingale -> { position, normal } in group-local space (already scaled).
 */
export function createBennu(opts = {}) {
  const radius = opts.radius ?? 245;
  const detail = opts.detail ?? 6;
  const nBoulders = opts.boulders ?? (detail >= 3 ? 900 : 0);
  const group = new THREE.Group();
  group.name = '101955 Bennu';
  const body = new THREE.Group();
  body.scale.setScalar(radius);
  group.add(body);

  if (!sharedGeo || sharedGeo.detail !== detail) sharedGeo = { detail, geo: bennuGeometry(detail) };
  const tex = regolithTexture();
  tex.repeat.set(10, 5);
  const mat = new THREE.MeshStandardMaterial({ color: 0xa89c8e, map: tex, bumpMap: tex, bumpScale: 3, vertexColors: true, roughness: 1, metalness: 0, flatShading: false });
  const mesh = new THREE.Mesh(sharedGeo.geo, mat);
  mesh.castShadow = mesh.receiveShadow = true;
  body.add(mesh);

  if (nBoulders > 0) {
    const r = rng(42);
    const rockGeo = new THREE.DodecahedronGeometry(1, 0);
    // jitter rock vertices for irregular boulders
    const p = rockGeo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) * (0.8 + r() * 0.4), p.getY(i) * (0.6 + r() * 0.3), p.getZ(i) * (0.8 + r() * 0.4));
    rockGeo.computeVertexNormals();
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x6a625a, roughness: 1, metalness: 0, flatShading: true });
    const inst = new THREE.InstancedMesh(rockGeo, rockMat, nBoulders);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), d = new THREE.Vector3();
    const col = new THREE.Color();
    for (let i = 0; i < nBoulders; i++) {
      d.set(r() * 2 - 1, r() * 2 - 1, r() * 2 - 1).normalize();
      // power-law size distribution; a few big ones like Benben (~22 m)
      const big = r() < 0.012;
      const size = big ? 0.03 + r() * 0.025 : 0.003 + Math.pow(r(), 3.5) * 0.02;
      const sr = surfaceRadius(d);
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * 6.28));
      s.set(size, size * (0.6 + r() * 0.5), size);
      m.compose(d.clone().multiplyScalar(sr - size * 0.15), q, s);
      inst.setMatrixAt(i, m);
      const v = 0.45 + r() * 0.45; col.setRGB(v, v * 0.95, v * 0.9);
      inst.setColorAt(i, col);
    }
    inst.castShadow = inst.receiveShadow = true;
    body.add(inst);
  }

  group.userData.radius = radius;
  group.userData.body = body;
  group.userData.surface = (dir) => { const u = dir.clone().normalize(); return u.multiplyScalar(surfaceRadius(u) * radius); };
  group.userData.nightingale = { position: NIGHTINGALE.position.clone().multiplyScalar(radius), normal: NIGHTINGALE.normal.clone() };
  return group;
}

export { surfaceRadius };
