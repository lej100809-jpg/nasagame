// Procedural launch complexes + Florida dusk environment (1 unit = 1 m, Y up, pad at origin, +X = east / Atlantic).
//  createSLC41() – Cape Canaveral Space Launch Complex 41 (Atlas V, OSIRIS-REx 2016): Vertical Integration
//                  Facility, ~550 m rail line, Mobile Launch Platform, four lightning towers + catenary,
//                  LH2/LOX spheres, water tank, flame trench.
//  createLC39A() – Kennedy Launch Complex 39A (Falcon 9 / Heavy): raised hardstand, Fixed Service Structure
//                  with crew access arm, transporter-erector, lightning mast + catenary, water tower, flame trench.
// AI-assisted code (Claude) – see README.
import * as THREE from 'three';
import { canvasTexture, std, cyl, beams, latticeSegments } from './rockets.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function shade(o) { o.traverse?.((c) => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } }); return o; }
function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y + h / 2, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

let _M = null;
function M() {
  if (_M) return _M;
  const concreteTex = canvasTexture(512, 512, (g, w, h) => {
    g.fillStyle = '#9d9a93'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 6000; i++) { const v = 130 + Math.random() * 50; g.fillStyle = `rgba(${v},${v - 2},${v - 6},0.25)`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
    g.strokeStyle = 'rgba(60,60,60,0.35)'; g.lineWidth = 2;
    for (let k = 0; k <= 4; k++) { g.beginPath(); g.moveTo(0, (k * h) / 4); g.lineTo(w, (k * h) / 4); g.moveTo((k * w) / 4, 0); g.lineTo((k * w) / 4, h); g.stroke(); }
    for (let i = 0; i < 8; i++) { g.fillStyle = `rgba(40,35,30,${Math.random() * 0.12})`; g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 60, 0, 7); g.fill(); }
  }, { repeat: [8, 8] });
  const vifTex = canvasTexture(512, 1024, (g, w, h) => {
    g.fillStyle = '#d7d8d6'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 8) { g.fillStyle = x % 16 ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'; g.fillRect(x, 0, 4, h); }
    g.fillStyle = 'rgba(80,80,90,0.25)'; for (let k = 1; k < 10; k++) g.fillRect(0, (h * k) / 10, w, 4);
    const grd = g.createLinearGradient(0, h, 0, h * 0.85); grd.addColorStop(0, 'rgba(90,80,60,0.35)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  });
  _M = {
    concrete: std(0xffffff, { map: concreteTex, roughness: 0.95 }),
    concreteDark: std(0x6c6a66, { roughness: 0.95 }),
    trench: std(0x1d1b19, { roughness: 1 }),
    steel: std(0x6d7176, { roughness: 0.45, metalness: 0.75 }),
    steelDark: std(0x2d3034, { roughness: 0.5, metalness: 0.7 }),
    steelRed: std(0x8a3b26, { roughness: 0.6, metalness: 0.5 }),
    rail: std(0x4b4d50, { roughness: 0.3, metalness: 0.9 }),
    white: std(0xeeeeec, { roughness: 0.5, metalness: 0.15 }),
    vif: std(0xffffff, { map: vifTex, roughness: 0.7, metalness: 0.2 }),
    slot: new THREE.MeshStandardMaterial({ color: 0x0c0d10, roughness: 0.9, emissive: 0x332a18, emissiveIntensity: 0.6 }),
    wire: new THREE.LineBasicMaterial({ color: 0x24262a, transparent: true, opacity: 0.85 }),
    lamp: new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 5.2, 4) }),
    grassBank: std(0x50613a, { roughness: 1 }),
  };
  return _M;
}

function catenary(a, b, sag, segs = 24) {
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const p = new THREE.Vector3().lerpVectors(a, b, t);
    p.y -= sag * 4 * t * (1 - t);
    pts.push(p);
  }
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), M().wire);
}

function lightningTower(x, z, h, mat) {
  const g = new THREE.Group();
  g.add(beams(latticeSegments(4.5, 4.5, h, 6, { x, z, taper: 0.55 }), 0.35, mat));
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.35, 12, 8), M().steel);
  mast.position.set(x, h + 6, z); g.add(mast);
  // aircraft warning lamp
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.4, 0.2) }));
  lamp.position.set(x, h + 12.3, z); lamp.userData.blink = true; g.add(lamp);
  g.userData.top = V(x, h + 11, z);
  return g;
}

function sphereTank(x, z, r, legH, mat) {
  const g = new THREE.Group();
  const s = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), mat);
  s.position.set(x, legH + r, z); g.add(s);
  const segs = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    segs.push([V(x + Math.cos(a) * r * 0.95, 0, z + Math.sin(a) * r * 0.95), V(x + Math.cos(a) * r * 0.85, legH + r * 0.7, z + Math.sin(a) * r * 0.85)]);
  }
  g.add(beams(segs, 0.6, M().steel));
  return shade(g);
}

function floodPole(x, z, h) {
  const g = new THREE.Group();
  const p = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.35, h, 8), M().steel);
  p.position.set(x, h / 2, z); g.add(p);
  const head = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 0.6), M().lamp);
  head.position.set(x, h, z); head.lookAt(0, 40, 0); g.add(head);
  return g;
}

function smallBuilding(x, z, w, h, d, color = 0xcfcfc9) {
  const g = new THREE.Group();
  g.add(box(w, h, d, std(color, { roughness: 0.8 }), x, 0, z));
  g.add(box(w * 0.98, 0.4, d * 0.98, M().steelDark, x, h, z));
  return g;
}

// ------------------------------------------------------------------------------------------- SLC-41
export function createSLC41() {
  const m = M();
  const group = new THREE.Group(); group.name = 'SLC-41';

  // pad apron and flame trench (exhaust is ducted east under the MLP)
  const apron = box(170, 0.3, 150, m.concrete, 0, 0, 0); group.add(apron);
  group.add(box(14, 0.32, 70, m.trench, 0, 0, 0).translateZ(0)); // duct opening under MLP
  const trench = box(16, 0.33, 120, m.trench, 0, 0, 0); trench.rotation.y = Math.PI / 2; trench.position.x = 60; group.add(trench);
  group.add(box(16, 3, 2, m.concreteDark, 120, 0, -9), box(16, 3, 2, m.concreteDark, 120, 0, 9));

  // rail line to the VIF (~550 m west)
  const railBed = box(560, 0.35, 26, m.concreteDark, -275, 0, 0); group.add(railBed);
  const rails = [];
  for (const z of [-9.5, -7.5, 7.5, 9.5]) rails.push([V(-560, 0.6, z), V(20, 0.6, z)]);
  group.add(beams(rails, 0.35, m.rail));
  // sleepers
  const sl = [];
  for (let x = -555; x < 18; x += 4) { sl.push([V(x, 0.42, -11), V(x, 0.42, -6)]); sl.push([V(x, 0.42, 6), V(x, 0.42, 11)]); }
  const sleepers = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 0.35), m.concreteDark, sl.length);
  const m4 = new THREE.Matrix4();
  sl.forEach(([a, b], i) => { m4.makeScale(0.5, 0.18, 1); m4.setPosition((a.x + b.x) / 2, 0.42, (a.z + b.z) / 2); m4.scale(V(1, 1, 5 / 0.35 / 1)); sleepers.setMatrixAt(i, m4); });
  sleepers.receiveShadow = true; group.add(sleepers);

  // Vertical Integration Facility
  const vif = new THREE.Group(); vif.name = 'VIF';
  const vx = -585;
  vif.add(box(46, 89, 60, m.vif, vx, 0, 0));
  vif.add(box(30, 8, 40, m.vif, vx - 4, 89, 0)); // crane house
  vif.add(box(0.6, 82, 16, m.slot, vx + 23.1, 0, 0)); // tall door slot facing the pad
  vif.add(box(1.2, 82, 1.2, m.steelDark, vx + 23.3, 0, -8.6), box(1.2, 82, 1.2, m.steelDark, vx + 23.3, 0, 8.6));
  vif.add(box(30, 22, 40, std(0xc9c9c4, { roughness: 0.8 }), vx - 35, 0, 0)); // low bay
  const lampV = new THREE.Mesh(new THREE.SphereGeometry(0.8, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.4, 0.2) }));
  lampV.position.set(vx, 98, 0); lampV.userData.blink = true; vif.add(lampV);
  group.add(vif);

  // Mobile Launch Platform (rides the rails, carries the rocket)
  const mlp = new THREE.Group(); mlp.name = 'MLP';
  const deckY = 7;
  // deck frame around an exhaust opening
  mlp.add(box(22, 3, 6.5, m.steelDark, 0, 4, -8.75), box(22, 3, 6.5, m.steelDark, 0, 4, 8.75));
  mlp.add(box(7.5, 3, 11, m.steelDark, -7.25, 4, 0), box(5, 3, 11, m.steelDark, 8.5, 4, 0));
  mlp.add(box(22, 0.25, 24, m.steel, 0, 6.9, 0).translateY(0)); // top plate (hole hidden by rocket base)
  mlp.children[mlp.children.length - 1].scale.set(1, 1, 1);
  // legs / bogies
  for (const x of [-9, 9]) for (const z of [-8.5, 8.5]) { mlp.add(box(2.5, 4, 2.5, m.steelDark, x, 0.6, z)); mlp.add(box(4, 1, 3, m.rail, x, 0.5, z)); }
  // umbilical mast with swing arms to the Centaur
  const mastSegs = latticeSegments(3.2, 3.2, 44, 4, { x: -7.5, z: 0, y: deckY });
  mlp.add(beams(mastSegs, 0.28, m.steelRed));
  const arm1 = box(5.2, 0.8, 1.2, m.steel, -4.2, deckY + 38.8, 0);
  const arm2 = box(5.6, 0.8, 1.2, m.steel, -4.0, deckY + 33.6, 0);
  mlp.add(arm1, arm2);
  const lampM = new THREE.Mesh(new THREE.SphereGeometry(0.45, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.4, 0.2) }));
  lampM.position.set(-7.5, deckY + 45, 0); lampM.userData.blink = true; mlp.add(lampM);
  group.add(mlp);
  // the deck top plate has an opening below the engines: emulate with a dark inset
  mlp.add(box(7.4, 0.27, 6.5, m.trench, 1.1, 6.92, 0));
  mlp.userData.umbilicalArms = [arm1, arm2];

  // four lightning protection towers + catenary wires
  const towers = [[-55, -55], [55, -55], [55, 55], [-55, 55]].map(([x, z]) => { const t = lightningTower(x, z, 88, m.steel); group.add(t); return t; });
  for (let i = 0; i < 4; i++) group.add(catenary(towers[i].userData.top, towers[(i + 1) % 4].userData.top, 7));
  group.add(catenary(towers[0].userData.top, towers[2].userData.top, 10), catenary(towers[1].userData.top, towers[3].userData.top, 10));
  for (const t of towers) {
    const top = t.userData.top; const out = V(top.x * 2.1, 0.5, top.z * 2.1);
    group.add(catenary(top, out, 3));
  }

  // propellant storage: LH2 + LOX spheres, RP-1 tanks, sound-suppression water tank
  group.add(sphereTank(-70, -150, 10, 4, m.white));
  group.add(sphereTank(70, -150, 9, 4, m.white));
  group.add(cyl(6, 6, 9, m.white, 0, 24).translateX(0)); group.children[group.children.length - 1].position.set(130, 4.5, -120);
  const water = cyl(12, 12, 22, std(0xd8d6cf, { roughness: 0.6 }), 0, 40); water.position.set(140, 11, 120); group.add(water);
  group.add(smallBuilding(-120, 95, 30, 9, 18), smallBuilding(-160, -90, 22, 7, 14), smallBuilding(95, -70, 14, 6, 10));
  for (const [x, z] of [[-75, 0], [75, -20], [-34, 80], [34, -80]]) group.add(floodPole(x, z, 22));

  // roads
  const road = std(0x8c8578, { roughness: 1 });
  group.add(box(10, 0.25, 900, road, -330, 0, 0).translateX(0));
  group.add(box(700, 0.25, 9, road, 0, 0, 160));

  shade(group);
  const padPosition = V(0, deckY + 0.2, 0);
  // rocket parent: inside MLP at deck height
  const rocketParent = new THREE.Object3D(); rocketParent.position.set(0, deckY + 0.2, 0); mlp.add(rocketParent);
  return { group, padPosition, rocketParent, mlp, siteName: 'Space Launch Complex 41, Cape Canaveral', blinkers: collectBlinkers(group) };
}

// ------------------------------------------------------------------------------------------- LC-39A
export function createLC39A() {
  const m = M();
  const group = new THREE.Group(); group.name = 'LC-39A';
  const H = 14; // raised hardstand height

  // octagonal raised pad mound
  const mound = new THREE.Mesh(new THREE.CylinderGeometry(78, 125, H, 8), m.grassBank);
  mound.position.y = H / 2; mound.rotation.y = Math.PI / 8; group.add(mound);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(78, 78, 0.4, 8), m.concrete);
  top.position.y = H + 0.2; top.rotation.y = Math.PI / 8; group.add(top);
  // ramp from the west (crawlerway)
  const ramp = box(30, 0.6, 140, m.concreteDark, 0, 0, 0);
  ramp.rotation.z = Math.atan2(H, 140); ramp.rotation.y = Math.PI / 2; ramp.position.set(-140, H / 2 - 0.6, 0);
  ramp.rotation.set(0, 0, 0); ramp.scale.set(1, 1, 1);
  const rampMesh = new THREE.Mesh(new THREE.BoxGeometry(150, 0.8, 26), m.concreteDark);
  rampMesh.position.set(-145, H / 2, 0); rampMesh.rotation.z = Math.atan2(H, 150); group.add(rampMesh);
  // flame trench (north-south through the hardstand)
  group.add(box(12, 0.45, 150, m.trench, 0, H, 0));
  group.add(box(2, 2.5, 150, m.concreteDark, -7, H, 0), box(2, 2.5, 150, m.concreteDark, 7, H, 0));

  // launch mount / hold-downs
  const mountY = H + 0.4;
  const mount = new THREE.Group();
  for (const [x, z] of [[-5.5, -5.5], [5.5, -5.5], [5.5, 5.5], [-5.5, 5.5]]) mount.add(box(2, 6, 2, m.steelDark, x, mountY, z));
  mount.add(box(13, 1.2, 2, m.steelDark, 0, mountY + 5, -5.5), box(13, 1.2, 2, m.steelDark, 0, mountY + 5, 5.5));
  mount.add(box(2, 1.2, 13, m.steelDark, -5.5, mountY + 5, 0), box(2, 1.2, 13, m.steelDark, 5.5, mountY + 5, 0));
  group.add(mount);
  const deckY = mountY + 6.2;

  // Fixed Service Structure (north side), ~105 m, with crew access arm
  const fss = new THREE.Group(); fss.name = 'FSS';
  const fz = -24;
  fss.add(beams(latticeSegments(12, 12, 105, 6, { x: 0, z: fz, y: mountY }), 0.5, m.steelDark));
  for (let y = mountY + 6; y < mountY + 105; y += 6) fss.add(box(11.6, 0.35, 11.6, std(0x3e4146, { roughness: 0.8 }), 0, y, fz));
  // elevator shaft + stair tower
  fss.add(box(3, 105, 3, std(0x8b8e92, { roughness: 0.6, metalness: 0.4 }), 4, mountY, fz - 4));
  // crew access arm (white tube) + white room
  const caaY = mountY + 72;
  const caa = new THREE.Mesh(new THREE.BoxGeometry(2.6, 3, 16), m.white); caa.position.set(0, caaY, fz + 10); fss.add(caa);
  fss.add(box(4, 4, 3, m.white, 0, caaY - 2, fz + 18.6));
  // hammerhead crane / top + lightning mast
  fss.add(box(14, 4, 14, m.steelDark, 0, mountY + 105, fz));
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 1.0, 26, 8), m.steel);
  mast.position.set(0, mountY + 109 + 13, fz); fss.add(mast);
  const lampF = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.4, 0.2) }));
  lampF.position.set(0, mountY + 135.5, fz); lampF.userData.blink = true; fss.add(lampF);
  group.add(fss);
  const mastTop = V(0, mountY + 135, fz);
  group.add(catenary(mastTop, V(-210, 1, fz - 140), 18), catenary(mastTop, V(210, 1, fz + 140), 18));
  group.add(catenary(mastTop, V(-150, 1, 180), 16), catenary(mastTop, V(170, 1, -190), 16));

  // transporter-erector strongback (west side)
  const te = new THREE.Group(); te.name = 'TE';
  te.add(beams(latticeSegments(3, 3.2, 74, 3.5, { x: -6.2, z: 0, y: mountY }), 0.32, std(0x18191c, { roughness: 0.6, metalness: 0.5 })));
  for (const y of [20, 44, 62]) te.add(box(3.8, 0.8, 1.2, std(0x18191c), -3.6, mountY + y, 0));
  te.add(box(6, 3, 8, std(0x18191c), -6.2, mountY - 0.5, 0)); // hinge base
  group.add(te);

  // water tower (sphere on legs) + RP-1 / LOX tanks
  group.add(sphereTank(150, -110, 9, 68, std(0xe6e4dc, { roughness: 0.55 })));
  group.add(sphereTank(-110, 150, 10, 3, m.white), sphereTank(-60, 165, 9, 3, m.white));
  const rp1 = cyl(5, 5, 14, m.white, 0, 24); rp1.rotation.z = Math.PI / 2; rp1.position.set(110, 9, 120); group.add(rp1);
  const rp1b = rp1.clone(); rp1b.position.z = 133; group.add(rp1b);
  group.add(smallBuilding(-190, -80, 40, 12, 24, 0xd5d3cc), smallBuilding(-60, 190, 18, 6, 12));
  for (const [x, z] of [[-60, -40], [60, 40], [40, -60], [-40, 60]]) group.add(floodPole(x, z, 26).translateY(H));
  // perimeter road
  const road = std(0x8c8578, { roughness: 1 });
  const ring = new THREE.Mesh(new THREE.RingGeometry(150, 160, 48), road); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.12; group.add(ring);
  group.add(box(9, 0.25, 900, road, -150, 0, -450 + 300));

  shade(group);
  const rocketParent = new THREE.Object3D(); rocketParent.position.set(0, deckY, 0); group.add(rocketParent);
  return { group, padPosition: V(0, deckY, 0), rocketParent, te, siteName: 'Launch Complex 39A, Kennedy Space Center', blinkers: collectBlinkers(group) };
}

function collectBlinkers(group) { const out = []; group.traverse((o) => { if (o.userData?.blink) out.push(o); }); return out; }

// ------------------------------------------------------------------------------------------- environment
export function createEnvironment(scene, opts = {}) {
  const clear = opts.clear || ((x, z) => Math.hypot(x, z) < 210 || (Math.abs(z) < 25 && x < 0 && x > -640));
  const env = new THREE.Group(); env.name = 'Environment';
  // OSIRIS-REx launched 7:05 pm EDT: sun just above the western horizon (-X)
  const sunDir = V(-0.92, 0.07, 0.38).normalize();

  // --- dusk sky dome
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sunDir: { value: sunDir }, time: { value: 0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }`,
    fragmentShader: `
      varying vec3 vDir; uniform vec3 sunDir; uniform float time;
      float hash(vec3 p){ p = fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.2, 1.0);
        float sunAmt = max(dot(d, sunDir), 0.0);
        vec3 zenith = vec3(0.012, 0.03, 0.10);
        vec3 mid = vec3(0.10, 0.17, 0.36);
        vec3 horizSun = vec3(1.6, 0.62, 0.20);
        vec3 horizAway = vec3(0.55, 0.36, 0.48); // belt of Venus
        vec3 horiz = mix(horizAway, horizSun, pow(sunAmt, 2.0));
        float t = pow(clamp(h, 0.0, 1.0), 0.45);
        vec3 col = mix(horiz, mix(mid, zenith, smoothstep(0.25, 1.0, t)), smoothstep(0.0, 0.5, t));
        // earth shadow band opposite the sun
        float away = max(dot(d, -sunDir), 0.0);
        col = mix(col, vec3(0.20,0.24,0.40), smoothstep(0.08,0.0,h) * away * 0.6);
        // sun glow + disc
        col += vec3(1.2,0.5,0.18) * pow(sunAmt, 6.0) * 0.9 * smoothstep(0.5,-0.02,h);
        col += vec3(2.4,1.6,0.9) * smoothstep(0.9993, 0.9997, sunAmt);
        // faint first stars
        vec3 gq = d*700.0; vec3 sp = floor(gq); float s = hash(sp); float sd = length(fract(gq)-0.5);
        col += vec3(0.9,0.92,1.0) * step(0.9975, s) * smoothstep(0.22, 0.0, sd) * smoothstep(0.3, 0.9, h) * (0.6+0.4*sin(time*2.0+s*50.0));
        if (h < 0.0) col = mix(col, vec3(0.05,0.07,0.08), smoothstep(0.0,-0.05,h));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(15000, 48, 24), skyMat);
  sky.renderOrder = -10; sky.frustumCulled = false;
  env.add(sky);

  // --- ground (scrub / grass with sandy patches)
  const groundTex = canvasTexture(1024, 1024, (g, w, h) => {
    g.fillStyle = '#4a5733'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 260; i++) { const r = 20 + Math.random() * 90; g.fillStyle = `rgba(${90 + Math.random() * 60},${95 + Math.random() * 40},${50 + Math.random() * 30},0.18)`; g.beginPath(); g.arc(Math.random() * w, Math.random() * h, r, 0, 7); g.fill(); }
    for (let i = 0; i < 40000; i++) { const v = Math.random(); g.fillStyle = v < 0.5 ? 'rgba(30,45,22,0.35)' : 'rgba(120,125,70,0.18)'; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
  }, { repeat: [70, 70] });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(16000, 16000), std(0xffffff, { map: groundTex, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; env.add(ground);

  // beach + Atlantic ocean to the east
  const beach = new THREE.Mesh(new THREE.PlaneGeometry(140, 16000), std(0xcdbb94, { roughness: 1 }));
  beach.rotation.x = -Math.PI / 2; beach.position.set(1030, 0.08, 0); env.add(beach);
  const waterNormal = canvasTexture(512, 512, (g, w, h) => {
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const nx = Math.sin(x * 0.07 + Math.sin(y * 0.05) * 2) * 0.5 + Math.sin((x + y) * 0.13) * 0.25;
      const ny = Math.cos(y * 0.09 + Math.sin(x * 0.04) * 2) * 0.5 + Math.cos((x - y) * 0.11) * 0.25;
      const i = (y * w + x) * 4; img.data[i] = 128 + nx * 60; img.data[i + 1] = 128 + ny * 60; img.data[i + 2] = 255; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }, { repeat: [120, 120], srgb: false });
  const oceanMat = new THREE.MeshStandardMaterial({ color: 0x0f2c47, roughness: 0.18, metalness: 0.35, normalMap: waterNormal, normalScale: new THREE.Vector2(0.6, 0.6) });
  const ocean = new THREE.Mesh(new THREE.PlaneGeometry(14000, 16000), oceanMat);
  ocean.rotation.x = -Math.PI / 2; ocean.position.set(1100 + 7000, 0.15, 0); ocean.receiveShadow = true; env.add(ocean);
  // Banana River lagoon to the west
  const lagoon = new THREE.Mesh(new THREE.PlaneGeometry(900, 5000), oceanMat);
  lagoon.rotation.x = -Math.PI / 2; lagoon.position.set(-1500, 0.12, 400); env.add(lagoon);

  // scrub / palmetto clumps (instanced), kept away from pads and roads
  const clumpGeo = new THREE.IcosahedronGeometry(1, 0);
  const clumps = new THREE.InstancedMesh(clumpGeo, std(0x2f3d22, { roughness: 1, flatShading: true }), 2600);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  let n = 0;
  while (n < 2600) {
    const x = (Math.random() - 0.5) * 2800, z = (Math.random() - 0.5) * 2800;
    if (clear(x, z) || x > 940 || (x < -1050 && x > -1950)) continue;
    const sc = 2 + Math.random() * 5;
    p.set(x, sc * 0.4, z); s.set(sc * (1 + Math.random()), sc * (0.6 + Math.random() * 0.6), sc * (1 + Math.random()));
    q.setFromAxisAngle(V(0, 1, 0), Math.random() * 6.28);
    m4.compose(p, q, s); clumps.setMatrixAt(n++, m4);
  }
  clumps.receiveShadow = true; env.add(clumps);

  // --- lights
  const sun = new THREE.DirectionalLight(0xffb27a, 2.6);
  sun.position.copy(sunDir).multiplyScalar(500);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera; sc.left = -180; sc.right = 180; sc.top = 180; sc.bottom = -60; sc.near = 50; sc.far = 1400;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
  env.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0x6f86c2, 0x2b2418, 0.75);
  env.add(hemi);
  // xenon floodlights on the vehicle
  const flood1 = new THREE.SpotLight(0xdfe8ff, 1100, 320, 0.2, 0.7, 1.6);
  flood1.position.set(70, 8, 90); flood1.target.position.set(0, 35, 0);
  const flood2 = new THREE.SpotLight(0xfff0d8, 800, 320, 0.2, 0.7, 1.6);
  flood2.position.set(-60, 8, 95); flood2.target.position.set(0, 35, 0);
  env.add(flood1, flood1.target, flood2, flood2.target);

  scene.add(env);
  scene.fog = new THREE.FogExp2(0x8a7f8e, 0.00028);
  scene.background = new THREE.Color(0x0b1430);

  let t = 0;
  return {
    group: env, sun, sunDir, flood: [flood1, flood2],
    update(dt) {
      t += dt;
      waterNormal.offset.set(t * 0.004, t * 0.0025);
      skyMat.uniforms.time.value = t;
    },
    dispose() { scene.remove(env); },
  };
}
