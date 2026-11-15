// SpaceScene: every non-launch 3D view of Miku☆Miku☆Beam.
// Modes: briefing | build | cruise | proximity | reentry.  Rendered by main through EffectComposer + UnrealBloomPass.
// AI-assisted code (Claude) — see README.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createSpacecraft, updateSpacecraft, makeThrusterGlow } from '../models/spacecraft.js';
import { createBennu } from '../models/bennu.js';
import {
  AU, createSun, createEarth, createEarthOrbitLine, createBennuOrbitLine,
  positionEarth, positionBennu, buildTransferArc, buildReturnArc, lerpDate,
} from '../models/solarsystem.js';
import { glowTexture, glowSprite, dotTexture, earthTexture, rng } from '../models/textures.js';

const ease = (t) => t * t * (3 - 2 * t);
const clamp01 = (t) => Math.min(1, Math.max(0, t));
const SUN_DIR = new THREE.Vector3(-1, 0.35, 0.45).normalize();

function makeStarfield(count = 7000, radius = 6000) {
  const r = rng(5);
  const pos = new Float32Array(count * 3), col = new Float32Array(count * 3), size = new Float32Array(count);
  const c = new THREE.Color();
  // Milky Way band: tilted great circle, stars concentrated near it
  const bandN = new THREE.Vector3(0.3, 0.9, -0.3).normalize();
  for (let i = 0; i < count; i++) {
    let v = new THREE.Vector3(r() * 2 - 1, r() * 2 - 1, r() * 2 - 1).normalize();
    if (i < count * 0.45) { // pull toward band
      const d = v.dot(bandN);
      v.addScaledVector(bandN, -d * (0.85 + r() * 0.15)).normalize();
    }
    pos.set([v.x * radius, v.y * radius, v.z * radius], i * 3);
    const t = r();
    if (t < 0.12) c.setRGB(0.7, 0.8, 1.0); else if (t < 0.22) c.setRGB(1.0, 0.85, 0.65); else c.setRGB(1, 1, 1);
    const b = 0.35 + Math.pow(r(), 3) * 1.8;
    col.set([c.r * b, c.g * b, c.b * b], i * 3);
    size[i] = 1.2 + Math.pow(r(), 6) * 5;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('size', new THREE.BufferAttribute(size, 1));
  const m = new THREE.ShaderMaterial({
    uniforms: { map: { value: dotTexture() }, pr: { value: Math.min(window.devicePixelRatio || 1, 2) } },
    vertexShader: `attribute float size; varying vec3 vC; uniform float pr;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * pr; }`,
    fragmentShader: `uniform sampler2D map; varying vec3 vC;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); if(t.a<0.02) discard; gl_FragColor = vec4(vC * t.a, t.a); }`,
    vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  pts.renderOrder = -10;
  // faint Milky Way glow band (big sprites)
  const band = new THREE.Group();
  const mw = new THREE.SpriteMaterial({ map: glowTexture('rgba(170,180,240,0.12)', 'rgba(110,120,190,0.04)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.35 });
  const u = new THREE.Vector3(1, 0, 0).cross(bandN).normalize(), w = bandN.clone().cross(u).normalize();
  for (let k = 0; k < 160; k++) {
    const a = r() * Math.PI * 2;
    const s = new THREE.Sprite(mw);
    s.position.copy(u.clone().multiplyScalar(Math.cos(a)).addScaledVector(w, Math.sin(a)).addScaledVector(bandN, (r() - 0.5) * 0.25).normalize().multiplyScalar(radius * 0.95));
    s.scale.setScalar(radius * (0.25 + r() * 0.35));
    band.add(s);
  }
  const grp = new THREE.Group();
  grp.add(band, pts);
  return grp;
}

function atmosphereMaterial(color = new THREE.Color(0.35, 0.65, 1.6)) {
  return new THREE.ShaderMaterial({
    uniforms: { c: { value: color }, sunDir: { value: SUN_DIR.clone() } },
    vertexShader: `varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vW = normalize(wp.xyz);
        vN = normalize(normalMatrix * normal); vec4 mv = viewMatrix * wp; vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 c; uniform vec3 sunDir; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 3.0); float day = clamp(dot(vW, sunDir)*0.8+0.45, 0.08, 1.0);
        gl_FragColor = vec4(c * f * day * 1.6, f * day); }`,
    side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
}

export class SpaceScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x01020a);
    this.camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 30000);
    this.mode = null;
    this.time = 0;
    this.width = 1280; this.height = 720;
    this.timeline = null; // active cinematic
    this.scCfg = { instruments: ['ocams', 'ola', 'ovirs', 'otes', 'rexis', 'tagsam', 'src'], solar: 'solar_large', antenna: 'hga', shield: 1 };

    this.stars = makeStarfield();
    this.scene.add(this.stars);
    this.ambient = new THREE.AmbientLight(0x223044, 0.35);
    this.scene.add(this.ambient);

    this.groups = {};
    this._buildBriefing();
    this._buildBuild();
    this._buildCruise();
    this._buildProximity();
    this._buildReentry();
    this.setMode('briefing');
  }

  // ---------------------------------------------------------------- builders
  _sunLight(intensity = 3.2) {
    const l = new THREE.DirectionalLight(0xfff3dd, intensity);
    l.position.copy(SUN_DIR).multiplyScalar(1000);
    return l;
  }

  _buildBriefing() {
    const g = new THREE.Group(); g.name = 'mode:briefing';
    const bennu = createBennu({ radius: 245, detail: 6, boulders: 900 });
    bennu.rotation.z = 0.05;
    g.add(bennu);
    const sc = createSpacecraft(this.scCfg); sc.scale.setScalar(13);
    const pivot = new THREE.Group(); pivot.add(sc); sc.position.set(-360, 90, 420); sc.rotation.set(0.35, -0.25, 0.2);
    g.add(pivot);
    const sun = this._sunLight(4.2); g.add(sun);
    const fill = new THREE.DirectionalLight(0x5070a0, 0.25); fill.position.set(400, -200, -600); g.add(fill);
    // Sun lens-glow off screen-left
    const glow = glowSprite(new THREE.Color(1.5, 1.25, 0.9), 2600, 2.4, 0.8);
    glow.position.copy(SUN_DIR).multiplyScalar(5000);
    g.add(glow);
    this.scene.add(g);
    this.groups.briefing = g;
    this.brief = { bennu, sc, pivot };
  }

  _buildBuild() {
    const g = new THREE.Group(); g.name = 'mode:build';
    const sc = createSpacecraft(this.scCfg);
    g.add(sc);
    const key = new THREE.DirectionalLight(0xfff1dc, 3.0); key.position.set(-6, 8, 7); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = -6; key.shadow.camera.right = 6; key.shadow.camera.top = 6; key.shadow.camera.bottom = -6;
    const rim = new THREE.DirectionalLight(0x7fb0ff, 2.2); rim.position.set(6, 3, -8);
    const fill = new THREE.DirectionalLight(0xffd0a0, 0.6); fill.position.set(5, -2, 6);
    const hemi = new THREE.HemisphereLight(0x8899cc, 0x110d08, 0.5);
    g.add(key, rim, fill, hemi);
    // subtle grid disc
    const disc = new THREE.Group(); disc.position.y = -3.4;
    const polar = new THREE.PolarGridHelper(6, 16, 8, 64, 0x2d5ea8, 0x1a3360);
    polar.material.transparent = true; polar.material.opacity = 0.45; polar.material.depthWrite = false;
    disc.add(polar);
    const ring = new THREE.Mesh(new THREE.RingGeometry(5.9, 6.05, 96), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.3, 0.8, 1.8), transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; disc.add(ring);
    const pad = new THREE.Mesh(new THREE.CircleGeometry(6, 64), new THREE.MeshStandardMaterial({ color: 0x0a1020, roughness: 0.9, metalness: 0.2, transparent: true, opacity: 0.7 }));
    pad.rotation.x = -Math.PI / 2; pad.position.y = -0.01; pad.receiveShadow = true; disc.add(pad);
    g.add(disc);
    this.scene.add(g);
    this.groups.build = g;
    this.buildSc = sc;
  }

  _buildCruise() {
    const g = new THREE.Group(); g.name = 'mode:cruise';
    const sun = createSun(4); g.add(sun);
    g.add(createEarthOrbitLine(), createBennuOrbitLine());
    const earth = createEarth(2.6); g.add(earth);
    const bennu = new THREE.Group();
    const bm = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 1), new THREE.MeshStandardMaterial({ color: 0x9b8e80, roughness: 1, flatShading: true, emissive: 0x2a2015, emissiveIntensity: 0.6 }));
    bennu.add(bm);
    bennu.add(glowSprite(new THREE.Color(1.6, 1.0, 0.45), 10, 2.5));
    g.add(bennu);
    // ecliptic reference grid
    const grid = new THREE.PolarGridHelper(170, 12, 6, 128, 0x1b2a48, 0x121c33);
    grid.material.transparent = true; grid.material.opacity = 0.35; grid.material.depthWrite = false;
    g.add(grid);
    // spacecraft marker
    const marker = new THREE.Group();
    const ms = glowSprite(new THREE.Color(0.8, 2.0, 2.6), 7, 2.4, 1.0); marker.add(ms);
    const mc = new THREE.Mesh(new THREE.OctahedronGeometry(0.7), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 3, 3.5) }));
    marker.add(mc);
    g.add(marker);
    // transfer arc (planned, dim) and trail (flown, bright)
    const arcMat = new THREE.LineDashedMaterial({ color: 0x6fd6ff, dashSize: 2.2, gapSize: 1.6, transparent: true, opacity: 0.5, depthWrite: false });
    const arc = new THREE.Line(new THREE.BufferGeometry(), arcMat);
    const trailMat = new THREE.LineBasicMaterial({ color: new THREE.Color(0.35, 1.1, 1.5), transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending });
    const trail = new THREE.Line(new THREE.BufferGeometry(), trailMat);
    g.add(arc, trail);
    this.scene.add(g);
    this.groups.cruise = g;
    this.cruise = { sun, earth, bennu, marker, arc, trail, curve: null, points: null, leg: 'out', progress: 0, launch: null, arrival: null };
  }

  _buildProximity() {
    const g = new THREE.Group(); g.name = 'mode:proximity';
    const bennu = createBennu({ radius: 245, detail: 6, boulders: 1400 });
    g.add(bennu);
    const sc = createSpacecraft(this.scCfg);
    g.add(sc);
    const sun = this._sunLight(3.8); sun.castShadow = true;
    { const n = bennu.userData.nightingale.normal;
      const side = new THREE.Vector3().crossVectors(n, new THREE.Vector3(0, 0, 1)).normalize();
      const fwd = new THREE.Vector3().crossVectors(side, n).normalize();
      const d = n.clone().multiplyScalar(0.7).addScaledVector(side, 0.65).addScaledVector(fwd, 0.35).normalize();
      sun.position.copy(bennu.userData.nightingale.position).addScaledVector(d, 800);
      sun.target.position.copy(bennu.userData.nightingale.position); this._proxSunDir = d; }
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 3000 });
    g.add(sun, sun.target);
    const fill = new THREE.HemisphereLight(0x6070a0, 0x1a1208, 0.45); g.add(fill);
    // regolith burst particles
    const N = 1800;
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    const pm = new THREE.PointsMaterial({ size: 0.22, map: dotTexture(), color: 0x9d9286, transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true });
    const burst = new THREE.Points(pg, pm); burst.frustumCulled = false;
    g.add(burst);
    const gas = glowSprite(new THREE.Color(2.2, 2.3, 2.6), 6, 1.6); gas.material.opacity = 0; g.add(gas);
    const thrGlows = [];
    this.scene.add(g);
    this.groups.proximity = g;
    this.prox = { bennu, sc, sun, burst, gas, vel: new Float32Array(N * 3), N, thrGlows, site: null };
    this._placeProximitySpacecraft(40);
  }

  _buildReentry() {
    const g = new THREE.Group(); g.name = 'mode:reentry';
    const R = 1000;
    const earth = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 64), new THREE.MeshStandardMaterial({ map: earthTexture(), roughness: 0.8, metalness: 0, emissive: 0x061230, emissiveIntensity: 0.3 }));
    earth.rotation.set(-1.15, 0.0, 0.25);
    g.add(earth);
    const atm = new THREE.Mesh(new THREE.SphereGeometry(R * 1.035, 96, 64), atmosphereMaterial());
    g.add(atm);
    const sun = this._sunLight(3.0); g.add(sun);
    // capsule
    const cap = new THREE.Group();
    const heat = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32), new THREE.MeshStandardMaterial({ color: 0x3a2a1e, emissive: new THREE.Color(1.8, 0.6, 0.15), emissiveIntensity: 1 }));
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.39, 0.36, 32), new THREE.MeshStandardMaterial({ color: 0xd9d6cf, roughness: 0.5 }));
    back.position.y = 0.23; cap.add(heat, back);
    cap.scale.setScalar(4.5);
    const plasma = glowSprite(new THREE.Color(3.2, 1.6, 0.6), 14, 2.0, 2.0);
    const capRoot = new THREE.Group(); capRoot.add(cap, plasma);
    g.add(capRoot);
    // fiery trail: stretched additive cone + particle streak
    const trailMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 1.0, 0.3), transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    const trail = new THREE.Mesh(new THREE.ConeGeometry(3.4, 110, 24, 1, true), trailMat);
    capRoot.add(trail);
    const sparkN = 600;
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(sparkN * 3), 3));
    const sparks = new THREE.Points(sg, new THREE.PointsMaterial({ size: 2.2, map: dotTexture(), color: new THREE.Color(2.4, 1.2, 0.4), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    sparks.frustumCulled = false;
    g.add(sparks);
    this.scene.add(g);
    this.groups.reentry = g;
    this.re = { earth, atm, capRoot, cap, plasma, trail, sparks, sparkN, sparkAge: new Float32Array(sparkN).fill(99), sparkIdx: 0, R, progress: 0 };
    this._placeCapsule(0);
  }

  // ---------------------------------------------------------------- API
  setSpacecraftConfig(cfg) {
    this.scCfg = { ...this.scCfg, ...cfg };
    updateSpacecraft(this.brief.sc, this.scCfg);
    updateSpacecraft(this.buildSc, this.scCfg);
    updateSpacecraft(this.prox.sc, this.scCfg);
    this._placeProximitySpacecraft(this.prox.height ?? 40);
  }

  setMode(mode, opts = {}) {
    if (!this.groups[mode]) throw new Error('Unknown SpaceScene mode: ' + mode);
    this.mode = mode;
    this.timeline = null;
    for (const [k, g] of Object.entries(this.groups)) g.visible = k === mode;
    this.camera.clearViewOffset();
    this.camera.near = 0.1; this.camera.far = 30000;
    if (this.controls) this.controls.enabled = false;
    if (mode === 'briefing') {
      this.camera.fov = 38;
      this.camera.position.set(-260, 120, 1050);
      this.camTarget = new THREE.Vector3(-230, -10, 0);
      this.ambient.intensity = 0.25;
    } else if (mode === 'build') {
      this.camera.fov = 35;
      this.camera.position.set(8.2, 3.4, 10.6);
      this.camTarget = new THREE.Vector3(0, -0.2, 0);
      this.ambient.intensity = 0.35;
      this._applyViewOffset();
    } else if (mode === 'cruise') {
      this.camera.fov = 42;
      this.camera.position.set(-25, 220, 255);
      this.camTarget = new THREE.Vector3(0, 0, 0);
      this.ambient.intensity = 0.5;
      if (opts.launchDate) this.setCruise(opts);
    } else if (mode === 'proximity') {
      this.camera.fov = 45;
      this.ambient.intensity = 0.18;
      this._placeProximitySpacecraft(40);
      this.prox.sc.userData.extendTagsam(0);
      this._proxCam('wide');
    } else if (mode === 'reentry') {
      this.camera.fov = 40;
      this.camera.position.set(0, this.re.R * 1.06, this.re.R * 0.66);
      this.camTarget = new THREE.Vector3(0, this.re.R * 0.93, -200);
      this.ambient.intensity = 0.2;
      this._placeCapsule(0);
    }
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.camTarget);
    if (this.controls) { this.controls.target.copy(this.camTarget); this.controls.enabled = this._orbitWanted; this.controls.update(); }
  }

  /** opts: { launchDate, arrivalDate, progress 0..1 } */
  setCruise({ launchDate, arrivalDate, progress = 0 }) {
    const c = this.cruise;
    if (c.leg !== 'out' || !c.launch || +new Date(c.launch) !== +new Date(launchDate) || +new Date(c.arrival) !== +new Date(arrivalDate)) {
      const { curve, points } = buildTransferArc(launchDate, arrivalDate);
      this._setArc(curve, points);
      c.leg = 'out'; c.launch = launchDate; c.arrival = arrivalDate;
    }
    this._setCruiseProgress(progress, launchDate, arrivalDate);
  }

  /** opts: { departDate, arriveDate, progress 0..1 } — Bennu -> Earth */
  setReturn({ departDate, arriveDate, progress = 0 }) {
    const c = this.cruise;
    if (c.leg !== 'return' || +new Date(c.launch) !== +new Date(departDate) || +new Date(c.arrival) !== +new Date(arriveDate)) {
      const { curve, points } = buildReturnArc(departDate, arriveDate);
      this._setArc(curve, points);
      c.leg = 'return'; c.launch = departDate; c.arrival = arriveDate;
    }
    this._setCruiseProgress(progress, departDate, arriveDate);
  }

  /** Screen-space positions for HTML labels: { sun, earth, bennu, spacecraft } in CSS px (null if behind camera) */
  getLabelPositions() {
    const out = {};
    const proj = (obj) => {
      const v = obj.getWorldPosition(new THREE.Vector3()).project(this.camera);
      if (v.z > 1) return null;
      return { x: (v.x * 0.5 + 0.5) * this.width, y: (-v.y * 0.5 + 0.5) * this.height };
    };
    if (this.mode === 'cruise') {
      out.sun = proj(this.cruise.sun); out.earth = proj(this.cruise.earth); out.bennu = proj(this.cruise.bennu); out.spacecraft = proj(this.cruise.marker);
    } else if (this.mode === 'briefing') {
      out.bennu = proj(this.brief.bennu); out.spacecraft = proj(this.brief.sc);
    } else if (this.mode === 'proximity') {
      out.bennu = proj(this.prox.bennu); out.spacecraft = proj(this.prox.sc);
    }
    return out;
  }

  /** ~10 s TAG cinematic, then onDone() */
  playTAG(onDone) {
    if (this.mode !== 'proximity') this.setMode('proximity');
    const p = this.prox;
    p.burstStarted = false; p.burst.material.opacity = 0; p.gas.material.opacity = 0;
    this.timeline = { kind: 'tag', t: 0, dur: 10.5, onDone, lastShot: null };
  }

  /** ~6 s capsule re-entry, then onDone() */
  playReentry(onDone) {
    if (this.mode !== 'reentry') this.setMode('reentry');
    this.re.sparkAge.fill(99);
    this.timeline = { kind: 'reentry', t: 0, dur: 6.5, onDone };
  }

  enableOrbit(domElement) {
    this._orbitWanted = true;
    if (!this.controls) {
      this.controls = new OrbitControls(this.camera, domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
    }
    this.controls.enabled = true;
    this.controls.target.copy(this.camTarget || new THREE.Vector3());
    if (this.mode === 'build') { this.controls.minDistance = 6; this.controls.maxDistance = 30; }
    else if (this.mode === 'cruise') { this.controls.minDistance = 40; this.controls.maxDistance = 700; }
    else { this.controls.minDistance = 1; this.controls.maxDistance = 5000; }
    this.controls.update();
  }

  disableOrbit() {
    this._orbitWanted = false;
    if (this.controls) this.controls.enabled = false;
  }

  resize(w, h) {
    this.width = w; this.height = h;
    this.camera.aspect = w / h;
    this.camera.clearViewOffset();
    if (this.mode === 'build') this._applyViewOffset();
    this.camera.updateProjectionMatrix();
  }

  update(dt) {
    dt = Math.min(dt, 0.1);
    this.time += dt;
    const t = this.time;
    this.stars.position.copy(this.camera.position);
    const orbiting = this.controls && this.controls.enabled;

    if (this.mode === 'briefing') {
      const b = this.brief;
      b.bennu.rotation.y += dt * 0.06;
      b.pivot.rotation.y = -t * 0.05;
      b.sc.rotation.y += dt * 0.1;
      if (!orbiting) {
        this.camera.position.set(-260 + Math.sin(t * 0.07) * 90, 120 + Math.sin(t * 0.05) * 40, 1050 + Math.cos(t * 0.06) * 60);
        this.camera.lookAt(this.camTarget);
      }
    } else if (this.mode === 'build') {
      this.buildSc.rotation.y += dt * 0.25;
    } else if (this.mode === 'cruise') {
      this.cruise.earth.userData.mesh.rotation.y += dt * 0.6;
      this.cruise.bennu.rotation.y += dt * 1.2;
      const s = 1 + Math.sin(t * 4) * 0.12;
      this.cruise.marker.children[0].scale.setScalar(7 * s);
      if (!orbiting) {
        this.camera.position.set(-25 + Math.sin(t * 0.05) * 25, 220, 255 + Math.cos(t * 0.05) * 10);
        this.camera.lookAt(this.camTarget);
      }
    } else if (this.mode === 'proximity') {
      if (!this.timeline) {
        // idle hover: gentle bob
        this._placeProximitySpacecraft(40 + Math.sin(t * 0.6) * 1.5);
        if (!orbiting) this._proxCam('wide', t);
      }
    } else if (this.mode === 'reentry') {
      this.re.earth.rotation.y += dt * 0.003;
      if (!this.timeline) this._placeCapsule((t * 0.12) % 1);
    }

    this._updateBurst(dt);
    this._updateSparks(dt);
    if (this.timeline) this._runTimeline(dt);
    if (this.controls && this.controls.enabled) this.controls.update();
  }

  dispose() {
    if (this.controls) this.controls.dispose();
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of ms) { for (const v of Object.values(m)) if (v && v.isTexture) v.dispose(); m.dispose(); }
      }
    });
  }

  // ---------------------------------------------------------------- internals
  _applyViewOffset() {
    // shift the subject so it is centred in the right 60% of the screen (UI panel on the left 40%)
    const w = this.width, h = this.height;
    this.camera.setViewOffset(w, h, -w * 0.2, 0, w, h);
  }

  _setArc(curve, points) {
    const c = this.cruise;
    c.curve = curve; c.points = curve.getSpacedPoints(400);
    c.arc.geometry.dispose();
    c.arc.geometry = new THREE.BufferGeometry().setFromPoints(c.points);
    c.arc.computeLineDistances();
    c.trail.geometry.dispose();
    c.trail.geometry = new THREE.BufferGeometry().setFromPoints(c.points);
    c.trail.geometry.setDrawRange(0, 0);
  }

  _setCruiseProgress(progress, d0, d1) {
    const c = this.cruise;
    c.progress = clamp01(progress);
    const date = lerpDate(d0, d1, c.progress);
    positionEarth(date, c.earth.position);
    positionBennu(date, c.bennu.position);
    c.curve.getPointAt(c.progress, c.marker.position);
    c.trail.geometry.setDrawRange(0, Math.max(2, Math.floor(c.progress * (c.points.length - 1)) + 1));
    c.date = date;
  }

  _headLocal() {
    // head position in spacecraft-local space when fully deployed
    const sc = this.prox.sc;
    const ud = sc.userData;
    if (!ud.tagsamHead) return new THREE.Vector3(0, -3.2, 0);
    const prevQ = sc.quaternion.clone(), prevP = sc.position.clone();
    sc.quaternion.identity(); sc.position.set(0, 0, 0);
    ud.extendTagsam(1);
    sc.updateMatrixWorld(true);
    const v = ud.tagsamHead.getWorldPosition(new THREE.Vector3());
    const g = this.groups.proximity; v.applyMatrix4(new THREE.Matrix4().copy(g.matrixWorld).invert());
    sc.quaternion.copy(prevQ); sc.position.copy(prevP);
    return v.add(new THREE.Vector3(0, -0.12, 0)); // sampler face
  }

  _placeProximitySpacecraft(height) {
    const p = this.prox;
    const site = p.bennu.userData.nightingale;
    if (!p.headLocal || p.cfgVersion !== this.scCfg) { p.headLocal = this._headLocal(); p.cfgVersion = this.scCfg; }
    const n = site.normal;
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
    // small yaw so the arm side faces the camera nicely
    q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.6));
    p.sc.quaternion.copy(q);
    const head = p.headLocal.clone().applyQuaternion(q);
    p.sc.position.copy(site.position).sub(head).addScaledVector(n, height);
    p.height = height;
    p.site = site;
  }

  _proxCam(shot, t = 0) {
    const p = this.prox;
    const n = p.site.normal;
    const side = new THREE.Vector3().crossVectors(n, new THREE.Vector3(0, 0, 1)).normalize();
    const fwd = new THREE.Vector3().crossVectors(side, n).normalize();
    const sc = p.sc.position;
    if (shot === 'wide') {
      this.camera.position.copy(sc).addScaledVector(n, 14 + Math.sin(t * 0.2) * 2).addScaledVector(side, 30 + Math.sin(t * 0.1) * 4).addScaledVector(fwd, 22);
      this.camTarget = sc.clone().addScaledVector(n, -8);
    } else if (shot === 'close') {
      const site = p.site.position;
      this.camera.position.copy(site).addScaledVector(n, 2.2).addScaledVector(side, 7).addScaledVector(fwd, 4.5);
      this.camTarget = site.clone().addScaledVector(n, 1.6);
    } else if (shot === 'low') {
      const site = p.site.position;
      this.camera.position.copy(site).addScaledVector(n, 1.2).addScaledVector(side, -14).addScaledVector(fwd, -9);
      this.camTarget = sc.clone().addScaledVector(n, -2);
    } else if (shot === 'far') {
      this.camera.position.copy(sc).addScaledVector(n, 60).addScaledVector(side, 90).addScaledVector(fwd, 70);
      this.camTarget = sc.clone().addScaledVector(n, -20);
    }
    this.camera.lookAt(this.camTarget);
  }

  _startBurst() {
    const p = this.prox;
    const pos = p.burst.geometry.attributes.position;
    const site = p.site.position, n = p.site.normal;
    const r = Math.random;
    const tmp = new THREE.Vector3(), side = new THREE.Vector3(), up = new THREE.Vector3();
    side.crossVectors(n, new THREE.Vector3(0.3, 0.1, 0.9)).normalize();
    up.crossVectors(side, n).normalize();
    for (let i = 0; i < p.N; i++) {
      const a = r() * Math.PI * 2, spread = r();
      tmp.copy(n).multiplyScalar(0.6 + r() * 2.2).addScaledVector(side, Math.cos(a) * spread * 2.4).addScaledVector(up, Math.sin(a) * spread * 2.4);
      p.vel.set([tmp.x, tmp.y, tmp.z], i * 3);
      pos.setXYZ(i, site.x + (r() - 0.5) * 0.4, site.y + (r() - 0.5) * 0.4, site.z + (r() - 0.5) * 0.4);
    }
    pos.needsUpdate = true;
    p.burst.material.opacity = 1;
    p.burstAge = 0;
    p.gas.position.copy(site).addScaledVector(n, 0.4);
    p.gas.material.opacity = 1;
    p.burstStarted = true;
  }

  _updateBurst(dt) {
    const p = this.prox;
    if (!p.burstStarted) return;
    p.burstAge += dt;
    const pos = p.burst.geometry.attributes.position;
    for (let i = 0; i < p.N; i++) {
      pos.setXYZ(i, pos.getX(i) + p.vel[i * 3] * dt, pos.getY(i) + p.vel[i * 3 + 1] * dt, pos.getZ(i) + p.vel[i * 3 + 2] * dt);
    }
    pos.needsUpdate = true;
    p.burst.material.opacity = Math.max(0, 1 - p.burstAge / 6);
    p.gas.material.opacity = Math.max(0, 1 - p.burstAge / 0.9);
    p.gas.scale.setScalar(4 + p.burstAge * 14);
    if (p.burstAge > 6) p.burstStarted = false;
  }

  _placeCapsule(k) {
    // capsule travels from upper-right high altitude toward the limb, descending
    const re = this.re, R = re.R;
    const start = new THREE.Vector3(240, R * 1.1, 230);
    const end = new THREE.Vector3(-210, R * 1.012, 400);
    const pos = start.clone().lerp(end, k);
    re.capRoot.position.copy(pos);
    const dir = end.clone().sub(start).normalize();
    // heat shield faces direction of travel: capsule local -Y points along dir
    re.capRoot.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir);
    re.trail.position.set(0, 55 + 2, 0); // cone extends behind (+Y local = backwards)
    const heat = THREE.MathUtils.smoothstep(k, 0.05, 0.35) * (1 - THREE.MathUtils.smoothstep(k, 0.85, 1));
    re.trail.material.opacity = 0.15 + heat * 0.75;
    re.trail.scale.set(0.6 + heat * 0.6, 0.3 + heat, 0.6 + heat * 0.6);
    re.plasma.material.opacity = 0.3 + heat * 0.7;
    re.plasma.scale.setScalar(10 + heat * 26);
    re.progress = k; re.heat = heat; re.dir = dir;
  }

  _updateSparks(dt) {
    const re = this.re;
    if (this.mode !== 'reentry') return;
    const pos = re.sparks.geometry.attributes.position;
    const emit = Math.floor((re.heat ?? 0) * 260 * dt) + 1;
    for (let k = 0; k < emit; k++) {
      const i = re.sparkIdx = (re.sparkIdx + 1) % re.sparkN;
      re.sparkAge[i] = 0;
      const p = re.capRoot.position;
      pos.setXYZ(i, p.x + (Math.random() - 0.5) * 3, p.y + (Math.random() - 0.5) * 3, p.z + (Math.random() - 0.5) * 3);
    }
    for (let i = 0; i < re.sparkN; i++) {
      re.sparkAge[i] += dt;
      if (re.sparkAge[i] > 1.4) { pos.setXYZ(i, 0, -1e6, 0); continue; }
      if (re.dir) pos.setXYZ(i, pos.getX(i) - re.dir.x * dt * 8 + (Math.random() - 0.5) * dt * 6, pos.getY(i) - re.dir.y * dt * 8 + dt * 3, pos.getZ(i) - re.dir.z * dt * 8);
    }
    pos.needsUpdate = true;
  }

  _runTimeline(dt) {
    const tl = this.timeline;
    tl.t += dt;
    const t = tl.t;
    if (tl.kind === 'tag') {
      const p = this.prox, ud = p.sc.userData;
      let shot;
      if (t < 3.6) { // descent, arm deploying
        const k = t / 3.6;
        this._placeProximitySpacecraft(THREE.MathUtils.lerp(40, 1.2, ease(k)));
        ud.extendTagsam(clamp01(t / 2.6));
        ud.setThrust(0.15 + Math.sin(t * 9) * 0.05);
        shot = t < 1.8 ? 'far' : 'wide';
      } else if (t < 5.0) { // contact + nitrogen burst
        const k = (t - 3.6) / 1.4;
        this._placeProximitySpacecraft(THREE.MathUtils.lerp(1.2, -0.05, clamp01(k * 2.2)));
        ud.extendTagsam(1);
        ud.setThrust(0);
        if (!p.burstStarted && t > 4.0) this._startBurst();
        shot = 'close';
      } else if (t < 8.4) { // back-away burn
        const k = (t - 5.0) / 3.4;
        this._placeProximitySpacecraft(THREE.MathUtils.lerp(-0.05, 34, k * k));
        ud.setThrust(k < 0.75 ? 1 : 1 - (k - 0.75) * 4);
        ud.extendTagsam(1);
        shot = 'low';
      } else { // wide: arm stows
        const k = (t - 8.4) / 2.1;
        this._placeProximitySpacecraft(34 + k * 10);
        ud.setThrust(0);
        ud.extendTagsam(1 - clamp01(k));
        shot = 'far';
      }
      this._proxCam(shot, t);
    } else if (tl.kind === 'reentry') {
      const k = clamp01(t / 6.0);
      this._placeCapsule(k);
      // slight camera tracking
      this.camera.lookAt(this.camTarget.clone().lerp(this.re.capRoot.position, 0.35));
    }
    if (t >= tl.dur) {
      const done = tl.onDone;
      this.timeline = null;
      if (tl.kind === 'tag') { this.prox.sc.userData.setThrust(0); }
      if (done) done();
    }
  }
}

export { makeThrusterGlow };
