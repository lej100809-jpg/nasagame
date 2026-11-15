// Campus building blocks: text signs, info boards, monitors, generic museum rockets, props.
// Text only (no real agency logos). AI-assisted code (Claude) – see README.
import * as THREE from 'three';
import { canvasTexture, std } from './rockets.js';

// ---- rich text: "v{f}" -> subscript f, "^{2}" -> superscript
export function drawRich(g, str, x, y, size, color = '#fff', align = 'left', weight = 'bold') {
  const parts = [];
  const re = /(\^?\{[^}]*\})|([^{^]+|\^)/g;
  let m;
  while ((m = re.exec(str))) {
    if (m[1]) parts.push({ t: m[1].replace(/[\^{}]/g, ''), sup: m[1].startsWith('^') });
    else parts.push({ t: m[2], base: true });
  }
  const fontBase = `${weight} ${size}px "Segoe UI", Arial, sans-serif`;
  const fontSmall = `${weight} ${Math.round(size * 0.62)}px "Segoe UI", Arial, sans-serif`;
  let w = 0;
  for (const p of parts) { g.font = p.base ? fontBase : fontSmall; w += g.measureText(p.t).width; }
  let cx = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
  g.fillStyle = color; g.textAlign = 'left';
  for (const p of parts) {
    g.font = p.base ? fontBase : fontSmall;
    const dy = p.base ? 0 : p.sup ? -size * 0.38 : size * 0.22;
    g.fillText(p.t, cx, y + dy);
    cx += g.measureText(p.t).width;
  }
  return w;
}

export function wrapText(g, text, x, y, maxW, lineH) {
  const words = text.split(' ');
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > maxW && line) { g.fillText(line, x, y); y += lineH; line = w; } else line = test;
  }
  if (line) g.fillText(line, x, y);
  return y + lineH;
}

// Flat glowing sign (plane). w,h in metres.
export function signMesh(text, w, h, { bg = '#0d1b2a', fg = '#ffffff', accent = '#4fd1ff', glow = 1.4, sub = null, pxPerM = 90 } = {}) {
  const cw = Math.min(2048, Math.round(w * pxPerM)), ch = Math.round(cw * (h / w));
  const tex = canvasTexture(cw, ch, (g, W, H) => {
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.fillStyle = accent; g.fillRect(0, H - H * 0.07, W, H * 0.07);
    g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
    let fs = H * (sub ? 0.42 : 0.55);
    g.font = `800 ${fs}px "Segoe UI", Arial, sans-serif`;
    while (g.measureText(text).width > W * 0.92 && fs > 8) { fs *= 0.92; g.font = `800 ${fs}px "Segoe UI", Arial, sans-serif`; }
    g.fillText(text, W / 2, sub ? H * 0.38 : H * 0.47);
    if (sub) { g.font = `500 ${H * 0.2}px "Segoe UI", Arial, sans-serif`; g.fillStyle = accent; g.fillText(sub, W / 2, H * 0.72); }
  });
  const mat = new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(glow, glow, glow), toneMapped: true });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.userData.texture = tex;
  return m;
}

// ---- museum info boards (canvas 1024 x 704)
export const BOARD_CONTENT = {
  board_tsiolkovsky: {
    kicker: 'ROCKET GARDEN · 1 / 4', title: 'TSIOLKOVSKY ROCKET EQUATION',
    formula: 'v{f} = v{i} + u · ln( m{i} / m{f} )',
    body: 'A rocket speeds up by throwing mass out the back. How much speed it gains depends only on the exhaust speed u and on how much lighter it gets (the mass ratio).',
    vars: ['v{f}  final speed      v{i}  initial speed', 'u  exhaust speed (relative to the rocket)', 'm{i}  initial mass incl. propellant      m{f}  final mass', 'ln  natural logarithm'],
    example: 'OSIRIS-REx: 2,110 kg → 880 kg, u ≈ 2.26 km/s (Isp 230 s)  ⇒  Δv ≈ 1.97 km/s',
  },
  board_visviva: {
    kicker: 'ROCKET GARDEN · 2 / 4', title: 'VIS-VIVA EQUATION',
    formula: 'v^{2} = μ ( 2/r − 1/a )',
    body: 'Energy conservation on an orbit: the closer a spacecraft is to the Sun (small r), the faster it moves. It gives the speed anywhere on an ellipse.',
    vars: ['v  orbital speed      μ = G·M  standard gravitational parameter', 'r  distance from the central body', 'a  semi-major axis of the ellipse'],
    example: 'Bennu (a = 1.126 AU): ≈ 34.5 km/s at perihelion 0.897 AU, ≈ 22.8 km/s at aphelion 1.356 AU',
  },
  board_escape: {
    kicker: 'ROCKET GARDEN · 3 / 4', title: 'ESCAPE VELOCITY',
    formula: 'v{e} = √( 2GM / r ) = √( 2μ / r )',
    body: 'The minimum speed needed to leave a body\'s gravity for good. It falls out of the vis-viva equation when the orbit opens up (a → ∞).',
    vars: ['v{e}  escape velocity      G  gravitational constant', 'M  mass of the body      r  distance from its centre'],
    example: 'Earth surface ≈ 11.2 km/s.  Bennu (GM ≈ 4.9 m^{3}/s^{2}, r ≈ 245 m) ≈ 0.2 m/s — slower than a walk!',
  },
  board_propellant: {
    kicker: 'ROCKET GARDEN · 4 / 4', title: 'PROPELLANT = FUEL + OXIDIZER',
    formula: 'action → reaction  (Newton\'s 3rd law)',
    body: 'Fuel and oxidizer burn in the chamber into hot, high-pressure gas. The nozzle throws it backwards fast, and the rocket is pushed forwards. There is no air in space, so rockets carry their own oxidizer.',
    vars: ['LIQUID  kerosene / liquid hydrogen + liquid oxygen or N{2}O{4} — throttle & restart (Korea\'s Nuri: kerosene + LOX)', 'SOLID  aluminium powder + ammonium perchlorate, pre-mixed — simple, but cannot stop once lit', 'HYBRID  solid fuel + liquid oxidizer'],
    example: 'Atlas V 411 flies all styles: RP-1/LOX core, a solid booster, LH{2}/LOX Centaur',
  },
};

export function boardTexture(id) {
  const c = BOARD_CONTENT[id];
  return canvasTexture(1024, 704, (g, W, H) => {
    const grd = g.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, '#0b1626'); grd.addColorStop(1, '#101f35');
    g.fillStyle = grd; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(79,209,255,0.12)'; g.lineWidth = 1;
    for (let x = 0; x < W; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    for (let y = 0; y < H; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    g.fillStyle = '#4fd1ff'; g.fillRect(0, 0, W, 10);
    g.font = '600 22px "Segoe UI", Arial'; g.fillStyle = '#4fd1ff'; g.fillText(c.kicker, 48, 56);
    g.font = '800 46px "Segoe UI", Arial'; g.fillStyle = '#ffffff'; g.fillText(c.title, 48, 112);
    // formula box
    g.fillStyle = 'rgba(79,209,255,0.12)'; g.fillRect(40, 140, W - 80, 118);
    g.strokeStyle = '#4fd1ff'; g.lineWidth = 3; g.strokeRect(40, 140, W - 80, 118);
    drawRich(g, c.formula, W / 2, 218, c.formula.length > 30 ? 46 : 58, '#ffe28a', 'center');
    g.font = '400 25px "Segoe UI", Arial'; g.fillStyle = '#dce8f5';
    let y = wrapText(g, c.body, 48, 304, W - 96, 34);
    y += 6;
    for (const v of c.vars) { drawRich(g, '• ' + v, 48, y, v.length > 70 ? 20 : 23, '#9fd8ff', 'left', '500'); y += 34; }
    g.fillStyle = 'rgba(255,226,138,0.12)'; g.fillRect(40, H - 84, W - 80, 56);
    drawRich(g, c.example, 56, H - 47, c.example.length > 80 ? 19 : 22, '#ffe28a', 'left', '600');
  });
}

// ---- monitor screen textures (static UI-ish content)
export function monitorTexture(kind = 0) {
  const hue = ['#4fd1ff', '#7dffb2', '#ffc46b'][kind % 3];
  return canvasTexture(256, 160, (g, W, H) => {
    g.fillStyle = '#05101c'; g.fillRect(0, 0, W, H);
    g.strokeStyle = hue; g.fillStyle = hue; g.globalAlpha = 0.9;
    g.font = 'bold 12px monospace'; g.fillText(['TRAJ', 'COMM', 'PWR', 'GNC', 'EECOM', 'WX'][Math.floor(Math.random() * 6)], 8, 16);
    g.lineWidth = 2; g.beginPath();
    for (let x = 0; x < W; x += 4) { const y = H * 0.6 + Math.sin(x * 0.05 + kind) * 18 + (Math.random() - 0.5) * 8; x ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.stroke();
    g.globalAlpha = 0.5; for (let i = 0; i < 6; i++) g.fillRect(8, 26 + i * 9, 40 + Math.random() * 80, 4);
    g.globalAlpha = 0.25; g.strokeRect(4, 4, W - 8, H - 8);
  });
}

// ---- generic museum rocket (no real markings)
export function museumRocket(height, { body = 0xf0f0ee, accent = 0x1c1e22, checker = false } = {}) {
  const g = new THREE.Group();
  const r = height * 0.045;
  const tex = checker ? canvasTexture(256, 512, (c, W, H) => {
    c.fillStyle = '#f0f0ee'; c.fillRect(0, 0, W, H); c.fillStyle = '#1c1e22';
    for (let j = 0; j < 4; j++) for (let i = 0; i < 2; i++) if ((i + j) % 2) c.fillRect((i * W) / 2, (j * H) / 4, W / 2, H / 4);
  }) : null;
  const bm = std(body, { map: tex, roughness: 0.5 });
  const am = std(accent, { roughness: 0.5 });
  const cylH = height * 0.72;
  const cyl = new THREE.Mesh(new THREE.CylinderGeometry(r, r, cylH, 24), bm); cyl.position.y = cylH / 2 + height * 0.06; g.add(cyl);
  const noseH = height * 0.22;
  const nose = new THREE.Mesh(new THREE.ConeGeometry(r, noseH, 24), am); nose.position.y = height * 0.06 + cylH + noseH / 2; g.add(nose);
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(r * 2.2, height * 0.14, 0.12), am);
    fin.position.set(Math.cos((i * Math.PI) / 2) * r * 1.4, height * 0.12, Math.sin((i * Math.PI) / 2) * r * 1.4);
    fin.rotation.y = -(i * Math.PI) / 2;
    g.add(fin);
  }
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(r * 3, r * 3.4, height * 0.06, 24), std(0x8f8b84, { roughness: 0.9 }));
  ped.position.y = height * 0.03; g.add(ped);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData.radius = r * 3.4;
  return g;
}
