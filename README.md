<img src="public/logo.svg" alt="COSMO CRAFT" width="420">

# COSMO CRAFT — Bennu Sample Return Mission Designer

**NASA Space Apps Challenge 2026 · Team Miku☆Miku☆Beam · Mission design game**

▶ **Play (no install, no login):** https://lej100809-jpg.github.io/nasagame/

You are the lead designer of an asteroid sample-return mission to near-Earth asteroid **101955 Bennu**.
Walk a first-person launch campus at Cape Canaveral, use the consoles to pick objectives, a real JPL
launch window and a rocket, build the spacecraft in the clean room within a real budget, mass and power
envelope, give the GO for launch, fly through **real NASA DONKI solar storms**, and finally compare your
mission side-by-side with NASA's real **OSIRIS-REx**.

English / 한국어 toggle in the top bar · graphics quality toggle (HQ/LQ) · menu mode for touch devices or low-end PCs.

## How it plays

| Station (first-person) | What you decide | Problem-statement element |
|---|---|---|
| Mission Control holo table | Primary goal (≥ 60 g sample) + 0–4 secondary goals | Mission objectives |
| FLIGHT DYNAMICS console | One of 48 real JPL Earth→Bennu trajectories, launch vehicle | Orbital constraints, launch vehicle, budget |
| Payload Processing clean room | Instruments, solar arrays, antenna, shielding, propulsion chemistry, propellant load — live gauges | Spacecraft design, science instruments, power, mass, communications, budget |
| Rocket Garden exhibits | Rocket equation, vis-viva, escape velocity, propellant classes — with *your* numbers | (education) |
| LAUNCH DIRECTOR console | GO / NO-GO | — |
| Operations | Launch → cruise → arrival braking → proximity science → Touch-And-Go → return → capsule re-entry; safe mode vs. keep operating on each real DONKI event | Communications, power, orbital constraints |
| Report | Outcome with the cause of every success/failure, score, comparison table vs OSIRIS-REx | All nine |

Controls: `WASD` move · `Shift` sprint · `C` crouch · `Space` jump · `E` use · `Tab` mission tablet · `1–6` fast travel · `Esc` pause.

## Physics (real equations, `src/game/physics.js`)

- **Tsiolkovsky rocket equation** `v_f = v_i + u ln(m_i/m_f)`, `u = Isp·g₀` — spacecraft Δv budget, propellant sizing `m_p = m_dry(e^{Δv/u} − 1)`, every burn in operations, and launch-vehicle upper-stage capacity.
- **Vis-viva** `v² = μ(2/r − 1/a)` — parking-orbit speed (a = r), hyperbolic departure (a = −μ/C3), heliocentric speed during cruise.
- **Escape velocity** `v_e = √(2μ/r)` — 11.19 km/s at Earth's surface; departure speed `√(v_e² + C3)`.
- Solar array output `P = P₁AU / r²`, light-time delay `t = d / c`.
- Launch-vehicle capacity vs C3: escape-burn Δv from a 185 km parking orbit (vis-viva + escape velocity) through the rocket equation of the upper stage, calibrated to one sourced data point per vehicle (Atlas V 411 = the real OSIRIS-REx launch: 2,105 kg at C3 29.3).
- Propellant chemistry: liquid (monoprop hydrazine, MMH/NTO biprop), solid (cannot restart → cannot do the 3 burns a sample return needs), hybrid (limited restarts). Launch vehicles show their stage chemistry (RP-1/LOX, LH2/LOX, HTPB/AP/Al solid booster).

All numbers live in JSON files in `public/data/` (not in code). Each value is tagged `verified`, `derived`, `estimate` or `game_defined`.

## Game-defined values (not from a source)

From `public/data/game_config.json` and `public/data/parts.json`:
- Small/medium/large solar array power and mass; low-gain antenna rate (10% of HGA); shielding masses (0/15/30/50 kg); CME severity by speed.
- TAGSAM mass (40 kg) and power (20 W) — no source found; OCAMS mass/power (1.8 kg, 15.9 W) is an unconfirmed secondary-source estimate.
- Bus housekeeping power (800 W), bus cost ($490M, tuned so the real design costs ≈ $800M), instrument costs, antenna/solar/shield costs, data volumes per instrument, 10 h/day downlink.
- Alternative propulsion Isp (biprop 315 s, solid 290 s, hybrid 250 s), burn limits, extra masses/costs; tank limit 1,400 kg.
- Δv for proximity operations (0.10 km/s) and Bennu departure (0.27 km/s); proximity (880 d) and return (870 d) durations.
- Space-weather failure probability (18% per severity level above shielding), safe-mode factor (×0.25), safe-mode delay (45 days, $0.25M/day).
- Sampling success (68% base, +12% OCAMS, +10% OLA), sample mass range (60–260 g), score values.
- Bus mass (622 kg) is derived so the real configuration reproduces OSIRIS-REx's 880 kg dry mass.

## Tech

HTML/CSS/JavaScript, [three.js](https://threejs.org) (all 3D models are procedural — no external assets), Vite, WebAudio (synthesised sound), Web Speech API (countdown voice). Static site on GitHub Pages; works offline after load; no API keys (NASA data pre-fetched to JSON).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

## AI use

This project was built with substantial AI assistance (Claude by Anthropic): code (game logic, UI, three.js scenes and procedural 3D models), data organisation of the JSON files, and text. Files carry an "AI-assisted" note in their header comment. The game design brief and team decisions are by the Miku☆Miku☆Beam team.

## Data sources

### NASA data
- [NASA CCMC DONKI](https://ccmc.gsfc.nasa.gov/DONKI/): solar flares, CMEs and geomagnetic storms (events.json)
- [JPL Small-Body Mission Design API](https://ssd-api.jpl.nasa.gov/doc/mdesign.html): Bennu launch options (mission_options.json) — [query used](https://ssd-api.jpl.nasa.gov/mdesign.api?sstr=101955)
- [NASA Science: OSIRIS-REx](https://science.nasa.gov/mission/osiris-rex/): mission dates (real_mission.json)
- [NASA Science: OSIRIS-REx In Depth](https://science.nasa.gov/mission/osiris-rex/in-depth): sample goal and instruments (real_mission.json)
- [NASA OSIRIS-REx Press Kit](https://www.nasa.gov/wp-content/uploads/2016/06/osiris-rex_press_kit_0.pdf): sample return capsule mass, TAGSAM arm length (parts.json)
- [NASA DART launch contract](https://www.nasa.gov/press-release/nasa-awards-launch-services-contract-for-asteroid-redirect-test-mission): Falcon 9 cost (launch_vehicles.json)
- [NASA Psyche launch contract](https://www.nasa.gov/news-release/nasa-awards-launch-services-contract-for-the-psyche-mission): Falcon Heavy cost (launch_vehicles.json)

### Other sources
- [OLA instrument paper](https://sbnarchive.psi.edu/pds4/orex/orex.ola_v4.0/document/ola_inst_paper.pdf): OLA mass and power (parts.json)
- [OVIRS instrument paper](https://arxiv.org/pdf/1703.10574): OVIRS mass and power (parts.json)
- [OTES instrument paper](https://arxiv.org/pdf/1704.02390): OTES mass and power (parts.json)
- [REXIS instrument paper](https://arxiv.org/pdf/1309.6665): REXIS mass and power (parts.json)
- [OSIRIS-REx mission paper](https://arxiv.org/pdf/1702.06981): launch mass and C3 (launch_vehicles.json, real_mission.json)
- [eoPortal: OSIRIS-REx](https://www.eoportal.org/satellite-missions/osiris-rex): high gain antenna data rate (parts.json)
- [MR-107S thruster spec sheet](https://www.l3harris.com/sites/default/files/2023-07/AJRD-LHX_Monopropellant_Rocket_Engines_SpecSheet_CMYK_061423_APPROVED.pdf): Isp (parts.json)
- [ULA Atlas V](https://www.ulalaunch.com/rockets/atlas-v): RL10 / Atlas V 411 data (game_config.json)
- [Spaceflight101 — NASA LSP Falcon performance data](https://spaceflight101.com/members/?p=343): Falcon 9 / Heavy C3 4.3 capacity points (game_config.json, estimate)
- [Wikipedia: OSIRIS-REx](https://en.wikipedia.org/wiki/OSIRIS-REx): masses, power, cost (real_mission.json, launch_vehicles.json)
- [Wikipedia: 101955 Bennu](https://en.wikipedia.org/wiki/101955_Bennu): Bennu orbit (real_mission.json)

Data organisation: Claude (AI) assisted.
