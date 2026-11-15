// CampusScene – first-person NASA-style launch campus at dusk.
// Plaza → Mission Control Center (west) · Payload Processing Facility (east) · Rocket Garden avenue → launch pad (north).
// World: 1 unit = 1 m, Y up, floors at y = 0, north = −Z, east = +X.
// AI-assisted code (Claude) – see README.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createRocket, canvasTexture, std, beams, latticeSegments } from '../models/rockets.js';
import { createSLC41, createLC39A, createEnvironment } from '../models/launchsites.js';
import { signMesh, boardTexture, monitorTexture, museumRocket, drawRich } from '../models/campus.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const CYAN = new THREE.Color(0x35d6ff);

// layout constants
const MCC = { x0: -30, x1: -6, z0: -30, z1: -12, h: 9, door: [-21, -15] };
const PPF = { x0: 16, x1: 42, z0: -34, z1: -10, h: 16, door: [22, 36] };
const AVE = { x0: 0, x1: 8, z0: -324, z1: -8 };
const FENCE_Z = -328;
const PAD = { atlas: V(4, 0, -410), falcon: V(4, 0, -455) };

export class CampusScene {
  constructor({ vehicleId = 'atlas_v_411' } = {}) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.1, 6000);
    this.colliders = [];
    this.interactables = [];
    this.bounds = { minX: -58, maxX: 58, minZ: FENCE_Z + 1.2, maxZ: 46 };
    this.time = 0;
    this._pulse = [];
    this._spin = [];

    const clear = (x, z) => (Math.abs(x) < 150 && z > -345 && z < 60) || Math.hypot(x - 4, z + 430) < 240 || (Math.abs(z + 410) < 30 && x < 10 && x > -660);
    this.env = createEnvironment(this.scene, { clear });
    // sun shadow follows the player
    const sc = this.env.sun.shadow.camera;
    sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 1200; sc.updateProjectionMatrix();
    this.env.sun.shadow.normalBias = 0.6; this.env.sun.shadow.bias = -0.0006;
    this.env.sunDir.set(-0.92, 0.15, 0.38).normalize();
    this.env.group.traverse((o) => { if (o.isHemisphereLight) { o.intensity = 0.7; this._hemi = o; } });

    this.screenCanvas = document.createElement('canvas');
    this.screenCanvas.width = 1024; this.screenCanvas.height = 512;
    this.screenTexture = new THREE.CanvasTexture(this.screenCanvas);
    this.screenTexture.colorSpace = THREE.SRGBColorSpace;
    this._drawDefaultScreen();

    this.hazardMat = (rx = 1, ry = 1) => new THREE.MeshStandardMaterial({ roughness: 0.6, map: canvasTexture(128, 128, (g, W, H) => { g.fillStyle = '#f2c230'; g.fillRect(0, 0, W, H); g.fillStyle = '#151515'; for (let i = -W; i < W * 2; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 16, 0); g.lineTo(i + 16 + H, H); g.lineTo(i + H, H); g.closePath(); g.fill(); } }, { repeat: [rx, ry] }) });
    this._buildGround();
    this._buildPlaza();
    this._buildMCC();
    this._buildPPF();
    this._buildAvenue();
    this._buildFence();
    this._buildProps();
    this._buildDressing();
    this._buildMarkers();

    this.spawn = { position: V(2, 1.7, 24), yaw: Math.atan2(20, 36) };
    this.camera.position.copy(this.spawn.position);
    this.camera.rotation.set(0, this.spawn.yaw, 0, 'YXZ');

    this.setVehicle(vehicleId);
  }

  // ------------------------------------------------------------------ helpers
  _col(x0, z0, x1, z1) { const b = new THREE.Box3(V(Math.min(x0, x1), 0, Math.min(z0, z1)), V(Math.max(x0, x1), 3, Math.max(z0, z1))); this.colliders.push(b); return b; }
  _box(w, h, d, mat, x, y, z, { col = false, cast = true } = {}) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y + h / 2, z); m.castShadow = cast; m.receiveShadow = true;
    this.scene.add(m);
    if (col) this._col(x - w / 2, z - d / 2, x + w / 2, z + d / 2);
    return m;
  }
  _interact(id, label, object, position, radius = 2.4, prompt = null) {
    const it = { id, label, prompt: prompt || `[E] ${label}`, object, position: position.clone(), radius };
    // own materials so highlight pulses only this object
    const mats = [];
    object.traverse((o) => {
      if (o.isMesh && o.material && 'emissive' in o.material && !o.material.emissiveMap) {
        o.material = o.material.clone();
        mats.push({ m: o.material, e: o.material.emissive.clone(), ei: o.material.emissiveIntensity });
      }
    });
    object.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(object);
    const size = bb.getSize(V(0, 0, 0)).addScalar(0.25), ctr = bb.getCenter(V(0, 0, 0));
    const outline = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(size.x, size.y, size.z)),
      new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.9, depthTest: false, toneMapped: false }));
    outline.position.copy(ctr); outline.visible = false; outline.renderOrder = 998;
    this.scene.add(outline);
    it._hl = { mats, outline };
    this.interactables.push(it);
    return it;
  }

  _drawDefaultScreen() {
    const g = this.screenCanvas.getContext('2d'), W = 1024, H = 512;
    const grd = g.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, '#04101f'); grd.addColorStop(1, '#0a1e36');
    g.fillStyle = grd; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(79,209,255,0.15)';
    for (let x = 0; x < W; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    for (let y = 0; y < H; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    // orbits
    g.strokeStyle = 'rgba(120,180,255,0.6)'; g.lineWidth = 2;
    g.beginPath(); g.arc(700, 270, 150, 0, 7); g.stroke();
    g.strokeStyle = 'rgba(255,200,120,0.8)'; g.beginPath(); g.ellipse(712, 270, 190, 165, 0.3, 0, 7); g.stroke();
    g.fillStyle = '#ffd36b'; g.beginPath(); g.arc(700, 270, 14, 0, 7); g.fill();
    g.fillStyle = '#6fb6ff'; g.beginPath(); g.arc(850, 270, 7, 0, 7); g.fill();
    g.fillStyle = '#ffb27a'; g.beginPath(); g.arc(560, 180, 6, 0, 7); g.fill();
    g.fillStyle = '#4fd1ff'; g.font = '700 26px "Segoe UI", Arial'; g.fillText('MISSION CONTROL · BENNU SAMPLE RETURN', 40, 60);
    g.fillStyle = '#ffffff'; g.font = '800 54px "Segoe UI", Arial'; g.fillText('COSMO CRAFT', 40, 130);
    g.fillStyle = '#9fd8ff'; g.font = '400 24px "Segoe UI", Arial';
    ['Target: 101955 Bennu', 'Status: awaiting mission briefing', 'Walk to the holo table to begin'].forEach((t, i) => g.fillText(t, 40, 200 + i * 38));
    this.screenTexture.needsUpdate = true;
  }

  // ------------------------------------------------------------------ ground / plaza
  _buildGround() {
    const paveTex = canvasTexture(512, 512, (g, W, H) => {
      g.fillStyle = '#5d5d5b'; g.fillRect(0, 0, W, H);
      for (let i = 0; i < 6000; i++) { const v = 70 + Math.random() * 40; g.fillStyle = `rgba(${v},${v},${v},0.25)`; g.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
      for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(30,30,30,${Math.random() * 0.12})`; g.beginPath(); g.arc(Math.random() * W, Math.random() * H, 20 + Math.random() * 70, 0, 7); g.fill(); }
      g.strokeStyle = 'rgba(20,20,20,0.75)'; g.lineWidth = 3;
      for (let k = 0; k <= 2; k++) { g.beginPath(); g.moveTo(0, (k * H) / 2); g.lineTo(W, (k * H) / 2); g.moveTo((k * W) / 2, 0); g.lineTo((k * W) / 2, H); g.stroke(); }
    });
    const roughTex = canvasTexture(512, 512, (g, W, H) => {
      g.fillStyle = '#c8c8c8'; g.fillRect(0, 0, W, H);
      for (let i = 0; i < 22; i++) { const r = 30 + Math.random() * 110; const x = Math.random() * W, y = Math.random() * H; const grd = g.createRadialGradient(x, y, 0, x, y, r); grd.addColorStop(0, 'rgba(25,25,25,0.95)'); grd.addColorStop(1, 'rgba(25,25,25,0)'); g.fillStyle = grd; g.fillRect(0, 0, W, H); }
      g.strokeStyle = '#ffffff'; g.lineWidth = 4; for (let k = 0; k <= 2; k++) { g.beginPath(); g.moveTo(0, (k * H) / 2); g.lineTo(W, (k * H) / 2); g.moveTo((k * W) / 2, 0); g.lineTo((k * W) / 2, H); g.stroke(); }
    }, { srgb: false });
    this.paveMat = (rx, rz) => {
      const t = paveTex.clone(), r = roughTex.clone();
      for (const tt of [t, r]) { tt.needsUpdate = true; tt.repeat.set(rx / 2, rz / 2); tt.wrapS = tt.wrapT = THREE.RepeatWrapping; }
      return new THREE.MeshStandardMaterial({ map: t, roughnessMap: r, roughness: 0.75, metalness: 0.15, envMapIntensity: 1.6 });
    };
    // plaza
    const plaza = new THREE.Mesh(new THREE.PlaneGeometry(96, 52), this.paveMat(24, 13));
    plaza.rotation.x = -Math.PI / 2; plaza.position.set(5, 0.03, 18); plaza.receiveShadow = true; this.scene.add(plaza);
    // forecourt in front of buildings
    for (const [w, d, x, z] of [[56, 5, -12, -9.5], [40, 3, 33, -8.5], [10, 6, 47, -13]]) {
      const fore = new THREE.Mesh(new THREE.PlaneGeometry(w, d), this.paveMat(w / 4, d / 4));
      fore.rotation.x = -Math.PI / 2; fore.position.set(x, 0.03, z); fore.receiveShadow = true; this.scene.add(fore);
    }
    // lawn under the campus so it reads tidy (mown grass)
    const lawnTex = canvasTexture(256, 256, (g, W, H) => {
      g.fillStyle = '#41522d'; g.fillRect(0, 0, W, H);
      for (let i = 0; i < 6000; i++) { g.fillStyle = Math.random() < 0.5 ? 'rgba(25,40,18,0.4)' : 'rgba(110,130,70,0.25)'; g.fillRect(Math.random() * W, Math.random() * H, 1, 2); }
    }, { repeat: [40, 120] });
    const lawn = new THREE.Mesh(new THREE.PlaneGeometry(170, 400), std(0xffffff, { map: lawnTex, roughness: 1 }));
    lawn.rotation.x = -Math.PI / 2; lawn.position.set(4, 0.015, -140); lawn.receiveShadow = true; this.scene.add(lawn);
  }

  _buildPlaza() {
    const concrete = std(0xb9b6ae, { roughness: 0.85 });
    // planters with shrubs
    const shrubMat = std(0x2f4a24, { roughness: 1, flatShading: true });
    const shrubGeo = new THREE.IcosahedronGeometry(1, 0);
    const shrubs = new THREE.InstancedMesh(shrubGeo, shrubMat, 40);
    const m4 = new THREE.Matrix4(); let n = 0;
    for (const [x, z] of [[-22, 10], [-22, 26], [32, 10], [32, 26], [-8, 36], [18, 36]]) {
      this._box(7, 0.6, 3, concrete, x, 0, z, { col: true });
      for (let k = 0; k < 5 && n < 40; k++) { const s = 0.6 + Math.random() * 0.5; m4.makeScale(s * 1.2, s, s * 1.2); m4.setPosition(x - 2.6 + k * 1.3, 0.9, z); shrubs.setMatrixAt(n++, m4); }
    }
    shrubs.count = n; shrubs.castShadow = true; this.scene.add(shrubs);
    // benches
    const wood = std(0x6b4a2f, { roughness: 0.8 });
    for (const [x, z] of [[-22, 6.8], [32, 6.8], [-22, 22.8], [32, 22.8]]) this._box(4, 0.45, 0.6, wood, x, 0.2, z, { col: true });
    // centrepiece: brushed-steel orbit sculpture (Sun + ellipse) on a round plinth
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.4, 0.5, 40), concrete);
    plinth.position.set(18, 0.25, 16); plinth.receiveShadow = true; plinth.castShadow = true; this.scene.add(plinth);
    this._col(14.8, 12.8, 21.2, 19.2);
    const steel = std(0xcfd3d8, { roughness: 0.25, metalness: 0.9 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.06, 8, 64), steel); ring1.position.set(18, 3, 16); ring1.rotation.x = 1.2; this.scene.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.06, 8, 64), steel); ring2.scale.set(1, 0.8, 1); ring2.position.set(18, 3, 16); ring2.rotation.set(1.3, 0.4, 0.2); this.scene.add(ring2);
    const sun = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.3, 0.7) })); sun.position.set(18, 3, 16); this.scene.add(sun);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 2.6, 8), steel); post.position.set(18, 1.6, 16); this.scene.add(post);
    this._spin.push({ o: ring1, s: 0.15, axis: 'z' }, { o: ring2, s: -0.1, axis: 'z' });
    // glowing plaza inlay: orbit rings + guide lines toward Mission Control and the avenue
    {
      const inlay = canvasTexture(1024, 1024, (g, W, H) => {
        g.clearRect(0, 0, W, H); g.strokeStyle = 'rgba(80,220,255,1)'; g.lineWidth = 16;
        g.beginPath(); g.arc(W / 2, H / 2, W * 0.46, 0, 7); g.stroke();
        g.lineWidth = 10; g.beginPath(); g.ellipse(W / 2 + 18, H / 2, W * 0.36, W * 0.3, 0.4, 0, 7); g.stroke();
        g.beginPath(); g.arc(W / 2, H / 2, W * 0.2, 0, 7); g.stroke();
        for (let i = 0; i < 72; i++) { const a = (i / 72) * Math.PI * 2, r1 = W * 0.43, r2 = i % 6 ? W * 0.445 : W * 0.41; g.beginPath(); g.moveTo(W / 2 + Math.cos(a) * r1, H / 2 + Math.sin(a) * r1); g.lineTo(W / 2 + Math.cos(a) * r2, H / 2 + Math.sin(a) * r2); g.stroke(); }
        g.fillStyle = 'rgba(80,220,255,1)'; g.font = '800 64px "Segoe UI", Arial'; g.textAlign = 'center'; g.fillText('COSMO CRAFT', W / 2, H / 2 + 22);
      });
      const disc = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshBasicMaterial({ map: inlay, transparent: true, opacity: 0.85, depthWrite: false, color: new THREE.Color(1.4, 1.4, 1.4), toneMapped: false }));
      disc.rotation.x = -Math.PI / 2; disc.position.set(2, 0.05, 12); this.scene.add(disc);
      const led = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.3, 1.5, 2.1), toneMapped: false });
      const lines = [[V(-2, 0.05, 7), V(-18, 0.05, -11)], [V(4.5, 0.05, 6.4), V(4, 0.05, -8)], [V(7, 0.05, 8), V(29, 0.05, -9)]];
      const lm = beams(lines, 0.22, led); lm.castShadow = false; lm.scale.y = 1; this.scene.add(lm);
    }
    // wayfinding sign
    const signPost = this._box(0.25, 3.2, 0.25, std(0x2b2f36), 12, 0, 4, { col: true });
    const way = signMesh('◄ MISSION CONTROL', 3.2, 0.55, { glow: 1.2 }); way.position.set(12, 3.0, 4.2); this.scene.add(way);
    const way2 = signMesh('PAYLOAD PROCESSING ►', 3.2, 0.55, { glow: 1.2 }); way2.position.set(12, 2.35, 4.2); this.scene.add(way2);
    const way3 = signMesh('▲ ROCKET GARDEN · LAUNCH PAD', 3.2, 0.55, { glow: 1.2, accent: '#ffc46b' }); way3.position.set(12, 1.7, 4.2); this.scene.add(way3);
    signPost.userData.sign = true;
    // campus title monolith
    const mono = this._box(9, 2.2, 0.8, std(0x1a2230, { roughness: 0.6 }), -8, 0, 40, { col: true });
    const title = signMesh('COSMO CRAFT SPACE CENTER', 8.6, 1.4, { glow: 1.3, sub: 'Bennu Sample Return · Mission Campus' });
    title.position.set(-8, 1.15, 39.55); title.rotation.y = Math.PI; this.scene.add(title);
    const title2 = title.clone(); title2.position.set(-8, 1.15, 40.45); title2.rotation.y = 0; this.scene.add(title2);
    mono.userData.sign = true;
  }

  // ------------------------------------------------------------------ Mission Control Center
  _buildMCC() {
    const { x0, x1, z0, z1, h, door } = MCC;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const wallTex = canvasTexture(512, 512, (g, W, H) => {
      g.fillStyle = '#c9cbcc'; g.fillRect(0, 0, W, H);
      g.fillStyle = 'rgba(0,0,0,0.08)'; for (let x = 0; x < W; x += 64) g.fillRect(x, 0, 3, H);
      for (let y = 0; y < H; y += 128) g.fillRect(0, y, W, 3);
      g.fillStyle = '#2a3442'; g.fillRect(0, H * 0.78, W, H * 0.08);
    }, { repeat: [3, 1] });
    const wall = std(0xffffff, { map: wallTex, roughness: 0.75 });
    const inner = std(0x1c2330, { roughness: 0.85 });
    const t = 0.4;
    // floor (carpet) & ceiling
    const carpet = canvasTexture(256, 256, (g, W, H) => { g.fillStyle = '#15181e'; g.fillRect(0, 0, W, H); for (let i = 0; i < 5000; i++) { g.fillStyle = `rgba(${30 + Math.random() * 25},${32 + Math.random() * 25},${40 + Math.random() * 30},0.4)`; g.fillRect(Math.random() * W, Math.random() * H, 1, 1); } }, { repeat: [8, 6] });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), std(0xffffff, { map: carpet, roughness: 1 }));
    floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0.04, cz); floor.receiveShadow = true; this.scene.add(floor);
    // walls (outer cladding box, inner dark facing)
    this._box(x1 - x0, h, t, wall, cx, 0, z0, { col: true });
    this._box(t, h, z1 - z0, wall, x0, 0, cz, { col: true });
    this._box(t, h, z1 - z0, wall, x1, 0, cz, { col: true });
    this._box(x1 - x0 - 1, h - 0.6, 0.05, inner, cx, 0, z0 + 0.25);
    this._box(0.05, h - 0.6, z1 - z0 - 1, inner, x0 + 0.25, 0, cz);
    this._box(0.05, h - 0.6, z1 - z0 - 1, inner, x1 - 0.25, 0, cz);
    // roof + canopy over the entrance
    this._box(x1 - x0 + 0.8, 0.6, z1 - z0 + 5, wall, cx, h, cz + 2.4);
    this._box(x1 - x0 - 1, 0.1, z1 - z0 - 1, std(0x10151d, { roughness: 1 }), cx, h - 0.1, cz, { cast: false });
    // glass curtain wall with an open entrance
    const glass = new THREE.MeshStandardMaterial({ color: 0x8fc6e8, roughness: 0.05, metalness: 0.9, transparent: true, opacity: 0.28, depthWrite: false });
    const mull = std(0x2a2f36, { roughness: 0.4, metalness: 0.7 });
    const segs = [[x0, door[0]], [door[1], x1]];
    for (const [a, b] of segs) {
      const gm = new THREE.Mesh(new THREE.PlaneGeometry(b - a, h), glass); gm.position.set((a + b) / 2, h / 2, z1); this.scene.add(gm);
      this._col(a, z1 - 0.2, b, z1 + 0.2);
    }
    const mullSegs = [];
    for (let x = x0; x <= x1 + 0.01; x += 3) { if (x > door[0] + 0.1 && x < door[1] - 0.1) continue; mullSegs.push([V(x, 0, z1), V(x, h, z1)]); }
    mullSegs.push([V(door[0], 0, z1), V(door[0], h, z1)], [V(door[1], 0, z1), V(door[1], h, z1)]);
    for (const y of [0.05, 3.2, 6.2, h - 0.1]) for (const [a, b] of segs) mullSegs.push([V(a, y, z1), V(b, y, z1)]);
    mullSegs.push([V(door[0], 3.2, z1), V(door[1], 3.2, z1)]);
    this.scene.add(beams(mullSegs, 0.14, mull));
    const transom = new THREE.Mesh(new THREE.PlaneGeometry(door[1] - door[0], h - 3.2), glass); transom.position.set((door[0] + door[1]) / 2, 3.2 + (h - 3.2) / 2, z1); this.scene.add(transom);
    // entrance sign on canopy
    const sign = signMesh('MISSION CONTROL CENTER', 15, 1.4, { glow: 1.6 });
    sign.position.set(cx, h + 0.3, z1 + 4.95); this.scene.add(sign);

    // --- interior lights (ceiling panels + 2 point lights)
    const panelMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.7, 1.9) });
    const panels = new THREE.InstancedMesh(new THREE.BoxGeometry(2.4, 0.06, 0.6), panelMat, 12);
    const m4 = new THREE.Matrix4(); let k = 0;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) { m4.makeTranslation(x0 + 4 + i * 8, h - 0.25, z0 + 3 + j * 4); panels.setMatrixAt(k++, m4); }
    this.scene.add(panels);
    for (const [x, z] of [[cx - 6, cz], [cx + 6, cz]]) { const L = new THREE.PointLight(0x9fc4ff, 160, 22, 1.6); L.position.set(x, h - 1.2, z); this.scene.add(L); }

    // --- huge curved video wall
    {
      const R = 15, thL = 1.05;
      const geo = new THREE.CylinderGeometry(R, R, 7, 48, 1, true, Math.PI - thL / 2, thL);
      const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i));
      const scrMat = new THREE.MeshBasicMaterial({ map: this.screenTexture, toneMapped: false, color: new THREE.Color(0.95, 0.95, 0.95), side: THREE.BackSide });
      const scr = new THREE.Mesh(geo, scrMat); scr.position.set(cx, 4.9, z0 + 0.9 + R); this.scene.add(scr);
      const frameGeo = new THREE.CylinderGeometry(R + 0.12, R + 0.12, 7.7, 48, 1, true, Math.PI - thL / 2 - 0.02, thL + 0.04);
      const frame = new THREE.Mesh(frameGeo, new THREE.MeshStandardMaterial({ color: 0x07090c, roughness: 0.5, side: THREE.DoubleSide })); frame.position.copy(scr.position); this.scene.add(frame);
      for (const y of [1.3, 8.5]) { const lg = new THREE.CylinderGeometry(R - 0.05, R - 0.05, 0.06, 48, 1, true, Math.PI - thL / 2, thL); const led = new THREE.Mesh(lg, new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 1.6, 2.2), side: THREE.DoubleSide, toneMapped: false })); led.position.set(cx, y, scr.position.z); this.scene.add(led); }
    }
    const glowL = new THREE.PointLight(0x4fb8ff, 60, 18, 1.8); glowL.position.set(cx, 4.5, z0 + 3); this.scene.add(glowL);
    // side screens
    for (const [x, ry, label] of [[x0 + 0.32, Math.PI / 2, 'DEEP SPACE NETWORK'], [x1 - 0.32, -Math.PI / 2, 'SPACE WEATHER · DONKI']]) {
      const tex = canvasTexture(512, 300, (g, W, H) => {
        g.fillStyle = '#050f1b'; g.fillRect(0, 0, W, H);
        g.fillStyle = '#4fd1ff'; g.font = '700 26px "Segoe UI", Arial'; g.fillText(label, 20, 40);
        g.strokeStyle = '#7dffb2'; g.lineWidth = 3; g.beginPath();
        for (let i = 0; i < W - 40; i += 6) { const y = 180 - Math.abs(Math.sin(i * 0.03)) * 90 * Math.random(); i ? g.lineTo(20 + i, y) : g.moveTo(20, y); }
        g.stroke();
        g.fillStyle = 'rgba(255,196,107,0.8)'; g.font = '500 18px monospace'; g.fillText(label.startsWith('DEEP') ? 'GOLDSTONE · MADRID · CANBERRA' : 'FLARE X8.7 · 2024-05-14', 20, 270);
      });
      const s = new THREE.Mesh(new THREE.PlaneGeometry(5, 2.9), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
      s.position.set(x, 4.2, z0 + 5); s.rotation.y = ry; this.scene.add(s);
    }

    // --- cable trays under the ceiling + cyan LED skirting
    {
      const tray = std(0x5b6572, { roughness: 0.4, metalness: 0.8 });
      const trays = [];
      for (const z of [z0 + 5, z0 + 11, z0 + 16]) trays.push([V(x0 + 0.8, h - 1.1, z), V(x1 - 0.8, h - 1.1, z)]);
      for (const x of [x0 + 6, x1 - 6]) trays.push([V(x, h - 1.0, z0 + 0.8), V(x, h - 1.0, z1 - 0.8)]);
      const tm = beams(trays, 0.12, tray); tm.scale.set(1, 1, 1); this.scene.add(tm);
      const hang = []; for (const [a, b2] of trays) for (let k2 = 0.1; k2 < 1; k2 += 0.2) { const pp = new THREE.Vector3().lerpVectors(a, b2, k2); hang.push([pp, V(pp.x, h - 0.2, pp.z)]); }
      this.scene.add(beams(hang, 0.03, tray));
      const ledMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.25, 1.4, 2.0), toneMapped: false });
      const strips = beams([[V(x0 + 0.3, 0.12, z0 + 0.3), V(x0 + 0.3, 0.12, z1 - 0.3)], [V(x1 - 0.3, 0.12, z0 + 0.3), V(x1 - 0.3, 0.12, z1 - 0.3)], [V(x0 + 0.3, 0.12, z0 + 0.3), V(x1 - 0.3, 0.12, z0 + 0.3)],
        [V(x0 + 0.3, h - 0.3, z0 + 0.3), V(x0 + 0.3, h - 0.3, z1 - 0.3)], [V(x1 - 0.3, h - 0.3, z0 + 0.3), V(x1 - 0.3, h - 0.3, z1 - 0.3)]], 0.05, ledMat);
      strips.castShadow = false; this.scene.add(strips);
    }
    // --- console rows (instanced desks, monitors, chairs)
    const deskMat = std(0x2e3846, { roughness: 0.5, metalness: 0.3 });
    const topMat = std(0x11161d, { roughness: 0.4 });
    const desks = new THREE.InstancedMesh(new THREE.BoxGeometry(1.9, 0.78, 1.0), deskMat, 40);
    const tops = new THREE.InstancedMesh(new THREE.BoxGeometry(1.95, 0.05, 1.1), topMat, 40);
    const chairs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.6, 1.0, 0.6), std(0x101318, { roughness: 0.7 }), 40);
    const monMats = [0, 1, 2].map((i) => new THREE.MeshBasicMaterial({ map: monitorTexture(i), toneMapped: false, color: new THREE.Color(1.3, 1.3, 1.3) }));
    const monGeo = new THREE.PlaneGeometry(0.62, 0.4);
    const mons = monMats.map((m) => new THREE.InstancedMesh(monGeo, m, 40));
    const monCount = [0, 0, 0];
    const bezel = new THREE.InstancedMesh(new THREE.BoxGeometry(0.68, 0.46, 0.04), std(0x07090c), 120);
    let d = 0, b = 0;
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.2, 0, 0));
    const rows = [z0 + 6.5, z0 + 10, z0 + 13.5];
    rows.forEach((rz, ri) => {
      for (const [a, bnd] of [[x0 + 1.4, door[0] + 0.6], [door[1] - 0.6, x1 - 1.4]]) {
        const n = Math.floor((bnd - a) / 2);
        for (let i = 0; i < n; i++) {
          const x = a + 1 + i * 2;
          m4.makeTranslation(x, 0.39, rz); desks.setMatrixAt(d, m4);
          m4.makeTranslation(x, 0.8, rz); tops.setMatrixAt(d, m4);
          m4.makeTranslation(x, 0.5, rz + 1.0); chairs.setMatrixAt(d, m4);
          d++;
          for (const off of [-0.42, 0.42]) {
            const kk = (i + ri + (off > 0 ? 1 : 0)) % 3;
            m4.compose(V(x + off, 1.12, rz - 0.25), q, V(1, 1, 1));
            mons[kk].setMatrixAt(monCount[kk]++, m4);
            m4.compose(V(x + off, 1.12, rz - 0.272), q, V(1, 1, 1)); bezel.setMatrixAt(b++, m4);
          }
        }
        this._col(a, rz - 0.6, bnd, rz + 0.6);
      }
    });
    desks.count = tops.count = chairs.count = d; bezel.count = b;
    mons.forEach((m, i) => { m.count = monCount[i]; this.scene.add(m); });
    desks.castShadow = true; desks.receiveShadow = true;
    this.scene.add(desks, tops, chairs, bezel);

    // --- holo table with rotating Bennu hologram (Mission Briefing)
    const hx = (door[0] + door[1]) / 2, hz = z0 + 10;
    const table = new THREE.Group();
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.5, 0.95, 40), std(0x232b37, { roughness: 0.4, metalness: 0.6 }));
    ped.position.y = 0.475; ped.castShadow = true; table.add(ped);
    const ringTop = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.06, 8, 64), new THREE.MeshStandardMaterial({ color: 0x0b2c3a, emissive: CYAN, emissiveIntensity: 2.2 }));
    ringTop.rotation.x = Math.PI / 2; ringTop.position.y = 0.97; table.add(ringTop);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.2, 48), new THREE.MeshStandardMaterial({ color: 0x06141c, emissive: 0x0b4a63, emissiveIntensity: 1.2, roughness: 0.2 }));
    disc.rotation.x = -Math.PI / 2; disc.position.y = 0.96; table.add(disc);
    table.position.set(hx, 0, hz); this.scene.add(table);
    this._col(hx - 1.5, hz - 1.5, hx + 1.5, hz + 1.5);
    // hologram
    const holo = this._bennuHologram(); holo.position.set(hx, 2.0, hz); this.scene.add(holo);
    this._spin.push({ o: holo, s: 0.4, axis: 'y' });
    this.holo = holo;
    const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.2, 1.0, 32, 1, true), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.1, 0.6, 0.9), transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    cone.position.set(hx, 1.48, hz); this.scene.add(cone);
    const holoLight = new THREE.PointLight(0x35d6ff, 25, 8, 1.8); holoLight.position.set(hx, 2.2, hz); this.scene.add(holoLight);
    this._interact('briefing', 'Mission Briefing', table, V(hx, 1, hz), 2.8);

    // --- special consoles: FLIGHT DYNAMICS / LAUNCH DIRECTOR
    const mkConsole = (x, z, title, color) => {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.95, 1.1), std(0x334155, { roughness: 0.45, metalness: 0.35 })); body.position.y = 0.475; body.castShadow = true; g.add(body);
      const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.06, 1.2), std(0x0d1117)); deskTop.position.y = 0.98; g.add(deskTop);
      const st = canvasTexture(512, 300, (c, W, H) => {
        c.fillStyle = '#04101c'; c.fillRect(0, 0, W, H);
        c.fillStyle = color; c.font = '800 34px "Segoe UI", Arial'; c.fillText(title, 20, 50);
        c.strokeStyle = color; c.globalAlpha = 0.8; c.lineWidth = 2;
        for (let i = 0; i < 5; i++) { c.strokeRect(20, 80 + i * 40, 200 + Math.random() * 250, 26); }
        c.globalAlpha = 1; c.fillStyle = '#fff'; c.font = '600 22px monospace'; c.fillText(title.startsWith('FLIGHT') ? 'C3  ·  Δv  ·  WINDOW' : 'GO / NO-GO POLL', 20, 285);
      });
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.88), new THREE.MeshBasicMaterial({ map: st, toneMapped: false, color: new THREE.Color(1.3, 1.3, 1.3) }));
      scr.position.set(0, 1.55, -0.3); scr.rotation.x = -0.18; g.add(scr);
      const bez = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.98, 0.05), std(0x07090c)); bez.position.set(0, 1.55, -0.33); bez.rotation.x = -0.18; g.add(bez);
      const led = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.05, 0.02), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: new THREE.Color(color), emissiveIntensity: 2.5 }));
      led.position.set(0, 0.85, 0.56); g.add(led);
      g.position.set(x, 0, z); this.scene.add(g);
      // hanging sign
      const hs = signMesh(title, 3.4, 0.6, { glow: 1.6, accent: color }); hs.position.set(x, 3.4, z + 0.2); this.scene.add(hs);
      const wire = beams([[V(x - 1.4, 3.7, z + 0.2), V(x - 1.4, h, z + 0.2)], [V(x + 1.4, 3.7, z + 0.2), V(x + 1.4, h, z + 0.2)]], 0.02, std(0x222222));
      this.scene.add(wire);
      this._col(x - 1.35, z - 0.6, x + 1.35, z + 0.6);
      return g;
    };
    const fz = z1 - 4.2;
    const fd = mkConsole(x0 + 5, fz, 'FLIGHT DYNAMICS', '#4fd1ff');
    this._interact('flight_dynamics', 'Launch window & rocket', fd, V(x0 + 5, 1, fz), 2.6);
    const ld = mkConsole(x1 - 5, fz, 'LAUNCH DIRECTOR', '#ffc46b');
    this._interact('launch_control', 'GO for launch', ld, V(x1 - 5, 1, fz), 2.6);
  }

  _bennuHologram() {
    const geo = new THREE.IcosahedronGeometry(0.55, 4);
    const p = geo.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const lat = v.y / 0.55;
      // spinning-top shape (equatorial ridge) + rubble noise
      const ridge = 1 + 0.18 * Math.pow(1 - Math.abs(lat), 3) - 0.1 * Math.abs(lat);
      const n = Math.sin(v.x * 17) * Math.sin(v.y * 13) * Math.sin(v.z * 19) * 0.04 + Math.sin(v.x * 41 + v.z * 37) * 0.015;
      v.multiplyScalar(ridge + n); p.setXYZ(i, v.x, v.y, v.z);
    }
    geo.computeVertexNormals();
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
      uniforms: { uT: { value: 0 } },
      vertexShader: 'varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); vY=position.y; gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'varying vec3 vN; varying vec3 vV; varying float vY; uniform float uT; void main(){ float f=pow(1.0-abs(dot(vN,vV)),2.0); float scan=0.6+0.4*sin(vY*90.0-uT*6.0); vec3 c=vec3(0.15,0.8,1.2)*(0.25+f*1.6)*scan; gl_FragColor=vec4(c,0.85); }',
    });
    this._holoMat = mat;
    const g = new THREE.Group();
    g.add(new THREE.Mesh(geo, mat));
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.6, 1)), new THREE.LineBasicMaterial({ color: new THREE.Color(0.2, 0.9, 1.4), transparent: true, opacity: 0.25, toneMapped: false }));
    g.add(wire);
    // orbit ring + spacecraft blip
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.006, 6, 96), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 1.2, 1.6), toneMapped: false }));
    orbit.rotation.x = Math.PI / 2 + 0.3; g.add(orbit);
    const blip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.5, 1) }));
    g.add(blip); this._blip = blip; this._orbitTilt = 0.3;
    return g;
  }

  // ------------------------------------------------------------------ Payload Processing Facility
  _buildPPF() {
    const { x0, x1, z0, z1, h, door } = PPF;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const extTex = canvasTexture(512, 512, (g, W, H) => {
      g.fillStyle = '#e9eaea'; g.fillRect(0, 0, W, H);
      for (let x = 0; x < W; x += 16) { g.fillStyle = x % 32 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)'; g.fillRect(x, 0, 6, H); }
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, H - 30, W, 30);
      g.fillStyle = '#1f5fbf'; g.fillRect(0, 40, W, 18);
    }, { repeat: [4, 1] });
    const ext = std(0xffffff, { map: extTex, roughness: 0.6 });
    const white = std(0xb9c0c7, { roughness: 0.7, envMapIntensity: 0.4 });
    const t = 0.5;
    // epoxy floor + safety lines
    const epoxy = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), new THREE.MeshStandardMaterial({ color: 0xaeb5bc, roughness: 0.3, metalness: 0.05, envMapIntensity: 0.35 }));
    epoxy.rotation.x = -Math.PI / 2; epoxy.position.set(cx, 0.045, cz); epoxy.receiveShadow = true; this.scene.add(epoxy);
    const yellow = std(0xf2c230, { roughness: 0.5 });
    const sx = 29, sz = -23;
    for (const [w, d, x, z] of [[9, 0.15, sx, sz - 4.5], [9, 0.15, sx, sz + 4.5], [0.15, 9, sx - 4.5, sz], [0.15, 9, sx + 4.5, sz]]) this._box(w, 0.012, d, yellow, x, 0.058, z, { cast: false });
    const plateTex = canvasTexture(256, 256, (g, W, H) => { g.fillStyle = '#7d858e'; g.fillRect(0, 0, W, H); g.fillStyle = 'rgba(255,255,255,0.18)'; for (let y = 8; y < H; y += 16) for (let x = (y / 16) % 2 ? 8 : 0; x < W; x += 16) { g.save(); g.translate(x, y); g.rotate(0.7); g.fillRect(-5, -1.5, 10, 3); g.restore(); } });
    plateTex.wrapS = plateTex.wrapT = THREE.RepeatWrapping; plateTex.repeat.set(6, 6);
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), new THREE.MeshStandardMaterial({ map: plateTex, metalness: 0.85, roughness: 0.35 }));
    plate.rotation.x = -Math.PI / 2; plate.position.set(29, 0.05, -23); plate.receiveShadow = true; this.scene.add(plate);
    // walls
    this._box(x1 - x0, h, t, ext, cx, 0, z0, { col: true });
    this._box(t, h, z1 - z0, ext, x0, 0, cz, { col: true });
    this._box(t, h, z1 - z0, ext, x1, 0, cz, { col: true });
    this._box(door[0] - x0, h, t, ext, (x0 + door[0]) / 2, 0, z1, { col: true });
    this._box(x1 - door[1], h, t, ext, (door[1] + x1) / 2, 0, z1, { col: true });
    this._box(door[1] - door[0], h - 12, t, ext, (door[0] + door[1]) / 2, 12, z1);
    // interior white lining
    this._box(x1 - x0 - 1.2, h - 0.5, 0.05, white, cx, 0, z0 + 0.3, { cast: false });
    this._box(0.05, h - 0.5, z1 - z0 - 1.2, white, x0 + 0.3, 0, cz, { cast: false });
    this._box(0.05, h - 0.5, z1 - z0 - 1.2, white, x1 - 0.3, 0, cz, { cast: false });
    // HEPA grid on the back wall
    const hepa = canvasTexture(512, 256, (g, W, H) => { g.fillStyle = '#eef2f5'; g.fillRect(0, 0, W, H); g.strokeStyle = '#b9c3cc'; g.lineWidth = 4; for (let x = 0; x <= W; x += 64) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); } for (let y = 0; y <= H; y += 64) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); } });
    const hp = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), new THREE.MeshStandardMaterial({ map: hepa, roughness: 0.6, emissive: 0xffffff, emissiveMap: hepa, emissiveIntensity: 0.0, color: 0xb9c0c7, envMapIntensity: 0.4 }));
    hp.position.set(cx, 6, z0 + 0.36); this.scene.add(hp);
    // roof
    this._box(x1 - x0 + 0.6, 0.6, z1 - z0 + 0.6, ext, cx, h, cz);
    // big door frame + sign
    this._box(0.7, 12, 0.9, this.hazardMat(1, 14), door[0], 0, z1 + 0.1); this._box(0.7, 12, 0.9, this.hazardMat(1, 14), door[1], 0, z1 + 0.1); this._box(door[1] - door[0] + 0.7, 0.7, 0.9, this.hazardMat(16, 1), (door[0] + door[1]) / 2, 12, z1 + 0.1);
    this._box(door[1] - door[0], 0.02, 1.2, this.hazardMat(16, 1), (door[0] + door[1]) / 2, 0.045, z1, { cast: false });
    const sign = signMesh('PAYLOAD PROCESSING FACILITY', 16, 1.3, { glow: 1.6 });
    sign.position.set((door[0] + door[1]) / 2, 13.9, z1 + 0.3); this.scene.add(sign);
    const sub = signMesh('CLEAN ROOM · CLASS 100,000', 7, 0.6, { glow: 1.3, accent: '#7dffb2' });
    sub.position.set(cx, 8.2, z0 + 0.45); this.scene.add(sub);
    // bright cool lighting
    const panelMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.25, 1.3, 1.4) });
    const panels = new THREE.InstancedMesh(new THREE.BoxGeometry(3.2, 0.08, 0.8), panelMat, 16);
    const m4 = new THREE.Matrix4(); let k = 0;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { m4.makeTranslation(x0 + 4 + i * 6, h - 0.35, z0 + 4 + j * 5.5); panels.setMatrixAt(k++, m4); }
    this.scene.add(panels);
    for (const [x, z] of [[cx - 5, cz], [cx + 5, cz - 3]]) { const L = new THREE.PointLight(0xe8f2ff, 90, 26, 1.7); L.position.set(x, h - 2, z); this.scene.add(L); }
    // gantry (bridge) crane
    const craneY = 12.6;
    const rail = std(0x2f3540, { roughness: 0.4, metalness: 0.7 });
    this._box(0.5, 0.6, z1 - z0 - 1, rail, x0 + 1, craneY, cz, { cast: false });
    this._box(0.5, 0.6, z1 - z0 - 1, rail, x1 - 1, craneY, cz, { cast: false });
    const bridge = this._box(x1 - x0 - 2, 0.9, 0.8, yellow, cx, craneY + 0.6, sz, { cast: false });
    const hoist = this._box(1.4, 1.0, 1.4, std(0x343a44), sx, craneY - 0.5, sz);
    const cable = this._box(0.05, 5.5, 0.05, std(0x111111), sx, craneY - 6, sz, { cast: false });
    const hook = this._box(0.5, 0.6, 0.3, yellow, sx, craneY - 6.6, sz);
    this._crane = { bridge, hoist, cable, hook };
    // integration stand + spacecraft anchor
    const stand = new THREE.Group();
    const base = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.7, 3.4), [this.hazardMat(4, 1), this.hazardMat(4, 1), std(0x9aa3ad, { roughness: 0.4, metalness: 0.6 }), std(0x9aa3ad), this.hazardMat(4, 1), this.hazardMat(4, 1)]); base.position.y = 0.35; stand.add(base);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.1, 0.5, 32), std(0x6d7782, { roughness: 0.3, metalness: 0.8 })); ring.position.y = 0.95; stand.add(ring);
    stand.position.set(sx, 0, sz); stand.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.scene.add(stand);
    this.spacecraftAnchor = new THREE.Object3D(); this.spacecraftAnchor.name = 'spacecraftAnchor';
    this.spacecraftAnchor.position.set(sx, 1.2, sz); this.scene.add(this.spacecraftAnchor);
    this._col(sx - 2.2, sz - 2.2, sx + 2.2, sz + 2.2);
    // work platforms / carts / cabinets
    const cab = std(0xdfe4ea, { roughness: 0.5, metalness: 0.2 });
    for (const [x, z] of [[x1 - 2, z0 + 3], [x1 - 2, z0 + 6], [x0 + 2, z0 + 3]]) this._box(1.4, 2.0, 0.8, cab, x, 0, z, { col: true });
    for (const [x, z] of [[sx + 6.5, sz + 2], [sx - 6.5, sz - 3]]) { this._box(1.6, 0.9, 1.0, std(0x5a6572, { metalness: 0.5, roughness: 0.4 }), x, 0.15, z, { col: true }); }
    // assembly terminal
    const term = new THREE.Group();
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.1, 0.5), std(0x37414d, { roughness: 0.4, metalness: 0.5 })); post.position.y = 0.55; term.add(post);
    const tt = canvasTexture(512, 320, (c, W, H) => {
      c.fillStyle = '#04101c'; c.fillRect(0, 0, W, H);
      c.fillStyle = '#7dffb2'; c.font = '800 34px "Segoe UI", Arial'; c.fillText('SPACECRAFT ASSEMBLY', 20, 50);
      c.strokeStyle = '#7dffb2'; c.lineWidth = 2;
      ['MASS', 'POWER', 'COST', 'DATA'].forEach((l, i) => { c.fillStyle = '#9fd8ff'; c.font = '600 22px monospace'; c.fillText(l, 20, 105 + i * 50); c.strokeRect(130, 85 + i * 50, 340, 24); c.fillStyle = 'rgba(125,255,178,0.7)'; c.fillRect(132, 87 + i * 50, 100 + Math.random() * 230, 20); });
    });
    const ts = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.75), new THREE.MeshBasicMaterial({ map: tt, toneMapped: false, color: new THREE.Color(1.3, 1.3, 1.3) }));
    ts.position.set(0, 1.4, 0.05); ts.rotation.x = -0.5; term.add(ts);
    const tb = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.85, 0.08), std(0x15191f)); tb.position.set(0, 1.38, 0.0); tb.rotation.x = -0.5; term.add(tb);
    const tx = sx - 6, tz = sz + 6;
    term.position.set(tx, 0, tz); term.rotation.y = Math.atan2(sx - tx, sz - tz) + Math.PI; this.scene.add(term);
    const ts2 = signMesh('ASSEMBLY', 1.6, 0.35, { glow: 1.5, accent: '#7dffb2' }); ts2.position.set(tx, 2.25, tz); ts2.rotation.y = term.rotation.y; this.scene.add(ts2);
    this._col(tx - 0.5, tz - 0.5, tx + 0.5, tz + 0.5);
    this._interact('assembly', 'Spacecraft assembly', term, V(tx, 1, tz), 2.4);
  }

  // ------------------------------------------------------------------ rocket garden avenue + boards
  _buildAvenue() {
    const { x0, x1, z0, z1 } = AVE;
    const len = z1 - z0;
    const path = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, len), this.paveMat(2, len / 4));
    path.rotation.x = -Math.PI / 2; path.position.set((x0 + x1) / 2, 0.035, (z0 + z1) / 2); path.receiveShadow = true; this.scene.add(path);
    const curbMat = std(0xd4d1ca, { roughness: 0.9 });
    this._box(0.3, 0.15, len, curbMat, x0 - 0.15, 0, (z0 + z1) / 2, { cast: false });
    this._box(0.3, 0.15, len, curbMat, x1 + 0.15, 0, (z0 + z1) / 2, { cast: false });
    // boards
    const boards = [['board_tsiolkovsky', -1.6, -52, 1], ['board_visviva', 9.6, -84, -1], ['board_escape', -1.6, -116, 1], ['board_propellant', 9.6, -148, -1]];
    const labels = { board_tsiolkovsky: 'Rocket equation', board_visviva: 'Vis-viva equation', board_escape: 'Escape velocity', board_propellant: 'Rocket propellants' };
    for (const [id, x, z, face] of boards) {
      const g = new THREE.Group();
      const legM = std(0x2b2f36, { roughness: 0.5, metalness: 0.6 });
      for (const s of [-1.35, 1.35]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), legM); l.position.set(s, 1.3, 0); l.castShadow = true; g.add(l); }
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2.95, 2.0, 0.12), std(0x1a1f27, { roughness: 0.5, metalness: 0.4 })); frame.position.set(0, 1.85, -0.03); frame.castShadow = true; g.add(frame);
      const tex = boardTexture(id);
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.925), new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.95, roughness: 0.4 }));
      panel.position.set(0, 1.85, 0.035); g.add(panel);
      const lampArm = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.08, 0.3), legM); lampArm.position.set(0, 2.95, 0.25); g.add(lampArm);
      const lampStrip = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.03, 0.1), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.8, 2.4) })); lampStrip.position.set(0, 2.9, 0.33); g.add(lampStrip);
      g.position.set(x, 0, z); g.rotation.y = face > 0 ? Math.PI / 2 : -Math.PI / 2;
      this.scene.add(g);
      this._col(x - 0.35, z - 1.5, x + 0.35, z + 1.5);
      this._interact(id, labels[id], g, V(x + face * 1.2, 1.6, z), 3.0, `[E] Read: ${labels[id]}`);
    }
    // museum rockets
    const garden = [[-16, -70, 22, {}], [22, -98, 18, { checker: true }], [-18, -132, 26, { body: 0xe8e8e4, accent: 0x9b2a1e }], [20, -165, 30, { accent: 0x23395d }], [-15, -195, 16, { checker: true }]];
    for (const [x, z, hgt, o] of garden) {
      const r = museumRocket(hgt, o); r.position.set(x, 0, z); this.scene.add(r);
      const rr = r.userData.radius; this._col(x - rr, z - rr, x + rr, z + rr);
      const ped = signMesh(hgt > 24 ? 'HEAVY LIFT REPLICA' : hgt > 19 ? 'ORBITAL REPLICA' : 'SOUNDING ROCKET', 2.4, 0.5, { glow: 1.2 });
      ped.position.set(x + (x < 0 ? rr + 0.05 : -rr - 0.05), 0.9, z); ped.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2; this.scene.add(ped);
    }
    // pathway to the garden rockets
    this._gardenSpots = garden.map(([x, z]) => [x, z]);
    for (const [x, z] of garden) {
      const w = Math.abs(x) - 4;
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, 2.2), this.paveMat(w / 4, 0.5));
      p.rotation.x = -Math.PI / 2; p.position.set(x < 0 ? x / 2 : 4 + w / 2, 0.034, z); p.receiveShadow = true; this.scene.add(p);
    }
  }

  // ------------------------------------------------------------------ perimeter fence + viewpoint
  _buildFence() {
    const fenceTex = canvasTexture(128, 128, (g, W, H) => {
      g.clearRect(0, 0, W, H); g.strokeStyle = 'rgba(200,205,210,1)'; g.lineWidth = 2;
      for (let i = -W; i < W * 2; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + H, H); g.stroke(); g.beginPath(); g.moveTo(i + H, 0); g.lineTo(i, H); g.stroke(); }
    }, { repeat: [200, 2.4] });
    const mesh = new THREE.MeshStandardMaterial({ map: fenceTex, alphaTest: 0.4, transparent: false, side: THREE.DoubleSide, metalness: 0.6, roughness: 0.4 });
    const fw = 300;
    const fence = new THREE.Mesh(new THREE.PlaneGeometry(fw, 2.6), mesh); fence.position.set(4, 1.3, FENCE_Z); this.scene.add(fence);
    const posts = [];
    for (let x = -146; x <= 154; x += 4) posts.push([V(x, 0, FENCE_Z), V(x, 2.9, FENCE_Z)]);
    posts.push([V(-146, 2.6, FENCE_Z), V(154, 2.6, FENCE_Z)]);
    this.scene.add(beams(posts, 0.08, std(0x8f969e, { metalness: 0.7, roughness: 0.4 })));
    this._col(-150, FENCE_Z - 0.3, 158, FENCE_Z + 0.3);
    // gate sign (vehicle-dependent)
    this.gateSign = signMesh('SPACE LAUNCH COMPLEX 41', 8, 1.0, { glow: 1.5, accent: '#ffc46b' });
    this.gateSign.position.set(-10, 4.4, FENCE_Z + 0.15); this.scene.add(this.gateSign);
    this.scene.add(beams([[V(-13.6, 0, FENCE_Z + 0.1), V(-13.6, 5, FENCE_Z + 0.1)], [V(-6.4, 0, FENCE_Z + 0.1), V(-6.4, 5, FENCE_Z + 0.1)]], 0.15, std(0x2b2f36)));
    const warn = signMesh('RESTRICTED AREA · HAZARDOUS OPERATIONS', 6, 0.5, { bg: '#3a0d0d', accent: '#ff5a4a', glow: 1.3 });
    warn.position.set(19, 1.8, FENCE_Z + 0.15); this.scene.add(warn);
    // binocular viewer (pad viewpoint)
    const viewer = new THREE.Group();
    const vp = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.2, 10), std(0x2a3b5a, { metalness: 0.6, roughness: 0.4 })); vp.position.y = 0.6; viewer.add(vp);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.32, 0.4), std(0x2f6fc0, { metalness: 0.4, roughness: 0.4 })); head.position.y = 1.35; viewer.add(head);
    for (const s of [-0.13, 0.13]) { const e = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.25, 12), std(0x15181d)); e.rotation.x = Math.PI / 2; e.position.set(s, 1.38, 0.28); viewer.add(e); }
    viewer.position.set(8.5, 0, FENCE_Z + 2.2); viewer.rotation.y = Math.PI; this.scene.add(viewer);
    this._col(8.2, FENCE_Z + 1.9, 8.8, FENCE_Z + 2.5);
    this._interact('pad', 'Launch pad viewpoint', viewer, V(8.5, 1.3, FENCE_Z + 2.2), 3.2);
    // viewing deck
    const grate = canvasTexture(128, 128, (g, W, H) => { g.fillStyle = '#24272b'; g.fillRect(0, 0, W, H); g.fillStyle = '#6d747c'; for (let i = 0; i < W; i += 16) { g.fillRect(i, 0, 4, H); g.fillRect(0, i, W, 3); } }, { repeat: [24, 8] });
    const deck = new THREE.Mesh(new THREE.PlaneGeometry(24, 8), new THREE.MeshStandardMaterial({ map: grate, metalness: 0.85, roughness: 0.4 })); deck.rotation.x = -Math.PI / 2; deck.position.set(4, 0.036, FENCE_Z + 4.2); deck.receiveShadow = true; this.scene.add(deck);
  }

  // ------------------------------------------------------------------ street lamps, vehicles, containers
  _buildProps() {
    const lampPos = [];
    for (let z = -20; z > FENCE_Z + 8; z -= 22) { lampPos.push([-0.9, z], [8.9, z]); }
    for (const [x, z] of [[-30, 2], [-12, 2], [22, 2], [40, 2], [-30, 32], [40, 32], [-4, -5], [12, -5], [-38, -8], [50, -8]]) lampPos.push([x, z]);
    const n = lampPos.length;
    const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.08, 0.12, 6, 8), std(0x2d3238, { metalness: 0.6, roughness: 0.4 }), n);
    const head = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 0.18, 0.4), new THREE.MeshBasicMaterial({ color: new THREE.Color(4.0, 3.2, 2.2) }), n);
    const poolMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.75, 0.45), transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, map: radialTex() });
    const pool = new THREE.InstancedMesh(new THREE.PlaneGeometry(12, 12), poolMat, n);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    lampPos.forEach(([x, z], i) => {
      m4.makeTranslation(x, 3, z); pole.setMatrixAt(i, m4);
      m4.makeTranslation(x, 6.05, z); head.setMatrixAt(i, m4);
      m4.compose(V(x, 0.06, z), q, V(1, 1, 1)); pool.setMatrixAt(i, m4);
      this._col(x - 0.2, z - 0.2, x + 0.2, z + 0.2);
    });
    pole.castShadow = true;
    this.scene.add(pole, head, pool);
    // a couple of real lights on the plaza
    for (const [x, z] of [[-12, 2], [22, 2]]) { const L = new THREE.PointLight(0xffc890, 90, 26, 1.7); L.position.set(x, 5.6, z); this.scene.add(L); }

    // parking: instanced cars (body + cabin) with per-instance colors
    const cars = [[-34, 30], [-34, 26], [-34, 22], [-34, 14], [44, 30], [44, 22], [44, 18]];
    const body = new THREE.InstancedMesh(new THREE.BoxGeometry(4.4, 0.8, 1.9), std(0xffffff, { roughness: 0.35, metalness: 0.6 }), cars.length);
    const cabin = new THREE.InstancedMesh(new THREE.BoxGeometry(2.4, 0.7, 1.7), std(0x1b2430, { roughness: 0.1, metalness: 0.8 }), cars.length);
    const wheels = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.36, 0.36, 2.0, 12), std(0x111111, { roughness: 0.8 }), cars.length * 2);
    const cols = [0xe8e8e8, 0x2c4f7c, 0x8b1e1e, 0x3a3f45, 0xd8d2c0, 0x1d2a3a, 0xb0b5ba];
    const wq = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0));
    cars.forEach(([x, z], i) => {
      m4.makeTranslation(x, 0.75, z); body.setMatrixAt(i, m4); body.setColorAt(i, new THREE.Color(cols[i % cols.length]));
      m4.makeTranslation(x - 0.2, 1.5, z); cabin.setMatrixAt(i, m4);
      m4.compose(V(x - 1.4, 0.36, z), wq, V(1, 1, 1)); wheels.setMatrixAt(i * 2, m4);
      m4.compose(V(x + 1.4, 0.36, z), wq, V(1, 1, 1)); wheels.setMatrixAt(i * 2 + 1, m4);
      this._col(x - 2.3, z - 1.05, x + 2.3, z + 1.05);
    });
    body.castShadow = cabin.castShadow = true;
    this.scene.add(body, cabin, wheels);
    const lot = new THREE.Mesh(new THREE.PlaneGeometry(10, 22), std(0x2b2d30, { roughness: 0.95 })); lot.rotation.x = -Math.PI / 2; lot.position.set(-34, 0.032, 22); this.scene.add(lot);
    const lot2 = lot.clone(); lot2.position.set(44, 0.032, 24); this.scene.add(lot2);
    // shipping containers + crates by the PPF
    const cont = std(0x2f6a8f, { roughness: 0.6, metalness: 0.4 });
    this._box(2.4, 2.6, 6, cont, 46, 0, -16, { col: true });
    this._box(2.4, 2.6, 6, std(0xc4622d, { roughness: 0.6, metalness: 0.4 }), 46, 0, -24, { col: true });
    this._box(2.4, 2.6, 6, cont, 46, 2.6, -20);
    const crate = std(0x9b7a4c, { roughness: 0.9 });
    for (const [x, z, s] of [[12, -15, 1.2], [13.4, -15.2, 1], [12.6, -16.6, 0.9], [-36, -20, 1.2], [-36, -22, 1]]) this._box(s, s, s, crate, x, 0, z, { col: true });
    // flag-less tall mast with an aircraft beacon (landmark from the plaza)
    const tower = beams(latticeSegments(2, 2, 40, 4, { x: -46, z: -40, taper: 0.4 }), 0.15, std(0x8a3b26, { metalness: 0.5, roughness: 0.5 }));
    this.scene.add(tower);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.4, 0.2) }));
    beacon.position.set(-46, 40.5, -40); beacon.userData.blink = true; this.scene.add(beacon);
    this._beacons = [beacon];
  }

  // ------------------------------------------------------------------ objective marker
  _buildMarkers() {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.3, 1.6, 2.2), transparent: true, opacity: 0.95, depthTest: false, depthWrite: false, toneMapped: false });
    const dia = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 0), mat);
    dia.scale.set(1, 1.6, 1);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.03, 6, 32), mat); ring.rotation.x = Math.PI / 2;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 6, 1, true), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 0.9, 1.3), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    const g = new THREE.Group(); g.add(dia, ring);
    g.renderOrder = 1000; dia.renderOrder = 1000; ring.renderOrder = 1000;
    g.visible = false; beam.visible = false;
    this.scene.add(g, beam);
    this.marker = { g, dia, ring, beam, target: null, base: V(0, 0, 0) };
  }


  // ------------------------------------------------------------------ AAA dressing: path lights, radar, crawler, tankers, barbed wire
  _buildDressing() {
    const m4 = new THREE.Matrix4();
    // runway-style path lights along both curbs of the avenue + plaza edge
    const pts = [];
    for (let z = AVE.z1 - 2; z > FENCE_Z + 6; z -= 4) pts.push([AVE.x0 - 0.45, z], [AVE.x1 + 0.45, z]);
    const pl = new THREE.InstancedMesh(new THREE.BoxGeometry(0.22, 0.12, 0.22), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), pts.length);
    const cw = new THREE.Color(2.2, 2.8, 4.0), ca = new THREE.Color(4.0, 2.4, 0.8);
    pts.forEach(([x, z], i) => { m4.makeTranslation(x, 0.1, z); pl.setMatrixAt(i, m4); pl.setColorAt(i, Math.floor(i / 2) % 5 === 0 ? ca : cw); });
    this.scene.add(pl);
    this._pathLights = pl;
    // rotating radar dish (tracking antenna)
    const radar = new THREE.Group();
    const steel = std(0xd9dde2, { roughness: 0.35, metalness: 0.6 });
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.8, 7, 16), std(0xbfc4c9, { roughness: 0.6 })); ped.position.y = 3.5; radar.add(ped);
    const yoke = new THREE.Group(); yoke.position.y = 7.4; radar.add(yoke);
    const base = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.8, 2.4), steel); yoke.add(base);
    const dishPts = []; for (let i = 0; i <= 16; i++) { const r = (i / 16) * 5; dishPts.push(new THREE.Vector2(r, r * r * 0.05)); }
    const dish = new THREE.Mesh(new THREE.LatheGeometry(dishPts, 40), new THREE.MeshStandardMaterial({ color: 0xeef0f2, roughness: 0.4, metalness: 0.3, side: THREE.DoubleSide }));
    dish.rotation.x = -Math.PI / 2 - 0.6; dish.position.set(0, 2.2, 0); yoke.add(dish);
    const feed = beams([[V(0, 2.2, 0), V(0, 2.2 + Math.cos(0.6) * 3.4, -Math.sin(0.6) * 3.4)]], 0.12, steel); yoke.add(feed);
    for (const sx of [-1, 1]) { const arm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.6, 0.5), steel); arm.position.set(sx * 1.1, 1.4, 0); yoke.add(arm); }
    radar.position.set(-46, 0, -62); radar.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.scene.add(radar); this._col(-48, -64, -44, -60);
    this._spin.push({ o: yoke, s: 0.35, axis: 'y' });
    const rl = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.4, 0.2) })); rl.position.set(-46, 7.2, -62); this.scene.add(rl); this._beacons = (this._beacons || []).concat([rl]);
    // crawler / transporter vehicle parked off the avenue
    const cr = new THREE.Group();
    const grey = std(0x8c9196, { roughness: 0.7, metalness: 0.4 }), dark = std(0x26292d, { roughness: 0.8, metalness: 0.5 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(22, 2.4, 18), grey); deck.position.y = 4.4; cr.add(deck);
    const deckTop = new THREE.Mesh(new THREE.BoxGeometry(22.2, 0.25, 18.2), this.hazardMat(18, 1)); deckTop.position.y = 5.7; cr.add(deckTop);
    for (const [x, z] of [[-8, -6.5], [8, -6.5], [-8, 6.5], [8, 6.5]]) {
      const tr = new THREE.Mesh(new THREE.BoxGeometry(6, 2.4, 3.6), dark); tr.position.set(x, 1.2, z); cr.add(tr);
      const jk = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 1.6, 12), std(0xb0b5ba, { metalness: 0.8, roughness: 0.3 })); jk.position.set(x, 3.0, z); cr.add(jk);
    }
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.2, 3), std(0xe9eaea, { roughness: 0.5 })); cab.position.set(10.4, 6.9, -7); cr.add(cab);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.9), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.4, 0.9) })); win.position.set(11.66, 7.3, -7); win.rotation.y = Math.PI / 2; cr.add(win);
    const crSign = signMesh('PAYLOAD TRANSPORTER 2', 8, 0.9, { glow: 1.2 }); crSign.position.set(0, 4.4, 9.02); cr.add(crSign);
    cr.position.set(30, 0, -235); cr.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.scene.add(cr); this._col(19, -244, 41, -226);
    // propellant tanker trucks (RP-1 / LOX)
    const truck = (x, z, rot, label, tankCol) => {
      const g = new THREE.Group();
      const cabM = std(0xd6d8da, { roughness: 0.4, metalness: 0.5 });
      const cab2 = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.6, 2.5), cabM); cab2.position.set(5.2, 1.9, 0); g.add(cab2);
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.0), new THREE.MeshStandardMaterial({ color: 0x0b1118, roughness: 0.05, metalness: 0.9 })); glass.position.set(6.52, 2.5, 0); glass.rotation.y = Math.PI / 2; g.add(glass);
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 8, 24), std(tankCol, { roughness: 0.25, metalness: 0.85 })); tank.rotation.z = Math.PI / 2; tank.position.set(-0.6, 2.2, 0); g.add(tank);
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(12, 0.5, 2.3), dark); chassis.position.set(0, 0.85, 0); g.add(chassis);
      const wq = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0));
      const wh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.5, 0.5, 2.5, 14), std(0x111111, { roughness: 0.9 }), 4);
      [-4, -2.8, 2, 5].forEach((wx, i) => { m4.compose(V(wx, 0.5, 0), wq, V(1, 1, 1)); wh.setMatrixAt(i, m4); }); g.add(wh);
      const lab = signMesh(label, 4, 0.6, { glow: 1.1, bg: '#1a1d22', accent: '#ffc46b' }); lab.position.set(-0.6, 2.2, 1.27); g.add(lab);
      const bcn = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.3), new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 2, 0.2) })); bcn.position.set(5.2, 3.3, 0); bcn.userData.blink = true; g.add(bcn); this._beacons.push(bcn);
      g.position.set(x, 0, z); g.rotation.y = rot; g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      this.scene.add(g);
      const bb = new THREE.Box3().setFromObject(g); this._col(bb.min.x, bb.min.z, bb.max.x, bb.max.z);
    };
    truck(-22, -262, 0.15, 'RP-1 KEROSENE', 0xc9ccd0);
    truck(-24, -276, 0.05, 'LIQUID OXYGEN', 0xeaf2f8);
    // barbed wire helix along the fence top + outriggers
    const bw = []; const R = 0.22;
    for (let x = -146; x <= 154; x += 0.12) { const a = x * 11; bw.push(V(x, 3.15 + Math.sin(a) * R, FENCE_Z + 0.25 + Math.cos(a) * R)); }
    this.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bw), new THREE.LineBasicMaterial({ color: 0x9aa0a6 })));
    const og = []; for (let x = -146; x <= 154; x += 4) og.push([V(x, 2.85, FENCE_Z), V(x, 3.35, FENCE_Z + 0.5)]);
    this.scene.add(beams(og, 0.05, std(0x8f969e, { metalness: 0.7 })));
  }

  // floodlit rocket: 4 light towers with fake volumetric cones + LOX/LH2 boil-off steam
  _buildPadFx(off, H) {
    if (this.padFx) { this.scene.remove(this.padFx); this.padFx.traverse((o) => o.geometry?.dispose()); }
    const g = new THREE.Group(); this.padFx = g;
    const top = this.padWorld.clone();
    const coneMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
      uniforms: { uC: { value: new THREE.Color(0.9, 0.95, 1.1) }, uT: { value: 0 } },
      vertexShader: 'varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform vec3 uC; uniform float uT; void main(){ float along=vUv.y; float edge=pow(abs(dot(vN,vV)),2.5); float a=edge*pow(along,1.8)*0.07*(0.92+0.08*sin(uT*1.3+vUv.x*30.0)); gl_FragColor=vec4(uC*a,1.0); }',
    });
    this._coneMat = coneMat;
    const towers = [[-70, 75], [75, 70], [-80, -60], [80, -55]];
    for (const [dx, dz] of towers) {
      const base = V(off.x + dx, 0, off.z + dz);
      const th = 28;
      g.add(beams(latticeSegments(2.2, 2.2, th, 3.5, { x: base.x, z: base.z, taper: 0.3 }), 0.14, std(0x55595e, { metalness: 0.6, roughness: 0.5 })));
      const head = new THREE.Mesh(new THREE.BoxGeometry(4, 2.2, 0.6), new THREE.MeshBasicMaterial({ color: new THREE.Color(8, 8, 8.5), toneMapped: false }));
      head.position.set(base.x, th + 1.2, base.z);
      const tgt = V(off.x, top.y + H * (0.35 + Math.random() * 0.3), off.z);
      head.lookAt(tgt); g.add(head);
      // cone from the lamp head to the vehicle
      const from = head.position.clone(); const len = from.distanceTo(tgt) * 1.08;
      const geo = new THREE.CylinderGeometry(0.9, 6.5, len, 32, 1, true); geo.translate(0, -len / 2, 0); // uv.y: 1 at lamp (top) -> 0 at vehicle
      const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i));
      const cone = new THREE.Mesh(geo, coneMat);
      cone.position.copy(from);
      cone.quaternion.setFromUnitVectors(V(0, -1, 0), tgt.clone().sub(from).normalize());
      cone.renderOrder = 7; g.add(cone);
    }
    // extra spotlights (the env already has two)
    const sp = new THREE.SpotLight(0xe6eeff, this.vehicleId === 'atlas_v_411' ? 14000 : 4000, 300, 0.16, 0.6, 1.6);
    sp.position.set(off.x - 80, 30, off.z - 60); sp.target.position.set(off.x, top.y + H * 0.5, off.z); g.add(sp, sp.target);
    // boil-off steam particles venting from the vehicle
    const N = 90;
    const pos = new Float32Array(N * 3), seed = new Float32Array(N);
    for (let i = 0; i < N; i++) seed[i] = Math.random();
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    sg.boundingSphere = new THREE.Sphere(top, 200);
    const vents = this.vehicleId === 'atlas_v_411' ? [[1.2, H * 0.6], [-1.4, H * 0.68], [0.9, H * 0.33]] : [[1.4, H * 0.62], [-1.2, H * 0.55], [1.2, H * 0.3]];
    const sm = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uT: { value: 0 }, uBase: { value: top.clone() }, uVents: { value: vents.map(([x, y]) => new THREE.Vector2(x, y)) } },
      vertexShader: `attribute float aSeed; uniform float uT; uniform vec3 uBase; uniform vec2 uVents[3]; varying float vA;
        void main(){ float life=4.0; float t=mod(uT+aSeed*life, life)/life; int vi=int(mod(aSeed*97.0,3.0)); vec2 v=uVents[vi];
          vec3 p=uBase+vec3(v.x*(1.0+t*3.0), v.y - t*6.0*(0.5+fract(aSeed*13.0)), (fract(aSeed*7.0)-0.5)*2.0 + t*4.0);
          p.x += t*t*8.0; vA=(1.0-t)*smoothstep(0.0,0.1,t)*0.55;
          vec4 mv=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=(2.0+t*9.0)*900.0/max(-mv.z,1.0); }`,
      fragmentShader: `varying float vA; void main(){ float r=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,r)*vA; if(a<0.01) discard; gl_FragColor=vec4(vec3(0.92,0.94,0.98),a); }`,
    });
    this._steamMat = sm;
    const steam = new THREE.Points(sg, sm); steam.frustumCulled = false; g.add(steam);
    this.scene.add(g);
  }

  setObjective(id) {
    const it = id ? this.interactables.find((i) => i.id === id) : null;
    this.marker.target = it || null;
    this.marker.g.visible = !!it; this.marker.beam.visible = !!it;
    if (it) {
      const bb = new THREE.Box3().setFromObject(it.object);
      this.marker.base.set(it.position.x, Math.max(bb.max.y, 1.5) + 1.0, it.position.z);
    }
  }

  highlight(id) {
    this.highlighted = id || null;
    for (const it of this.interactables) {
      const on = it.id === this.highlighted;
      it._hl.outline.visible = on;
      if (!on) for (const { m, e, ei } of it._hl.mats) { m.emissive.copy(e); m.emissiveIntensity = ei; }
    }
  }

  // ------------------------------------------------------------------ rocket on the pad
  setVehicle(id) {
    this.vehicleId = id;
    if (this.site) { this.scene.remove(this.site.group); this.site.group.traverse((o) => o.geometry?.dispose()); }
    const atlas = id === 'atlas_v_411';
    this.site = atlas ? createSLC41() : createLC39A();
    const off = atlas ? PAD.atlas : PAD.falcon;
    this.site.group.position.copy(off);
    mergeStatic(this.site.group, this.site.rocketParent);
    this.scene.add(this.site.group);
    this.rocket = createRocket(id);
    this.site.rocketParent.add(this.rocket);
    this.padWorld = this.site.padPosition.clone().add(off);
    // floodlights on the vehicle
    const [f1, f2] = this.env.flood; const H = this.rocket.userData.height;
    f1.position.set(off.x + 70, this.padWorld.y + 2, off.z + 90); f2.position.set(off.x - 60, this.padWorld.y + 2, off.z + 95);
    f1.target.position.set(off.x, this.padWorld.y + H * 0.55, off.z); f2.target.position.set(off.x, this.padWorld.y + H * 0.45, off.z);
    const k = atlas ? 1 : 0.3; // white Falcon paint needs far less light than the bronze Atlas core
    f1.distance = f2.distance = 360; f1.intensity = 16000 * k; f2.intensity = 11000 * k; f1.angle = f2.angle = 0.16;
    this._buildPadFx(off, H);
    // gate sign
    const txt = atlas ? 'SPACE LAUNCH COMPLEX 41' : 'LAUNCH COMPLEX 39A';
    const old = this.gateSign; const ns = signMesh(txt, 8, 1.0, { glow: 1.5, accent: '#ffc46b' });
    ns.position.copy(old.position); this.scene.remove(old); old.geometry.dispose(); this.gateSign = ns; this.scene.add(ns);
    this.siteName = this.site.siteName;
  }

  // ------------------------------------------------------------------ frame
  update(dt) {
    dt = Math.min(dt, 0.1);
    this.time += dt;
    this.env.update(dt);
    // shadow box follows the player
    const cp = this.camera.position;
    const sun = this.env.sun;
    sun.target.position.set(cp.x, 0, cp.z);
    sun.position.copy(sun.target.position).addScaledVector(this.env.sunDir, 500);
    // spinners / hologram
    for (const s of this._spin) s.o.rotation[s.axis] += s.s * dt;
    if (this._holoMat) this._holoMat.uniforms.uT.value = this.time;
    if (this._coneMat) this._coneMat.uniforms.uT.value = this.time;
    if (this._steamMat) this._steamMat.uniforms.uT.value = this.time;
    if (this._blip) { const a = this.time * 0.9; this._blip.position.set(Math.cos(a) * 0.95, Math.sin(a) * 0.95 * Math.sin(this._orbitTilt), Math.sin(a) * 0.95 * Math.cos(this._orbitTilt)); }
    // crane drifts slowly
    if (this._crane) { const dz = Math.sin(this.time * 0.15) * 0.8; for (const o of [this._crane.hoist, this._crane.cable, this._crane.hook]) o.position.x = 29 + dz; }
    // blinkers
    const on = Math.floor(this.time * 1.2) % 2 === 0;
    for (const b of this.site.blinkers) b.visible = on;
    for (const b of this._beacons) b.visible = on;
    // highlight pulse
    if (this.highlighted) {
      const it = this.interactables.find((i) => i.id === this.highlighted);
      if (it) {
        const k = 0.5 + 0.5 * Math.sin(this.time * 6);
        it._hl.outline.material.opacity = 0.45 + 0.55 * k;
        for (const { m } of it._hl.mats) { m.emissive.copy(CYAN); m.emissiveIntensity = 0.25 + 0.45 * k; }
      }
    }
    // objective marker
    const mk = this.marker;
    if (mk.target) {
      const d = cp.distanceTo(mk.base);
      const s = Math.max(1, d * 0.035);
      mk.g.position.copy(mk.base); mk.g.position.y += Math.sin(this.time * 2.2) * 0.18 * s + 0.2 * s;
      mk.g.scale.setScalar(s);
      mk.dia.rotation.y += dt * 1.8;
      mk.ring.scale.setScalar(1 + 0.25 * Math.sin(this.time * 3));
      const near = d < 6;
      mk.g.visible = !near || true;
      mk.dia.material.opacity = THREE.MathUtils.clamp((d - 2) / 6, 0.25, 0.95);
      // beam from ground up, only useful when far
      mk.beam.visible = d > 25;
      mk.beam.position.set(mk.base.x, 30, mk.base.z); mk.beam.scale.set(1 + d * 0.004, 60, 1 + d * 0.004);
    }
  }

  resize(w, h) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }

  // 'concrete' | 'metal' | 'grass' for footstep sounds
  footstepSurface(x, z) {
    const inR = (r) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1;
    if (inR({ x0: 20, x1: 38, z0: -32, z1: -14 })) return 'metal';                 // PPF work-platform plating
    if (inR({ x0: -8, x1: 16, z0: FENCE_Z, z1: FENCE_Z + 8.5 })) return 'metal';    // grated viewing deck
    if (inR(MCC) || inR(PPF)) return 'concrete';
    if (inR({ x0: -43, x1: 53, z0: -17, z1: 44 })) return 'concrete';              // plaza + forecourt + parking
    if (x >= AVE.x0 - 0.5 && x <= AVE.x1 + 0.5 && z >= AVE.z0 && z <= AVE.z1) return 'concrete';
    for (const [gx, gz] of this._gardenSpots || []) if (Math.abs(z - gz) < 1.3 && (gx < 0 ? x >= gx && x <= 0 : x >= 8 && x <= gx)) return 'concrete';
    return 'grass';
  }

  // optional: image-based lighting from the dusk sky for glossy concrete / glass reflections
  setRenderer(renderer) {
    if (this._envRT) return;
    const pm = new THREE.PMREMGenerator(renderer);
    const es = new THREE.Scene();
    const skyMesh = this.env.group.children.find((o) => o.material && o.material.isShaderMaterial);
    const sky = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMesh.material); es.add(sky);
    // a few warm/cool light blobs so wet concrete picks up lamp streaks
    const blob = (c, x, y, z, s2) => { const m = new THREE.Mesh(new THREE.SphereGeometry(s2, 8, 6), new THREE.MeshBasicMaterial({ color: c })); m.position.set(x, y, z); es.add(m); };
    blob(new THREE.Color(6, 4.5, 3), 20, 6, 10, 1.2); blob(new THREE.Color(6, 4.5, 3), -18, 6, -14, 1.2); blob(new THREE.Color(3, 4, 6), 0, 12, -40, 2);
    this._envRT = pm.fromScene(es, 0.02, 0.1, 200);
    this.scene.environment = this._envRT.texture;
    this.scene.environmentIntensity = 0.55;
    pm.dispose();
  }

  dispose() {
    this.scene.traverse((o) => { o.geometry?.dispose(); });
    this.screenTexture.dispose();
    this._envRT?.dispose();
  }
}

// Merge plain static meshes of a group by material to cut draw calls (keeps instanced meshes, lines, blinkers, and `keep` subtree).
function mergeStatic(group, keep) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const byMat = new Map(); const remove = [];
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.userData.blink || Array.isArray(o.material)) return;
    let p = o; while (p) { if (p === keep) return; p = p.parent; }
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv || !g.attributes.normal) return;
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    const key = o.material.uuid;
    if (!byMat.has(key)) byMat.set(key, { mat: o.material, geos: [] });
    byMat.get(key).geos.push(g); remove.push(o);
  });
  for (const o of remove) o.parent.remove(o);
  for (const { mat, geos } of byMat.values()) {
    const merged = mergeGeometries(geos, false); if (!merged) continue;
    const m = new THREE.Mesh(merged, mat); m.castShadow = true; m.receiveShadow = true; group.add(m);
  }
}

let _radial = null;
function radialTex() {
  if (_radial) return _radial;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  _radial = new THREE.CanvasTexture(c); return _radial;
}
