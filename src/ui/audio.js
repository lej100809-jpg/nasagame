// Synthesised sound effects with WebAudio (no audio files).
let ctx = null, master = null, enabled = true, unlocked = false;
window.addEventListener('pointerdown', () => { unlocked = true; }, { once: true, capture: true });
window.addEventListener('keydown', () => { unlocked = true; }, { once: true, capture: true });
function ac() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}
export function setSound(on) { enabled = on; if (master) master.gain.value = on ? 0.5 : 0; }
export function soundOn() { return enabled; }

function tone(freq, dur, type = 'sine', vol = 0.15, slide = 0) {
  if (!enabled || !unlocked) return;
  const a = ac(), t = a.currentTime;
  const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, vol, lp = 400, attack = 0.5) {
  if (!enabled || !unlocked) return;
  const a = ac(), t = a.currentTime;
  const buf = a.createBuffer(1, a.sampleRate * dur, a.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < d.length; i++) { last = last * 0.97 + (Math.random() * 2 - 1) * 0.03; d[i] = last * 6; }
  const src = a.createBufferSource(); src.buffer = buf;
  const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp;
  const g = a.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.linearRampToValueAtTime(vol * 0.7, t + dur * 0.7); g.gain.linearRampToValueAtTime(0, t + dur);
  src.connect(f); f.connect(g); g.connect(master); src.start(t);
}
export const sfx = {
  click: () => tone(880, 0.06, 'square', 0.04),
  select: () => { tone(660, 0.07, 'sine', 0.08); setTimeout(() => tone(990, 0.09, 'sine', 0.07), 50); },
  error: () => tone(180, 0.25, 'sawtooth', 0.06, -60),
  alarm: () => { [0, 260, 520].forEach((d) => setTimeout(() => tone(740, 0.18, 'square', 0.06), d)); },
  launch: () => { noise(13, 0.9, 260, 2.5); tone(55, 6, 'sawtooth', 0.05, -20); },
  success: () => [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, 0.35, 'triangle', 0.09), i * 110)),
  fail: () => [392, 330, 262].forEach((f, i) => setTimeout(() => tone(f, 0.4, 'triangle', 0.08), i * 180)),
  burn: () => noise(2.2, 0.35, 900, 0.2),
  beep: () => tone(1320, 0.05, 'sine', 0.05),
  whoosh: () => noise(1.2, 0.3, 1800, 0.3),
};
