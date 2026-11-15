// Standalone test for SpaceScene: ?mode=briefing|build|cruise|proximity|reentry&play=1&p=0.5&orbit=1
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SpaceScene } from '../src/scenes/SpaceScene.js';

const q = new URLSearchParams(location.search);
const mode = q.get('mode') || 'briefing';
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const space = new SpaceScene();
window.space = space;
if (q.get('cfg') === 'min') space.setSpacecraftConfig({ instruments: ['tagsam', 'src'], solar: 'solar_small', antenna: 'lga_only', shield: 0 });
if (q.get('cfg') === 'max') space.setSpacecraftConfig({ shield: 3 });
space.resize(innerWidth, innerHeight);
space.setMode(mode, mode === 'cruise' ? { launchDate: '2035-09-24', arrivalDate: '2036-11-02', progress: +(q.get('p') ?? 0.5) } : {});
if (q.get('leg') === 'return') space.setReturn({ departDate: '2038-05-10', arriveDate: '2040-09-24', progress: +(q.get('p') ?? 0.5) });
if (q.get('orbit') === '1') space.enableOrbit(renderer.domElement);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(space.scene, space.camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.9, 0.5, 0.85);
composer.addPass(bloom);
composer.addPass(new OutputPass());

const hud = document.getElementById('hud');
let done = false;
if (q.get('play') === '1') {
  if (mode === 'proximity') space.playTAG(() => (done = true));
  if (mode === 'reentry') space.playReentry(() => (done = true));
}
window.addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); space.resize(innerWidth, innerHeight); });

// deterministic stepping for screenshots: ?step=SECONDS advances the scene before first frame
const step = +(q.get('step') || 0);
for (let s = 0; s < step; s += 1 / 30) space.update(1 / 30);

const clock = new THREE.Clock();
function loop() {
  const dt = clock.getDelta();
  if (!q.get('freeze')) space.update(dt);
  composer.render();
  hud.textContent = `${space.mode}  t=${space.time.toFixed(1)}  ${done ? 'DONE' : ''}`;
  requestAnimationFrame(loop);
}
loop();
window.__ready = true;
