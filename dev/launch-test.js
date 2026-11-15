import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { LaunchScene } from '../src/scenes/LaunchScene.js';

const q = new URLSearchParams(location.search);
const cheap = q.get('render') === 'cheap';
const renderer = new THREE.WebGLRenderer({ antialias: !cheap, powerPreference: 'high-performance' });
renderer.setPixelRatio(cheap ? 0.75 : Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const ls = new LaunchScene({ vehicleId: q.get('v') || 'atlas_v_411' });
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(ls.scene, ls.camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.7, 0.5, 0.92);
composer.addPass(bloom);
composer.addPass(new OutputPass());
function resize() { renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); ls.resize(innerWidth, innerHeight); }
addEventListener('resize', resize); resize();

document.querySelectorAll('[data-v]').forEach((b) => b.onclick = () => ls.setVehicle(b.dataset.v));
document.getElementById('go').onclick = () => ls.startLaunch(() => { console.log('launch done'); setTimeout(() => ls.reset(), 500); });
document.getElementById('orbit').onclick = () => ls.enableOrbit(renderer.domElement);
if (q.get('launch')) ls.startLaunch(() => console.log('launch done'));
// deterministic stepping for screenshots: ?t=seconds advances simulation before first frames
const pre = parseFloat(q.get('t') || '0');
for (let s = 0; s < pre; s += 1 / 30) ls.update(1 / 30);
window.__ls = ls;
const clock = new THREE.Clock();
const info = document.getElementById('info');
renderer.setAnimationLoop(() => {
  const dt = clock.getDelta();
  ls.update(q.get('freeze') ? 0 : dt);
  composer.render();
  info.textContent = ls.siteName;
});
