import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CampusScene } from '../src/scenes/CampusScene.js';

const q = new URLSearchParams(location.search);
const cheap = q.get('render') === 'cheap';
const renderer = new THREE.WebGLRenderer({ antialias: !cheap });
renderer.setPixelRatio(cheap ? 0.75 : Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
renderer.info.autoReset = false;
const cs = new CampusScene({ vehicleId: q.get('v') || 'atlas_v_411' });
const cam = cs.camera;
if (!q.get('noibl')) cs.setRenderer(renderer);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(cs.scene, cam));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.7, 0.5, 0.92));
composer.addPass(new OutputPass());
function resize() { renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); cs.resize(innerWidth, innerHeight); }
addEventListener('resize', resize); resize();

let yaw = cs.spawn.yaw, pitch = 0;
if (q.get('pos')) { const [x, z] = q.get('pos').split(',').map(Number); cam.position.set(x, 1.7, z); }
if (q.get('yaw')) yaw = parseFloat(q.get('yaw'));
if (q.get('pitch')) pitch = parseFloat(q.get('pitch'));
if (q.get('obj')) cs.setObjective(q.get('obj'));
if (q.get('hl')) cs.highlight(q.get('hl'));
// test spacecraft placeholder
const ph = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.1, 2.4), new THREE.MeshStandardMaterial({ color: 0xd9c9a0, metalness: 0.4, roughness: 0.5 }));
ph.position.y = 1.55; cs.spacecraftAnchor.add(ph);
const keys = {};
addEventListener('keydown', (e) => { keys[e.code] = true; if (e.code === 'Digit1') cs.setVehicle('atlas_v_411'); if (e.code === 'Digit2') cs.setVehicle('falcon_9'); if (e.code === 'Digit3') cs.setVehicle('falcon_heavy'); });
addEventListener('keyup', (e) => { keys[e.code] = false; });
renderer.domElement.addEventListener('click', () => renderer.domElement.requestPointerLock());
addEventListener('mousemove', (e) => { if (document.pointerLockElement) { yaw -= e.movementX * 0.0022; pitch = Math.max(-1.5, Math.min(1.5, pitch - e.movementY * 0.0022)); } });
const clock = new THREE.Clock();
const info = document.getElementById('info'), prompt = document.getElementById('prompt');
const fwd = new THREE.Vector3();
function collide(p) {
  const r = 0.35; const b = cs.bounds;
  p.x = Math.max(b.minX, Math.min(b.maxX, p.x)); p.z = Math.max(b.minZ, Math.min(b.maxZ, p.z));
  for (const c of cs.colliders) {
    if (p.x > c.min.x - r && p.x < c.max.x + r && p.z > c.min.z - r && p.z < c.max.z + r) {
      const dx1 = p.x - (c.min.x - r), dx2 = c.max.x + r - p.x, dz1 = p.z - (c.min.z - r), dz2 = c.max.z + r - p.z;
      const m = Math.min(dx1, dx2, dz1, dz2);
      if (m === dx1) p.x = c.min.x - r; else if (m === dx2) p.x = c.max.x + r; else if (m === dz1) p.z = c.min.z - r; else p.z = c.max.z + r;
    }
  }
}
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.1);
  const sp = (keys.ShiftLeft ? 6 : 3) * dt;
  fwd.set(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
  if (keys.KeyW) cam.position.addScaledVector(fwd, sp);
  if (keys.KeyS) cam.position.addScaledVector(fwd, -sp);
  if (keys.KeyD) cam.position.addScaledVector(right, sp);
  if (keys.KeyA) cam.position.addScaledVector(right, -sp);
  collide(cam.position);
  cam.rotation.set(pitch, yaw, 0, 'YXZ');
  // look-at interactable
  let best = null; cam.getWorldDirection(fwd);
  for (const it of cs.interactables) { const d = it.position.clone().sub(cam.position); const dist = d.length(); if (dist < it.radius + 1.5 && d.normalize().dot(fwd) > 0.85) best = it; }
  if (!q.get('hl')) cs.highlight(best ? best.id : null);
  prompt.textContent = best ? best.prompt : '';
  cs.update(q.get('freeze') ? 0.0001 : dt);
  renderer.info.reset();
  composer.render();
  info.textContent = `${cam.position.x.toFixed(1)},${cam.position.z.toFixed(1)} yaw ${yaw.toFixed(2)} · calls ${renderer.info.render.calls} · ${cs.siteName}`;
});
if (q.get('boost')) cs.env.flood.forEach((l) => { l.intensity *= +q.get('boost'); });
window.__cs = cs; window.__r = renderer;
