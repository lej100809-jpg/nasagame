// First-person view rig: gloved hands + forearms holding a rugged mission tablet.
// Tactical-FPS style motion (sway lag, figure-8 bob, sprint pose, crouch, breathing, landing dip).
// Procedural geometry only. (AI-assisted: Claude.)
//
// Integration: camera.near should be 0.05 (rig sits 0.25–0.45 m in front of the eye).
//   const rig = createFPRig(); camera.add(rig.group); scene.add(camera);
//   rig.update(dt, { speed, sprint, crouch, grounded, lookDX, lookDY, strafe, time });
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ---------------------------------------------------------------- springs
// Semi-implicit damped spring, sub-stepped so it is framerate independent.
class Spring {
  constructor(value = 0, stiffness = 120, dampingRatio = 1) {
    this.x = value; this.v = 0; this.target = value;
    this.k = stiffness; this.c = 2 * Math.sqrt(stiffness) * dampingRatio;
  }
  step(dt) {
    let t = dt;
    while (t > 0) {
      const h = Math.min(t, 1 / 240);
      const a = this.k * (this.target - this.x) - this.c * this.v;
      this.v += a * h; this.x += this.v * h; t -= h;
    }
    return this.x;
  }
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

// ---------------------------------------------------------------- materials
function noiseTex(base, variance, size = 128, seed = 1) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  const img = g.createImageData(size, size);
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < size * size; i++) {
    const n = base + (rnd() - 0.5) * variance;
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = clamp(n, 0, 255);
    img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function fabricTex(color, stripe, size = 256) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = color; g.fillRect(0, 0, size, size);
  // twill weave
  g.globalAlpha = 0.08;
  for (let i = -size; i < size * 2; i += 4) { g.strokeStyle = i % 8 ? '#000' : '#fff'; g.beginPath(); g.moveTo(i, 0); g.lineTo(i + size, size); g.stroke(); }
  g.globalAlpha = 1;
  if (stripe) { g.fillStyle = stripe; g.fillRect(0, size * 0.62, size, size * 0.05); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function patchTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#0b1622'; g.beginPath(); g.arc(64, 64, 62, 0, Math.PI * 2); g.fill();
  g.strokeStyle = '#39c5bb'; g.lineWidth = 7; g.beginPath(); g.arc(64, 64, 55, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#39c5bb'; g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('MMB', 64, 58);
  g.fillStyle = '#ff5fa2'; g.font = 'bold 22px sans-serif'; g.fillText('☆', 64, 90);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function defaultScreen() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 640;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 640); grd.addColorStop(0, '#061220'); grd.addColorStop(1, '#030810');
  g.fillStyle = grd; g.fillRect(0, 0, 1024, 640);
  g.strokeStyle = 'rgba(57,197,187,.18)'; g.lineWidth = 1;
  for (let x = 0; x < 1024; x += 48) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 640); g.stroke(); }
  for (let y = 0; y < 640; y += 48) { g.beginPath(); g.moveTo(0, y); g.lineTo(1024, y); g.stroke(); }
  g.fillStyle = '#39c5bb'; g.font = 'bold 44px monospace'; g.fillText('MISSION TABLET', 48, 90);
  g.fillStyle = '#cfe6ee'; g.font = '30px monospace';
  ['OBJECTIVE  ▸ Mission Control', 'WINDOW     2035-09-24', 'LAUNCHER   Atlas V 411', 'MASS       2,110 / 2,153 kg', 'Δv         1.51 / 1.47 km/s'].forEach((l, i) => g.fillText(l, 48, 170 + i * 56));
  g.fillStyle = '#ff5fa2'; g.font = '26px monospace'; g.fillText('[TAB] lower tablet', 48, 590);
  return c;
}

// ---------------------------------------------------------------- build
export function createFPRig() {
  const group = new THREE.Group();
  group.name = 'fpRig';
  const sway = new THREE.Group(); group.add(sway);           // all procedural offsets
  const tablet = new THREE.Group(); sway.add(tablet);         // tablet pose

  const roughNoise = noiseTex(200, 70, 128, 7);
  const gloveRough = noiseTex(215, 50, 128, 3);
  const matTabletBody = new THREE.MeshStandardMaterial({ color: 0x1a1d21, roughness: 0.5, metalness: 0.4, roughnessMap: roughNoise });
  const matBumper = new THREE.MeshStandardMaterial({ color: 0x202328, roughness: 0.92, metalness: 0.0, roughnessMap: roughNoise });
  const matAccent = new THREE.MeshStandardMaterial({ color: 0x39c5bb, roughness: 0.5, metalness: 0.1, emissive: 0x0b3d39, emissiveIntensity: 0.6 });
  const matBezel = new THREE.MeshStandardMaterial({ color: 0x07090c, roughness: 0.25, metalness: 0.2 });
  const matGlove = new THREE.MeshStandardMaterial({ color: 0x121417, roughness: 0.9, metalness: 0.02, roughnessMap: gloveRough });
  const matGlovePad = new THREE.MeshStandardMaterial({ color: 0x1c1f23, roughness: 0.75, metalness: 0.05 });
  const matKnuckle = new THREE.MeshStandardMaterial({ color: 0x2b3036, roughness: 0.55, metalness: 0.1 });
  const matSleeve = new THREE.MeshStandardMaterial({ color: 0xffffff, map: fabricTex('#1a2846', '#2f4572'), roughness: 0.93, metalness: 0.0 });
  const matCuff = new THREE.MeshStandardMaterial({ color: 0x141a26, roughness: 0.85 });
  const matPatch = new THREE.MeshStandardMaterial({ map: patchTex(), roughness: 0.8, transparent: true });

  const W = 0.32, H = 0.2, D = 0.022;
  // body
  const body = new THREE.Mesh(new RoundedBoxGeometry(W, H, D, 4, 0.012), matTabletBody);
  tablet.add(body);
  // bezel + screen
  const bezel = new THREE.Mesh(new RoundedBoxGeometry(W - 0.018, H - 0.018, 0.004, 2, 0.006), matBezel);
  bezel.position.z = D / 2 - 0.001; tablet.add(bezel);
  let screenCanvas = defaultScreen();
  const screenTex = new THREE.CanvasTexture(screenCanvas);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  screenTex.anisotropy = 8;
  const matScreen = new THREE.MeshBasicMaterial({ map: screenTex, toneMapped: false });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.04, (W - 0.04) / 1.6), matScreen);
  screen.position.z = D / 2 + 0.0016; tablet.add(screen);
  // glass sheen
  const sheen = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.04, (W - 0.04) / 1.6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.035, depthWrite: false }));
  sheen.position.z = D / 2 + 0.0022; sheen.rotation.z = 0.0; tablet.add(sheen);
  // rubber bumpers on corners
  const bumpGeo = new RoundedBoxGeometry(0.05, 0.05, D + 0.012, 3, 0.012);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
    const b = new THREE.Mesh(bumpGeo, matBumper);
    b.position.set(sx * (W / 2 - 0.016), sy * (H / 2 - 0.016), 0); tablet.add(b);
  }
  // side grip rails + teal accent stripe
  for (const sx of [-1, 1]) {
    const rail = new THREE.Mesh(new RoundedBoxGeometry(0.016, H - 0.07, D + 0.006, 2, 0.006), matBumper);
    rail.position.set(sx * (W / 2 + 0.002), 0, 0); tablet.add(rail);
    const acc = new THREE.Mesh(new THREE.BoxGeometry(0.003, H - 0.1, 0.004), matAccent);
    acc.position.set(sx * (W / 2 + 0.01), 0, 0.006); tablet.add(acc);
  }
  // back plate detail: handle strap
  const strap = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.05, 0.012, 2, 0.006), matBumper);
  strap.position.set(0, -0.01, -D / 2 - 0.006); tablet.add(strap);
  // tiny status LED
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.0028, 8, 8), new THREE.MeshBasicMaterial({ color: 0x7ff3e9, toneMapped: false }));
  led.position.set(W / 2 - 0.03, H / 2 - 0.006, D / 2 + 0.001); tablet.add(led);

  // ---------------- gloved hands (children of tablet)
  function makeHand(side) {
    const h = new THREE.Group();
    const s = side; // -1 left, +1 right
    // palm behind the tablet
    const palm = new THREE.Mesh(new RoundedBoxGeometry(0.075, 0.095, 0.032, 3, 0.012), matGlove);
    palm.position.set(s * (W / 2 - 0.015), -0.012, -D / 2 - 0.02); palm.rotation.z = s * 0.12; h.add(palm);
    // wrap around the side edge (index side knuckles)
    const wrap = new THREE.Mesh(new RoundedBoxGeometry(0.03, 0.1, 0.05, 3, 0.012), matGlove);
    wrap.position.set(s * (W / 2 + 0.018), -0.01, -0.006); wrap.rotation.z = s * 0.1; h.add(wrap);
    // knuckle armour pad
    const pad = new THREE.Mesh(new RoundedBoxGeometry(0.012, 0.075, 0.034, 2, 0.005), matKnuckle);
    pad.position.set(s * (W / 2 + 0.034), -0.008, -0.008); pad.rotation.z = s * 0.1; h.add(pad);
    // finger tips curling over the front of the bumper rail
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.0072, 0.01, 4, 8), matGlove);
      f.rotation.z = Math.PI / 2;
      f.position.set(s * (W / 2 + 0.006), 0.034 - i * 0.02, D / 2 + 0.005);
      f.rotation.y = s * 0.35;
      h.add(f);
    }
    // thumb resting on the lower rubber bumper corner
    const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.0095, 0.03, 4, 10), matGlovePad);
    thumb.position.set(s * (W / 2 - 0.014), -H / 2 + 0.028, D / 2 + 0.012);
    thumb.rotation.z = s * -0.75; h.add(thumb);
    // wrist / cuff anchor (where the forearm starts)
    const wrist = new THREE.Object3D();
    wrist.position.set(s * (W / 2 + 0.012), -0.07, -0.04);
    h.add(wrist);
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.034, 0.03, 16), matCuff);
    cuff.position.copy(wrist.position); h.add(cuff);
    h.userData = { wrist, cuff };
    return h;
  }
  const handL = makeHand(-1), handR = makeHand(1);
  tablet.add(handL, handR);

  // ---------------- forearms (in sway space, stretched wrist → elbow each frame)
  function makeArm(side) {
    const arm = new THREE.Group();
    const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.043, 0.052, 1, 18, 1, true), matSleeve);
    const capEnd = new THREE.Mesh(new THREE.SphereGeometry(0.052, 14, 10), matSleeve);
    arm.add(sleeve, capEnd);
    // folds
    const folds = [];
    for (let i = 0; i < 3; i++) {
      const fold = new THREE.Mesh(new THREE.TorusGeometry(0.046, 0.004, 6, 18), matSleeve);
      fold.rotation.x = Math.PI / 2; arm.add(fold); folds.push(fold);
    }
    let patch = null;
    if (side > 0) {
      patch = new THREE.Mesh(new THREE.CircleGeometry(0.024, 24), matPatch);
      arm.add(patch);
    }
    arm.userData = { sleeve, capEnd, folds, patch, side };
    return arm;
  }
  const armL = makeArm(-1), armR = makeArm(1);
  sway.add(armL, armR);
  const elbowL = new THREE.Vector3(-0.3, -0.5, 0.12);
  const elbowR = new THREE.Vector3(0.3, -0.5, 0.12);

  // light from the screen onto the gloves
  const screenLight = new THREE.PointLight(0x9feef0, 0.12, 0.7, 2);
  screenLight.position.set(0, 0, 0.12); tablet.add(screenLight);
  // soft fill so the rig never goes pitch black in dark interiors
  const fill = new THREE.PointLight(0xc8d8ff, 0.12, 1.4, 2);
  fill.position.set(0.05, 0.2, 0.1); sway.add(fill);

  group.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; o.frustumCulled = false; o.renderOrder = 10; } });

  // ---------------- poses (camera space; camera looks down -Z)
  const LOW = { p: new THREE.Vector3(0.155, -0.215, -0.37), r: new THREE.Euler(-1.02, -0.32, 0.2) };
  const HIGH = { p: new THREE.Vector3(0.0, -0.028, -0.3), r: new THREE.Euler(-0.1, 0, 0) };
  const SPRINT = { p: new THREE.Vector3(0.03, -0.035, 0.03), r: new THREE.Euler(-0.32, 0.6, 0.42) };
  const PIVOT = new THREE.Vector3(0.08, -0.16, -0.33); // rotate around the hands, not the eye

  const sp = {
    raise: new Spring(0, 90, 1),
    sprint: new Spring(0, 55, 0.95),
    crouch: new Spring(0, 70, 1),
    bobW: new Spring(0, 30, 1),
    swayX: new Spring(0, 90, 0.62),
    swayY: new Spring(0, 90, 0.62),
    roll: new Spring(0, 70, 0.7),
    land: new Spring(0, 160, 0.55),
  };
  let raised = false, phase = 0, wasGrounded = true, t = 0;
  const tmpV = new THREE.Vector3(), tmpQ = new THREE.Quaternion(), qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qs = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);

  function placeArm(arm, hand, elbow) {
    hand.userData.wrist.getWorldPosition(tmpV);
    sway.worldToLocal(tmpV);
    const wrist = tmpV.clone();
    const dir = new THREE.Vector3().subVectors(elbow, wrist);
    const len = dir.length();
    dir.normalize();
    const { sleeve, capEnd, folds, patch, side } = arm.userData;
    arm.position.copy(wrist);
    arm.quaternion.setFromUnitVectors(up, dir);
    sleeve.scale.set(1, len, 1); sleeve.position.set(0, len / 2, 0);
    capEnd.position.set(0, len, 0);
    folds.forEach((f, i) => f.position.set(0, 0.06 + i * 0.07, 0));
    if (patch) {
      // on the outer side of the right sleeve, facing camera-ish
      patch.position.set(side * 0.047, 0.17, 0.0);
      patch.rotation.set(0, side * Math.PI / 2, 0);
    }
  }

  function update(dt, s = {}) {
    dt = Math.min(dt, 0.05);
    t = s.time != null ? s.time : t + dt;
    const speed = s.speed || 0;
    const sprinting = !!s.sprint && speed > 0.5;
    const grounded = s.grounded !== false;

    sp.raise.target = raised && !sprinting ? 1 : 0;
    sp.sprint.target = sprinting ? 1 : 0;
    sp.crouch.target = s.crouch ? 1 : 0;
    sp.bobW.target = grounded ? clamp(speed / 3.4, 0, sprinting ? 2.1 : 1.3) : 0;
    // look sway: rig lags behind the view
    const dx = clamp(s.lookDX || 0, -120, 120), dy = clamp(s.lookDY || 0, -120, 120);
    const swayGain = raised ? 0.00028 : 0.00055;
    sp.swayX.target = clamp(-dx * swayGain, -0.035, 0.035);
    sp.swayY.target = clamp(dy * swayGain, -0.03, 0.03);
    sp.roll.target = clamp(-dx * 0.0016, -0.1, 0.1) + clamp(-(s.strafe || 0) * 0.06, -0.06, 0.06);
    if (grounded && !wasGrounded) sp.land.v -= 0.9;
    wasGrounded = grounded;

    for (const k in sp) sp[k].step(dt);
    const R = clamp(sp.raise.x, -0.1, 1.1), S = clamp(sp.sprint.x, -0.1, 1.1), C = sp.crouch.x, B = Math.max(0, sp.bobW.x);

    // base pose lerp
    tablet.position.lerpVectors(LOW.p, HIGH.p, R);
    qa.setFromEuler(LOW.r); qb.setFromEuler(HIGH.r);
    tablet.quaternion.slerpQuaternions(qa, qb, clamp(R, 0, 1));

    // procedural offsets on the sway group
    const freq = sprinting ? 1.55 : 1.9; // rad per metre travelled (sprint = longer strides)
    phase += dt * speed * freq * (grounded ? 1 : 0.2);
    const ampX = (raised ? 0.004 : 0.009) * B * (1 + S * 0.8);
    const ampY = (raised ? 0.003 : 0.007) * B * (1 + S * 1.1);
    const bx = Math.sin(phase) * ampX;
    const by = Math.sin(phase * 2) * ampY;
    const breath = Math.sin(t * 1.55) * 0.0022 * (1 - B * 0.5);
    const breath2 = Math.sin(t * 0.73 + 1.3) * 0.0012;

    sway.position.set(
      bx + sp.swayX.x + SPRINT.p.x * S,
      by + breath + sp.swayY.x - 0.018 * C + sp.land.x * 0.06 + SPRINT.p.y * S,
      SPRINT.p.z * S + Math.abs(by) * 0.4
    );
    const ex = sp.swayY.x * -2.2 + breath2 * 2 + SPRINT.r.x * S + Math.sin(phase * 2) * 0.012 * B + sp.land.x * -0.25;
    const ey = sp.swayX.x * 2.4 + SPRINT.r.y * S + Math.sin(phase) * 0.018 * B;
    const ez = sp.roll.x + SPRINT.r.z * S + Math.sin(phase) * 0.02 * B * (1 + S) + C * 0.05;
    qs.setFromEuler(new THREE.Euler(ex, ey, ez, 'YXZ'));
    sway.quaternion.copy(qs);
    // pivot correction: position += P - q·P
    const pv = PIVOT.clone().applyQuaternion(qs);
    sway.position.add(PIVOT).sub(pv);

    // elbows follow sprint pose a bit
    const eL = elbowL.clone(); const eR = elbowR.clone();
    eL.y -= S * 0.05 + (1 - R) * 0.02; eR.y -= S * 0.05;
    eL.x -= R * 0.04; eR.x += R * 0.04;
    eL.z += (1 - R) * -0.05; eR.z += (1 - R) * -0.08;
    group.updateMatrixWorld(true);
    placeArm(armL, handL, eL);
    placeArm(armR, handR, eR);

    // screen brightness flicker-free pulse on LED
    led.material.color.setHSL(0.48, 0.8, 0.55 + Math.sin(t * 3) * 0.15);
  }

  return {
    group,
    update,
    setTablet(canvas) {
      screenCanvas = canvas;
      screenTex.image = canvas;
      screenTex.needsUpdate = true;
    },
    tabletNeedsUpdate() { screenTex.needsUpdate = true; },
    raise(v) { raised = !!v; },
    isRaised() { return raised; },
    get canvas() { return screenCanvas; },
    dispose() {
      group.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); } });
      screenTex.dispose();
    },
  };
}
