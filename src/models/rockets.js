// Procedural launch vehicle models (1 unit = 1 m, Y up, origin = aft end of first stage body).
// Proportions follow public ULA / SpaceX / NASA reference data:
//  Atlas V 411  – 58.3 m, CCB 3.81 m dia, one AJ-60A SRB, Centaur upper stage, 4-m fairing
//  Falcon 9     – 70 m, 3.66 m dia, 5.2 m fairing
//  Falcon Heavy – 70 m, 12.2 m wide (center core + two side boosters)
// AI-assisted code (Claude) – see README.
import * as THREE from 'three';

// ---------------------------------------------------------------- helpers (also used by launchsites.js)
export function canvasTexture(w, h, draw, { repeat = null, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}

export function std(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.1, ...opts });
}

function shade(mesh) { mesh.castShadow = true; mesh.receiveShadow = true; return mesh; }

export function cyl(r1, r2, h, mat, y = 0, seg = 40, open = false) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg, 1, open), mat);
  m.position.y = y + h / 2;
  return shade(m);
}

// Ogive / nose profile via lathe. Base radius r, height L, starting at y0.
export function nose(r, L, mat, y0 = 0, bluntness = 0.12, seg = 40) {
  const pts = [];
  const n = 24;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const rr = r * Math.pow(1 - Math.pow(t, 1.9), 0.62) * (1 - bluntness * t) + (t === 1 ? 0 : 0);
    pts.push(new THREE.Vector2(Math.max(rr, i === n ? 0 : 0.02), y0 + t * L));
  }
  pts[n].x = 0;
  const m = new THREE.Mesh(new THREE.LatheGeometry(pts, seg), mat);
  return shade(m);
}

// Instanced beams between point pairs – used for lattices (towers, masts, erector).
const _up = new THREE.Vector3(0, 1, 0);
export function beams(segments, thickness, mat) {
  const geo = new THREE.BoxGeometry(thickness, 1, thickness);
  const im = new THREE.InstancedMesh(geo, mat, segments.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), d = new THREE.Vector3();
  segments.forEach(([a, b], i) => {
    d.subVectors(b, a); const len = d.length();
    p.addVectors(a, b).multiplyScalar(0.5);
    q.setFromUnitVectors(_up, d.normalize());
    s.set(1, len, 1);
    m4.compose(p, q, s);
    im.setMatrixAt(i, m4);
  });
  im.castShadow = true; im.receiveShadow = true;
  return im;
}

// Square lattice tower segments. w x d footprint, height h, bay height step.
export function latticeSegments(w, d, h, step, { x = 0, z = 0, y = 0, taper = 0 } = {}) {
  const segs = [];
  const V = (a, b, c) => new THREE.Vector3(a, b, c);
  const bays = Math.max(1, Math.round(h / step));
  const corner = (k, yy) => {
    const f = 1 - taper * (yy / h);
    const hw = (w / 2) * f, hd = (d / 2) * f;
    const cs = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]];
    return V(x + cs[k][0], y + yy, z + cs[k][1]);
  };
  for (let i = 0; i < bays; i++) {
    const y0 = (i / bays) * h, y1 = ((i + 1) / bays) * h;
    for (let k = 0; k < 4; k++) {
      const k2 = (k + 1) % 4;
      segs.push([corner(k, y0), corner(k, y1)]);           // leg
      segs.push([corner(k, y1), corner(k2, y1)]);          // ring
      segs.push([i % 2 ? corner(k, y0) : corner(k2, y0), i % 2 ? corner(k2, y1) : corner(k, y1)]); // diagonal
    }
  }
  return segs;
}

function anchor(parent, x, y, z, name) {
  const o = new THREE.Object3D();
  o.position.set(x, y, z); o.name = name || 'nozzle';
  parent.add(o);
  return o;
}

function bell(rExit, rThroat, len, mat) {
  const pts = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    pts.push(new THREE.Vector2(rThroat + (rExit - rThroat) * Math.pow(t, 0.7), -t * len));
  }
  const g = new THREE.LatheGeometry(pts, 24);
  const m = new THREE.Mesh(g, mat);
  m.material.side = THREE.DoubleSide;
  return shade(m);
}

// ---------------------------------------------------------------- shared materials / textures
let _mats = null;
function mats() {
  if (_mats) return _mats;
  const ccbTex = canvasTexture(1024, 2048, (g, w, h) => {
    // bronze/salmon spray-on foam insulation of the Atlas V Common Core Booster
    g.fillStyle = '#c4865a'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      const v = 150 + Math.random() * 60;
      g.fillStyle = `rgba(${v + 40},${v - 10},${v - 60},0.08)`;
      g.fillRect(Math.random() * w, Math.random() * h, 2 + Math.random() * 6, 2 + Math.random() * 18);
    }
    // vertical streaks
    for (let i = 0; i < 60; i++) {
      g.fillStyle = `rgba(90,50,25,${0.03 + Math.random() * 0.05})`;
      g.fillRect(Math.random() * w, 0, 1 + Math.random() * 4, h);
    }
    // panel rings
    g.fillStyle = 'rgba(70,40,20,0.35)';
    for (let k = 1; k < 8; k++) g.fillRect(0, (h * k) / 8, w, 3);
    // dark forward/aft bands
    g.fillStyle = '#2a2622'; g.fillRect(0, 0, w, h * 0.035); g.fillRect(0, h * 0.965, w, h * 0.035);
    // flag + U.S.A. (front face ~ u=0.25)
    const fx = w * 0.2, fy = h * 0.12, fw = w * 0.1, fh = fw * 0.53 * 2.2;
    g.save(); g.translate(fx + fw / 2, fy + fh / 2); g.rotate(Math.PI / 2); g.translate(-fh / 2, -fw / 2);
    for (let s = 0; s < 13; s++) { g.fillStyle = s % 2 ? '#f4f4f4' : '#b22234'; g.fillRect(0, (s * fw) / 13, fh, fw / 13 + 1); }
    g.fillStyle = '#3c3b6e'; g.fillRect(0, 0, fh * 0.4, fw * 0.54);
    g.restore();
    g.fillStyle = '#1b1b1b'; g.font = `bold ${w * 0.06}px Arial`; g.textAlign = 'center';
    'U.S.A.'.split('').forEach((ch, i) => g.fillText(ch, fx + fw / 2, fy + fh + w * 0.09 + i * w * 0.065));
  });
  const centaurTex = canvasTexture(512, 512, (g, w, h) => {
    g.fillStyle = '#d9dadc'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2500; i++) { const v = 190 + Math.random() * 50; g.fillStyle = `rgb(${v},${v},${v + 4})`; g.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
    g.strokeStyle = 'rgba(120,120,120,0.5)';
    for (let k = 0; k < 12; k++) { g.beginPath(); g.moveTo((w * k) / 12, 0); g.lineTo((w * k) / 12, h); g.stroke(); }
  });
  const fairingTex = canvasTexture(1024, 512, (g, w, h) => {
    g.fillStyle = '#f2f2f0'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(w * 0.5, 0); g.lineTo(w * 0.5, h); g.moveTo(0, 0); g.lineTo(0, h); g.stroke();
    g.fillStyle = '#0b3d91'; g.font = `bold ${h * 0.28}px Arial Black, Arial`; g.textAlign = 'center';
    g.save(); g.translate(w * 0.25, h * 0.5); g.rotate(-Math.PI / 2); g.fillText('NASA', 0, h * 0.1); g.restore();
  });
  const f9Tex = canvasTexture(512, 2048, (g, w, h) => {
    g.fillStyle = '#f3f3f1'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(80,80,80,${Math.random() * 0.04})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 10); }
    // soot streaks near bottom (flight-proven look)
    const grd = g.createLinearGradient(0, h, 0, h * 0.82);
    grd.addColorStop(0, 'rgba(40,40,40,0.55)'); grd.addColorStop(1, 'rgba(40,40,40,0)');
    g.fillStyle = grd; g.fillRect(0, h * 0.82, w, h * 0.18);
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 1; k < 10; k++) g.fillRect(0, (h * k) / 10, w, 2);
    g.fillStyle = '#16181c'; g.font = `bold ${w * 0.11}px Arial`; g.textAlign = 'center';
    g.save(); g.translate(w * 0.25, h * 0.45); g.rotate(-Math.PI / 2); g.fillText('USA', 0, 0); g.restore();
  });
  _mats = {
    ccb: std(0xffffff, { map: ccbTex, roughness: 0.85 }),
    centaur: std(0xffffff, { map: centaurTex, roughness: 0.45, metalness: 0.5 }),
    fairing: std(0xffffff, { map: fairingTex, roughness: 0.45 }),
    white: std(0xf1f1ef, { roughness: 0.5 }),
    f9: std(0xffffff, { map: f9Tex, roughness: 0.55 }),
    black: std(0x141518, { roughness: 0.55, metalness: 0.2 }),
    darkGrey: std(0x3a3c40, { roughness: 0.5, metalness: 0.4 }),
    srb: std(0xeeeeec, { roughness: 0.55 }),
    nozzle: std(0x2b2724, { roughness: 0.35, metalness: 0.8 }),
    nozzleCopper: std(0x8a5a3c, { roughness: 0.35, metalness: 0.85 }),
    gridfin: std(0x55585c, { roughness: 0.4, metalness: 0.7 }),
  };
  return _mats;
}

// ---------------------------------------------------------------- Atlas V 411
export function createAtlasV411() {
  const M = mats();
  const root = new THREE.Group(); root.name = 'Atlas V 411';
  const R = 3.81 / 2;

  // --- Common Core Booster (RP-1 / LOX, RD-180)
  const core = new THREE.Group(); core.name = 'CCB';
  core.add(cyl(R, R, 32.46, M.ccb, 0, 48));
  core.add(cyl(R * 1.02, R * 1.03, 1.6, M.darkGrey, 0, 48)); // aft skirt
  // RD-180: two chambers/nozzles
  for (const dx of [-0.75, 0.75]) {
    const b = bell(0.72, 0.28, 3.0, M.nozzleCopper);
    b.position.set(dx, 0.2, 0); core.add(b);
  }
  root.add(core);

  // --- AJ-60A solid rocket booster (single, asymmetric)
  const srb = new THREE.Group(); srb.name = 'AJ-60A';
  const rs = 1.58 / 2;
  srb.add(cyl(rs, rs, 17.3, M.srb, 0.6, 32));
  const sn = nose(rs, 2.6, M.srb, 17.9, 0.05, 32); srb.add(sn);
  const sb = bell(0.62, 0.3, 1.6, M.nozzle); sb.rotation.z = 0.05; sb.position.y = 0.7; srb.add(sb);
  // struts to core
  const strut = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 0.35), M.darkGrey);
  strut.position.set(-(R + rs) / 2 + 0.2, 2, 0); srb.add(strut.clone());
  strut.position.y = 15.5; srb.add(strut);
  srb.position.set(R + rs + 0.12, 0, 0);
  srb.rotation.y = 0; // side facing +x (downrange-left from camera)
  root.add(srb);

  // --- Interstage adapter + Centaur (LH2 / LOX, RL10)
  const upper = new THREE.Group(); upper.name = 'Centaur';
  upper.add(cyl(1.6, R, 3.0, M.white, 32.46, 48));             // ISA tapered
  upper.add(cyl(1.525, 1.525, 6.2, M.centaur, 35.46, 40));      // Centaur tank (3.05 m)
  root.add(upper);

  // --- 4-m payload fairing (white, NASA wordmark)
  const fairing = new THREE.Group(); fairing.name = '4m PLF';
  const rf = 4.2 / 2;
  fairing.add(cyl(rf, 1.6, 2.0, M.white, 41.66, 48));           // boattail
  fairing.add(cyl(rf, rf, 9.1, M.fairing, 43.66, 48));
  fairing.add(nose(rf, 5.54, M.white, 52.76, 0.08, 48));        // to 58.3 m
  root.add(fairing);

  const nozzles = [anchor(core, 0, -2.9, 0, 'rd180'), anchor(srb, 0.08, -1.0, 0, 'srb')];
  root.userData = { height: 58.3, parts: { core, srbs: [srb], sideBoosters: [], upper, fairing }, nozzles, nozzleCore: nozzles[0], plumeScale: 1 };
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return root;
}

// ---------------------------------------------------------------- Falcon family
function falconCore({ withInterstage = true, nosecone = false } = {}) {
  const M = mats();
  const R = 3.66 / 2;
  const g = new THREE.Group();
  g.add(cyl(R, R, 41.2, M.f9, 0, 40));
  // octaweb + 9 Merlins
  g.add(cyl(R * 1.01, R * 1.02, 1.2, M.black, -0.2, 40));
  const pos = [[0, 0]];
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; pos.push([Math.cos(a) * 1.2, Math.sin(a) * 1.2]); }
  pos.forEach(([x, z]) => { const b = bell(0.46, 0.18, 1.2, M.nozzle); b.position.set(x, -0.2, z); g.add(b); });
  // folded landing legs
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.55, 9.5, 0.28), M.black);
    leg.position.set(Math.cos(a) * (R + 0.12), 4.9, Math.sin(a) * (R + 0.12));
    leg.lookAt(leg.position.x * 2, 4.9, leg.position.z * 2);
    g.add(shade(leg));
  }
  if (withInterstage) {
    g.add(cyl(R, R, 6.5, M.black, 41.2, 40));
    // grid fins (4)
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const fin = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.5, 0.15), M.gridfin);
      fin.position.set(Math.cos(a) * (R + 0.15), 46.6, Math.sin(a) * (R + 0.15));
      fin.rotation.y = -a + Math.PI / 2;
      g.add(shade(fin));
    }
  }
  if (nosecone) {
    g.add(cyl(R, R, 2.5, M.black, 41.2, 40));
    g.add(nose(R, 4.8, M.white, 43.7, 0.1, 40));
  }
  return g;
}

function falconUpper(y0) {
  const M = mats();
  const R = 3.66 / 2;
  const upper = new THREE.Group(); upper.name = 'Stage 2';
  upper.add(cyl(R, R, 10.5, M.f9, y0, 40));
  const fairing = new THREE.Group(); fairing.name = 'Fairing';
  const rf = 5.2 / 2;
  fairing.add(cyl(rf, R, 1.6, M.white, y0 + 10.5, 48));
  fairing.add(cyl(rf, rf, 5.6, M.fairing, y0 + 12.1, 48));
  const top = y0 + 17.7;
  fairing.add(nose(rf, 70 - top, M.white, top, 0.12, 48));
  return { upper, fairing };
}

export function createFalcon9() {
  const root = new THREE.Group(); root.name = 'Falcon 9';
  const core = falconCore(); core.name = 'Stage 1';
  root.add(core);
  const { upper, fairing } = falconUpper(47.7);
  root.add(upper, fairing);
  const nozzles = [anchor(core, 0, -1.5, 0, 'merlin9')];
  root.userData = { height: 70, parts: { core, srbs: [], sideBoosters: [], upper, fairing }, nozzles, nozzleCore: nozzles[0], plumeScale: 1.25 };
  return root;
}

export function createFalconHeavy() {
  const M = mats();
  const root = new THREE.Group(); root.name = 'Falcon Heavy';
  const core = falconCore(); core.name = 'Center core';
  root.add(core);
  const off = 3.66 + 0.61; // -> 12.2 m total width
  const sideBoosters = [-1, 1].map((s) => {
    const b = falconCore({ withInterstage: false, nosecone: true });
    b.name = s < 0 ? 'Side booster A' : 'Side booster B';
    b.position.x = s * off;
    // attach struts
    const st = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.4, 0.4), M.darkGrey);
    st.position.set(-s * off / 2 + s * 0.1, 3, 0); b.add(st.clone()); st.position.y = 38; b.add(st);
    root.add(b);
    return b;
  });
  const { upper, fairing } = falconUpper(47.7);
  root.add(upper, fairing);
  const nozzles = [anchor(core, 0, -1.5, 0, 'core'), anchor(sideBoosters[0], 0, -1.5, 0, 'sideA'), anchor(sideBoosters[1], 0, -1.5, 0, 'sideB')];
  root.userData = { height: 70, parts: { core, srbs: [], sideBoosters, upper, fairing }, nozzles, nozzleCore: nozzles[0], plumeScale: 1.25 };
  return root;
}

export function createRocket(id) {
  if (id === 'falcon_9') return createFalcon9();
  if (id === 'falcon_heavy') return createFalconHeavy();
  return createAtlasV411();
}
