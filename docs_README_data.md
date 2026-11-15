# Miku☆Miku☆Beam 게임 데이터

게임에서 바로 불러 쓰는 데이터 파일 3개. 이 정리 작업과 파일은 AI(Claude)로 만들었음 (해커톤 AI 사용 표시).

## events.json (운영 단계 우주 날씨 이벤트)
- 출처: NASA CCMC DONKI, 2024-05-01 ~ 2024-06-29 (2024년 5월 대형 태양 폭풍 기간)
- 태양 플레어: M급 이상만. severity = NOAA 전파 두절 등급 R1~R5
- 지자기 폭풍: severity = NOAA G등급 (Kp 지수 기준). Kp는 지구에서 잰 값이라 지구 근처 단계(발사, 캡슐 귀환)에서만 쓰기 (phase = near_earth)
- 코로나 질량 방출(CME): 1000 km/s 이상만. severity는 속도 기준 게임용 값
- 고장 확률 같은 게임 효과는 게임용으로 정하고 README에 적기

## mission_options.json (발사 시기 선택)
- 출처: NASA/JPL Small-Body Mission Design API (베누). API가 예전 궤도 계산 기준이라고 경고함
- c3_km2_s2: 발사 에너지. 클수록 발사체가 실을 수 있는 질량이 줄어듦
- arrival_braking_dv_km_s: 베누 도착 때 줄여야 하는 속도. 로켓 방정식에 넣기 (베누 중력은 무시할 만큼 작음)
- comm_delay_at_arrival_min: 도착 때 지구까지 통신 지연(편도, 분)
- is_future: 2026-11-14 이후 발사면 true

## real_mission.json (결과 화면의 실제 임무 비교)
- 실제 OSIRIS-REx 값과 출처. Wikipedia 값은 가능하면 NASA 자료로 한 번 더 확인

## parts.json (우주선 조립 화면)
- 과학 장비 7개(OCAMS, OLA, OVIRS, OTES, REXIS, TAGSAM, 귀환 캡슐)의 질량과 전력, 출처
- status가 verified면 출처에서 확인한 값, needs_source면 아직 못 찾은 값(OCAMS, TAGSAM), game_defined면 게임용으로 정한 값
- 태양전지판, 안테나(저이득), 차폐는 게임용 값. 대신 실제 OSIRIS-REx 기준값을 note에 적어 둠
- 추진기 Isp 230초 (제조사 사양서 225~236초의 중간값)

## launch_vehicles.json (발사 화면)
- Atlas V 411: 실제로 OSIRIS-REx 2,105kg을 C3 29.3에 쏘아 올린 값과 비용
- Falcon 9, Falcon Heavy: NASA가 발표한 실제 발사 비용(DART, Psyche). 실을 수 있는 질량은 아직 못 채움
- 질량 더 채우려면 NASA 발사체 성능 사이트 https://elvperf.ksc.nasa.gov/ 의 Performance Query 사용

## 데이터 확인 결과
- 2026-11-14 이후 발사 옵션 48개 중 도착 감속이 1.97 km/s 이하인 건 9개뿐 (brakable_like_osiris_rex = true). 1.97 km/s는 OSIRIS-REx 실제 질량(발사 2,110kg, 건조 880kg)과 Isp 230초로 계산한 대략적인 최대 Δv
- 나머지 39개는 도착 속도가 너무 빨라서 비슷한 추진제로는 베누에서 멈출 수 없음. 게임에서 '감속 불가' 판정이 나오는 게 정상
- 감속 가능한 9개의 발사 에너지(C3)는 15~44 km²/s²로, 실제 OSIRIS-REx(29.3)도 이 범위 안에 있음
- 우주 날씨: X급 플레어 24개(가장 센 건 2024-05-14 X8.7), G5 지자기 폭풍 1개(2024-05-10)
