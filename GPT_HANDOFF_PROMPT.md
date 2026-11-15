# GPT(다른 AI)에게 그대로 붙여넣을 인수인계 프롬프트

아래 박스 안 내용을 통째로 복사해서 새 대화 첫 메시지로 붙여넣으면 됨. 작업 폴더는 GitHub 레포를 받은 폴더(또는 PC의 `NASA 게임 제작\cosmo-craft-source`)로 지정함.

---

```
너는 시니어 웹 게임 개발자야. 이미 거의 완성된 웹 게임 "COSMO CRAFT — Design Your Own Asteroid Mission"
(NASA Space Apps Challenge 2026, 팀 Miku☆Miku☆Beam)을 이어서 완성·다듬어야 해.

[작업 폴더 / 저장소]
- GitHub: https://github.com/lej100809-jpg/nasagame  (main = 소스, gh-pages = 빌드 결과물)
- 배포 주소: https://lej100809-jpg.github.io/nasagame/
- 로컬 사본: C:\Users\lej10\OneDrive\Desktop\개발 프로젝트\NASA 게임 제작\cosmo-craft-source (zip 해제)
- 먼저 레포 루트의 HANDOVER.md 와 README.md 를 끝까지 읽고 시작해. 구조·계산 규칙·주의점이 다 있어.

[실행]
npm install → npm run dev (http://localhost:5173)
테스트용 URL 파라미터: ?mode=menu(걷기 없는 메뉴 모드) ?screen=build|launch|ops ?seed=7 ?lang=ko|en ?render=cheap ?nointro=1
디버그 훅: window.__mmb.openStation('briefing'|'flight_dynamics'|'assembly'|'launch_control'|'board_tsiolkovsky'|'pad'), fastTravel(id), intro(), radio(), state()

[게임 요약]
1인칭으로 케이프커내버럴 발사 캠퍼스(해 질 녘)를 걸어다니며 콘솔을 사용해 베누 샘플 귀환 임무를 설계함.
홀로테이블(브리핑·목표) → FLIGHT DYNAMICS(JPL 실제 발사창 48개 중 선택 + 발사체) → 클린룸(우주선 조립: 장비·태양전지·안테나·차폐·추진제 화학·추진제 양, 실시간 게이지)
→ LAUNCH DIRECTOR(GO/NO-GO 폴) → 운영(발사 시네마틱 → 순항 → 감속 → 근접 관측 → TAG 미니게임 → 귀환 → 재진입, 실제 NASA DONKI 우주 날씨 이벤트에 제한시간 안에 대응)
→ 리포트(원인 설명, 점수, 랭크·업적, 실제 OSIRIS-REx 비교표). 영/한 전환, HQ/LQ 그래픽, 메뉴 모드 지원.
필수 수식(사용자 요구, 절대 빼지 말 것): 치올콥스키 로켓 방정식, 활력 방정식, 탈출 속도, 추진제 분류(액체/고체/하이브리드).

[원칙 — 반드시 지킬 것]
- 게임 숫자는 public/data/*.json 에만 둠(코드 하드코딩 금지). 출처 상태(verified/derived/estimate/game_defined) 유지
- 화면 글자는 영어 기본 + 한국어 전환(src/ui/i18n.js 의 T('영어','한국어') 사용), 미션 문장은 {en, ko} 객체
- 링크 하나로 실행, 로그인·API 키 없음. AI 사용 표시(README, 파일 머리 주석) 유지
- 텍스트 최소화, 깔끔한 UI(다크 글래스 + 청록 #39c5bb + 핑크 #ff5fa2, Space Grotesk / JetBrains Mono / Syncopate)
- 수정 후 반드시 npm run build 통과 확인 + 브라우저로 직접 플레이해서 콘솔 에러 0 확인

[지금 해야 할 일 — 우선순위 순]
1. 실제 GPU 브라우저(크롬)에서 배포본 전체 플레이 검증: 시작 → 오프닝 시네마틱 → 1인칭 이동(WASD/Shift/C/Space/E/Tab/1~6) → 4개 스테이션 → 발사 → 운영 → 리포트 → 캠퍼스 복귀. 포인터락 재진입(Esc 직후) 문제 있으면 수정
2. 캠퍼스가 전체적으로 너무 밝게 빛난다는 피드백 있음 → src/main.js setStage()의 캠퍼스 블룸(strength 0.42, threshold 0.95, exposure 0.92)과 src/scenes/CampusScene.js 의 조명/emissive 세기 조정해서 대비 살리기
3. 오프닝 시네마틱(src/main.js playIntro): 로켓 홍보영상 같은 구성(매크로 디테일 하드컷 + 키네틱 타이포 + 카운트다운 + 화이트 플래시 + 로고 빌드). 실제 GPU에서 컷 타이밍·카메라 위치 다듬기(엔진 노즐/페어링/피뢰탑/클린룸 우주선/관제센터 화면 샷)
4. 스토리 안내(STORY 객체, 비행 관제관 강미나·비행 역학 레오 오르티스 무전): 목표마다 대사 보강, 실패/성공 후 대사, 스테이션 근처 접근 시 짧은 대사
5. 게임성 추가(가능한 만큼): (a) 도전 모드 3종(예산 축소 / 태양 극대기 이벤트 강화 / 고정 발사창) (b) 설계 공유 링크(상태를 URL 해시로 직렬화) (c) 캠퍼스 수집 카드(실제 NASA 미션 사실 6장) (d) 리포트에 '같은 설계로 다른 발사창이었다면?' 비교 (e) 업적 화면(타이틀에서 보기)
6. 성능: LQ 모드에서 저사양 노트북 40fps 이상 확인, 관제센터 드로우콜(약 390) 줄이기
7. 제출물: 화면 캡처 4장(캠퍼스, 클린룸 조립, 발사, 리포트), 30초 트레일러 영상(선택), README 최종 점검
8. 배포: npm run build 후 dist/ + .nojekyll 을 gh-pages 브랜치에 푸시 (HANDOVER.md 1장 참고)
```
