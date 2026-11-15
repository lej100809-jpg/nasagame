// First-person controller tuned for a tactical-shooter feel (benchmark: Delta Force):
// pointer-lock look with smoothing, accel/decel inertia, sprint with FOV kick, crouch, jump with
// gravity, landing dip, strafe roll, head bob, footstep events, AABB collisions, look-at + E use.
// (AI-assisted: Claude.)
import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));

export class FPController {
  constructor(camera, domElement, { colliders = [], bounds = null, interactables = [] } = {}) {
    this.camera = camera;
    this.dom = domElement;
    this.controls = new PointerLockControls(camera, domElement);
    this.controls.pointerSpeed = 0.75;
    this.colliders = colliders;
    this.bounds = bounds;
    this.interactables = interactables;
    this.radius = 0.35;
    this.standEye = 1.68;
    this.crouchEye = 1.05;
    this.eyeH = this.standEye;
    this.walk = 3.6; this.run = 7.2; this.crouchSpeed = 1.8;
    this.baseFov = camera.fov;
    this.vel = new THREE.Vector3();
    this.vy = 0; this.y = 0; this.grounded = true;
    this.keys = {};
    this.enabled = true;
    this.bob = 0; this.roll = 0; this.landDip = 0; this.stepAcc = 0;
    this.lookDX = 0; this.lookDY = 0;
    this.focus = null;
    this.state = { speed: 0, sprint: false, crouch: false, grounded: true };
    this.onFocus = () => {}; this.onLock = () => {}; this.onUnlock = () => {};
    this.onStep = () => {}; this.onLand = () => {}; this.onJump = () => {};
    this._kd = (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space' && this.locked && this.grounded) { this.vy = 4.6; this.grounded = false; this.onJump(); }
      if (e.code === 'KeyC' || e.code === 'ControlLeft') this.crouchToggle = !this.crouchToggle;
    };
    this._ku = (e) => { this.keys[e.code] = false; };
    this._mm = (e) => { if (this.locked) { this.lookDX += e.movementX || 0; this.lookDY += e.movementY || 0; } };
    window.addEventListener('keydown', this._kd);
    window.addEventListener('keyup', this._ku);
    document.addEventListener('mousemove', this._mm);
    this.crouchToggle = false;
    this.controls.addEventListener('lock', () => this.onLock());
    this.controls.addEventListener('unlock', () => { this.keys = {}; this.onUnlock(); });
  }
  get locked() { return this.controls.isLocked; }
  lock() { try { const p = this.controls.lock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* needs gesture */ } }
  unlock() { if (this.controls.isLocked) this.controls.unlock(); }

  teleport(pos, yaw) {
    this.camera.position.set(pos.x, this.eyeH, pos.z);
    if (yaw !== undefined) this.camera.rotation.set(0, yaw, 0, 'YXZ');
    this.vel.set(0, 0, 0); this.vy = 0; this.y = 0; this.grounded = true;
  }
  lookAt(target) {
    const p = this.camera.position;
    const yaw = Math.atan2(-(target.x - p.x), -(target.z - p.z));
    this.camera.rotation.set(0, yaw, 0, 'YXZ');
  }
  blocked(x, z) {
    const r = this.radius;
    if (this.bounds && (x < this.bounds.minX || x > this.bounds.maxX || z < this.bounds.minZ || z > this.bounds.maxZ)) return true;
    const feet = this.y;
    for (const b of this.colliders) {
      if (b.max.y < feet + 0.3 || b.min.y > feet + this.eyeH + 0.1) continue; // step over low things, walk under high things
      if (x > b.min.x - r && x < b.max.x + r && z > b.min.z - r && z < b.max.z + r) return true;
    }
    return false;
  }

  update(dt) {
    if (!this.enabled) return;
    const k = this.keys;
    const cam = this.camera;
    const crouch = this.crouchToggle || k.ControlLeft;
    let sprint = false;
    if (this.locked) {
      const f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
      const s = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);
      sprint = !!(k.ShiftLeft || k.ShiftRight) && f > 0 && !crouch;
      const speed = crouch ? this.crouchSpeed : sprint ? this.run : this.walk;
      const fwd = new THREE.Vector3(); cam.getWorldDirection(fwd); fwd.y = 0; fwd.normalize();
      const right = new THREE.Vector3().crossVectors(fwd, cam.up).normalize();
      const want = new THREE.Vector3().addScaledVector(fwd, f).addScaledVector(right, s * (sprint ? 0.6 : 1));
      if (want.lengthSq() > 0) want.normalize().multiplyScalar(speed);
      const accel = this.grounded ? (want.lengthSq() > 0 ? 10 : 12) : 2.5; // air control is weak
      this.vel.x = damp(this.vel.x, want.x, accel, dt);
      this.vel.z = damp(this.vel.z, want.z, accel, dt);
      const p = cam.position;
      const nx = p.x + this.vel.x * dt, nz = p.z + this.vel.z * dt;
      if (!this.blocked(nx, p.z)) p.x = nx; else this.vel.x *= -0.1;
      if (!this.blocked(p.x, nz)) p.z = nz; else this.vel.z *= -0.1;
      // strafe roll
      const lateral = this.vel.dot(right);
      this.roll = damp(this.roll, -lateral * 0.006 - this.lookDX * 0.0004, 8, dt);
    } else {
      this.vel.multiplyScalar(Math.exp(-10 * dt));
      this.roll = damp(this.roll, 0, 8, dt);
    }
    // vertical: gravity + jump
    if (!this.grounded) {
      this.vy -= 13.5 * dt;
      this.y += this.vy * dt;
      if (this.y <= 0) {
        const impact = Math.min(1, -this.vy / 6);
        this.y = 0; this.vy = 0; this.grounded = true; this.landDip = 0.12 * impact + 0.03;
        this.onLand(impact);
      }
    }
    this.landDip = damp(this.landDip, 0, 9, dt);
    this.eyeH = damp(this.eyeH, crouch ? this.crouchEye : this.standEye, 10, dt);
    const sp = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded) {
      this.bob += dt * (sprint ? 13 : crouch ? 6.5 : 9.5) * Math.min(1, sp / 2);
      this.stepAcc += sp * dt;
      const stride = sprint ? 1.65 : crouch ? 0.8 : 1.15;
      if (this.stepAcc > stride) { this.stepAcc = 0; this.onStep({ sprint, crouch, speed: sp }); }
    }
    const bobAmt = Math.min(1, sp / 3) * (sprint ? 0.055 : crouch ? 0.02 : 0.035);
    cam.position.y = this.y + this.eyeH + Math.abs(Math.sin(this.bob)) * bobAmt - this.landDip;
    // camera roll via rotation.z (PointerLockControls uses YXZ euler)
    cam.rotation.z = this.roll + Math.sin(this.bob * 0.5) * bobAmt * 0.12;
    // sprint FOV kick
    const fov = this.baseFov + (sprint ? 8 : 0) + (crouch ? -3 : 0);
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = damp(cam.fov, fov, 6, dt); cam.updateProjectionMatrix(); }
    this.state = { speed: sp, sprint, crouch: !!crouch, grounded: this.grounded, lookDX: this.lookDX, lookDY: this.lookDY };
    this.lookDX = 0; this.lookDY = 0;

    // interaction focus
    const dir = new THREE.Vector3(); cam.getWorldDirection(dir);
    let best = null, bestScore = -Infinity;
    for (const it of this.interactables) {
      const to = new THREE.Vector3().subVectors(it.position, cam.position);
      to.y *= 0.5;
      const d = to.length();
      if (d > (it.radius || 3)) continue;
      const facing = to.normalize().dot(dir);
      if (facing < 0.5) continue;
      const score = facing - d * 0.05;
      if (score > bestScore) { bestScore = score; best = it; }
    }
    if (best !== this.focus) { this.focus = best; this.onFocus(best); }
  }
  dispose() {
    window.removeEventListener('keydown', this._kd);
    window.removeEventListener('keyup', this._ku);
    document.removeEventListener('mousemove', this._mm);
    this.controls.dispose();
  }
}
