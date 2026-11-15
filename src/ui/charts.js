// Tiny canvas charts (no libraries) for the launch-window and capacity plots.
function setup(canvas) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  return { ctx, w, h };
}
const AX = '#5d7083', GRID = 'rgba(120,190,210,0.10)', TXT = '#8fa3b5';

function axes(ctx, w, h, pad, xr, yr, xl, yl, xt = 5, yt = 4) {
  ctx.font = '10px JetBrains Mono, monospace';
  ctx.fillStyle = TXT; ctx.strokeStyle = GRID; ctx.lineWidth = 1;
  for (let i = 0; i <= xt; i++) {
    const v = xr[0] + ((xr[1] - xr[0]) * i) / xt;
    const x = pad.l + ((w - pad.l - pad.r) * i) / xt;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, h - pad.b); ctx.stroke();
    ctx.textAlign = 'center'; ctx.fillText(Math.round(v), x, h - pad.b + 13);
  }
  for (let i = 0; i <= yt; i++) {
    const v = yr[0] + ((yr[1] - yr[0]) * i) / yt;
    const y = h - pad.b - ((h - pad.t - pad.b) * i) / yt;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
    ctx.textAlign = 'right'; ctx.fillText(Math.round(v), pad.l - 5, y + 3);
  }
  ctx.fillStyle = AX; ctx.textAlign = 'center';
  ctx.fillText(xl, (w + pad.l - pad.r) / 2, h - 3);
  ctx.save(); ctx.translate(10, (h - pad.b + pad.t) / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(yl, 0, 0); ctx.restore();
}

/** Scatter of launch windows: x = flight days, y = arrival braking dv. Returns hit-test fn. */
export function drawWindows(canvas, options, selectedKey, limitDv) {
  const { ctx, w, h } = setup(canvas);
  const pad = { l: 40, r: 12, t: 12, b: 30 };
  const xr = [0, Math.max(...options.map((o) => o.flight_days)) * 1.05];
  const yr = [0, Math.min(12, Math.max(...options.map((o) => o.arrival_braking_dv_km_s)) * 1.05)];
  axes(ctx, w, h, pad, xr, yr, 'flight time (days)', 'arrival Δv km/s');
  const X = (v) => pad.l + ((v - xr[0]) / (xr[1] - xr[0])) * (w - pad.l - pad.r);
  const Y = (v) => h - pad.b - ((Math.min(v, yr[1]) - yr[0]) / (yr[1] - yr[0])) * (h - pad.t - pad.b);
  // brakable limit line
  ctx.strokeStyle = 'rgba(57,197,187,.6)'; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.moveTo(pad.l, Y(limitDv)); ctx.lineTo(w - pad.r, Y(limitDv)); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(127,243,233,.8)'; ctx.textAlign = 'right'; ctx.font = '10px JetBrains Mono, monospace';
  ctx.fillText(`OSIRIS-REx braking limit ${limitDv} km/s`, w - pad.r - 4, Y(limitDv) - 5);
  const pts = [];
  for (const o of options) {
    const key = o.launch_date + '|' + o.arrival_date;
    const x = X(o.flight_days), y = Y(o.arrival_braking_dv_km_s);
    const ok = o.brakable_like_osiris_rex;
    const sel = key === selectedKey;
    ctx.beginPath(); ctx.arc(x, y, sel ? 7 : ok ? 5 : 3.5, 0, Math.PI * 2);
    ctx.fillStyle = ok ? '#39c5bb' : 'rgba(255,77,94,.75)';
    ctx.fill();
    if (sel) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); ctx.lineWidth = 1; }
    pts.push({ x, y, key });
  }
  return (mx, my) => {
    let best = null, bd = 14;
    for (const p of pts) { const d = Math.hypot(p.x - mx, p.y - my); if (d < bd) { bd = d; best = p.key; } }
    return best;
  };
}

/** Capacity curves vs C3 for each vehicle with the current spacecraft mass line. */
export function drawCapacity(canvas, curves, c3, wetKg, selectedId) {
  const { ctx, w, h } = setup(canvas);
  const pad = { l: 46, r: 12, t: 12, b: 30 };
  const xr = [0, 50], yr = [0, 7000];
  axes(ctx, w, h, pad, xr, yr, 'C3 (km²/s²)', 'kg', 5, 7);
  const X = (v) => pad.l + ((v - xr[0]) / (xr[1] - xr[0])) * (w - pad.l - pad.r);
  const Y = (v) => h - pad.b - ((Math.min(v, yr[1]) - yr[0]) / (yr[1] - yr[0])) * (h - pad.t - pad.b);
  const colors = { atlas_v_411: '#ffb547', falcon_9: '#7cc7ff', falcon_heavy: '#ff5fa2' };
  for (const [id, fn] of Object.entries(curves)) {
    ctx.strokeStyle = colors[id]; ctx.lineWidth = id === selectedId ? 2.5 : 1.2; ctx.globalAlpha = id === selectedId ? 1 : 0.55;
    ctx.beginPath();
    for (let x = 0; x <= 50; x += 0.5) { const y = fn(x); x === 0 ? ctx.moveTo(X(x), Y(y)) : ctx.lineTo(X(x), Y(y)); }
    ctx.stroke(); ctx.globalAlpha = 1;
  }
  ctx.lineWidth = 1;
  if (wetKg) { ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(pad.l, Y(wetKg)); ctx.lineTo(w - pad.r, Y(wetKg)); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = '#fff'; ctx.textAlign = 'left'; ctx.fillText(`your launch mass ${Math.round(wetKg)} kg`, pad.l + 4, Y(wetKg) - 4); }
  if (c3 != null) { ctx.strokeStyle = 'rgba(57,197,187,.7)'; ctx.beginPath(); ctx.moveTo(X(c3), pad.t); ctx.lineTo(X(c3), h - pad.b); ctx.stroke(); }
  // OSIRIS-REx real point
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(X(29.3), Y(2105), 3.5, 0, Math.PI * 2); ctx.fill();
  ctx.textAlign = 'left'; ctx.fillStyle = '#c9d6e2'; ctx.fillText('OSIRIS-REx 2016', X(29.3) + 6, Y(2105) + 12);
  return colors;
}
