// 전기기능사 - 그림으로 보는 개념 (전기기기)
window.CONCEPTS = window.CONCEPTS || [];
window.CONCEPTS.push(

{s:"전기기기", t:"직류기의 구조", crit:"직류기",
 f:"3요소 = 계자(자속) + 전기자(기전력) + 정류자(교류→직류)",
 pts:["계자: 자속을 만드는 부분 (자석·계자코일)",
      "전기자: 자속 속에서 회전하며 기전력이 생기는 부분",
      "정류자 + 브러시: 안에서 생긴 교류를 직류로 바꿔 밖으로 뽑아낸다"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <rect x="40" y="50" width="46" height="120" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="63" y="116" font-size="17" font-weight="700" text-anchor="middle" fill="#2563eb">N</text>
  <rect x="264" y="50" width="46" height="120" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
  <text x="287" y="116" font-size="17" font-weight="700" text-anchor="middle" fill="#dc2626">S</text>
  <text x="63" y="42" font-size="12.5" text-anchor="middle" fill="#64748b">계자</text>
  <text x="287" y="42" font-size="12.5" text-anchor="middle" fill="#64748b">계자</text>
  <circle cx="175" cy="110" r="58" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
  <circle cx="175" cy="110" r="20" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <path d="M175 90 V130 M155 110 H195" stroke="#d97706" stroke-width="3"/>
  <text x="175" y="86" font-size="12.5" text-anchor="middle" fill="#92400e">전기자</text>
  <path d="M86 110 H117" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
  <path d="M233 110 H264" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="175" y="152" font-size="11.5" text-anchor="middle" fill="#1e293b">정류자</text>
  <rect x="150" y="182" width="18" height="26" fill="#334155"/>
  <rect x="182" y="182" width="18" height="26" fill="#334155"/>
  <text x="175" y="224" font-size="12" text-anchor="middle" fill="#64748b">브러시</text>
  <path d="M159 182 V168 M191 182 V168" stroke="#1e293b" stroke-width="2.5"/>
  <text x="345" y="80" font-size="13" font-weight="700" fill="#166534">발전기: 회전 → 전기</text>
  <text x="345" y="104" font-size="13" font-weight="700" fill="#dc2626">전동기: 전기 → 회전</text>
  <text x="345" y="140" font-size="12" fill="#64748b">보극 · 공극은</text>
  <text x="345" y="158" font-size="12" fill="#64748b">3요소가 아니다!</text>
 </svg>`},

{s:"전기기기", t:"직류전동기 · 발전기 원리", crit:"직류기",
 f:"전동기 힘 F = BIL [N] · 발전기 기전력 E = Blv [V]",
 pts:["전동기: 자석 사이 코일에 전류를 흘리면 힘이 생겨 돌아간다 (왼손법칙)",
      "발전기: 자석 사이 코일을 돌리면 전기가 생긴다 (오른손법칙)",
      "같은 구조라도 전기를 넣으면 전동기, 돌리면 발전기가 된다"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <rect x="60" y="40" width="300" height="130" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="60" y="40" width="34" height="130" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <rect x="326" y="40" width="34" height="130" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="77" y="112" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">N</text>
  <text x="343" y="112" font-size="15" font-weight="700" text-anchor="middle" fill="#dc2626">S</text>
  <path d="M100 70 H320 M100 105 H320 M100 140 H320" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="7 5"/>
  <rect x="170" y="86" width="80" height="40" fill="none" stroke="#1e293b" stroke-width="3.5"/>
  <circle cx="170" cy="106" r="9" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="170" cy="106" r="3" fill="#0891b2"/>
  <circle cx="250" cy="106" r="9" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <path d="M244 106 H256 M250 100 V112" stroke="#0891b2" stroke-width="2.5"/>
  <path d="M170 82 V60" stroke="#dc2626" stroke-width="4"/>
  <path d="M161 60 L170 44 L179 60 z" fill="#dc2626"/>
  <path d="M250 130 V152" stroke="#dc2626" stroke-width="4"/>
  <path d="M241 152 L250 168 L259 152 z" fill="#dc2626"/>
  <text x="144" y="52" font-size="14" font-weight="700" fill="#dc2626">힘 F</text>
  <text x="264" y="164" font-size="14" font-weight="700" fill="#dc2626">힘 F</text>
  <text x="210" y="196" font-size="13.5" text-anchor="middle" fill="#166534">양쪽에 반대 방향 힘 → 코일이 회전한다</text>
  <text x="210" y="30" font-size="13" text-anchor="middle" fill="#64748b">⊙ 전류 나옴 / ⊕ 전류 들어감</text>
 </svg>`},

{s:"전기기기", t:"변압기 원리와 권수비", crit:"변압기",
 f:"a = N₁/N₂ = V₁/V₂ = I₂/I₁ (전압은 권수에 비례, 전류는 반비례)",
 pts:["철심에 1차·2차 코일을 감아 전자유도로 전압을 바꾸는 기기",
      "감은 횟수가 많은 쪽이 전압이 높다 (전력은 그대로: V₁I₁ ≒ V₂I₂)",
      "직류는 자속이 변하지 않아 변압되지 않는다 → 교류 전용"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <rect x="150" y="40" width="140" height="140" fill="none" stroke="#94a3b8" stroke-width="14"/>
  <text x="220" y="118" font-size="13" text-anchor="middle" fill="#64748b">철심</text>
  <g stroke="#d97706" stroke-width="5" fill="none">
    <path d="M157 62 a15 13 0 1 0 0 26"/><path d="M157 88 a15 13 0 1 0 0 26"/>
    <path d="M157 114 a15 13 0 1 0 0 26"/><path d="M157 140 a15 13 0 1 0 0 22"/>
  </g>
  <g stroke="#0891b2" stroke-width="5" fill="none">
    <path d="M283 72 a15 13 0 1 1 0 26"/><path d="M283 98 a15 13 0 1 1 0 26"/>
  </g>
  <path d="M126 62 H100 V158 H126" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M314 72 H345 V150 H314" fill="none" stroke="#1e293b" stroke-width="3"/>
  <text x="76" y="112" font-size="15" font-weight="700" fill="#d97706">V₁</text>
  <text x="360" y="112" font-size="15" font-weight="700" fill="#0891b2">V₂</text>
  <text x="130" y="196" font-size="12.5" text-anchor="middle" fill="#92400e">1차 코일 N₁ (많이 감음)</text>
  <text x="330" y="196" font-size="12.5" text-anchor="middle" fill="#155e75">2차 N₂ (적게 감음)</text>
  <text x="220" y="30" font-size="13" text-anchor="middle" fill="#166534">교류 자속 Φ 가 철심을 돌며 2차에 전기를 만든다</text>
 </svg>`},

{s:"전기기기", t:"V결선 (단상 변압기 2대로 3상)", crit:"변압기",
 f:"V결선 출력 = √3 × 변압기 1대 용량 · 이용률 86.6% · 출력비 57.7%",
 pts:["Δ결선 운전 중 변압기 1대가 고장나면 2대로 3상을 계속 공급 (응급 처치)",
      "출력은 △결선의 57.7%로 줄어든다 → 같지 않다!",
      "부하 증가가 예상되는 곳에도 미리 V결선으로 시설한다"],
 svg:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="210" fill="#fff"/>
  <path d="M110 60 L60 150 L210 150 Z" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="7 5"/>
  <path d="M110 60 L60 150" stroke="#d97706" stroke-width="6"/>
  <path d="M60 150 L210 150" stroke="#d97706" stroke-width="6"/>
  <circle cx="110" cy="60" r="8" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="60" cy="150" r="8" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="210" cy="150" r="8" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <text x="110" y="44" font-size="13" text-anchor="middle" fill="#64748b">L1</text>
  <text x="40" y="156" font-size="13" fill="#64748b">L2</text>
  <text x="222" y="156" font-size="13" fill="#64748b">L3</text>
  <text x="70" y="98" font-size="12.5" font-weight="700" fill="#92400e">Tr1</text>
  <text x="128" y="168" font-size="12.5" font-weight="700" fill="#92400e">Tr2</text>
  <text x="176" y="106" font-size="12" fill="#94a3b8">고장</text>
  <path d="M150 88 l30 30 M180 88 l-30 30" stroke="#dc2626" stroke-width="3"/>
  <text x="265" y="70" font-size="14" font-weight="700" fill="#166534">출력 = √3 × 1대</text>
  <text x="265" y="98" font-size="13" fill="#64748b">이용률 86.6%</text>
  <text x="265" y="120" font-size="13" fill="#64748b">출력비 57.7%</text>
  <text x="265" y="150" font-size="12.5" fill="#dc2626">△결선과 출력이</text>
  <text x="265" y="168" font-size="12.5" fill="#dc2626">같지 않다!</text>
 </svg>`},

{s:"전기기기", t:"3상 유도전동기와 슬립", crit:"유도전동기",
 f:"동기속도 Ns = 120f/p [rpm] · 슬립 s = (Ns−N)/Ns × 100 [%]",
 pts:["고정자에 3상 전류 → 회전자계 발생 → 회전자가 끌려 돌아간다",
      "회전자는 회전자계보다 항상 조금 느리다 → 그 차이가 슬립",
      "슬립 0이면 동기속도(이론값), 슬립 1이면 정지 상태"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <circle cx="160" cy="110" r="80" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
  <circle cx="160" cy="110" r="46" fill="#e0f2fe" stroke="#0891b2" stroke-width="3.5"/>
  <circle cx="160" cy="110" r="10" fill="#334155"/>
  <text x="160" y="178" font-size="12.5" text-anchor="middle" fill="#92400e">고정자 (3상 권선)</text>
  <text x="160" y="142" font-size="12.5" text-anchor="middle" fill="#155e75">회전자</text>
  <path d="M160 22 a88 88 0 0 1 56 20" fill="none" stroke="#d97706" stroke-width="3.5"/>
  <path d="M212 32 L232 46 L208 52 z" fill="#d97706"/>
  <path d="M160 58 a52 52 0 0 1 30 12" fill="none" stroke="#0891b2" stroke-width="3.5"/>
  <path d="M186 60 L202 72 L182 78 z" fill="#0891b2"/>
  <text x="250" y="28" font-size="13" font-weight="700" fill="#d97706">회전자계 Ns</text>
  <text x="250" y="56" font-size="13" font-weight="700" fill="#0891b2">회전자 N (느림)</text>
  <text x="330" y="120" font-size="14" font-weight="700" fill="#166534">Ns = 120f/p</text>
  <text x="330" y="146" font-size="13.5" font-weight="700" fill="#dc2626">s = (Ns−N)/Ns</text>
  <text x="330" y="170" font-size="12" fill="#64748b">f: 주파수, p: 극수</text>
  <text x="160" y="206" font-size="13" text-anchor="middle" fill="#64748b">회전자가 자계보다 느린 만큼 = 슬립</text>
 </svg>`},

{s:"전기기기", t:"단상 유도전동기 기동법 (토크 순서)", crit:"유도전동기",
 f:"기동토크 큰 순서: 반발 기동형 > 반발 유도형 > 콘덴서 기동형 > 분상 기동형 > 셰이딩 코일형",
 pts:["단상은 스스로 돌지 못해서 기동장치가 필요하다",
      "기동토크가 가장 큰 것은 반발 기동형 (시험 단골)",
      "콘덴서형은 역률과 효율이 좋아 가정용에 많이 쓴다"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="26" font-size="13.5" font-weight="700" fill="#1e293b">기동토크 크기 비교</text>
  <g font-size="12.5" fill="#1e293b">
    <rect x="130" y="40" width="270" height="26" rx="4" fill="#dc2626"/>
    <text x="20" y="58">반발 기동형</text><text x="266" y="58" fill="#fff" text-anchor="middle" font-weight="700">가장 큼</text>
    <rect x="130" y="74" width="215" height="26" rx="4" fill="#ea580c"/>
    <text x="20" y="92">반발 유도형</text>
    <rect x="130" y="108" width="165" height="26" rx="4" fill="#d97706"/>
    <text x="20" y="126">콘덴서 기동형</text>
    <rect x="130" y="142" width="115" height="26" rx="4" fill="#f59e0b"/>
    <text x="20" y="160">분상 기동형</text>
    <rect x="130" y="176" width="60" height="26" rx="4" fill="#fbbf24"/>
    <text x="20" y="194">셰이딩 코일형</text>
    <text x="200" y="194" fill="#92400e" font-size="12">가장 작음</text>
  </g>
 </svg>`},

{s:"전기기기", t:"단상 정류회로 (반파 · 전파)", crit:"정류기 및 제어기기",
 f:"반파 Edc ≒ 0.45E · 전파 Edc ≒ 0.9E (E는 교류 실효값)",
 pts:["다이오드로 교류를 직류로 바꾸는 것이 정류",
      "반파: 한쪽 반만 통과 → 맥동이 크고 효율 낮음",
      "전파(브리지): 양쪽 다 활용 → 출력이 약 2배, 맥동 적음"],
 svg:`<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="240" fill="#fff"/>
  <text x="20" y="22" font-size="13.5" font-weight="700" fill="#0891b2">입력 (교류)</text>
  <path d="M20 66 H200" stroke="#94a3b8" stroke-width="1.8"/>
  <path d="M20 66 q11 -30 22 0 q11 30 22 0 q11 -30 22 0 q11 30 22 0 q11 -30 22 0 q11 30 22 0 q11 -30 22 0 q11 30 22 0"
        fill="none" stroke="#0891b2" stroke-width="3"/>
  <text x="20" y="104" font-size="11.5" fill="#64748b">위·아래로 방향이 바뀐다</text>
  <text x="240" y="22" font-size="13.5" font-weight="700" fill="#dc2626">반파 정류 (0.45E)</text>
  <path d="M240 66 H420" stroke="#94a3b8" stroke-width="1.8"/>
  <path d="M240 66 q11 -30 22 0 H284 q11 -30 22 0 H328 q11 -30 22 0 H372 q11 -30 22 0 H420"
        fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="240" y="104" font-size="11.5" fill="#94a3b8">한쪽만 통과 → 빈 구간(맥동 큼)</text>
  <text x="20" y="146" font-size="13.5" font-weight="700" fill="#166534">전파 정류 · 브리지 (0.9E)</text>
  <path d="M20 190 H200" stroke="#94a3b8" stroke-width="1.8"/>
  <path d="M20 190 q11 -30 22 0 q11 -30 22 0 q11 -30 22 0 q11 -30 22 0 q11 -30 22 0 q11 -30 22 0 q11 -30 22 0 q11 -30 22 0"
        fill="none" stroke="#16a34a" stroke-width="3"/>
  <text x="20" y="216" font-size="11.5" fill="#166534">모두 (+)로 뒤집힘 → 출력 약 2배</text>
  <g transform="translate(258,150)">
    <path d="M14 22 L44 6 L44 38 Z" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <path d="M44 6 V38" stroke="#1e293b" stroke-width="4"/>
    <path d="M0 22 H14 M44 22 H74" stroke="#1e293b" stroke-width="2.5"/>
    <text x="36" y="60" font-size="12" text-anchor="middle" fill="#64748b">다이오드</text>
    <text x="90" y="18" font-size="12.5" fill="#64748b">한 방향만</text>
    <text x="90" y="36" font-size="12.5" fill="#64748b">통과시킨다</text>
  </g>
 </svg>`},

{s:"전기기기", t:"SCR(사이리스터) 위상제어", crit:"정류기 및 제어기기",
 f:"게이트 신호로 점호각(α) 조절 → 출력 전압 조절",
 pts:["SCR은 게이트(G)에 신호를 줘야 켜지는 반도체 스위치 (P형 게이트)",
      "켜는 시점을 늦추면(점호각↑) 출력이 작아진다 → 밝기·속도 조절",
      "한번 켜지면 전류가 0이 될 때까지 계속 켜짐(자기소호 안 됨) ↔ GTO는 소호 가능"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <g transform="translate(30,50)">
    <path d="M20 30 L54 12 L54 48 Z" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
    <path d="M54 12 V48" stroke="#1e293b" stroke-width="4"/>
    <path d="M0 30 H20 M54 30 H90" stroke="#1e293b" stroke-width="2.5"/>
    <path d="M42 42 L42 74 H14" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <text x="6" y="80" font-size="12.5" font-weight="700" fill="#dc2626">G</text>
    <text x="4" y="24" font-size="12" fill="#64748b">A</text>
    <text x="78" y="24" font-size="12" fill="#64748b">K</text>
    <text x="45" y="106" font-size="12" text-anchor="middle" fill="#64748b">SCR</text>
  </g>
  <path d="M170 130 H420" stroke="#94a3b8" stroke-width="1.8"/>
  <path d="M170 130 q22 -46 44 0 t44 0 t44 0 t44 0" fill="none" stroke="#cbd5e1" stroke-width="2.5"/>
  <path d="M196 130 q9 -34 18 0" fill="#fecaca" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M284 130 q9 -34 18 0" fill="#fecaca" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M372 130 q9 -34 18 0" fill="#fecaca" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M196 130 V96" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="196" y="90" font-size="11.5" text-anchor="middle" fill="#dc2626">점호</text>
  <path d="M170 152 H196" stroke="#166534" stroke-width="2"/>
  <path d="M170 148 V156 M196 148 V156" stroke="#166534" stroke-width="2"/>
  <text x="183" y="170" font-size="12" text-anchor="middle" fill="#166534">α</text>
  <text x="300" y="170" font-size="12.5" text-anchor="middle" fill="#64748b">색칠된 부분만 부하에 전달</text>
  <text x="300" y="196" font-size="12.5" text-anchor="middle" fill="#dc2626">점호각을 늦추면 출력 ↓</text>
 </svg>`}
);
