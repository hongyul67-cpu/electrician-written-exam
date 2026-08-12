// 전기기능사 - 그림으로 보는 개념 (전기이론 · 추가분)
window.CONCEPTS = window.CONCEPTS || [];
window.CONCEPTS.push(

{s:"전기이론", t:"쿨롱의 법칙 (정전기 힘)", crit:"전기의 성질과 전하에 의한 전기장",
 f:"F = 9×10⁹ × Q₁Q₂ / r² [N] (거리의 제곱에 반비례)",
 pts:["같은 극끼리는 밀어내고(반발), 다른 극끼리는 끌어당긴다(흡인)",
      "전하량의 곱에 비례하고, 거리의 제곱에 반비례한다",
      "자기력(쿨롱의 자기법칙)도 똑같은 형태 F = 6.33×10⁴ × m₁m₂/r²"],
 svg:`<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="210" fill="#fff"/>
  <text x="20" y="24" font-size="13" font-weight="700" fill="#dc2626">같은 극 → 밀어냄</text>
  <circle cx="80" cy="70" r="20" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
  <text x="80" y="76" font-size="15" font-weight="700" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="190" cy="70" r="20" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
  <text x="190" y="76" font-size="15" font-weight="700" text-anchor="middle" fill="#dc2626">+</text>
  <path d="M56 70 H36" stroke="#dc2626" stroke-width="3" fill="none"/><path d="M36 63 L22 70 L36 77 z" fill="#dc2626"/>
  <path d="M214 70 H234" stroke="#dc2626" stroke-width="3" fill="none"/><path d="M234 63 L248 70 L234 77 z" fill="#dc2626"/>
  <text x="240" y="24" font-size="13" font-weight="700" fill="#2563eb">다른 극 → 끌어당김</text>
  <circle cx="300" cy="70" r="20" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
  <text x="300" y="76" font-size="15" font-weight="700" text-anchor="middle" fill="#dc2626">+</text>
  <circle cx="400" cy="70" r="20" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
  <text x="400" y="77" font-size="18" font-weight="700" text-anchor="middle" fill="#2563eb">−</text>
  <path d="M326 70 H346" stroke="#2563eb" stroke-width="3" fill="none"/><path d="M346 63 L360 70 L346 77 z" fill="#2563eb"/>
  <path d="M374 70 H354" stroke="#2563eb" stroke-width="3" fill="none"/><path d="M354 63 L340 70 L354 77 z" fill="#2563eb"/>
  <path d="M80 122 H190" stroke="#64748b" stroke-width="1.6" stroke-dasharray="6 4" fill="none"/>
  <text x="135" y="140" font-size="13" text-anchor="middle" fill="#64748b">거리 r</text>
  <text x="220" y="176" font-size="15" font-weight="700" text-anchor="middle" fill="#166534">r 가 2배가 되면 힘은 1/4 로 줄어든다</text>
 </svg>`},

{s:"전기이론", t:"콘덴서 직렬·병렬 합성", crit:"전기의 성질과 전하에 의한 전기장",
 f:"직렬 1/C = 1/C₁+1/C₂ · 병렬 C = C₁+C₂ (저항과 정반대!)",
 pts:["콘덴서는 저항과 계산이 반대 → 병렬이면 그냥 더한다",
      "직렬로 하면 합성용량이 작아지고, 병렬로 하면 커진다",
      "같은 용량 2개를 직렬하면 1/2배, 병렬하면 2배"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="26" font-size="14" font-weight="700" fill="#1e293b">직렬 (작아진다)</text>
  <path d="M30 70 H100 M120 70 H210 M230 70 H300" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M100 52 V88 M112 52 V88" stroke="#0891b2" stroke-width="4" fill="none"/>
  <path d="M210 52 V88 M222 52 V88" stroke="#0891b2" stroke-width="4" fill="none"/>
  <text x="106" y="106" font-size="13" font-weight="700" text-anchor="middle" fill="#0891b2">C₁</text>
  <text x="216" y="106" font-size="13" font-weight="700" text-anchor="middle" fill="#0891b2">C₂</text>
  <text x="320" y="76" font-size="13.5" font-weight="700" fill="#166534">1/C = 1/C₁+1/C₂</text>
  <text x="20" y="150" font-size="14" font-weight="700" fill="#1e293b">병렬 (커진다)</text>
  <path d="M30 185 H90 M90 160 V210 M240 160 V210 M240 185 H300" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M150 160 H90 M150 210 H90 M240 160 H180 M240 210 H180" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M150 148 V172 M162 148 V172" stroke="#0891b2" stroke-width="4" fill="none"/>
  <path d="M150 198 V222 M162 198 V222" stroke="#0891b2" stroke-width="4" fill="none"/>
  <text x="320" y="190" font-size="13.5" font-weight="700" fill="#166534">C = C₁ + C₂</text>
 </svg>`},

{s:"전기이론", t:"자기회로와 기자력", crit:"자기의 성질과 전류에 의한 자기장",
 f:"기자력 F = NI [AT] · 자기저항 Rm = l/μA · 자속 Φ = F/Rm",
 pts:["전기회로의 전압-저항-전류처럼, 자기회로는 기자력-자기저항-자속",
      "감은 횟수 N과 전류 I 를 곱한 값이 기자력(자속을 만드는 힘)",
      "자로가 길수록·단면적이 좁을수록 자기저항이 커진다"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <rect x="60" y="40" width="180" height="140" fill="none" stroke="#94a3b8" stroke-width="16"/>
  <g stroke="#d97706" stroke-width="5" fill="none">
    <path d="M67 60 a14 12 0 1 0 0 24"/><path d="M67 84 a14 12 0 1 0 0 24"/>
    <path d="M67 108 a14 12 0 1 0 0 24"/><path d="M67 132 a14 12 0 1 0 0 24"/>
  </g>
  <text x="46" y="196" font-size="12.5" fill="#92400e">권선 N회</text>
  <path d="M36 66 H16 V154 H36" fill="none" stroke="#1e293b" stroke-width="3"/>
  <text x="4" y="112" font-size="14" font-weight="700" fill="#0891b2">I</text>
  <text x="150" y="116" font-size="13" text-anchor="middle" fill="#64748b">자속 Φ</text>
  <path d="M120 92 H180" stroke="#dc2626" stroke-width="2.5" fill="none"/>
  <path d="M180 85 L194 92 L180 99 z" fill="#dc2626"/>
  <rect x="280" y="52" width="140" height="116" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="350" y="76" font-size="13" font-weight="700" text-anchor="middle" fill="#334155">전기 ↔ 자기 비교</text>
  <text x="294" y="102" font-size="12.5" fill="#475569">전압 V ↔ 기자력 F</text>
  <text x="294" y="126" font-size="12.5" fill="#475569">저항 R ↔ 자기저항 Rm</text>
  <text x="294" y="150" font-size="12.5" fill="#475569">전류 I ↔ 자속 Φ</text>
 </svg>`},

{s:"전기이론", t:"히스테리시스 곡선 (B-H 곡선)", crit:"자기의 성질과 전류에 의한 자기장",
 f:"세로축 = 자속밀도 B (잔류자기 Br) · 가로축 = 자계 H (보자력 Hc)",
 pts:["자화시켰다가 되돌려도 자기가 남는 현상 → 잔류자기 Br",
      "잔류자기를 없애는 데 필요한 반대 자계 → 보자력 Hc",
      "곡선의 면적 = 히스테리시스손(철손), 영구자석은 Br·Hc 둘 다 커야 좋다"],
 svg:`<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="230" fill="#fff"/>
  <path d="M40 115 H360" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M200 20 V210" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <text x="368" y="110" font-size="13" font-weight="700" fill="#64748b">H</text>
  <text x="206" y="18" font-size="13" font-weight="700" fill="#64748b">B</text>
  <path d="M200 60 C270 40 330 50 340 46 C330 90 250 78 200 92 C150 106 90 96 62 86 C72 130 150 148 200 160 C250 172 320 176 340 46"
        fill="none" stroke="#d97706" stroke-width="3"/>
  <circle cx="200" cy="60" r="4.5" fill="#dc2626"/>
  <text x="212" y="56" font-size="12.5" font-weight="700" fill="#dc2626">잔류자기 Br</text>
  <circle cx="128" cy="115" r="4.5" fill="#2563eb"/>
  <text x="46" y="136" font-size="12.5" font-weight="700" fill="#2563eb">보자력 Hc</text>
  <text x="212" y="204" font-size="12.5" fill="#92400e">곡선 안쪽 넓이 = 히스테리시스손</text>
 </svg>`},

{s:"전기이론", t:"인덕턴스 가동접속 · 차동접속", crit:"전자력과 전자유도",
 f:"가동접속 L = L₁+L₂+2M · 차동접속 L = L₁+L₂−2M",
 pts:["두 코일을 직렬로 이을 때 자속 방향이 같으면 가동, 반대면 차동",
      "가동은 상호인덕턴스 M 을 더하고, 차동은 뺀다",
      "두 식을 빼면 차이가 4M → 문제에서 자주 묻는다"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="26" font-size="14" font-weight="700" fill="#dc2626">가동접속 (자속 같은 방향)</text>
  <path d="M20 66 H60 M170 66 H210 M320 66 H400" stroke="#1e293b" stroke-width="3" fill="none"/>
  <g stroke="#d97706" stroke-width="4" fill="none">
    <path d="M60 66 a13 13 0 0 1 26 0"/><path d="M86 66 a13 13 0 0 1 26 0"/>
    <path d="M112 66 a13 13 0 0 1 26 0"/><path d="M138 66 a13 13 0 0 1 26 0"/>
  </g>
  <g stroke="#0891b2" stroke-width="4" fill="none">
    <path d="M210 66 a13 13 0 0 1 26 0"/><path d="M236 66 a13 13 0 0 1 26 0"/>
    <path d="M262 66 a13 13 0 0 1 26 0"/><path d="M288 66 a13 13 0 0 1 26 0"/>
  </g>
  <path d="M104 90 H150" stroke="#dc2626" stroke-width="2.5" fill="none"/><path d="M150 84 L162 90 L150 96 z" fill="#dc2626"/>
  <path d="M244 90 H290" stroke="#dc2626" stroke-width="2.5" fill="none"/><path d="M290 84 L302 90 L290 96 z" fill="#dc2626"/>
  <text x="360" y="94" font-size="13" font-weight="700" fill="#dc2626">L₁+L₂+2M</text>
  <text x="20" y="150" font-size="14" font-weight="700" fill="#2563eb">차동접속 (자속 반대 방향)</text>
  <path d="M20 190 H60 M170 190 H210 M320 190 H400" stroke="#1e293b" stroke-width="3" fill="none"/>
  <g stroke="#d97706" stroke-width="4" fill="none">
    <path d="M60 190 a13 13 0 0 1 26 0"/><path d="M86 190 a13 13 0 0 1 26 0"/>
    <path d="M112 190 a13 13 0 0 1 26 0"/><path d="M138 190 a13 13 0 0 1 26 0"/>
  </g>
  <g stroke="#0891b2" stroke-width="4" fill="none">
    <path d="M210 190 a13 13 0 0 0 26 0"/><path d="M236 190 a13 13 0 0 0 26 0"/>
    <path d="M262 190 a13 13 0 0 0 26 0"/><path d="M288 190 a13 13 0 0 0 26 0"/>
  </g>
  <path d="M104 168 H150" stroke="#dc2626" stroke-width="2.5" fill="none"/><path d="M150 162 L162 168 L150 174 z" fill="#dc2626"/>
  <path d="M290 168 H244" stroke="#2563eb" stroke-width="2.5" fill="none"/><path d="M244 162 L232 168 L244 174 z" fill="#2563eb"/>
  <text x="360" y="172" font-size="13" font-weight="700" fill="#2563eb">L₁+L₂−2M</text>
 </svg>`},

{s:"전기이론", t:"배율기와 분류기", crit:"직류회로",
 f:"배율기: 전압계와 직렬 · 분류기: 전류계와 병렬",
 pts:["전압계는 회로에 병렬로, 전류계는 직렬로 연결한다",
      "측정 범위를 넓히려면 → 전압계엔 배율기(직렬), 전류계엔 분류기(병렬)",
      "배율 m = 1 + Rm/Rv (배율기), m = 1 + Ra/Rs (분류기)"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="24" font-size="13.5" font-weight="700" fill="#d97706">배율기 = 전압계와 직렬</text>
  <path d="M30 70 H90 M150 70 H190" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M90 58 h60 v24 h-60 z" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
  <text x="120" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#92400e">배율기</text>
  <circle cx="212" cy="70" r="21" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="212" y="77" font-size="16" font-weight="700" text-anchor="middle" fill="#1e293b">V</text>
  <path d="M233 70 H280" stroke="#1e293b" stroke-width="3" fill="none"/>
  <text x="330" y="76" font-size="12.5" fill="#64748b">전압 측정범위 확대</text>
  <text x="20" y="150" font-size="13.5" font-weight="700" fill="#0891b2">분류기 = 전류계와 병렬</text>
  <path d="M30 186 H100 M270 186 H340" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M100 186 V158 H160 M212 158 H270 V186" fill="none" stroke="#1e293b" stroke-width="3"/>
  <circle cx="186" cy="158" r="21" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="186" y="165" font-size="16" font-weight="700" text-anchor="middle" fill="#1e293b">A</text>
  <path d="M100 186 V214 H160 v-24" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M270 186 V214 H212 v-24" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M160 202 h52 v24 h-52 z" fill="#e0f2fe" stroke="#0891b2" stroke-width="2.5" transform="translate(0,-12)"/>
  <text x="186" y="208" font-size="12" font-weight="700" text-anchor="middle" fill="#155e75">분류기</text>
  <text x="360" y="192" font-size="12.5" fill="#64748b">전류 분담</text>
 </svg>`},

{s:"전기이론", t:"R-L-C 직렬 공진", crit:"교류회로",
 f:"공진조건 X_L = X_C · 공진주파수 f = 1 / (2π√(LC))",
 pts:["코일과 콘덴서의 리액턴스가 같아지는 순간이 공진",
      "이때 임피던스는 최소(Z=R), 전류는 최대, 역률은 1(100%)",
      "직렬공진 = 전류 최대 / 병렬공진 = 전류 최소 (반대!)"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <path d="M30 56 H70" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M70 56 l-10 7 l20 8 l-20 8 l20 8 l-10 7" fill="none" stroke="#d97706" stroke-width="3"/>
  <text x="70" y="42" font-size="12.5" font-weight="700" text-anchor="middle" fill="#d97706">R</text>
  <path d="M70 94 V110 H120" stroke="#1e293b" stroke-width="3" fill="none"/>
  <g stroke="#0891b2" stroke-width="3.5" fill="none">
    <path d="M120 110 a11 11 0 0 1 22 0"/><path d="M142 110 a11 11 0 0 1 22 0"/><path d="M164 110 a11 11 0 0 1 22 0"/>
  </g>
  <text x="152" y="92" font-size="12.5" font-weight="700" text-anchor="middle" fill="#0891b2">L</text>
  <path d="M186 110 H230" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M230 96 V124 M242 96 V124" stroke="#16a34a" stroke-width="4" fill="none"/>
  <text x="236" y="88" font-size="12.5" font-weight="700" text-anchor="middle" fill="#16a34a">C</text>
  <path d="M242 110 H280 V56 H30 V110" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M60 150 H400" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M70 190 V140" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M70 190 C150 188 200 120 230 116 C260 120 320 186 400 190" fill="none" stroke="#dc2626" stroke-width="3"/>
  <circle cx="230" cy="116" r="5" fill="#dc2626"/>
  <text x="230" y="108" font-size="12.5" font-weight="700" text-anchor="middle" fill="#dc2626">전류 최대</text>
  <path d="M230 122 V150" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="4 3" fill="none"/>
  <text x="232" y="166" font-size="12" fill="#166534">공진주파수 f₀</text>
  <text x="46" y="146" font-size="12" fill="#64748b">I</text>
 </svg>`},

{s:"전기이론", t:"줄의 법칙과 전력량", crit:"전류의 열작용과 화학작용",
 f:"H = 0.24 I²Rt [cal] = I²Rt [J] · 1[kWh] = 860[kcal]",
 pts:["저항에 전류가 흐르면 열이 난다 → 전열기·백열등의 원리",
      "발열량은 전류의 제곱에 비례 (전류 2배 → 열 4배)",
      "1[J]=0.24[cal], 1[kWh]=860[kcal] 두 환산값은 꼭 외우기"],
 svg:`<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="210" fill="#fff"/>
  <path d="M40 60 H120" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M120 60 l-12 8 l24 9 l-24 9 l24 9 l-12 8" fill="none" stroke="#d97706" stroke-width="4"/>
  <path d="M120 103 H200 V150 H40 V60" fill="none" stroke="#1e293b" stroke-width="3"/>
  <circle cx="40" cy="105" r="0" fill="none"/>
  <text x="150" y="82" font-size="13" font-weight="700" fill="#d97706">저항 R</text>
  <g stroke="#dc2626" stroke-width="3" fill="none">
    <path d="M104 44 q6 -10 0 -18 q-6 -8 0 -14"/>
    <path d="M128 44 q6 -10 0 -18 q-6 -8 0 -14"/>
  </g>
  <text x="116" y="6" font-size="0" fill="#dc2626">열</text>
  <text x="150" y="34" font-size="13" font-weight="700" fill="#dc2626">열 발생 🔥</text>
  <rect x="240" y="44" width="180" height="112" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="330" y="70" font-size="14" font-weight="700" text-anchor="middle" fill="#92400e">꼭 외울 환산</text>
  <text x="258" y="98" font-size="13" fill="#78350f">1 [J] = 0.24 [cal]</text>
  <text x="258" y="122" font-size="13" fill="#78350f">1 [cal] = 4.2 [J]</text>
  <text x="258" y="146" font-size="13" font-weight="700" fill="#b45309">1 [kWh] = 860 [kcal]</text>
  <text x="120" y="180" font-size="12.5" text-anchor="middle" fill="#64748b">I 가 2배면 열은 4배</text>
 </svg>`},

{s:"전기이론", t:"전지와 열전효과", crit:"전류의 열작용과 화학작용",
 f:"망간건전지: 양극 탄소막대, 음극 아연 · 납축전지: 전해액 비중 약 1.2~1.3 묽은 황산",
 pts:["1차 전지 = 한 번 쓰고 버림(망간·알칼리) / 2차 전지 = 충전해서 다시 씀(납축전지)",
      "국부작용(불순물로 자체 방전), 분극작용(수소가 붙어 전압 저하) → 감극제로 해결",
      "제백효과: 두 금속 접합점에 온도차 → 기전력 발생 (열전대의 원리)"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="24" font-size="13.5" font-weight="700" fill="#1e293b">납축전지 (2차 전지)</text>
  <rect x="30" y="40" width="170" height="110" rx="6" fill="#e0f2fe" stroke="#0891b2" stroke-width="3"/>
  <rect x="60" y="56" width="18" height="82" fill="#7f1d1d"/>
  <rect x="152" y="56" width="18" height="82" fill="#475569"/>
  <text x="69" y="168" font-size="12" text-anchor="middle" fill="#7f1d1d">양극 PbO₂</text>
  <text x="161" y="168" font-size="12" text-anchor="middle" fill="#334155">음극 Pb</text>
  <text x="115" y="100" font-size="12.5" text-anchor="middle" fill="#155e75">묽은 황산</text>
  <text x="115" y="120" font-size="12" text-anchor="middle" fill="#155e75">비중 1.2~1.3</text>
  <text x="240" y="24" font-size="13.5" font-weight="700" fill="#dc2626">제백효과 (열전대)</text>
  <path d="M250 70 L330 50 L410 70" fill="none" stroke="#b45309" stroke-width="4"/>
  <circle cx="330" cy="50" r="7" fill="#dc2626"/>
  <text x="330" y="38" font-size="12" text-anchor="middle" fill="#dc2626">가열</text>
  <text x="240" y="90" font-size="12" fill="#64748b">금속 A</text>
  <text x="390" y="90" font-size="12" fill="#64748b">금속 B</text>
  <circle cx="330" cy="120" r="19" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <text x="330" y="126" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">mV</text>
  <path d="M250 70 V120 H311" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <path d="M410 70 V120 H349" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <text x="330" y="164" font-size="12" text-anchor="middle" fill="#64748b">온도차 → 기전력</text>
  <text x="220" y="200" font-size="12.5" text-anchor="middle" fill="#166534">펠티에효과는 반대: 전류를 흘리면 흡열·발열 (냉각기)</text>
 </svg>`}
);
