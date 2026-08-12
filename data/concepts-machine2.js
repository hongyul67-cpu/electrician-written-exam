// 전기기능사 - 그림으로 보는 개념 (전기기기 · 추가분)
window.CONCEPTS = window.CONCEPTS || [];
window.CONCEPTS.push(

{s:"전기기기", t:"직류발전기의 종류", crit:"직류기",
 f:"타여자 / 자여자(분권 · 직권 · 복권)",
 pts:["타여자: 계자를 별도 전원으로 여자 → 전압 조정이 쉽다",
      "분권: 계자와 전기자가 병렬 / 직권: 직렬 → 계자에 부하전류가 그대로 흐름",
      "복권: 분권+직권 둘 다 (가동복권·차동복권)"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <g font-size="12.5" fill="#334155">
    <text x="20" y="24" font-size="13.5" font-weight="700" fill="#1e293b">타여자</text>
    <circle cx="70" cy="70" r="22" fill="#fff" stroke="#1e293b" stroke-width="3"/>
    <text x="70" y="76" font-size="13" font-weight="700" text-anchor="middle">A</text>
    <path d="M48 70 H24 V110 H116 V70 H92" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    <g stroke="#d97706" stroke-width="3.5" fill="none">
      <path d="M40 130 a10 9 0 0 1 20 0"/><path d="M60 130 a10 9 0 0 1 20 0"/><path d="M80 130 a10 9 0 0 1 20 0"/>
    </g>
    <path d="M20 130 H40 M100 130 H124" stroke="#1e293b" stroke-width="2.5" fill="none"/>
    <text x="70" y="158" text-anchor="middle">계자 (별도 전원)</text>
  </g>
  <g font-size="12.5" fill="#334155">
    <text x="170" y="24" font-size="13.5" font-weight="700" fill="#1e293b">분권 (병렬)</text>
    <circle cx="220" cy="70" r="22" fill="#fff" stroke="#1e293b" stroke-width="3"/>
    <text x="220" y="76" font-size="13" font-weight="700" text-anchor="middle">A</text>
    <path d="M198 70 H174 V140 M242 70 H266 V140" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    <g stroke="#d97706" stroke-width="3.5" fill="none">
      <path d="M194 112 a10 9 0 0 1 20 0"/><path d="M214 112 a10 9 0 0 1 20 0"/><path d="M234 112 a10 9 0 0 1 20 0"/>
    </g>
    <path d="M174 112 H194 M254 112 H266" stroke="#1e293b" stroke-width="2.5" fill="none"/>
    <text x="220" y="162" text-anchor="middle">계자가 전기자와 병렬</text>
  </g>
  <g font-size="12.5" fill="#334155">
    <text x="330" y="24" font-size="13.5" font-weight="700" fill="#1e293b">직권 (직렬)</text>
    <circle cx="360" cy="70" r="22" fill="#fff" stroke="#1e293b" stroke-width="3"/>
    <text x="360" y="76" font-size="13" font-weight="700" text-anchor="middle">A</text>
    <path d="M338 70 H316 V140 H416 V70" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    <g stroke="#d97706" stroke-width="3.5" fill="none">
      <path d="M382 70 a10 9 0 0 1 0 18"/><path d="M382 88 a10 9 0 0 1 0 18"/>
    </g>
    <path d="M382 106 V70" stroke="none" fill="none"/>
    <path d="M382 106 V120 H416 V70" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    <text x="366" y="162" text-anchor="middle">계자가 전기자와 직렬</text>
  </g>
  <text x="220" y="204" font-size="13" text-anchor="middle" fill="#166534">복권 = 분권 + 직권 (가동복권 / 차동복권)</text>
 </svg>`},

{s:"전기기기", t:"전기자 반작용", crit:"직류기",
 f:"방지책: 보극 설치 · 보상권선 설치 · 브러시를 중성축으로 이동",
 pts:["전기자 전류가 만드는 자속이 주 자속을 일그러뜨리는 현상",
      "중성축이 이동해 브러시에서 불꽃(섬락)이 생기고 전압이 떨어진다",
      "보극과 보상권선을 달아서 막는다 (보상권선이 가장 효과적)"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="24" font-size="13" font-weight="700" fill="#64748b">정상 (주 자속만)</text>
  <circle cx="110" cy="110" r="62" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
  <path d="M48 110 H172" stroke="#2563eb" stroke-width="3" fill="none"/>
  <path d="M110 48 V172" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7 5" fill="none"/>
  <text x="110" y="42" font-size="12" text-anchor="middle" fill="#dc2626">중성축</text>
  <text x="30" y="106" font-size="12" fill="#2563eb">N</text>
  <text x="176" y="106" font-size="12" fill="#2563eb">S</text>
  <text x="250" y="24" font-size="13" font-weight="700" fill="#dc2626">전기자 반작용 발생</text>
  <circle cx="330" cy="110" r="62" fill="#fef2f2" stroke="#dc2626" stroke-width="3"/>
  <path d="M268 110 H392" stroke="#2563eb" stroke-width="3" fill="none"/>
  <path d="M356 52 L304 168" stroke="#dc2626" stroke-width="3" fill="none"/>
  <text x="372" y="46" font-size="12" text-anchor="middle" fill="#dc2626">중성축 이동!</text>
  <path d="M330 74 a36 36 0 0 1 24 12" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <path d="M348 80 L364 90 L344 96 z" fill="#d97706"/>
  <text x="220" y="200" font-size="13" text-anchor="middle" fill="#166534">막는 법: 보극 · 보상권선 · 브러시 이동</text>
 </svg>`},

{s:"전기기기", t:"변압기 3상 결선", crit:"변압기",
 f:"Δ-Y: 승압용 · Y-Δ: 강압용 · Δ-Δ: 1대 고장 시 V결선 가능 · Y-Y: 제3고조파 문제",
 pts:["Y결선은 중성점을 접지할 수 있어 이상전압에 유리",
      "Δ결선은 제3고조파가 순환해 파형이 좋아진다",
      "Y-Y 결선은 잘 쓰지 않는다 (제3고조파로 통신 유도장해)"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <g>
    <text x="70" y="26" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1e293b">Δ - Y (승압)</text>
    <path d="M70 46 L38 100 L102 100 Z" fill="none" stroke="#d97706" stroke-width="3.5"/>
    <path d="M70 130 V166 M70 148 L44 168 M70 148 L96 168" stroke="#0891b2" stroke-width="3.5" fill="none"/>
    <text x="70" y="196" font-size="12" text-anchor="middle" fill="#64748b">발전소 → 송전</text>
  </g>
  <g>
    <text x="220" y="26" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1e293b">Y - Δ (강압)</text>
    <path d="M220 46 V82 M220 64 L194 84 M220 64 L246 84" stroke="#0891b2" stroke-width="3.5" fill="none"/>
    <path d="M220 112 L188 166 L252 166 Z" fill="none" stroke="#d97706" stroke-width="3.5"/>
    <text x="220" y="196" font-size="12" text-anchor="middle" fill="#64748b">수전 → 배전</text>
  </g>
  <g>
    <text x="366" y="26" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1e293b">Δ - Δ</text>
    <path d="M366 46 L334 100 L398 100 Z" fill="none" stroke="#d97706" stroke-width="3.5"/>
    <path d="M366 112 L334 166 L398 166 Z" fill="none" stroke="#d97706" stroke-width="3.5"/>
    <text x="366" y="196" font-size="12" text-anchor="middle" fill="#166534">1대 고장 → V결선</text>
  </g>
  <path d="M148 40 V190 M292 40 V190" stroke="#e2e8f0" stroke-width="2" fill="none"/>
 </svg>`},

{s:"전기기기", t:"변압기 손실과 효율", crit:"변압기",
 f:"최대효율 조건: 철손 = 동손 · 효율 η = 출력/(출력+철손+동손)",
 pts:["철손(무부하손) = 히스테리시스손 + 와류손 → 부하와 관계없이 일정",
      "동손(부하손) = 권선 저항에 의한 손실 → 부하전류의 제곱에 비례",
      "무부하시험으로 철손, 단락시험으로 동손을 측정한다"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <path d="M50 170 H400" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M60 180 V30" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M60 120 H400" stroke="#2563eb" stroke-width="3" fill="none"/>
  <text x="330" y="112" font-size="12.5" font-weight="700" fill="#2563eb">철손 (일정)</text>
  <path d="M60 170 C160 168 250 130 340 44" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="300" y="70" font-size="12.5" font-weight="700" fill="#dc2626">동손 (전류²에 비례)</text>
  <circle cx="243" cy="120" r="6" fill="#16a34a"/>
  <path d="M243 120 V170" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4 3" fill="none"/>
  <text x="243" y="192" font-size="12.5" font-weight="700" text-anchor="middle" fill="#166534">철손 = 동손 → 최대효율</text>
  <text x="24" y="40" font-size="12" fill="#64748b">손실</text>
  <text x="380" y="192" font-size="12" fill="#64748b">부하 →</text>
 </svg>`},

{s:"전기기기", t:"3상 유도전동기 기동법", crit:"유도전동기",
 f:"Y-Δ 기동: 기동전류 1/3, 기동토크 1/3 (5~15kW급)",
 pts:["전전압(직입) 기동: 5kW 이하 소형에 사용 (기동전류가 큼)",
      "Y-Δ 기동: 처음엔 Y로 걸어 전류를 1/3로 낮추고, 속도가 오르면 Δ로 전환",
      "기동보상기(단권변압기): 15kW 초과 대형에 사용"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="24" font-size="13.5" font-weight="700" fill="#0891b2">기동 시 : Y 결선</text>
  <g transform="translate(30,36)">
    <path d="M60 10 V56 M60 34 L26 62 M60 34 L94 62" stroke="#0891b2" stroke-width="4" fill="none"/>
    <circle cx="60" cy="34" r="6" fill="#0891b2"/>
    <text x="60" y="90" font-size="12.5" text-anchor="middle" fill="#155e75">전압 1/√3 → 전류 1/3</text>
  </g>
  <path d="M200 76 H250" stroke="#334155" stroke-width="3" fill="none"/>
  <path d="M250 68 L266 76 L250 84 z" fill="#334155"/>
  <text x="232" y="60" font-size="12" text-anchor="middle" fill="#64748b">가속 후 전환</text>
  <text x="290" y="24" font-size="13.5" font-weight="700" fill="#d97706">운전 시 : Δ 결선</text>
  <g transform="translate(290,36)">
    <path d="M60 10 L26 66 L94 66 Z" fill="none" stroke="#d97706" stroke-width="4"/>
    <text x="60" y="90" font-size="12.5" text-anchor="middle" fill="#92400e">정격 전압으로 운전</text>
  </g>
  <rect x="30" y="146" width="380" height="56" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="46" y="168" font-size="12.5" font-weight="700" fill="#92400e">용량별 기동법</text>
  <text x="46" y="190" font-size="12.5" fill="#78350f">5kW 이하 전전압 · 5~15kW Y-Δ · 15kW 초과 기동보상기</text>
 </svg>`},

{s:"전기기기", t:"동기발전기 병렬운전 조건", crit:"동기기",
 f:"기전력의 크기 · 위상 · 주파수 · 파형이 같을 것 (용량·전류·임피던스는 달라도 됨)",
 pts:["4가지 조건: 크기, 위상, 주파수, 파형 (+3상은 상회전 방향도 같아야)",
      "용량·정격전류·임피던스가 같을 필요는 없다 → 시험 함정!",
      "위상이 다르면 무효 순환전류(동기화 전류)가 흘러 과열된다"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <circle cx="70" cy="70" r="26" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="70" y="77" font-size="14" font-weight="700" text-anchor="middle">G1</text>
  <circle cx="70" cy="160" r="26" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="70" y="167" font-size="14" font-weight="700" text-anchor="middle">G2</text>
  <path d="M96 70 H170 V160 H96" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M170 115 H210" stroke="#1e293b" stroke-width="3" fill="none"/>
  <text x="196" y="106" font-size="12" fill="#64748b">부하</text>
  <rect x="234" y="34" width="186" height="162" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="2.5"/>
  <text x="327" y="58" font-size="13.5" font-weight="700" text-anchor="middle" fill="#166534">같아야 하는 4가지</text>
  <text x="252" y="84" font-size="13" fill="#14532d">① 기전력의 크기</text>
  <text x="252" y="108" font-size="13" fill="#14532d">② 기전력의 위상</text>
  <text x="252" y="132" font-size="13" fill="#14532d">③ 기전력의 주파수</text>
  <text x="252" y="156" font-size="13" fill="#14532d">④ 기전력의 파형</text>
  <text x="252" y="182" font-size="12" font-weight="700" fill="#dc2626">✗ 용량·전류·임피던스</text>
 </svg>`},

{s:"전기기기", t:"동기전동기 위상특성 (V곡선)", crit:"동기기",
 f:"부족여자 → 지상(뒤진) 전류 · 과여자 → 진상(앞선) 전류",
 pts:["계자전류를 바꾸면 전기자전류가 V자 모양으로 변한다",
      "과여자로 운전하면 앞선 전류가 흘러 역률을 개선한다 → 동기조상기",
      "동기전동기는 속도가 일정하고 역률 조정이 가능한 것이 장점"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <path d="M60 170 H400" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M70 180 V30" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M80 50 C130 130 160 150 190 152 C220 150 260 120 320 50" fill="none" stroke="#d97706" stroke-width="3"/>
  <path d="M96 60 C140 130 168 148 190 150 C215 148 250 122 300 60" fill="none" stroke="#0891b2" stroke-width="2.5" stroke-dasharray="6 4"/>
  <circle cx="190" cy="152" r="5" fill="#16a34a"/>
  <text x="190" y="188" font-size="12" text-anchor="middle" fill="#166534">역률 1</text>
  <text x="88" y="40" font-size="12.5" font-weight="700" fill="#2563eb">부족여자</text>
  <text x="88" y="196" font-size="11.5" fill="#2563eb">지상(뒤짐)</text>
  <text x="300" y="40" font-size="12.5" font-weight="700" fill="#dc2626">과여자</text>
  <text x="296" y="196" font-size="11.5" fill="#dc2626">진상(앞섬)</text>
  <text x="20" y="42" font-size="12" fill="#64748b">전기자</text>
  <text x="20" y="58" font-size="12" fill="#64748b">전류</text>
  <text x="360" y="192" font-size="12" fill="#64748b">계자전류 →</text>
 </svg>`},

{s:"전기기기", t:"계기용변성기 CT · PT · ZCT", crit:"보호계전기",
 f:"CT: 2차 개방 금지! · PT: 2차 단락 금지! · ZCT: 지락(영상)전류 검출",
 pts:["CT(변류기): 큰 전류를 5A로 낮춰 계기·계전기에 보냄 → 2차를 열면 고전압 위험",
      "PT(계기용변압기): 고전압을 110V로 낮춤 → 2차를 단락하면 소손",
      "ZCT(영상변류기): 지락사고 시 영상전류를 검출해 지락계전기에 공급"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <path d="M20 60 H420" stroke="#1e293b" stroke-width="4" fill="none"/>
  <text x="20" y="44" font-size="12" fill="#64748b">고압 선로</text>
  <ellipse cx="110" cy="60" rx="26" ry="18" fill="none" stroke="#d97706" stroke-width="3"/>
  <text x="110" y="100" font-size="13" font-weight="700" text-anchor="middle" fill="#d97706">CT</text>
  <text x="110" y="120" font-size="11.5" text-anchor="middle" fill="#92400e">전류 → 5A</text>
  <circle cx="110" cy="152" r="17" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <text x="110" y="158" font-size="13" font-weight="700" text-anchor="middle">A</text>
  <path d="M110 78 V135" stroke="#1e293b" stroke-width="2" fill="none"/>
  <g stroke="#0891b2" stroke-width="3.5" fill="none">
    <path d="M240 68 a11 10 0 0 0 0 20"/><path d="M240 88 a11 10 0 0 0 0 20"/>
  </g>
  <path d="M240 60 V68" stroke="#1e293b" stroke-width="2.5" fill="none"/>
  <text x="266" y="88" font-size="13" font-weight="700" fill="#0891b2">PT</text>
  <text x="266" y="108" font-size="11.5" fill="#155e75">전압 → 110V</text>
  <circle cx="240" cy="152" r="17" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <text x="240" y="158" font-size="13" font-weight="700" text-anchor="middle">V</text>
  <path d="M240 108 V135" stroke="#1e293b" stroke-width="2" fill="none"/>
  <ellipse cx="360" cy="60" rx="30" ry="20" fill="none" stroke="#16a34a" stroke-width="3"/>
  <text x="360" y="100" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">ZCT</text>
  <text x="360" y="120" font-size="11.5" text-anchor="middle" fill="#166534">지락전류 검출</text>
  <rect x="336" y="136" width="48" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
  <text x="360" y="156" font-size="12" font-weight="700" text-anchor="middle" fill="#166534">GR</text>
  <path d="M360 80 V136" stroke="#1e293b" stroke-width="2" fill="none"/>
  <text x="220" y="204" font-size="13" text-anchor="middle" fill="#dc2626">CT는 2차 개방 금지 · PT는 2차 단락 금지</text>
 </svg>`},

{s:"전기기기", t:"보호계전기의 종류", crit:"보호계전기",
 f:"OCR 과전류 · OVR 과전압 · UVR 부족전압 · GR 지락 · DFR 차동 · 부흐홀츠(변압기 내부고장)",
 pts:["과전류계전기(OCR): 정해진 값보다 큰 전류가 흐르면 차단",
      "차동·비율차동계전기: 발전기·변압기 내부고장 보호에 사용",
      "부흐홀츠 계전기: 변압기 본체와 콘서베이터 사이에 설치 (가스 검출)"],
 svg:`<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="240" fill="#fff"/>
  <g font-size="12.5">
    <rect x="20" y="30" width="196" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <text x="34" y="48" font-weight="700" fill="#dc2626">OCR</text>
    <text x="34" y="64" fill="#7f1d1d">과전류 계전기</text>
    <rect x="224" y="30" width="196" height="40" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
    <text x="238" y="48" font-weight="700" fill="#c2410c">OVR / UVR</text>
    <text x="238" y="64" fill="#7c2d12">과전압 / 부족전압</text>
    <rect x="20" y="80" width="196" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="34" y="98" font-weight="700" fill="#166534">GR</text>
    <text x="34" y="114" fill="#14532d">지락 계전기 (ZCT와 함께)</text>
    <rect x="224" y="80" width="196" height="40" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="238" y="98" font-weight="700" fill="#1d4ed8">DFR (비율차동)</text>
    <text x="238" y="114" fill="#1e3a8a">발전기·변압기 내부고장</text>
    <rect x="20" y="130" width="400" height="40" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
    <text x="34" y="148" font-weight="700" fill="#334155">부흐홀츠 계전기</text>
    <text x="34" y="164" fill="#475569">변압기 본체 ↔ 콘서베이터 사이 배관에 설치 · 내부고장 가스 검출</text>
  </g>
  <rect x="20" y="182" width="400" height="44" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="34" y="202" font-size="12.5" font-weight="700" fill="#92400e">용량이 작은 변압기의 단락보호</text>
  <text x="34" y="220" font-size="12.5" fill="#78350f">→ 과전류계전방식 (큰 변압기는 비율차동계전방식)</text>
 </svg>`}
);
