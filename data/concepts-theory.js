// 전기기능사 - 그림으로 보는 개념 (전기이론)
// 스키마: { s:과목, t:제목, crit:출제기준항목, f:핵심공식, pts:[설명], svg:그림 }
window.CONCEPTS = window.CONCEPTS || [];
window.CONCEPTS.push(

{s:"전기이론", t:"옴의 법칙", crit:"직류회로", f:"V = I × R,  I = V / R,  R = V / I",
 pts:["전압(V)이 높을수록 전류(I)가 많이 흐른다 → 비례",
      "저항(R)이 클수록 전류는 적게 흐른다 → 반비례",
      "물이 흐르는 것에 비유하면 V=수압, I=물의 양, R=파이프 좁은 정도"],
 svg:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="210" fill="#fff"/>
  <path d="M100 58 H310" stroke="#1e293b" stroke-width="3"/>
  <path d="M310 58 V80" stroke="#1e293b" stroke-width="3"/>
  <path d="M310 130 V152" stroke="#1e293b" stroke-width="3"/>
  <path d="M310 152 H100" stroke="#1e293b" stroke-width="3"/>
  <path d="M100 152 V131" stroke="#1e293b" stroke-width="3"/>
  <path d="M100 79 V58" stroke="#1e293b" stroke-width="3"/>
  <path d="M310 80 l-13 8 l26 10 l-26 10 l26 10 l-13 12" fill="none" stroke="#d97706" stroke-width="4"/>
  <text x="342" y="112" font-size="17" font-weight="700" fill="#d97706">R</text>
  <text x="342" y="132" font-size="12" fill="#92400e">저항</text>
  <circle cx="100" cy="105" r="26" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="100" y="112" font-size="19" font-weight="700" text-anchor="middle" fill="#1e293b">V</text>
  <text x="58" y="92" font-size="17" font-weight="700" fill="#dc2626">+</text>
  <text x="58" y="128" font-size="21" font-weight="700" fill="#2563eb">−</text>
  <text x="100" y="178" font-size="12" text-anchor="middle" fill="#64748b">전원(전압)</text>
  <path d="M172 36 H236" stroke="#0891b2" stroke-width="3.5"/>
  <path d="M236 29 L252 36 L236 43 z" fill="#0891b2"/>
  <text x="198" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#0891b2">I (전류)</text>
  <text x="210" y="188" font-size="14" text-anchor="middle" fill="#64748b">전압을 걸면 → 전류가 흐르고 → 저항이 막는다</text>
 </svg>`},

{s:"전기이론", t:"직렬 접속 · 병렬 접속", crit:"직류회로",
 f:"직렬 R = R₁+R₂ (전류 같음) · 병렬 1/R = 1/R₁+1/R₂ (전압 같음)",
 pts:["직렬: 한 줄로 연결 → 전류가 같고, 전압은 저항 크기에 비례해 나눠짐",
      "병렬: 갈라져 연결 → 전압이 같고, 전류는 저항에 반비례해 나눠짐",
      "합성저항은 직렬이 가장 크고, 병렬이 가장 작다"],
 svg:`<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="250" fill="#fff"/>
  <text x="20" y="26" font-size="15" font-weight="700" fill="#1e293b">직렬 접속</text>
  <path d="M40 60 H400 V110 H40 Z" fill="none" stroke="#1e293b" stroke-width="3"/>
  <circle cx="40" cy="85" r="18" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="40" y="91" font-size="14" font-weight="700" text-anchor="middle">V</text>
  <path d="M150 60 l-12 7 l24 9 l-24 9 l24 9 l-12 7" fill="none" stroke="#d97706" stroke-width="3.5"/>
  <text x="150" y="46" font-size="14" font-weight="700" text-anchor="middle" fill="#d97706">R₁</text>
  <path d="M290 60 l-12 7 l24 9 l-24 9 l24 9 l-12 7" fill="none" stroke="#d97706" stroke-width="3.5"/>
  <text x="290" y="46" font-size="14" font-weight="700" text-anchor="middle" fill="#d97706">R₂</text>
  <text x="220" y="128" font-size="13" text-anchor="middle" fill="#0891b2">전류 I 는 어디서나 같다</text>
  <text x="20" y="168" font-size="15" font-weight="700" fill="#1e293b">병렬 접속</text>
  <path d="M40 200 H400 V240 H40 Z" fill="none" stroke="#1e293b" stroke-width="3"/>
  <circle cx="40" cy="220" r="18" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="40" y="226" font-size="14" font-weight="700" text-anchor="middle">V</text>
  <path d="M170 200 V240" stroke="#1e293b" stroke-width="3"/>
  <path d="M300 200 V240" stroke="#1e293b" stroke-width="3"/>
  <path d="M170 208 l-8 5 l16 6 l-16 6 l16 6 l-8 5" fill="none" stroke="#d97706" stroke-width="3.5"/>
  <path d="M300 208 l-8 5 l16 6 l-16 6 l16 6 l-8 5" fill="none" stroke="#d97706" stroke-width="3.5"/>
  <text x="188" y="222" font-size="13" font-weight="700" fill="#d97706">R₁</text>
  <text x="318" y="222" font-size="13" font-weight="700" fill="#d97706">R₂</text>
  <text x="220" y="192" font-size="13" text-anchor="middle" fill="#0891b2">전압 V 는 양쪽 모두 같다</text>
 </svg>`},

{s:"전기이론", t:"키르히호프 법칙", crit:"직류회로",
 f:"제1법칙: 들어온 전류 합 = 나간 전류 합 · 제2법칙: 기전력 합 = 전압강하 합",
 pts:["제1법칙(전류): 갈림길에서 들어온 물의 양과 나간 물의 양이 같다",
      "제2법칙(전압): 한 바퀴 돌아오면 올린 전압과 떨어진 전압이 같다",
      "복잡한 회로의 전류·전압을 계산할 때 쓰는 기본 법칙"],
 svg:`<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="220" fill="#fff"/>
  <circle cx="180" cy="95" r="7" fill="#1e293b"/>
  <path d="M60 95 H150" stroke="#0891b2" stroke-width="4"/>
  <path d="M150 87 L166 95 L150 103 z" fill="#0891b2"/>
  <text x="100" y="82" font-size="15" font-weight="700" fill="#0891b2">I₁</text>
  <path d="M195 95 H300" stroke="#0891b2" stroke-width="4"/>
  <path d="M300 87 L316 95 L300 103 z" fill="#0891b2"/>
  <text x="250" y="82" font-size="15" font-weight="700" fill="#0891b2">I₂</text>
  <path d="M180 108 V162" stroke="#0891b2" stroke-width="4"/>
  <path d="M172 162 L180 178 L188 162 z" fill="#0891b2"/>
  <text x="196" y="150" font-size="15" font-weight="700" fill="#0891b2">I₃</text>
  <text x="210" y="205" font-size="15" font-weight="700" text-anchor="middle" fill="#166534">I₁ = I₂ + I₃  (들어온 = 나간)</text>
  <text x="20" y="30" font-size="14" font-weight="700" fill="#1e293b">제1법칙 · 전류 법칙 (접속점)</text>
  <path d="M340 40 h60 v130 h-60" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="370" y="112" font-size="12" text-anchor="middle" fill="#94a3b8">폐회로</text>
 </svg>`},

{s:"전기이론", t:"콘덴서(정전용량)", crit:"전기의 성질과 전하에 의한 전기장",
 f:"Q = CV · 직렬 1/C = 1/C₁+1/C₂ · 병렬 C = C₁+C₂ (저항과 반대!)",
 pts:["두 금속판 사이에 전기(전하)를 저장하는 부품",
      "판 면적이 넓을수록·간격이 좁을수록·유전율이 클수록 용량이 커진다",
      "합성 계산은 저항과 반대: 병렬이면 더하고, 직렬이면 역수의 합"],
 svg:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="210" fill="#fff"/>
  <rect x="120" y="50" width="12" height="110" fill="#dc2626"/>
  <rect x="200" y="50" width="12" height="110" fill="#2563eb"/>
  <text x="126" y="40" font-size="16" font-weight="700" text-anchor="middle" fill="#dc2626">+Q</text>
  <text x="206" y="40" font-size="16" font-weight="700" text-anchor="middle" fill="#2563eb">−Q</text>
  <path d="M140 70 H195 M140 95 H195 M140 120 H195 M140 145 H195" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="166" y="182" font-size="13" text-anchor="middle" fill="#64748b">유전체 (ε)</text>
  <path d="M120 105 H60 V180" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M212 105 H290 V180" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M60 180 H290" stroke="#1e293b" stroke-width="3"/>
  <circle cx="175" cy="180" r="0" fill="none"/>
  <text x="330" y="80" font-size="15" font-weight="700" fill="#d97706">C = εA / d</text>
  <text x="330" y="104" font-size="12.5" fill="#64748b">A: 판 면적</text>
  <text x="330" y="122" font-size="12.5" fill="#64748b">d: 판 간격</text>
  <text x="330" y="140" font-size="12.5" fill="#64748b">ε: 유전율</text>
  <path d="M166 55 V160" stroke="none"/>
  <path d="M132 105 h68" stroke="#16a34a" stroke-width="0"/>
 </svg>`},

{s:"전기이론", t:"전류가 만드는 자기장 (오른나사 법칙)", crit:"자기의 성질과 전류에 의한 자기장",
 f:"직선도체 H = I / 2πr [AT/m] · 원형코일 중심 H = I / 2r",
 pts:["전선에 전류가 흐르면 그 주위에 원 모양 자기장이 생긴다",
      "오른손 엄지를 전류 방향으로 두면, 감는 네 손가락이 자기장 방향",
      "거리(r)가 멀어질수록 자기장은 약해진다 → 반비례"],
 svg:`<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="220" fill="#fff"/>
  <path d="M160 200 V34" stroke="#1e293b" stroke-width="6"/>
  <path d="M150 34 L160 14 L170 34 z" fill="#0891b2"/>
  <text x="180" y="32" font-size="16" font-weight="700" fill="#0891b2">I (전류)</text>
  <ellipse cx="160" cy="80" rx="62" ry="20" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <ellipse cx="160" cy="140" rx="92" ry="28" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <path d="M215 86 L228 76 L230 94 z" fill="#d97706"/>
  <path d="M245 148 L258 136 L262 156 z" fill="#d97706"/>
  <text x="268" y="96" font-size="14" font-weight="700" fill="#d97706">자기장 H</text>
  <path d="M160 130 H250" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="205" y="150" font-size="13" text-anchor="middle" fill="#64748b">r</text>
  <text x="30" y="196" font-size="13.5" fill="#166534">엄지 = 전류 방향, 감는 손가락 = 자기장 방향</text>
 </svg>`},

{s:"전기이론", t:"플레밍의 왼손·오른손 법칙", crit:"전자력과 전자유도",
 f:"왼손 = 전동기(힘 F=BIL) · 오른손 = 발전기(기전력 e=Blv)",
 pts:["왼손 법칙: 자기장 속 전선에 전류를 흘리면 힘이 생긴다 → 전동기",
      "오른손 법칙: 자기장 속에서 전선을 움직이면 전기가 생긴다 → 발전기",
      "엄지=힘(운동), 검지=자속밀도 B, 중지=전류(기전력)"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <text x="16" y="24" font-size="14.5" font-weight="700" fill="#dc2626">왼손 = 전동기 (힘이 생김)</text>
  <g transform="translate(20,36)">
    <rect x="0" y="30" width="150" height="80" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
    <text x="12" y="50" font-size="12" fill="#2563eb">N</text><text x="132" y="50" font-size="12" fill="#2563eb">S</text>
    <path d="M18 70 H140" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="34" y="64" font-size="12" font-weight="700" fill="#2563eb">B</text>
    <circle cx="78" cy="86" r="11" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="78" cy="86" r="3.5" fill="#0891b2"/>
    <text x="78" y="126" font-size="11.5" text-anchor="middle" fill="#0891b2">전류 I</text>
    <path d="M78 74 V44" stroke="#dc2626" stroke-width="4"/>
    <path d="M78 40 l-6 9 h12 z" fill="#dc2626"/>
    <text x="96" y="40" font-size="13" font-weight="700" fill="#dc2626">힘 F</text>
  </g>
  <text x="238" y="24" font-size="14.5" font-weight="700" fill="#16a34a">오른손 = 발전기 (전기가 생김)</text>
  <g transform="translate(250,36)">
    <rect x="0" y="30" width="150" height="80" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
    <text x="12" y="50" font-size="12" fill="#16a34a">N</text><text x="132" y="50" font-size="12" fill="#16a34a">S</text>
    <path d="M18 70 H140" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="34" y="64" font-size="12" font-weight="700" fill="#16a34a">B</text>
    <circle cx="78" cy="86" r="11" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <path d="M72 86 H84" stroke="#0891b2" stroke-width="3"/>
    <path d="M78 74 V44" stroke="#1e293b" stroke-width="4"/>
    <path d="M78 40 l-6 9 h12 z" fill="#1e293b"/>
    <text x="96" y="40" font-size="13" font-weight="700" fill="#1e293b">운동 v</text>
    <text x="78" y="126" font-size="11.5" text-anchor="middle" fill="#0891b2">기전력 e</text>
  </g>
  <text x="220" y="216" font-size="13" text-anchor="middle" fill="#64748b">엄지 = 힘·운동 / 검지 = 자속밀도 B / 중지 = 전류·기전력</text>
 </svg>`},

{s:"전기이론", t:"전자유도 (패러데이 · 렌츠 법칙)", crit:"전자력과 전자유도",
 f:"e = −N (dΦ/dt) [V]",
 pts:["코일 속 자속이 변하면 전기(유도기전력)가 생긴다 = 패러데이 법칙",
      "생긴 전류는 변화를 방해하는 방향으로 흐른다 = 렌츠 법칙 (그래서 −)",
      "감은 횟수 N이 많고, 자속 변화가 빠를수록 전기가 세게 생긴다"],
 svg:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="210" fill="#fff"/>
  <g stroke="#d97706" stroke-width="4" fill="none">
    <path d="M200 60 a16 16 0 0 1 0 32"/><path d="M200 92 a16 16 0 0 0 0 32"/>
    <path d="M200 124 a16 16 0 0 1 0 32"/>
  </g>
  <path d="M200 60 H150 M200 156 H150" stroke="#1e293b" stroke-width="3" fill="none"/>
  <circle cx="140" cy="108" r="20" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="140" y="114" font-size="15" font-weight="700" text-anchor="middle" fill="#16a34a">G</text>
  <text x="140" y="150" font-size="12" text-anchor="middle" fill="#64748b">검류계</text>
  <rect x="290" y="88" width="80" height="40" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
  <text x="308" y="113" font-size="14" font-weight="700" fill="#dc2626">N</text>
  <text x="352" y="113" font-size="14" font-weight="700" fill="#2563eb">S</text>
  <path d="M285 108 H254" stroke="#dc2626" stroke-width="3.5"/>
  <path d="M254 100 L238 108 L254 116 z" fill="#dc2626"/>
  <text x="266" y="94" font-size="13" font-weight="700" text-anchor="middle" fill="#dc2626">움직임</text>
  <text x="330" y="150" font-size="12.5" text-anchor="middle" fill="#64748b">자석</text>
  <text x="210" y="196" font-size="13.5" text-anchor="middle" fill="#166534">자석을 움직이면 → 자속 변화 → 코일에 전기 발생</text>
 </svg>`},

{s:"전기이론", t:"정현파 교류 (최대값·실효값·평균값)", crit:"교류회로",
 f:"실효값 = 최대값/√2 ≒ 0.707Vm · 평균값 = 2Vm/π ≒ 0.637Vm",
 pts:["교류는 크기와 방향이 계속 바뀌는 전기 (한 번 왕복 = 1주기)",
      "우리가 말하는 220V는 실효값 → 최대값은 약 311V",
      "파형률 = 실효값/평균값, 파고율 = 최대값/실효값"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <path d="M40 110 H420" stroke="#94a3b8" stroke-width="2"/>
  <path d="M50 20 V200" stroke="#94a3b8" stroke-width="2"/>
  <path d="M50 110 q47 -95 94 0 t94 0 t94 0 t94 0" fill="none" stroke="#d97706" stroke-width="3.5"/>
  <path d="M50 40 H420" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="7 5"/>
  <text x="380" y="34" font-size="13" font-weight="700" fill="#dc2626">최대값 Vm</text>
  <path d="M50 61 H420" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="7 5"/>
  <text x="360" y="76" font-size="13" font-weight="700" fill="#16a34a">실효값 0.707Vm</text>
  <path d="M50 65 H160" stroke="none"/>
  <text x="112" y="206" font-size="12.5" text-anchor="middle" fill="#64748b">1주기 (T)</text>
  <path d="M50 190 H144" stroke="#64748b" stroke-width="1.5"/>
  <path d="M50 186 V194 M144 186 V194" stroke="#64748b" stroke-width="1.5"/>
  <text x="30" y="44" font-size="12" fill="#64748b">+</text>
  <text x="30" y="180" font-size="12" fill="#64748b">−</text>
 </svg>`},

{s:"전기이론", t:"임피던스와 역률", crit:"교류회로",
 f:"Z = √(R²+X²) · 역률 cosθ = R / Z · 유효전력 P = VI cosθ",
 pts:["교류에서 전류를 방해하는 것 = 저항 R + 리액턴스 X → 합쳐서 임피던스 Z",
      "직각삼각형으로 그리면 관계가 한눈에 보인다 (피타고라스)",
      "역률이 낮으면 같은 전력을 쓰려고 전류가 더 많이 흘러 손실이 커진다"],
 svg:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="210" fill="#fff"/>
  <path d="M70 170 H270 V60 Z" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
  <path d="M255 170 V155 H270" fill="none" stroke="#1e293b" stroke-width="2"/>
  <text x="170" y="190" font-size="15" font-weight="700" text-anchor="middle" fill="#1e293b">저항 R</text>
  <text x="286" y="120" font-size="15" font-weight="700" fill="#2563eb">리액턴스 X</text>
  <text x="140" y="104" font-size="16" font-weight="700" fill="#dc2626">임피던스 Z</text>
  <path d="M104 170 a34 34 0 0 0 10 -22" fill="none" stroke="#166534" stroke-width="2.5"/>
  <text x="118" y="163" font-size="14" font-weight="700" fill="#166534">θ</text>
  <text x="330" y="60" font-size="13.5" font-weight="700" fill="#166534">cosθ = R/Z</text>
  <text x="330" y="82" font-size="12.5" fill="#64748b">= 역률</text>
  <text x="330" y="112" font-size="12.5" fill="#64748b">코일 X_L=2πfL</text>
  <text x="330" y="132" font-size="12.5" fill="#64748b">콘덴서 X_C=1/2πfC</text>
 </svg>`},

{s:"전기이론", t:"3상 Y결선 · Δ결선", crit:"교류회로",
 f:"Y결선: 선간전압 = √3 × 상전압 · Δ결선: 선전류 = √3 × 상전류",
 pts:["Y(스타)결선: 한 점(중성점)에 모아 묶는 방식 → 중성선 사용 가능",
      "Δ(델타)결선: 삼각형으로 이어 붙이는 방식 → 중성점 없음",
      "Y는 전압이 √3배, Δ는 전류가 √3배 (전력은 둘 다 P=√3 VI cosθ)"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <text x="60" y="24" font-size="15" font-weight="700" fill="#1e293b">Y (스타) 결선</text>
  <g transform="translate(20,30)">
    <circle cx="100" cy="100" r="6" fill="#1e293b"/>
    <path d="M100 100 L100 40 M100 100 L48 130 M100 100 L152 130" stroke="#d97706" stroke-width="4"/>
    <circle cx="100" cy="34" r="7" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="42" cy="134" r="7" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="158" cy="134" r="7" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <text x="100" y="20" font-size="12.5" text-anchor="middle" fill="#64748b">L1</text>
    <text x="26" y="140" font-size="12.5" fill="#64748b">L2</text>
    <text x="168" y="140" font-size="12.5" fill="#64748b">L3</text>
    <text x="112" y="112" font-size="11.5" fill="#0891b2">중성점 N</text>
    <text x="100" y="176" font-size="12.5" text-anchor="middle" fill="#166534">선간 = √3 × 상전압</text>
  </g>
  <text x="290" y="24" font-size="15" font-weight="700" fill="#1e293b">Δ (델타) 결선</text>
  <g transform="translate(250,30)">
    <path d="M100 40 L44 132 L156 132 Z" fill="none" stroke="#d97706" stroke-width="4"/>
    <circle cx="100" cy="40" r="7" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="44" cy="132" r="7" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="156" cy="132" r="7" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <text x="100" y="26" font-size="12.5" text-anchor="middle" fill="#64748b">L1</text>
    <text x="26" y="140" font-size="12.5" fill="#64748b">L2</text>
    <text x="166" y="140" font-size="12.5" fill="#64748b">L3</text>
    <text x="100" y="176" font-size="12.5" text-anchor="middle" fill="#166534">선전류 = √3 × 상전류</text>
  </g>
 </svg>`}
);
