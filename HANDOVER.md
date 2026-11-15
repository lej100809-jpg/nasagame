# 인수인계 보고서 — Miku☆Miku☆Beam (NASA Space Apps 2026)

작성: Claude (2026-11-15 21:05 KST 기준). 다음 작업자(사람 또는 다른 AI)가 이 문서만 보고 바로 이어서 작업할 수 있게 처음부터 끝까지 적음.

## 0. 한눈에 보기

- 게임: 베누 샘플 귀환 임무 설계 게임. 1인칭으로 NASA 발사 캠퍼스(케이프커내버럴 SLC-41, 해 질 녘)를 돌아다니며 콘솔에서 임무를 설계하고, 발사 후 실제 NASA DONKI 우주 날씨 이벤트를 겪고, 실제 OSIRIS-REx와 비교하는 리포트로 끝남
- 배포 주소: https://lej100809-jpg.github.io/nasagame/ (GitHub Pages, `gh-pages` 브랜치, 로그인·설치 없음)
- 레포: https://github.com/lej100809-jpg/nasagame (`main` = 소스, `gh-pages` = 빌드 결과물만)
- 기술: Vite + three.js 0.170 (모든 3D는 코드로 만든 절차적 모델, 외부 에셋 없음), 순수 JS, WebAudio 효과음, Web Speech API 음성
- 언어: 영어/한국어 (상단 `한`/`EN` 버튼, localStorage `mmb-lang`)
- 원본 자료: 사용자 PC `C:\Users\lej10\OneDrive\Desktop\개발 프로젝트\NASA 게임 제작` 의 기획서 PDF 2개 + 구글 드라이브 `game_data.zip`(JSON 6개 → `public/data/`에 넣음)

## 1. 실행·빌드·배포

```bash
npm install
npm run dev            # http://localhost:5173  (?render=cheap 저사양, ?mode=menu 메뉴모드, ?screen=build|launch|ops 바로가기, ?seed=7 이벤트 고정)
npm run build          # dist/ 생성 (vite base './' 라 하위 경로에서도 동작)
```

배포(현재 방식): `dist/` 내용 + 빈 `.nojekyll` 파일을 `gh-pages` 브랜치에 강제 푸시. 레포 Settings → Pages 가 이미 `gh-pages / (root)`로 켜져 있음. 스크립트 예시는 아래.

```bash
npm run build
rm -rf /tmp/ghp && mkdir /tmp/ghp && cp -r dist/. /tmp/ghp/ && touch /tmp/ghp/.nojekyll
cd /tmp/ghp && git init -b gh-pages && git add -A && git commit -m deploy
git remote add origin https://github.com/lej100809-jpg/nasagame && git push -f origin gh-pages
```

## 2. 폴더 구조

```
index.html                  화면 골격(상단바, 9요소 칩, 패널, 물리 콘솔, 시네마틱, 모달, 1인칭 HUD, 시작 카드)
public/data/*.json          모든 게임 숫자 (코드에 숫자 하드코딩 금지 원칙)
  parts.json, launch_vehicles.json, mission_options.json, events.json, real_mission.json  ← 팀 원본 데이터
  game_config.json          ← Claude가 추가: 상수, 예산, 발사체 성능 모델, 게임용 값(확률·점수·비용), 추진제 4종
src/main.js                 게임 컨트롤러 (화면 흐름, 1인칭 캠퍼스 연결, 운영 단계 진행, 리포트)
src/game/physics.js         실제 수식 (로켓 방정식, 활력 방정식, 탈출 속도, 발사체 탑재량 모델, 태양광, 통신 지연)
src/game/model.js           설계 → 질량/전력/데이터/비용/Δv 계산 (compute), 기본 설계, 실제 OSIRIS-REx 설계
src/game/mission.js         운영 시뮬레이션 (이벤트 선택·판정, 연소, 근접 관측, TAG, 귀환, 점수). 문장은 {en, ko}
src/game/orbits.js          지구·베누 위치(케플러), 전이 궤도 근사 (텔레메트리 숫자용)
src/game/data.js            JSON 로딩 + 인덱스 생성
src/game/fpcontrols.js      1인칭 이동 (포인터락, 관성, 달리기 FOV, 앉기, 점프, 착지, 기울기, 발소리 이벤트, 충돌, E 상호작용)
src/ui/i18n.js              T('영어','한국어') 헬퍼, 장비·목표 이름
src/ui/style.css            전체 스타일 (아래쪽 "v2 compact components"가 최신 UI)
src/ui/charts.js            발사창 산점도, 발사체 탑재량 곡선 (canvas)
src/ui/audio.js             합성 효과음 (발소리, 경보, 발사 굉음 등)
src/scenes/CampusScene.js   1인칭 캠퍼스 (관제센터, 클린룸, 로켓가든 안내판, 발사대)
src/scenes/LaunchScene.js   발사 기지 + 발사 시네마틱 (Atlas V→SLC-41, Falcon→LC-39A)
src/scenes/SpaceScene.js    우주 장면 모드: briefing, build, cruise, proximity(TAG 연출), reentry
src/models/*.js             rockets, launchsites, spacecraft(OSIRIS-REx), bennu, solarsystem, textures, fpRig(1인칭 손+태블릿)
dev/*.html                  각 3D 모듈 단독 테스트 페이지
```

## 3. 게임 흐름 (main.js)

- 시작: 캠퍼스 로드 성공 시 `MODE='explore'` + 시작 카드. 터치 기기/`?mode=menu`/로드 실패 시 `MODE='menu'`(걷지 않는 기존 5화면 방식)
- 1인칭 스테이션 → 화면 매핑: `briefing`(홀로테이블) → briefing 화면, `flight_dynamics` → launch 화면, `assembly` → build 화면, `launch_control` → GO/NO-GO 모달 후 ops, `board_*`/`pad` → 안내판 모달(내 설계 숫자 대입)
- 스테이션 화면은 `MODE='terminal'`로 패널을 띄우고, "캠퍼스로"/Esc → `returnToCampus()`
- 목표 순서: briefing → flight_dynamics → assembly → launch_control (`visited` 객체). 웨이포인트는 `campus.setObjective(id)`
- 운영(showOps): 발사 시네마틱 → 순항(9초 애니메이션 + 이벤트 모달) → 도착 감속 → 근접 관측 → TAG 시네마틱(실패 시 재시도) → 귀환 순항 → 재진입 → 리포트
- 디버그 훅: `window.__mmb.openStation(id)`, `fastTravel(id)`, `enter()`, `state()`

## 4. 계산 규칙 요약

- 건조 질량 = 버스 622 kg + 장비 + 태양전지 + 안테나 + 차폐 + 추진 하드웨어. 실제 구성이면 880 kg (OSIRIS-REx와 일치하도록 버스 질량을 역산)
- 필요 Δv = 도착 감속(mission_options) + 근접 운용 0.10 + 귀환 출발 0.27 km/s. 추진제 자동 계산 = 건조질량 × (e^(Δv/u) − 1) × 여유 3%
- 발사체 탑재량(C3): 185 km 주차궤도 원궤도 속도(활력, a=r) → 탈출 속도²+C3 의 루트(활력, a=−μ/C3) 차이를 상단 로켓 방정식에 넣고, 발사체별 실측점 1개로 잔여 추진제를 보정 (Atlas V 411: C3 29.3에서 2,105 kg, 실제 OSIRIS-REx)
- 전력: 부하(버스 800 W + 장비 + 안테나) vs 태양전지 출력/r² (원일점 1.3559 AU). 모자라면 관측 시간 감소
- 통신: 하루 전송량(HGA 412 kbit/s × 10 h) vs 장비 데이터량. 모자라면 데이터 손실
- 우주 날씨: 이벤트 3~5개(지자기 폭풍은 발사·재진입에만). 실패 확률 = (위험도 − 차폐) × 18%, 안전 모드는 ×0.25 + 45일 지연
- 판정: 고체 모터는 1회 점화라 두 번째 연소에서 실패. 감속 Δv 부족하면 베누를 지나침. TAG 성공률 68% + OCAMS 12% + OLA 10%
- 점수: 주 목표 1000, 부 목표 성공 +250/실패 −100, 초과 샘플 g당 +2, 남은 예산 $1M당 +3(최대 300)

## 5. 현재 상태 (21:05)

완료
- 5단계 전체 루프가 처음부터 끝까지 동작 (헤드리스 자동 플레이로 확인, 실제 설계 시드 7에서 성공 2,116점)
- 1인칭 캠퍼스 + 손/태블릿 리그 + 상호작용 + 빠른 이동 + 안내판 + 대형 스크린 상태판
- 영어/한국어 전환, 그래픽 품질 전환(HQ/LQ), 음성 카운트다운
- README(제출용, 데이터 출처·게임용 값·AI 사용 표시 포함), GitHub Pages 배포

진행 중이었던 것
- 캠퍼스 비주얼 고도화(조명, 디테일) — CampusScene.js 쪽
- UI 텍스트 다이어트 2차 점검, 한국어 문구 다듬기

남은 할 일 (우선순위 순)
1. 배포본을 시크릿 창에서 열어 첫 화면·클릭 진입·이동·E키 상호작용 확인 (포인터락은 실제 브라우저에서만 확인 가능)
2. 1인칭에서 터미널 열고 닫을 때 포인터락 재진입 확인 (Esc 직후 브라우저가 1초 정도 재잠금을 막음 → 시작 카드 "계속하기"로 복구되게 해둠)
3. 성능: 저사양 노트북에서 LQ 모드 프레임 확인
4. 제출용 화면 캡처 4장 (캠퍼스, 클린룸 조립, 발사, 리포트)
5. 시간 남으면: 설계 공유 링크, 업적, 리포트 비교 그래프

## 6. 알려진 주의점

- 3D 품질 확인은 헤드리스(SwiftShader)라 실제 GPU보다 어둡고 느리게 보임. 실제 브라우저로 꼭 확인
- `launchScene.startLaunch()` 끝나면 화면이 검게 페이드된 상태로 남음 → 다시 보여줄 때 `reset()` 필수 (main.js에서 처리함)
- `rockets.js`의 머티리얼은 캐시 공유라 dispose 하면 안 됨
- 캠퍼스 카메라는 `scene.add(camera)` 되어 있어야 손/태블릿이 보임, `camera.near = 0.05`
- Falcon 9/Heavy 탑재량은 NASA LSP 수치를 2차 출처(Spaceflight101)로 가져온 추정치 → README와 game_config.json에 estimate로 표시
- OCAMS·TAGSAM 질량은 출처를 못 찾음 → 추정/게임용 값 (배지 색으로 구분: 초록=출처, 주황=추정, 보라=게임용)

## 7. 기획서 원칙 체크

- 9요소 화면 표시: 상단 칩 9개 + 각 스테이션 ✔
- 선택 → 결과 + 이유: 리포트 "원인" 목록 ✔
- 숫자는 JSON + 출처 ✔ / 링크 하나로 실행 ✔ / 영어 UI(+한국어) ✔ / API 키 없음 ✔ / AI 사용 표시 ✔(README·파일 머리 주석)
