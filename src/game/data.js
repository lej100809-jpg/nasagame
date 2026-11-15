// Loads every game number from /data/*.json — numbers live in data files, not in code.
const FILES = ['parts', 'launch_vehicles', 'mission_options', 'events', 'real_mission', 'game_config'];

export async function loadData() {
  const base = new URL('./data/', document.baseURI);
  const entries = await Promise.all(
    FILES.map(async (f) => {
      const res = await fetch(new URL(`${f}.json`, base));
      if (!res.ok) throw new Error(`Could not load ${f}.json`);
      return [f, await res.json()];
    })
  );
  const D = Object.fromEntries(entries);

  // Convenience indexes
  D.instruments = Object.fromEntries(D.parts.instruments.map((i) => [i.id, { ...i }]));
  // Fill unsourced instrument numbers from game_config (marked with their own status)
  for (const [id, extra] of Object.entries(D.game_config.instrument_extras)) {
    const inst = D.instruments[id];
    if (!inst) continue;
    if (inst.mass_kg == null && extra.mass_kg != null) { inst.mass_kg = extra.mass_kg; inst.mass_status = extra.status; }
    if (inst.power_w_avg == null && extra.power_w_avg != null) { inst.power_w_avg = extra.power_w_avg; inst.power_status = extra.status; }
    if (inst.power_w_avg == null) inst.power_w_avg = 0;
  }
  for (const id of Object.keys(D.instruments)) {
    const g = D.game_config.instrument_game[id] || {};
    D.instruments[id].cost_musd = g.cost_musd ?? 0;
    D.instruments[id].data_gb_day = g.data_gb_day ?? 0;
  }
  D.solar = Object.fromEntries(D.parts.solar_arrays.map((s) => [s.id, s]));
  D.antennas = Object.fromEntries(D.parts.antennas.map((a) => [a.id, a]));
  D.shields = D.parts.shielding;
  D.vehicles = Object.fromEntries(D.launch_vehicles.vehicles.map((v) => [v.id, v]));
  D.propulsion = Object.fromEntries(D.game_config.propulsion_options.map((p) => [p.id, p]));
  D.futureOptions = D.mission_options.options.filter((o) => o.is_future);
  D.brakableOptions = D.futureOptions.filter((o) => o.brakable_like_osiris_rex);
  return D;
}
