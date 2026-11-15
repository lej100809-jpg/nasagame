// Procedural CanvasTextures shared by the space models (no external assets).
// AI-assisted code (Claude) — see README.
import * as THREE from 'three';

const cache = new Map();

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

// Seeded PRNG so textures look the same every run
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Crinkled gold MLI foil: color map + bump-ish roughness map
export function foilTextures() {
  if (cache.has('foil')) return cache.get('foil');
  const S = 512;
  const r = rng(7);
  const [c, g] = canvas(S, S);
  const grd = g.createLinearGradient(0, 0, S, S);
  grd.addColorStop(0, '#d9a441');
  grd.addColorStop(0.5, '#f1c75c');
  grd.addColorStop(1, '#b9822a');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  // crinkles: many random light/dark polygons
  for (let i = 0; i < 1400; i++) {
    const x = r() * S, y = r() * S, s = 6 + r() * 34;
    const l = r();
    g.fillStyle = l > 0.5 ? `rgba(255,236,170,${0.08 + r() * 0.18})` : `rgba(90,50,10,${0.06 + r() * 0.16})`;
    g.beginPath();
    g.moveTo(x, y);
    for (let k = 0; k < 4; k++) g.lineTo(x + (r() - 0.5) * s * 2, y + (r() - 0.5) * s * 2);
    g.closePath(); g.fill();
  }
  // seams / tape lines
  g.strokeStyle = 'rgba(120,80,20,0.55)'; g.lineWidth = 3;
  for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(0, (i * S) / 4); g.lineTo(S, (i * S) / 4 + (r() - 0.5) * 8); g.stroke(); }
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  const [c2, g2] = canvas(S, S);
  g2.fillStyle = '#555'; g2.fillRect(0, 0, S, S);
  for (let i = 0; i < 1600; i++) {
    const x = r() * S, y = r() * S, s = 4 + r() * 30;
    g2.fillStyle = `rgba(${r() > 0.5 ? 255 : 0},${r() > 0.5 ? 255 : 0},${r() > 0.5 ? 255 : 0},${0.15 + r() * 0.3})`;
    g2.beginPath(); g2.moveTo(x, y);
    for (let k = 0; k < 4; k++) g2.lineTo(x + (r() - 0.5) * s * 2, y + (r() - 0.5) * s * 2);
    g2.closePath(); g2.fill();
  }
  const bump = new THREE.CanvasTexture(c2);
  bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
  const out = { map, bump };
  cache.set('foil', out);
  return out;
}

// Solar cells grid
export function solarTexture() {
  if (cache.has('solar')) return cache.get('solar');
  const W = 512, H = 256;
  const [c, g] = canvas(W, H);
  g.fillStyle = '#0b1530'; g.fillRect(0, 0, W, H);
  const cols = 16, rows = 8;
  const cw = W / cols, ch = H / rows;
  const r = rng(3);
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const v = 20 + r() * 18;
    g.fillStyle = `rgb(${v * 0.5},${v * 0.9},${v * 2.6})`;
    g.fillRect(i * cw + 2, j * ch + 2, cw - 4, ch - 4);
    g.strokeStyle = 'rgba(160,190,255,0.18)'; g.lineWidth = 1;
    g.beginPath(); g.moveTo(i * cw + cw / 2, j * ch + 2); g.lineTo(i * cw + cw / 2, j * ch + ch - 2); g.stroke();
  }
  g.strokeStyle = '#6a707a'; g.lineWidth = 6; g.strokeRect(0, 0, W, H);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  cache.set('solar', t);
  return t;
}

// Soft radial glow sprite texture
export function glowTexture(inner = 'rgba(255,255,255,1)', mid = 'rgba(255,200,120,0.35)') {
  const key = 'glow' + inner + mid;
  if (cache.has(key)) return cache.get(key);
  const S = 256;
  const [c, g] = canvas(S, S);
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.2, mid);
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, t);
  return t;
}

// Round soft particle
export function dotTexture() {
  if (cache.has('dot')) return cache.get('dot');
  const S = 64;
  const [c, g] = canvas(S, S);
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.4, 'rgba(255,255,255,0.6)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  cache.set('dot', t);
  return t;
}

// Earth: noise-based continents + clouds on the sphere (seamless equirectangular)
function h3(x, y, z) { let h = x * 374761393 + y * 668265263 + z * 1274126177; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
function vn3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const L = (a, b, t) => a + (b - a) * t, c = (a, b, d) => h3(xi + a, yi + b, zi + d);
  return L(L(L(c(0,0,0), c(1,0,0), u), L(c(0,1,0), c(1,1,0), u), v), L(L(c(0,0,1), c(1,0,1), u), L(c(0,1,1), c(1,1,1), u), v), w);
}
function fbm3(x, y, z, o) { let a = 0.5, f = 1, s = 0; for (let i = 0; i < o; i++) { s += a * (vn3(x * f, y * f, z * f) * 2 - 1); f *= 2.02; a *= 0.5; } return s; }
export function earthTexture() {
  if (cache.has('earth')) return cache.get('earth');
  const W = 1024, H = 512;
  const [c, g] = canvas(W, H);
  const img = g.createImageData(W, H);
  const d = img.data;
  for (let j = 0; j < H; j++) {
    const lat = (0.5 - j / H) * Math.PI, cl = Math.cos(lat), sl = Math.sin(lat);
    for (let i = 0; i < W; i++) {
      const lon = (i / W) * Math.PI * 2;
      const x = cl * Math.cos(lon), y = sl, z = cl * Math.sin(lon);
      const land = fbm3(x * 1.6 + 5, y * 1.6, z * 1.6, 6) + 0.08;
      const cloud = fbm3(x * 3 + 11, y * 5, z * 3, 5);
      let r, gg, b;
      const polar = Math.abs(lat) > 1.22;
      if (polar) { r = 235; gg = 242; b = 250; }
      else if (land > 0.05) {
        const dry = Math.max(0, 1 - Math.abs(Math.abs(lat) - 0.4) * 3.5) * (0.5 + fbm3(x * 4, y * 4, z * 4, 3));
        const k = Math.min(1, (land - 0.05) * 3);
        r = 52 + dry * 120 + k * 20; gg = 92 + dry * 60 - k * 10; b = 44 + dry * 30;
      } else {
        const deep = Math.min(1, -land * 3);
        r = 18 - deep * 10; gg = 62 - deep * 30; b = 120 - deep * 40;
      }
      const ca = Math.max(0, Math.min(1, (cloud - 0.02) * 2.4));
      r = r + (245 - r) * ca; gg = gg + (248 - gg) * ca; b = b + (252 - b) * ca;
      const o = (j * W + i) * 4;
      d[o] = r; d[o + 1] = gg; d[o + 2] = b; d[o + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  cache.set('earth', t);
  return t;
}

// Asteroid regolith color variation
export function regolithTexture() {
  if (cache.has('regolith')) return cache.get('regolith');
  const S = 512;
  const [c, g] = canvas(S, S);
  const r = rng(21);
  g.fillStyle = '#5e5750'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 6000; i++) {
    const x = r() * S, y = r() * S, s = 1 + r() * 5;
    const v = 50 + r() * 80;
    g.fillStyle = `rgba(${v + 8},${v + 2},${v - 4},${0.3 + r() * 0.5})`;
    g.fillRect(x, y, s, s);
  }
  for (let i = 0; i < 120; i++) {
    const x = r() * S, y = r() * S, s = 6 + r() * 20;
    const lt = r() > 0.5;
    g.fillStyle = lt ? 'rgba(140,130,118,0.3)' : 'rgba(14,12,10,0.35)';
    g.beginPath(); g.arc(x, y, s, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  cache.set('regolith', t);
  return t;
}

// Analytic radial glow sprite (no texture edges -> no square artefacts under bloom).
// color: THREE.Color (values > 1 bloom). falloff: higher = tighter core.
export function glowSprite(color, size = 1, falloff = 2.2, core = 0.0) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: color.clone ? color.clone() : new THREE.Color(color) }, uOpacity: { value: 1 }, uFall: { value: falloff }, uCore: { value: core } },
    vertexShader: `varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity; uniform float uFall; uniform float uCore; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * 2.0; if (d >= 1.0) discard;
        float a = pow(1.0 - d, uFall) + uCore * pow(max(0.0, 1.0 - d * 4.0), 2.0);
        a *= uOpacity; gl_FragColor = vec4(uColor * a, a); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  Object.defineProperty(mat, 'opacity', { get() { return this.uniforms.uOpacity.value; }, set(v) { if (this.uniforms) this.uniforms.uOpacity.value = v; }, configurable: true });
  const s = new THREE.Sprite(mat);
  s.scale.setScalar(size);
  return s;
}
