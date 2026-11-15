// LaunchScene – Earth launch site diorama + liftoff cinematic.
//   const ls = new LaunchScene({ vehicleId: 'atlas_v_411' });
//   renderer.render(ls.scene, ls.camera)  (or via EffectComposer + UnrealBloomPass: engine glow is HDR > 1)
//   ls.update(dt); ls.resize(w,h); ls.setVehicle(id); ls.startLaunch(onDone); ls.enableOrbit(dom); ls.disableOrbit(); ls.dispose()
// AI-assisted code (Claude) – see README.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createRocket } from '../models/rockets.js';
import { createSLC41, createLC39A, createEnvironment } from '../models/launchsites.js';

const MAX_P = 5000;

// ------------------------------------------------------------------ smoke / steam particles
class Smoke {
  constructor() {
    this.pos = new Float32Array(MAX_P * 3);
    this.vel = new Float32Array(MAX_P * 3);
    this.size = new Float32Array(MAX_P);
    this.alpha = new Float32Array(MAX_P);
    this.heat = new Float32Array(MAX_P);
    this.age = new Float32Array(MAX_P);
    this.life = new Float32Array(MAX_P);
    this.grow = new Float32Array(MAX_P);
    this.seed = new Float32Array(MAX_P);
    for (let i = 0; i < MAX_P; i++) { this.life[i] = 0; this.seed[i] = Math.random(); }
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aHeat', new THREE.BufferAttribute(this.heat, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSeed', new THREE.BufferAttribute(this.seed, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uScale: { value: 600 }, uSun: { value: new THREE.Color(1.0, 0.72, 0.5) }, uFog: { value: new THREE.Color(0x8a7f8e) } },
      vertexShader: `
        attribute float aSize; attribute float aAlpha; attribute float aHeat; attribute float aSeed;
        varying float vAlpha; varying float vHeat; varying float vSeed; varying float vDepth;
        uniform float uScale;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = min(aSize * uScale / max(-mv.z, 1.0), 900.0);
          vAlpha = aAlpha; vHeat = aHeat; vSeed = aSeed; vDepth = -mv.z;
        }`,
      fragmentShader: `
        varying float vAlpha; varying float vHeat; varying float vSeed; varying float vDepth;
        uniform vec3 uSun; uniform vec3 uFog;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
        float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float r = length(c);
          float puff = n(c*5.0 + vSeed*31.0)*0.55 + n(c*11.0 - vSeed*17.0)*0.3;
          float a = smoothstep(0.5, 0.12, r + (puff-0.4)*0.22);
          if (a <= 0.01) discard;
          // lit from the low western sun (upper-left of each puff) + self shadow
          float lit = clamp(0.62 + dot(normalize(c + 1e-4), vec2(-0.6, -0.7)) * 0.35 * (r*2.0) + puff*0.25, 0.25, 1.15);
          vec3 base = vec3(0.86, 0.85, 0.86) * lit * mix(vec3(1.0), uSun, 0.35);
          vec3 hot = vec3(1.7, 0.85, 0.3);
          vec3 col = mix(base, hot, clamp(vHeat,0.0,1.0));
          float fogF = 1.0 - exp(-vDepth*vDepth*0.00028*0.00028);
          col = mix(col, uFog, fogF*0.8);
          gl_FragColor = vec4(col, a * vAlpha);
        }`,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    this.geo = g;
  }
  emit(p, v, { size = 6, grow = 6, life = 6, heat = 0.8, alpha = 0.85 } = {}) {
    const i = this.next; this.next = (this.next + 1) % MAX_P;
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z;
    this.size[i] = size; this.grow[i] = grow; this.life[i] = life; this.age[i] = 0; this.heat[i] = heat; this.alpha[i] = alpha;
    this._a0 = alpha;
  }
  update(dt) {
    for (let i = 0; i < MAX_P; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.age[i] += dt;
      const k = this.age[i] / this.life[i];
      if (k >= 1) { this.life[i] = 0; this.alpha[i] = 0; continue; }
      const drag = Math.exp(-dt * 1.1);
      this.vel[i * 3] *= drag; this.vel[i * 3 + 2] *= drag;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * Math.exp(-dt * 0.9) + dt * 1.6; // buoyant rise
      this.pos[i * 3] += this.vel[i * 3] * dt + dt * 1.2; // light sea breeze west->? (drift east)
      this.pos[i * 3 + 1] = Math.max(0.5, this.pos[i * 3 + 1] + this.vel[i * 3 + 1] * dt);
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.size[i] += this.grow[i] * dt * (1 - k * 0.6);
      this.heat[i] *= Math.exp(-dt * 3.2);
      this.alpha[i] = Math.min(1, this.age[i] * 4) * (1 - k) * (1 - k) * 0.9;
    }
    const a = this.geo.attributes;
    a.position.needsUpdate = a.aSize.needsUpdate = a.aAlpha.needsUpdate = a.aHeat.needsUpdate = true;
  }
  clear() { this.life.fill(0); this.alpha.fill(0); }
}

// ------------------------------------------------------------------ exhaust plume (additive, HDR)
function makePlume(scale = 1, solid = false) {
  const len = 22 * scale, r0 = 0.9 * scale, r1 = 3.2 * scale;
  const geo = new THREE.CylinderGeometry(r0, r1, len, 24, 8, true);
  geo.translate(0, -len / 2, 0);
  const mk = (core, outer, gain) => new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
    uniforms: { uT: { value: 0 }, uI: { value: 0 }, uCore: { value: core }, uOuter: { value: outer }, uGain: { value: gain } },
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv=uv; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform float uT; uniform float uI; uniform vec3 uCore; uniform vec3 uOuter; uniform float uGain;
      void main(){
        float along = 1.0 - vUv.y;               // 0 at nozzle, 1 at tail
        float edge = pow(abs(dot(vN, vV)), 1.6);   // brighter through the middle
        float diamonds = 0.75 + 0.25*sin(along*38.0 - uT*30.0);
        float flick = 0.85 + 0.15*sin(uT*53.0 + vUv.x*20.0);
        float fall = pow(1.0 - along, 1.6);
        vec3 col = mix(uCore, uOuter, smoothstep(0.0, 0.55, along));
        gl_FragColor = vec4(col * edge * fall * diamonds * flick * uI * uGain, 1.0);
      }`,
  });
  const g = new THREE.Group();
  const outer = new THREE.Mesh(geo, mk(new THREE.Color(3.5, 1.9, 0.7), new THREE.Color(1.6, 0.45, 0.12), solid ? 1.2 : 0.9));
  const coreGeo = new THREE.CylinderGeometry(r0 * 0.75, r0 * 1.1, len * 0.45, 16, 4, true); coreGeo.translate(0, -len * 0.225, 0);
  const core = new THREE.Mesh(coreGeo, mk(new THREE.Color(6, 5.2, 4), new THREE.Color(4, 2.2, 0.9), 1.6));
  const glowMat = new THREE.SpriteMaterial({ color: new THREE.Color(5, 3, 1.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, map: glowTexture() });
  const glow = new THREE.Sprite(glowMat); glow.scale.setScalar(16 * scale); glow.position.y = -1.5 * scale;
  g.add(outer, core, glow);
  g.userData = { mats: [outer.material, core.material], glow, len, scale };
  g.visible = false;
  g.renderOrder = 6;
  return g;
}

let _glowTex = null;
function glowTexture() {
  if (_glowTex) return _glowTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,210,150,0.6)'); grd.addColorStop(1, 'rgba(255,120,40,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  _glowTex = new THREE.CanvasTexture(c);
  return _glowTex;
}

// ------------------------------------------------------------------ the scene
export class LaunchScene {
  constructor({ vehicleId = 'atlas_v_411' } = {}) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, 16 / 9, 0.5, 40000);
    this.env = createEnvironment(this.scene);
    this.smoke = new Smoke();
    this.scene.add(this.smoke.points);
    this.engineLight = new THREE.PointLight(0xff9a40, 0, 700, 1.7);
    this.scene.add(this.engineLight);
    // fullscreen fade quad
    this.fadeMat = new THREE.ShaderMaterial({
      transparent: true, depthTest: false, depthWrite: false, uniforms: { uO: { value: 0 } },
      vertexShader: 'void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: 'uniform float uO; void main(){ gl_FragColor = vec4(0.0,0.0,0.0,uO); }',
    });
    this.fade = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.fadeMat);
    this.fade.frustumCulled = false; this.fade.renderOrder = 999;
    this.scene.add(this.fade);
    this.time = 0;
    this.state = 'idle';
    this.controls = null;
    this.debris = [];
    this.setVehicle(vehicleId);
  }

  setVehicle(id) {
    if (this.state === 'launch') return;
    this.vehicleId = id;
    if (this.site) { this.scene.remove(this.site.group); disposeGeo(this.site.group); }
    if (this.rocket) { this.rocket.parent?.remove(this.rocket); disposeGeo(this.rocket); }
    for (const d of this.debris) { this.scene.remove(d.obj); }
    this.debris = [];
    this.smoke.clear();
    this.site = id === 'atlas_v_411' ? createSLC41() : createLC39A();
    this.scene.add(this.site.group);
    this.rocket = createRocket(id);
    this.site.rocketParent.add(this.rocket);
    // plumes on every nozzle anchor
    const solidNames = ['srb'];
    this.plumes = this.rocket.userData.nozzles.map((a) => {
      const big = a.name === 'merlin9' || a.name === 'core' || a.name.startsWith('side') ? 1.35 : a.name === 'srb' ? 0.85 : 1.1;
      const p = makePlume(big, solidNames.includes(a.name));
      a.add(p);
      return p;
    });
    this.height = this.rocket.userData.height;
    const [f1, f2] = this.env.flood; const py = this.site.padPosition.y;
    f1.position.set(70, py + 2, 90); f2.position.set(-60, py + 2, 95);
    f1.target.position.set(0, py + this.rocket.userData.height * 0.55, 0); f2.target.position.set(0, py + this.rocket.userData.height * 0.45, 0);
    this.padWorld = this.site.padPosition.clone();
    this.focus = this.padWorld.clone().add(new THREE.Vector3(0, this.height * 0.45, 0));
    this.fadeMat.uniforms.uO.value = 0;
    this.state = 'idle';
    if (this.controls) { this.controls.target.copy(this.focus); this.controls.update(); }
    this._placeIdleCamera(0);
  }

  get siteName() { return this.site?.siteName || ''; }

  enableOrbit(domElement) {
    this.disableOrbit();
    this.controls = new OrbitControls(this.camera, domElement);
    this.controls.target.copy(this.focus);
    this.controls.enableDamping = true;
    this.controls.minDistance = 25; this.controls.maxDistance = 900;
    this.controls.maxPolarAngle = Math.PI * 0.495;
    this.controls.update();
    return this.controls;
  }
  disableOrbit() { if (this.controls) { this.controls.dispose(); this.controls = null; } }

  resize(w, h) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); this.smoke.mat.uniforms.uScale.value = h * 0.85; }

  _placeIdleCamera(t) {
    const R = this.height * 2.6 + 30;
    const ang = -0.15 + Math.sin(t * 0.045 + 0.9) * 0.75; // swing around the south side
    this.camera.position.set(this.focus.x - Math.sin(ang) * R * 0.75, this.padWorld.y + 6 + Math.sin(t * 0.07) * 3 + this.height * 0.12, this.focus.z + Math.cos(ang) * R);
    this.camera.fov = 42; this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.focus.x, this.focus.y + 4, this.focus.z);
  }

  // smoke exits of the flame trench / exhaust duct per site
  _trenchExits() {
    if (this.vehicleId === 'atlas_v_411') return [{ p: new THREE.Vector3(12, 1, 0), d: new THREE.Vector3(1, 0.15, 0) }, { p: new THREE.Vector3(0, 1.5, 0), d: new THREE.Vector3(0.2, 0.25, 0) }];
    const y = this.padWorld.y - 6;
    return [{ p: new THREE.Vector3(0, y, 70), d: new THREE.Vector3(0, 0.2, 1) }, { p: new THREE.Vector3(0, y, -70), d: new THREE.Vector3(0, 0.2, -1) }, { p: new THREE.Vector3(0, y, 0), d: new THREE.Vector3(0, 0.5, 0) }];
  }

  startLaunch(onDone) {
    if (this.state === 'launch') return;
    this.disableOrbit();
    this.state = 'launch';
    this.lt = 0;
    this.onDone = onDone;
    this.vel = new THREE.Vector3();
    this.pitch = 0;
    this.sepDone = false;
    // detach rocket to world so it can fly
    this.scene.attach(this.rocket);
    this.rocketStart = this.rocket.position.clone();
    this.camStart = this.camera.position.clone();
    this.camShot = this.padWorld.clone().add(new THREE.Vector3(-this.height * 1.1, 2.5, this.height * 2.3));
    this.plumes.forEach((p) => { p.visible = true; });
  }

  _separate(part, plumeIdx, push) {
    const wp = new THREE.Vector3(); part.getWorldPosition(wp);
    this.scene.attach(part);
    const v = this.vel.clone().multiplyScalar(0.85).add(push);
    this.debris.push({ obj: part, v, w: new THREE.Vector3(Math.random() * 0.3, 0, (push.x > 0 ? -1 : 1) * (0.5 + Math.random() * 0.4)), plume: this.plumes[plumeIdx], t: 0 });
  }

  update(dt) {
    dt = Math.min(dt, 0.05);
    this.time += dt;
    this.env.update(dt);
    // aircraft warning lamps blink
    const on = Math.floor(this.time * 1.2) % 2 === 0;
    for (const b of this.site.blinkers) b.visible = on;

    if (this.state === 'launch') this._updateLaunch(dt);
    else if (this.controls) this.controls.update();
    else this._placeIdleCamera(this.time);

    // plume animation
    for (const p of this.plumes) {
      if (!p.visible) continue;
      for (const m of p.userData.mats) m.uniforms.uT.value = this.time;
    }
    for (const d of this.debris) {
      d.t += dt;
      d.v.y -= 9.8 * dt * 0.6;
      d.obj.position.addScaledVector(d.v, dt);
      d.obj.rotation.x += d.w.x * dt; d.obj.rotation.z += d.w.z * dt;
      if (d.plume) { const s = Math.max(0, 1 - d.t * 1.5); for (const m of d.plume.userData.mats) m.uniforms.uI.value = s; d.plume.userData.glow.material.opacity = s; if (s === 0) d.plume.visible = false; }
    }
    this.smoke.update(dt);
  }

  _updateLaunch(dt) {
    const t = (this.lt += dt);
    const T0 = 3.0;               // liftoff after 3 s of ignition
    const r = this.rocket;
    // ---- engine intensity
    const ign = THREE.MathUtils.smoothstep(t, 0.0, 1.6);
    this.plumes.forEach((p, i) => {
      const name = r.userData.nozzles[i].name;
      if (this.debris.find((d) => d.plume === p)) return;
      let k = ign;
      if (name === 'srb') k = THREE.MathUtils.smoothstep(t, T0 - 0.3, T0); // solid booster lights at T-0
      for (const m of p.userData.mats) m.uniforms.uI.value = k;
      p.userData.glow.material.opacity = k;
      const stretch = 1 + Math.max(0, t - T0) * 0.12;
      p.scale.set(1 + Math.sin(this.time * 40 + i) * 0.03, Math.min(stretch, 2.4), 1 + Math.sin(this.time * 37 + i) * 0.03);
    });
    // umbilical arms swing back
    const arms = this.site.mlp?.userData.umbilicalArms;
    if (arms && t > 2.2) arms.forEach((a, i) => { a.rotation.y = Math.min(1.3, (t - 2.2) * 1.4) * (i ? -1 : 1); });

    // ---- motion
    const tau = Math.max(0, t - T0);
    if (tau > 0) {
      const acc = 5.5 + tau * 3.4;
      const speed = this.vel.length() + acc * dt;
      if (r.position.y - this.rocketStart.y > 140) this.pitch = Math.min(0.42, this.pitch + dt * 0.05);
      const dir = new THREE.Vector3(Math.sin(this.pitch), Math.cos(this.pitch), 0);
      this.vel.copy(dir).multiplyScalar(speed);
      r.position.addScaledVector(this.vel, dt);
      r.rotation.z = -this.pitch;
    }

    // ---- staging: Atlas SRB burnout/sep, Falcon Heavy side boosters
    const parts = r.userData.parts;
    if (!this.sepDone && tau > 7.2) {
      this.sepDone = true;
      r.userData.nozzles.forEach((a, i) => {
        if (a.name === 'srb') this._separate(parts.srbs[0], i, new THREE.Vector3(6, -2, 0));
        if (a.name === 'sideA') this._separate(parts.sideBoosters[0], i, new THREE.Vector3(-7, -1, 0));
        if (a.name === 'sideB') this._separate(parts.sideBoosters[1], i, new THREE.Vector3(7, -1, 0));
      });
    }

    // ---- smoke & steam
    const exits = this._trenchExits();
    const groundRate = tau < 9 ? (t < 0.6 ? 60 : 340) * (1 - Math.min(1, Math.max(0, tau - 3) / 6)) : 0;
    const nEmit = Math.floor(groundRate * dt + Math.random());
    const v = new THREE.Vector3(), p = new THREE.Vector3();
    for (let i = 0; i < nEmit; i++) {
      const e = exits[i % exits.length];
      p.copy(e.p).add(new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 2, (Math.random() - 0.5) * 6));
      const sp = 22 + Math.random() * 30;
      v.copy(e.d).multiplyScalar(sp).add(new THREE.Vector3((Math.random() - 0.5) * 18, Math.random() * 6, (Math.random() - 0.5) * 18));
      this.smoke.emit(p, v, { size: 5 + Math.random() * 6, grow: 7 + Math.random() * 6, life: 7 + Math.random() * 5, heat: 0.7 });
    }
    // trail from engines once airborne
    if (tau > 0) {
      const wp = new THREE.Vector3();
      r.userData.nozzles.forEach((a) => {
        if (this.debris.find((d) => d.obj === a.parent)) return;
        a.getWorldPosition(wp);
        const rate = 110 * (a.name === 'srb' ? 1.4 : 1);
        const n = Math.floor(rate * dt + Math.random());
        for (let i = 0; i < n; i++) {
          p.copy(wp).addScaledVector(this.vel, -dt * Math.random()).add(new THREE.Vector3(0, -3, 0));
          v.set((Math.random() - 0.5) * 6, -8 - Math.random() * 6, (Math.random() - 0.5) * 6);
          this.smoke.emit(p, v, { size: 4 + Math.random() * 3, grow: 4 + Math.random() * 3, life: 6 + Math.random() * 3, heat: 1, alpha: 0.8 });
        }
      });
    }

    // ---- engine light
    const lw = new THREE.Vector3(); r.userData.nozzleCore.getWorldPosition(lw);
    this.engineLight.position.copy(lw).add(new THREE.Vector3(0, -6, 0));
    this.engineLight.intensity = ign * (5200 + Math.random() * 1600);

    // ---- camera
    const cam = this.camera;
    const rp = r.position.clone().add(new THREE.Vector3(0, this.height * 0.5, 0).applyEuler(r.rotation));
    if (t < T0) {
      const k = THREE.MathUtils.smoothstep(t, 0, T0);
      cam.position.lerpVectors(this.camStart, this.camShot, k);
      cam.lookAt(this.focus.x, this.focus.y - this.height * 0.1, this.focus.z);
      cam.position.x += (Math.random() - 0.5) * 0.15 * ign; cam.position.y += (Math.random() - 0.5) * 0.15 * ign;
    } else if (tau < 7.5) {
      cam.position.copy(this.camShot);
      const shake = Math.max(0, 1 - tau / 5) * 0.4;
      cam.position.x += (Math.random() - 0.5) * shake; cam.position.y += (Math.random() - 0.5) * shake;
      cam.fov = THREE.MathUtils.lerp(42, 24, THREE.MathUtils.smoothstep(tau, 1, 7));
      cam.updateProjectionMatrix();
      cam.lookAt(rp);
    } else {
      const k = THREE.MathUtils.smoothstep(tau, 7.5, 9.0);
      const chase = rp.clone().add(new THREE.Vector3(-70, -40, 150));
      cam.position.lerp(chase, 0.04 + k * 0.08);
      cam.fov = THREE.MathUtils.lerp(cam.fov, 38, 0.03); cam.updateProjectionMatrix();
      cam.lookAt(rp);
    }

    // ---- fade + done
    this.fadeMat.uniforms.uO.value = THREE.MathUtils.smoothstep(t, 12.6, 14.0);
    if (t >= 14.2 && this.state === 'launch') {
      this.state = 'done';
      const cb = this.onDone; this.onDone = null;
      cb && cb();
    }
  }

  // put the vehicle back on the pad (e.g. "play again")
  reset() { const id = this.vehicleId; this.state = 'idle'; this.setVehicle(id); }

  dispose() {
    this.disableOrbit();
    disposeGeo(this.scene);
    this.smoke.geo.dispose(); this.smoke.mat.dispose();
  }
}

function disposeGeo(root) { root.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
