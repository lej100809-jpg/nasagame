// OSIRIS-REx-style spacecraft built from the player's parts. 1 unit = 1 m. Y is up.
// Layout: bus 2.4 x 3.15 x 2.4 m (Y tall), HGA + SRC on top deck, science deck on +Z face,
// TAGSAM arm hinged at the bottom of the +Z face, solar wings on +/-X in a slight "Y-wing".
// AI-assisted code (Claude) — see README.
import * as THREE from 'three';
import { foilTextures, solarTexture, glowSprite } from './textures.js';

const BUS = { w: 2.4, h: 3.15, d: 2.4 };
const SOLAR_SPAN = { solar_small: 3.4, solar_medium: 4.8, solar_large: 6.2 }; // tip to tip (m)
const TAGSAM_LEN = 3.35; // NASA press kit

let mats = null;
function materials() {
  if (mats) return mats;
  const foil = foilTextures();
  mats = {
    foil: new THREE.MeshStandardMaterial({ map: foil.map, bumpMap: foil.bump, bumpScale: 0.6, metalness: 0.85, roughness: 0.32, color: 0xffffff }),
    silverFoil: new THREE.MeshStandardMaterial({ color: 0xb9bec8, metalness: 0.9, roughness: 0.28, bumpMap: foil.bump, bumpScale: 0.4 }),
    white: new THREE.MeshStandardMaterial({ color: 0xeeeeea, metalness: 0.1, roughness: 0.55 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x23262b, metalness: 0.4, roughness: 0.6 }),
    black: new THREE.MeshStandardMaterial({ color: 0x0c0d10, metalness: 0.3, roughness: 0.4 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x9aa1ab, metalness: 0.95, roughness: 0.3 }),
    solar: new THREE.MeshStandardMaterial({ map: solarTexture(), metalness: 0.55, roughness: 0.25, color: 0xffffff }),
    solarBack: new THREE.MeshStandardMaterial({ color: 0x8c8f95, metalness: 0.6, roughness: 0.5 }),
    lens: new THREE.MeshStandardMaterial({ color: 0x1a2a55, metalness: 1, roughness: 0.05, emissive: 0x0a1430, emissiveIntensity: 0.6 }),
    shield: new THREE.MeshStandardMaterial({ color: 0x3b3f46, metalness: 0.7, roughness: 0.45 }),
    capsule: new THREE.MeshStandardMaterial({ color: 0x5b4636, metalness: 0.2, roughness: 0.8 }),
    capsuleTop: new THREE.MeshStandardMaterial({ color: 0xb8b3aa, metalness: 0.3, roughness: 0.6 }),
    dish: new THREE.MeshStandardMaterial({ color: 0xf4f2ec, metalness: 0.15, roughness: 0.45, side: THREE.DoubleSide }),
    plume: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.4, 2.4), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }),
  };
  return mats;
}

function box(w, h, d, m) { return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); }
function cyl(rt, rb, h, m, seg = 24) { return new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); }

function toSet(list) {
  if (!list) return new Set();
  return list instanceof Set ? list : new Set(list);
}

function buildBus(g, M, shield) {
  const bus = box(BUS.w, BUS.h, BUS.d, M.foil);
  bus.castShadow = bus.receiveShadow = true;
  g.add(bus);
  // top and bottom decks (white honeycomb panels)
  const top = box(BUS.w + 0.06, 0.06, BUS.d + 0.06, M.white); top.position.y = BUS.h / 2; g.add(top);
  const bot = box(BUS.w + 0.06, 0.06, BUS.d + 0.06, M.white); bot.position.y = -BUS.h / 2; g.add(bot);
  // corner longerons
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const l = box(0.06, BUS.h, 0.06, M.metal);
    l.position.set(sx * BUS.w / 2, 0, sz * BUS.d / 2); g.add(l);
  }
  // radiator panel (silver) on -Z face
  const rad = box(1.6, 2.0, 0.03, M.silverFoil); rad.position.set(0, 0.2, -BUS.d / 2 - 0.02); g.add(rad);
  // shielding plates: thicker & more plates per level
  if (shield > 0) {
    const t = 0.04 + shield * 0.05;
    const faces = [
      [0, 0, -BUS.d / 2 - t / 2 - 0.04, 0],
      [-BUS.w / 2 - t / 2 - 0.02, 0, 0, Math.PI / 2],
      [BUS.w / 2 + t / 2 + 0.02, 0, 0, Math.PI / 2],
    ];
    const n = Math.min(faces.length, shield);
    for (let i = 0; i < n; i++) {
      const [x, y, z, ry] = faces[i];
      const p = box(BUS.w * 0.82, BUS.h * 0.55, t, M.shield);
      p.position.set(x, y - 0.25, z); p.rotation.y = ry; g.add(p);
      // rivet strips
      for (const yy of [-0.6, 0.1]) {
        const s = box(BUS.w * 0.84, 0.05, t + 0.02, M.metal); s.position.set(x, yy - 0.25, z); s.rotation.y = ry; g.add(s);
      }
    }
    if (shield >= 3) { // electronics vault cap on top
      const v = box(1.0, 0.25, 0.9, M.shield); v.position.set(-0.55, BUS.h / 2 + 0.16, -0.55); g.add(v);
    }
  }
  // main engine nozzles under the bus (4x MR-107S style)
  const anchors = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const n = cyl(0.05, 0.12, 0.28, M.metal, 16);
    n.position.set(sx * 0.75, -BUS.h / 2 - 0.17, sz * 0.75); g.add(n);
    const a = new THREE.Object3D(); a.position.set(sx * 0.75, -BUS.h / 2 - 0.33, sz * 0.75);
    a.rotation.x = Math.PI; // points -Y
    g.add(a); anchors.push(a);
    // plume (hidden until used)
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.4, 16, 1, true), M.plume.clone());
    plume.position.y = 0.7; plume.rotation.x = Math.PI; // cone tip toward nozzle
    a.add(plume); a.userData.plume = plume;
  }
  return anchors;
}

function buildSolar(g, M, kind) {
  const span = SOLAR_SPAN[kind] ?? SOLAR_SPAN.solar_large;
  const wingLen = (span - BUS.w) / 2;
  const wingW = kind === 'solar_small' ? 1.1 : kind === 'solar_medium' ? 1.35 : 1.55;
  const wings = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(s * BUS.w / 2, 0.35, 0);
    pivot.rotation.z = s * 0.32; // Y-wing tilt
    g.add(pivot);
    const yoke = cyl(0.03, 0.03, 0.35, M.metal, 8); yoke.rotation.z = Math.PI / 2; yoke.position.x = s * 0.17; pivot.add(yoke);
    const panel = new THREE.Group(); panel.position.x = s * (0.35 + wingLen / 2); panel.rotation.x = -1.05; pivot.add(panel);
    const front = new THREE.Mesh(new THREE.PlaneGeometry(wingLen, wingW), M.solar);
    front.rotation.x = -Math.PI / 2; front.position.y = 0.012; panel.add(front);
    const back = box(wingLen, 0.02, wingW, M.solarBack); panel.add(back);
    const frame = box(wingLen + 0.04, 0.035, 0.04, M.metal); frame.position.z = wingW / 2; panel.add(frame);
    const frame2 = frame.clone(); frame2.position.z = -wingW / 2; panel.add(frame2);
    wings.push(pivot);
  }
  return wings;
}

function buildHGA(g, M) {
  const grp = new THREE.Group(); grp.position.set(0.25, BUS.h / 2 + 0.05, -0.15); g.add(grp);
  // parabolic dish 2.0 m diameter via lathe
  const pts = [];
  const R = 1.0, depth = 0.32;
  for (let i = 0; i <= 16; i++) { const x = (i / 16) * R; pts.push(new THREE.Vector2(x, (x * x) / (R * R) * depth)); }
  const dish = new THREE.Mesh(new THREE.LatheGeometry(pts, 48), M.dish);
  dish.position.y = 0.45; grp.add(dish);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.025, 8, 64), M.metal); rim.rotation.x = Math.PI / 2; rim.position.y = 0.45 + depth; grp.add(rim);
  const mast = cyl(0.08, 0.12, 0.45, M.metal, 12); mast.position.y = 0.22; grp.add(mast);
  // feed + tripod struts
  const feed = cyl(0.07, 0.05, 0.22, M.white, 12); feed.position.y = 0.45 + 0.62; grp.add(feed);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const p0 = new THREE.Vector3(Math.cos(a) * 0.8, 0.45 + 0.21, Math.sin(a) * 0.8);
    const p1 = new THREE.Vector3(0, 0.45 + 0.55, 0);
    const len = p0.distanceTo(p1);
    const s = cyl(0.012, 0.012, len, M.metal, 6);
    s.position.copy(p0).add(p1).multiplyScalar(0.5);
    s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p1.clone().sub(p0).normalize());
    grp.add(s);
  }
  grp.rotation.z = -0.12;
  return grp;
}

function buildLGA(g, M) {
  const grp = new THREE.Group(); grp.position.set(0.6, BUS.h / 2 + 0.03, -0.5); g.add(grp);
  const stub = cyl(0.03, 0.03, 0.5, M.metal, 8); stub.position.y = 0.25; grp.add(stub);
  const horn = cyl(0.12, 0.05, 0.18, M.white, 16); horn.position.y = 0.58; grp.add(horn);
  const g2 = grp.clone(); g2.position.set(-0.8, -BUS.h / 2 - 0.03, 0.6); g2.rotation.x = Math.PI; g.add(g2);
  return grp;
}

function buildSRC(g, M) {
  // Sample Return Capsule: 0.81 m dia blunt cone (46 kg), on the top deck
  const grp = new THREE.Group(); grp.position.set(-0.55, BUS.h / 2 + 0.05, 0.6); g.add(grp);
  const heat = cyl(0.405, 0.405, 0.08, M.capsule, 40); heat.position.y = 0.04; grp.add(heat);
  const back = cyl(0.16, 0.39, 0.36, M.capsuleTop, 40); back.position.y = 0.26; grp.add(back);
  const capTop = cyl(0.12, 0.16, 0.06, M.dark, 24); capTop.position.y = 0.47; grp.add(capTop);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.02, 8, 48), M.metal); ring.rotation.x = Math.PI / 2; ring.position.y = 0.08; grp.add(ring);
  return grp;
}

function buildInstruments(g, M, inst) {
  // science deck on +Z face, lower half
  const z = BUS.d / 2;
  const deck = box(BUS.w * 0.92, 0.05, 0.5, M.white); deck.position.set(0, -0.55, z + 0.25);
  let any = false;
  const add = (o) => { g.add(o); any = true; };
  if (inst.has('ocams')) { // PolyCam (big), MapCam, SamCam
    const grp = new THREE.Group(); grp.position.set(-0.75, -0.25, z + 0.22);
    const poly = cyl(0.11, 0.11, 0.55, M.black, 20); poly.rotation.x = Math.PI / 2; poly.position.set(0, 0.12, 0.05); grp.add(poly);
    const sh = cyl(0.14, 0.12, 0.12, M.white, 20); sh.rotation.x = Math.PI / 2; sh.position.set(0, 0.12, 0.34); grp.add(sh);
    const pl = cyl(0.085, 0.085, 0.02, M.lens, 20); pl.rotation.x = Math.PI / 2; pl.position.set(0, 0.12, 0.41); grp.add(pl);
    const map = cyl(0.06, 0.06, 0.3, M.black, 16); map.rotation.x = Math.PI / 2; map.position.set(0.24, -0.06, 0); grp.add(map);
    const ml = cyl(0.045, 0.045, 0.02, M.lens, 16); ml.rotation.x = Math.PI / 2; ml.position.set(0.24, -0.06, 0.16); grp.add(ml);
    const sam = cyl(0.05, 0.05, 0.26, M.black, 16); sam.rotation.x = Math.PI / 2; sam.position.set(-0.2, -0.12, -0.02); grp.add(sam);
    const sl = cyl(0.038, 0.038, 0.02, M.lens, 16); sl.rotation.x = Math.PI / 2; sl.position.set(-0.2, -0.12, 0.12); grp.add(sl);
    add(grp);
  }
  if (inst.has('ola')) { // laser altimeter: box + scanner lens
    const grp = new THREE.Group(); grp.position.set(-0.15, -0.75, z + 0.22);
    grp.add(box(0.38, 0.3, 0.38, M.silverFoil));
    const scan = cyl(0.11, 0.11, 0.08, M.black, 20); scan.rotation.x = Math.PI / 2; scan.position.z = 0.22; grp.add(scan);
    const l = cyl(0.08, 0.08, 0.02, M.lens, 20); l.rotation.x = Math.PI / 2; l.position.z = 0.27; grp.add(l);
    const lp = cyl(0.03, 0.03, 0.1, M.dark, 10); lp.rotation.x = Math.PI / 2; lp.position.set(0.14, 0.1, 0.22); grp.add(lp);
    add(grp);
  }
  if (inst.has('ovirs')) { // spectrometer: box with baffle
    const grp = new THREE.Group(); grp.position.set(0.35, -0.3, z + 0.2);
    grp.add(box(0.3, 0.36, 0.34, M.black));
    const baf = box(0.18, 0.18, 0.2, M.dark); baf.position.set(0, 0.04, 0.24); grp.add(baf);
    const ap = box(0.1, 0.1, 0.02, M.lens); ap.position.set(0, 0.04, 0.35); grp.add(ap);
    add(grp);
  }
  if (inst.has('otes')) { // thermal emission spectrometer: drum with telescope
    const grp = new THREE.Group(); grp.position.set(0.75, -0.3, z + 0.18);
    const d = cyl(0.15, 0.15, 0.32, M.white, 20); grp.add(d);
    const t = cyl(0.08, 0.1, 0.18, M.black, 16); t.rotation.x = Math.PI / 2; t.position.set(0, 0.04, 0.2); grp.add(t);
    const l = cyl(0.065, 0.065, 0.02, M.lens, 16); l.rotation.x = Math.PI / 2; l.position.set(0, 0.04, 0.3); grp.add(l);
    add(grp);
  }
  if (inst.has('rexis')) { // student X-ray spectrometer: tall tapered box with coded-aperture mask
    const grp = new THREE.Group(); grp.position.set(0.6, -0.95, z + 0.18);
    grp.add(box(0.24, 0.24, 0.3, M.silverFoil));
    const mask = box(0.24, 0.24, 0.02, M.dark); mask.position.z = 0.17; grp.add(mask);
    const tower = box(0.22, 0.22, 0.14, M.white); tower.position.z = 0.09; grp.add(tower);
    add(grp);
  }
  if (any) g.add(deck);
}

function buildTagsam(g, M) {
  // Shoulder at bottom of +Z face. Folded: arm points up along the face. Deployed: points -Y.
  const shoulder = new THREE.Group();
  shoulder.position.set(0.95, -BUS.h / 2 + 0.15, BUS.d / 2 + 0.55);
  g.add(shoulder);
  const base = cyl(0.09, 0.09, 0.2, M.metal, 16); base.rotation.z = Math.PI / 2; shoulder.add(base);
  const upperLen = TAGSAM_LEN * 0.52, foreLen = TAGSAM_LEN * 0.48;
  const upper = new THREE.Group(); shoulder.add(upper);
  const um = cyl(0.04, 0.045, upperLen, M.metal, 12); um.position.y = upperLen / 2; upper.add(um);
  const elbow = new THREE.Group(); elbow.position.y = upperLen; upper.add(elbow);
  const ej = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), M.dark); elbow.add(ej);
  const fm = cyl(0.035, 0.04, foreLen, M.metal, 12); fm.position.y = foreLen / 2; elbow.add(fm);
  const wrist = new THREE.Group(); wrist.position.y = foreLen; elbow.add(wrist);
  // sampler head: round "air filter" disc
  const head = new THREE.Group(); wrist.add(head);
  const hd = cyl(0.16, 0.16, 0.11, M.silverFoil, 28); hd.position.y = 0.08; head.add(hd);
  const hb = cyl(0.13, 0.15, 0.03, M.dark, 28); hb.position.y = 0.15; head.add(hb);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.015, 6, 28), M.metal); ring.rotation.x = Math.PI / 2; ring.position.y = 0.03; head.add(ring);
  // nitrogen bottles on the bus side
  for (let i = 0; i < 3; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), M.white);
    b.position.set(0.4 + i * 0.24, -BUS.h / 2 + 0.3, BUS.d / 2 + 0.12); g.add(b);
  }
  const arm = { shoulder, upper, elbow, wrist, head };
  const set = (t) => {
    t = THREE.MathUtils.clamp(t, 0, 1);
    // folded: upper points +Y (rotation 0), forearm folded down (≈ -170deg) so head sits near shoulder
    // deployed: whole arm straight down: upper rotation PI, forearm straight
    const e = t < 0.5 ? 0 : (t - 0.5) / 0.5;
    upper.rotation.x = THREE.MathUtils.lerp(0.08, Math.PI, Math.min(1, t * 1.6));
    elbow.rotation.x = THREE.MathUtils.lerp(-2.95, 0, THREE.MathUtils.smoothstep(t, 0.15, 0.95));
    wrist.rotation.x = THREE.MathUtils.lerp(Math.PI, 0, THREE.MathUtils.smoothstep(t, 0.3, 1)) * (1 - e * 0);
  };
  set(0);
  return { arm, set, head };
}

function populate(group, cfg = {}) {
  const M = materials();
  const inst = toSet(cfg.instruments ?? ['ocams', 'ola', 'ovirs', 'otes', 'rexis', 'tagsam', 'src']);
  const solar = cfg.solar ?? 'solar_large';
  const antenna = cfg.antenna ?? 'hga';
  const shield = cfg.shield ?? 1;

  const root = new THREE.Group(); root.name = 'spacecraft-parts';
  const anchors = buildBus(root, M, shield);
  const wings = buildSolar(root, M, solar);
  const ant = antenna === 'hga' ? buildHGA(root, M) : buildLGA(root, M);
  const src = inst.has('src') ? buildSRC(root, M) : null;
  buildInstruments(root, M, inst);
  const tag = inst.has('tagsam') ? buildTagsam(root, M) : null;
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  group.add(root);

  const ud = group.userData;
  ud.parts = root;
  ud.cfg = { instruments: [...inst], solar, antenna, shield };
  ud.tagsamArm = tag ? tag.arm.shoulder : null;
  ud.tagsamHead = tag ? tag.head : null;
  ud.src = src;
  ud.wings = wings;
  ud.antenna = ant;
  ud.thrusterAnchors = anchors;
  ud.extendTagsam = (t) => { if (tag) tag.set(t); };
  ud.setThrust = (v) => {
    for (const a of anchors) {
      const p = a.userData.plume;
      p.material.opacity = THREE.MathUtils.clamp(v, 0, 1) * 0.85;
      p.scale.set(1, 0.6 + v * 0.8 + Math.random() * 0.15 * v, 1);
    }
  };
}

function disposeTree(o) {
  o.traverse((c) => { if (c.isMesh) { c.geometry.dispose(); if (c.material && c.material.userData?.disposable) c.material.dispose(); } });
}

export function createSpacecraft(cfg = {}) {
  const group = new THREE.Group();
  group.name = 'OSIRIS-REx-like spacecraft';
  populate(group, cfg);
  return group;
}

export function updateSpacecraft(group, cfg = {}) {
  const old = group.userData.parts;
  if (old) { group.remove(old); disposeTree(old); }
  populate(group, { ...group.userData.cfg, ...cfg });
  return group;
}

// Engine glow sprite helper (used by scenes for backaway/thruster flashes)
export function makeThrusterGlow() {
  return glowSprite(new THREE.Color(2.2, 2.4, 3.4), 0.9, 2.0, 1.0);
}

export const SPACECRAFT_DIMENSIONS = { bus: BUS, solarSpan: SOLAR_SPAN, tagsamLength: TAGSAM_LEN };
