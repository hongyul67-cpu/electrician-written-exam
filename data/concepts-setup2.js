// 전기기능사 - 그림으로 보는 개념 (전기설비 · 추가분)
window.CONCEPTS = window.CONCEPTS || [];
window.CONCEPTS.push(

{s:"전기설비", t:"전기공사 공구", crit:"배선재료 및 공구",
 f:"오스터=나사내기 · 리머=관 내면 다듬기 · 녹아웃 펀치=배전반 구멍 · 드라이브 이트=콘크리트",
 pts:["관 자르고(파이프 커터) → 내면 다듬고(리머) → 나사 내기(오스터) 순서",
      "녹아웃 펀치·홀소: 배전반·분전반 철판에 구멍 뚫기",
      "피시 테이프: 전선관 안으로 전선을 끌어들일 때 사용"],
 svg:`<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="240" fill="#fff"/>
  <g font-size="12">
    <rect x="20" y="30" width="76" height="46" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
    <path d="M36 60 L58 42 L80 60" fill="none" stroke="#334155" stroke-width="3"/>
    <text x="58" y="92" text-anchor="middle" fill="#334155">파이프 바이스</text>
    <rect x="116" y="30" width="76" height="46" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <circle cx="154" cy="52" r="15" fill="none" stroke="#92400e" stroke-width="3"/>
    <path d="M154 37 V67 M139 52 H169" stroke="#92400e" stroke-width="2.5" fill="none"/>
    <text x="154" y="92" text-anchor="middle" fill="#92400e">오스터(나사내기)</text>
    <rect x="212" y="30" width="76" height="46" rx="6" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
    <path d="M232 66 L250 38 L268 66 Z" fill="none" stroke="#155e75" stroke-width="3"/>
    <text x="250" y="92" text-anchor="middle" fill="#155e75">리머(내면 다듬기)</text>
    <rect x="308" y="30" width="76" height="46" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <circle cx="346" cy="52" r="14" fill="none" stroke="#166534" stroke-width="3"/>
    <circle cx="346" cy="52" r="5" fill="#166534"/>
    <text x="346" y="92" text-anchor="middle" fill="#166534">녹아웃 펀치</text>
    <rect x="20" y="118" width="76" height="46" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <path d="M34 148 H82 M58 130 V148" stroke="#991b1b" stroke-width="3" fill="none"/>
    <text x="58" y="180" text-anchor="middle" fill="#991b1b">드라이브 이트</text>
    <rect x="116" y="118" width="76" height="46" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
    <path d="M130 154 q12 -30 24 -12 q12 18 24 -12" fill="none" stroke="#334155" stroke-width="3"/>
    <text x="154" y="180" text-anchor="middle" fill="#334155">피시 테이프</text>
    <rect x="212" y="118" width="76" height="46" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
    <path d="M228 142 L250 130 L272 142 L250 154 Z" fill="none" stroke="#5b21b6" stroke-width="2.5"/>
    <text x="250" y="180" text-anchor="middle" fill="#5b21b6">와이어 스트리퍼</text>
    <rect x="308" y="118" width="76" height="46" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
    <path d="M330 130 V154 M346 126 V158 M362 130 V154" stroke="#854d0e" stroke-width="3" fill="none"/>
    <text x="346" y="180" text-anchor="middle" fill="#854d0e">와이어 게이지</text>
  </g>
  <text x="220" y="214" font-size="12.5" text-anchor="middle" fill="#166534">금속관 작업 순서: 절단 → 리머 → 오스터(나사) → 조립</text>
 </svg>`},

{s:"전기설비", t:"금속관 부속품", crit:"배선설비공사 및 전선허용전류",
 f:"커플링=관 상호 · 부싱=전선 보호 · 새들=관 고정 · 엔트런스 캡=인입구 빗물 막이",
 pts:["부싱: 관 끝에 끼워 전선 피복이 상하지 않게 보호",
      "노멀 밴드: 관을 직각으로 구부릴 때 쓰는 부속",
      "엔트런스 캡(우에사 캡): 인입구에서 빗물이 관으로 들어가지 않게"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <g font-size="12" fill="#334155">
    <rect x="24" y="40" width="80" height="20" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2.5"/>
    <rect x="52" y="34" width="24" height="32" rx="3" fill="#94a3b8" stroke="#334155" stroke-width="2.5"/>
    <text x="64" y="86" text-anchor="middle">커플링 (관 상호)</text>
    <rect x="140" y="40" width="60" height="20" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2.5"/>
    <path d="M200 34 q16 16 0 32" fill="#fde68a" stroke="#b45309" stroke-width="2.5"/>
    <text x="176" y="86" text-anchor="middle">부싱 (전선 보호)</text>
    <path d="M256 66 q0 -34 34 -34" fill="none" stroke="#475569" stroke-width="14"/>
    <text x="290" y="86" text-anchor="middle">노멀 밴드 (직각)</text>
    <rect x="340" y="44" width="76" height="16" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2.5"/>
    <path d="M352 44 q0 -14 12 -14 h24 q12 0 12 14" fill="none" stroke="#0891b2" stroke-width="3"/>
    <text x="378" y="86" text-anchor="middle">새들 (관 고정)</text>
    <path d="M60 170 V126 q0 -14 14 -14 h30" fill="none" stroke="#475569" stroke-width="14"/>
    <path d="M96 100 h26 v26" fill="#fca5a5" stroke="#dc2626" stroke-width="2.5"/>
    <text x="86" y="196" text-anchor="middle" fill="#991b1b">엔트런스 캡 (빗물 막이)</text>
    <rect x="220" y="120" width="80" height="20" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2.5"/>
    <rect x="252" y="112" width="16" height="36" rx="2" fill="#fbbf24" stroke="#b45309" stroke-width="2.5"/>
    <text x="260" y="170" text-anchor="middle" fill="#92400e">로크너트 (박스 고정)</text>
    <circle cx="370" cy="130" r="20" fill="none" stroke="#7c3aed" stroke-width="3"/>
    <circle cx="370" cy="130" r="10" fill="none" stroke="#7c3aed" stroke-width="3"/>
    <text x="370" y="170" text-anchor="middle" fill="#5b21b6">링 리듀서</text>
  </g>
  <text x="220" y="214" font-size="12" text-anchor="middle" fill="#166534">후강 = 안지름 기준 짝수 10종(16·22·28·36·42·54·70·82·92·104)</text>
  <text x="220" y="228" font-size="12" text-anchor="middle" fill="#166534">박강 = 바깥지름 기준 홀수 7종(19·25·31·39·51·63·75) · 두께 1.2mm</text>
 </svg>`},

{s:"전기설비", t:"케이블트레이 · 덕트 공사", crit:"배선설비공사 및 전선허용전류",
 f:"금속덕트 전선 점유율 20% 이하 (제어회로 배선만 넣으면 50% 이하) · 지지점 3m 이하",
 pts:["케이블트레이 종류: 사다리형 · 펀칭형 · 메시형 · 바닥밀폐형 (금속제·난연성)",
      "금속덕트: 전선 단면적 합계가 덕트 내부 단면적의 20% 이하 (제어회로만이면 50%)",
      "덕트 지지점 간 거리 3m 이하 (출입 못 하는 곳에 수직 설치 시 6m 이하)",
      "버스덕트: 큰 전류를 보내는 간선용 / 라이팅덕트: 조명기구 이동 설치용"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <text x="20" y="24" font-size="13" font-weight="700" fill="#334155">사다리형 케이블트레이</text>
  <path d="M24 44 H200 M24 90 H200" stroke="#475569" stroke-width="5" fill="none"/>
  <path d="M50 44 V90 M84 44 V90 M118 44 V90 M152 44 V90 M186 44 V90" stroke="#94a3b8" stroke-width="4" fill="none"/>
  <path d="M30 58 H196 M30 74 H196" stroke="#d97706" stroke-width="5" stroke-linecap="round" fill="none"/>
  <text x="112" y="110" font-size="12" text-anchor="middle" fill="#92400e">케이블을 얹어 지지</text>
  <text x="248" y="24" font-size="13" font-weight="700" fill="#334155">금속덕트</text>
  <rect x="252" y="40" width="160" height="52" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="3"/>
  <circle cx="280" cy="58" r="7" fill="#0891b2"/><circle cx="302" cy="58" r="7" fill="#0891b2"/>
  <circle cx="324" cy="58" r="7" fill="#0891b2"/><circle cx="280" cy="76" r="7" fill="#0891b2"/>
  <text x="332" y="110" font-size="12" text-anchor="middle" fill="#155e75">전선 총단면적 20% 이하</text>
  <text x="332" y="126" font-size="11.5" text-anchor="middle" fill="#0891b2">(제어회로 전용은 50%)</text>
  <rect x="24" y="140" width="180" height="58" rx="6" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="38" y="162" font-size="12.5" font-weight="700" fill="#92400e">버스덕트</text>
  <text x="38" y="182" font-size="12" fill="#78350f">대전류 간선용 (도체를 덕트에)</text>
  <rect x="234" y="140" width="180" height="58" rx="6" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
  <text x="248" y="162" font-size="12.5" font-weight="700" fill="#155e75">라이팅덕트</text>
  <text x="248" y="182" font-size="12" fill="#0c4a6e">조명기구를 옮겨 달 수 있음</text>
 </svg>`},

{s:"전기설비", t:"과전류차단기 · 누전차단기 동작", crit:"전선 및 기계기구의 보안공사",
 f:"일반 30[mA] 이하·0.03초 이내 · 욕실/화장실 등 물에 젖는 장소는 15[mA] 이하·0.03초",
 pts:["과전류차단기(MCCB): 전류가 과하게 흐르면 끊음 → 전선·기기 보호",
      "누전차단기(ELB): 들어간 전류와 나온 전류의 차이를 감지 → 사람 보호",
      "조명·32A 이하 콘센트 분기회로는 30mA 이하",
      "욕실·화장실처럼 몸이 젖는 곳은 더 엄격하게 15mA 이하 (자주 출제!)"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <text x="20" y="24" font-size="13" font-weight="700" fill="#334155">정상: 들어간 전류 = 나온 전류</text>
  <path d="M30 60 H200" stroke="#0891b2" stroke-width="4" fill="none"/>
  <path d="M30 92 H200" stroke="#0891b2" stroke-width="4" fill="none"/>
  <path d="M120 52 L136 60 L120 68 z" fill="#0891b2"/>
  <path d="M110 100 L94 92 L110 84 z" fill="#0891b2"/>
  <ellipse cx="70" cy="76" rx="20" ry="26" fill="none" stroke="#16a34a" stroke-width="3"/>
  <text x="70" y="128" font-size="12" text-anchor="middle" fill="#166534">ZCT 감지</text>
  <rect x="200" y="46" width="46" height="60" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
  <text x="223" y="82" font-size="13" font-weight="700" text-anchor="middle" fill="#166534">ON</text>
  <text x="248" y="24" font-size="13" font-weight="700" fill="#dc2626">누전: 차이가 생기면 즉시 차단</text>
  <path d="M256 60 H408" stroke="#dc2626" stroke-width="4" fill="none"/>
  <path d="M256 92 H360" stroke="#dc2626" stroke-width="4" fill="none"/>
  <path d="M360 92 V128" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4" fill="none"/>
  <path d="M352 128 L360 146 L368 128 z" fill="#dc2626"/>
  <text x="392" y="140" font-size="12" text-anchor="middle" fill="#dc2626">누설전류</text>
  <path d="M330 176 h60 m-30 -14 v14" stroke="#16a34a" stroke-width="3" fill="none"/>
  <text x="300" y="112" font-size="12" fill="#991b1b">차이 발생!</text>
  <rect x="30" y="158" width="290" height="56" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
  <text x="44" y="178" font-size="12.5" font-weight="700" fill="#991b1b">인체 보호용 누전차단기 감도전류</text>
  <text x="44" y="196" font-size="12" fill="#7f1d1d">일반(조명·32A 이하 콘센트) 30mA 이하 · 0.03초</text>
  <text x="44" y="210" font-size="12" font-weight="700" fill="#dc2626">욕실·화장실 등 물에 젖는 곳 15mA 이하</text>
 </svg>`},

{s:"전기설비", t:"피뢰설비 (낙뢰 보호)", crit:"전선 및 기계기구의 보안공사",
 f:"높이 20[m] 이상 건축물에 설치 · 수뢰부 → 인하도선 → 접지극 · 접지저항 10[Ω] 이하",
 pts:["돌침(수뢰부)이 벼락을 받아 인하도선으로 땅에 흘려보낸다",
      "높이 20m 이상 건축물은 피뢰설비 설치 대상",
      "피뢰시스템에 접지도체가 접속된 경우 접지저항 10[Ω] 이하 (출제 포인트)",
      "피뢰침 보호각은 일반 건물 60° 이하, 위험물 장소 45° 이하"],
 svg:`<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="240" fill="#fff"/>
  <path d="M40 200 H420" stroke="#a16207" stroke-width="4" fill="none"/>
  <rect x="40" y="204" width="380" height="34" fill="#fef3c7"/>
  <rect x="150" y="80" width="140" height="120" fill="#f1f5f9" stroke="#475569" stroke-width="3"/>
  <text x="220" y="150" font-size="13" text-anchor="middle" fill="#64748b">건축물 20m 이상</text>
  <path d="M220 80 V44" stroke="#334155" stroke-width="5" fill="none"/>
  <path d="M212 44 L220 22 L228 44 z" fill="#dc2626"/>
  <text x="252" y="34" font-size="12.5" font-weight="700" fill="#dc2626">돌침(수뢰부)</text>
  <path d="M96 20 L128 52 L112 56 L140 84" fill="none" stroke="#f59e0b" stroke-width="4"/>
  <text x="72" y="40" font-size="13" font-weight="700" fill="#d97706">⚡낙뢰</text>
  <path d="M220 44 L150 92" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="6 4" fill="none"/>
  <path d="M220 44 L290 92" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="6 4" fill="none"/>
  <text x="220" y="72" font-size="11.5" text-anchor="middle" fill="#64748b">보호각 60° 이하</text>
  <path d="M286 80 V200" stroke="#16a34a" stroke-width="4" fill="none"/>
  <text x="300" y="140" font-size="12" font-weight="700" fill="#166534">인하도선</text>
  <path d="M266 212 H306 M272 222 H300 M278 232 H294" stroke="#16a34a" stroke-width="4" fill="none"/>
  <text x="286" y="196" font-size="11.5" text-anchor="middle" fill="#166534">접지극</text>
 </svg>`},

{s:"전기설비", t:"절연저항 · 접지저항 측정", crit:"전선 및 기계기구의 보안공사",
 f:"절연저항 = 메거(절연저항계) · 접지저항 = 콜라우시 브리지 / 어스테스터",
 pts:["절연저항: 전선과 대지 사이가 잘 절연되어 있는지 → 메거로 측정 (MΩ)",
      "접지저항: 접지극과 대지 사이 저항 → 콜라우시 브리지법",
      "정전이 어려워 측정이 곤란하면 누설전류 1[mA] 이하로 유지"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <text x="20" y="24" font-size="13" font-weight="700" fill="#0891b2">절연저항 · 메거</text>
  <rect x="30" y="40" width="90" height="70" rx="8" fill="#e0f2fe" stroke="#0891b2" stroke-width="3"/>
  <circle cx="75" cy="66" r="16" fill="#fff" stroke="#155e75" stroke-width="2.5"/>
  <path d="M75 66 L86 56" stroke="#dc2626" stroke-width="2.5" fill="none"/>
  <text x="75" y="100" font-size="12" font-weight="700" text-anchor="middle" fill="#155e75">MΩ</text>
  <path d="M120 60 H176" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M120 92 H176 V128" stroke="#1e293b" stroke-width="3" fill="none"/>
  <rect x="176" y="44" width="20" height="34" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
  <text x="186" y="34" font-size="11.5" text-anchor="middle" fill="#92400e">전선</text>
  <path d="M150 140 H210" stroke="#a16207" stroke-width="3" fill="none"/>
  <text x="180" y="158" font-size="11.5" text-anchor="middle" fill="#a16207">대지</text>
  <text x="250" y="24" font-size="13" font-weight="700" fill="#16a34a">접지저항 · 콜라우시 브리지</text>
  <rect x="256" y="40" width="90" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
  <text x="301" y="82" font-size="13" font-weight="700" text-anchor="middle" fill="#166534">Ω</text>
  <path d="M301 110 V148" stroke="#16a34a" stroke-width="3" fill="none"/>
  <path d="M250 160 H420" stroke="#a16207" stroke-width="3" fill="none"/>
  <path d="M286 168 h30 M292 178 h18" stroke="#16a34a" stroke-width="3.5" fill="none"/>
  <text x="360" y="130" font-size="12" fill="#166534">보조 접지극 2개</text>
  <path d="M356 160 V178 M396 160 V178" stroke="#16a34a" stroke-width="3" fill="none"/>
  <text x="220" y="208" font-size="12.5" text-anchor="middle" fill="#dc2626">정전 곤란 시 → 누설전류 1[mA] 이하 유지</text>
 </svg>`},

{s:"전기설비", t:"가공인입선의 높이", crit:"가공인입선 및 배전선 공사",
 f:"저압 인입선: 도로 횡단 5[m] · 철도 횡단 6.5[m] · 횡단보도교 3[m] · 기타 4[m]",
 pts:["차가 다니는 도로를 건널 때는 5m 이상 (가장 자주 나옴)",
      "철도·궤도를 건널 때는 레일면상 6.5m 이상",
      "가공인입선 최소 굵기: 경동선 2.6mm (경간 15m 초과 시)"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <path d="M20 196 H420" stroke="#334155" stroke-width="4" fill="none"/>
  <rect x="20" y="200" width="400" height="28" fill="#e2e8f0"/>
  <rect x="60" y="40" width="14" height="156" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
  <rect x="366" y="40" width="14" height="156" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
  <path d="M67 56 Q220 96 373 56" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M220 84 V196" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
  <path d="M212 96 h16 M212 188 h16" stroke="#dc2626" stroke-width="2.5" fill="none"/>
  <text x="232" y="146" font-size="15" font-weight="700" fill="#dc2626">5m 이상</text>
  <text x="232" y="168" font-size="12" fill="#991b1b">(도로 횡단)</text>
  <rect x="120" y="164" width="56" height="32" rx="6" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
  <circle cx="134" cy="198" r="7" fill="#334155"/><circle cx="162" cy="198" r="7" fill="#334155"/>
  <text x="148" y="186" font-size="11" text-anchor="middle" fill="#78350f">차량</text>
  <rect x="270" y="30" width="150" height="88" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="284" y="52" font-size="12.5" font-weight="700" fill="#92400e">저압 인입선 높이</text>
  <text x="284" y="72" font-size="12" fill="#78350f">철도 횡단 6.5m</text>
  <text x="284" y="90" font-size="12" fill="#78350f">횡단보도교 3m</text>
  <text x="284" y="108" font-size="12" fill="#78350f">기타 4m</text>
 </svg>`},

{s:"전기설비", t:"수변전설비 단선도", crit:"고압 및 저압 배전반 공사",
 f:"인입 → COS/PF → 피뢰기(LA) → 계기용변성기 → 차단기 → 변압기 → 배전반",
 pts:["고압을 받아 저압으로 낮춰 건물에 공급하는 설비 (큐비클에 수납)",
      "피뢰기(LA)는 변압기 앞에 설치해 이상전압으로부터 보호",
      "고압 배전반은 부하 합계 300[kVA] 초과 시 전류계·전압계를 부착"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <path d="M20 60 H400" stroke="#1e293b" stroke-width="3" fill="none"/>
  <text x="22" y="46" font-size="12" fill="#64748b">고압 인입</text>
  <g stroke="#1e293b" stroke-width="2.5" fill="#fff">
    <circle cx="80" cy="60" r="10"/><text x="80" y="92" font-size="11.5" text-anchor="middle" fill="#334155" stroke="none">COS</text>
    <rect x="130" y="50" width="20" height="20"/><text x="140" y="92" font-size="11.5" text-anchor="middle" fill="#334155" stroke="none">PF</text>
  </g>
  <path d="M196 60 V88" stroke="#1e293b" stroke-width="2.5" fill="none"/>
  <rect x="186" y="88" width="20" height="26" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M196 114 V134 M186 134 h20 M190 140 h12 M193 146 h6" stroke="#16a34a" stroke-width="2.5" fill="none"/>
  <text x="196" y="166" font-size="11.5" text-anchor="middle" fill="#dc2626">피뢰기 LA</text>
  <ellipse cx="250" cy="60" rx="16" ry="11" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <text x="250" y="92" font-size="11.5" text-anchor="middle" fill="#92400e">CT·PT</text>
  <rect x="292" y="46" width="24" height="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="304" y="92" font-size="11.5" text-anchor="middle" fill="#1d4ed8">차단기</text>
  <g stroke="#0891b2" stroke-width="3" fill="none">
    <path d="M360 50 a9 8 0 0 1 0 16"/><path d="M368 50 a9 8 0 0 0 0 16"/>
  </g>
  <text x="364" y="92" font-size="11.5" text-anchor="middle" fill="#155e75">변압기</text>
  <path d="M364 74 V120 H60 V150" fill="none" stroke="#1e293b" stroke-width="3"/>
  <rect x="20" y="150" width="80" height="44" rx="5" fill="#f1f5f9" stroke="#334155" stroke-width="2.5"/>
  <text x="60" y="178" font-size="12" font-weight="700" text-anchor="middle" fill="#334155">저압 배전반</text>
  <text x="240" y="196" font-size="12.5" text-anchor="middle" fill="#166534">부하 300[kVA] 초과 → 전류계·전압계 부착</text>
 </svg>`},

{s:"전기설비", t:"특수장소 공사방법", crit:"특수장소 공사",
 f:"폭연성 먼지·화약류: 금속관 / 케이블(MI·개장) 공사만 가능",
 pts:["폭연성 먼지·화약류 장소: 금속관공사, 케이블공사(MI·개장 케이블)만",
      "가연성 가스·위험물 장소: 금속관공사, 케이블공사 (+합성수지관은 불가한 곳 주의)",
      "가연성 먼지·불연성 먼지: 금속관·합성수지관·케이블공사 가능"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <g font-size="12">
    <rect x="20" y="30" width="400" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <text x="34" y="52" font-weight="700" fill="#991b1b">폭연성 먼지 · 화약류</text>
    <text x="220" y="52" fill="#7f1d1d">금속관 · 케이블(MI, 개장)</text>
    <rect x="20" y="70" width="400" height="34" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
    <text x="34" y="92" font-weight="700" fill="#9a3412">가연성 가스 · 위험물</text>
    <text x="220" y="92" fill="#7c2d12">금속관 · 케이블</text>
    <rect x="20" y="110" width="400" height="34" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
    <text x="34" y="132" font-weight="700" fill="#854d0e">가연성 먼지</text>
    <text x="220" y="132" fill="#713f12">금속관 · 합성수지관 · 케이블</text>
    <rect x="20" y="150" width="400" height="34" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="34" y="172" font-weight="700" fill="#166534">불연성 먼지 · 기타</text>
    <text x="220" y="172" fill="#14532d">위 + 애자 · 금속덕트 · 버스덕트 등</text>
  </g>
  <text x="220" y="212" font-size="12.5" text-anchor="middle" fill="#166534">위험할수록 쓸 수 있는 공사 방법이 줄어든다 (금속관·케이블은 어디서나 OK)</text>
 </svg>`},

{s:"전기설비", t:"조명 용어 (광속·광도·조도)", crit:"전기응용시설 공사",
 f:"광속 F[lm] · 광도 I[cd] · 조도 E[lx] = F/A · 휘도[cd/m²]",
 pts:["광속: 빛의 양 전체 [lm] / 광도: 한 방향의 빛의 세기 [cd]",
      "조도: 면이 받는 밝기 [lx] = 광속 ÷ 면적 → 거리의 제곱에 반비례",
      "구 광원의 광속 F = 4πI [lm]"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <circle cx="120" cy="60" r="24" fill="#fef9c3" stroke="#d97706" stroke-width="3"/>
  <g stroke="#f59e0b" stroke-width="3">
    <path d="M120 92 V108 M96 84 L86 98 M144 84 L154 98"/>
  </g>
  <text x="120" y="34" font-size="12.5" font-weight="700" text-anchor="middle" fill="#92400e">광원</text>
  <path d="M120 96 L60 176 M120 96 L180 176" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6 4" fill="none"/>
  <rect x="56" y="176" width="128" height="14" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
  <text x="120" y="208" font-size="12.5" text-anchor="middle" fill="#334155">면적 A [m²] → 조도 E [lx]</text>
  <text x="200" y="122" font-size="12.5" font-weight="700" fill="#d97706">광도 I [cd]</text>
  <path d="M150 110 H196" stroke="#d97706" stroke-width="2" fill="none"/>
  <rect x="248" y="34" width="172" height="130" rx="10" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="334" y="58" font-size="13" font-weight="700" text-anchor="middle" fill="#92400e">단위 정리</text>
  <text x="264" y="84" font-size="12.5" fill="#78350f">광속 F : 루멘 [lm]</text>
  <text x="264" y="106" font-size="12.5" fill="#78350f">광도 I : 칸델라 [cd]</text>
  <text x="264" y="128" font-size="12.5" fill="#78350f">조도 E : 럭스 [lx]</text>
  <text x="264" y="150" font-size="12.5" font-weight="700" fill="#b45309">구 광원 F = 4πI</text>
 </svg>`},

{s:"전기설비", t:"3개소 점멸 (4로 스위치)", crit:"전기응용시설 공사",
 f:"3개소 이상 점멸 = 3로 스위치 2개 + 4로 스위치 (개소 수 − 2)개",
 pts:["양쪽 끝은 3로 스위치, 가운데는 4로 스위치를 넣는다",
      "3개소면 3로 2개 + 4로 1개, 4개소면 3로 2개 + 4로 2개",
      "4로 스위치는 여행선 2본을 서로 바꿔주는 역할"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <circle cx="220" cy="40" r="19" fill="#fef9c3" stroke="#d97706" stroke-width="3"/>
  <path d="M212 32 l16 16 M228 32 l-16 16" stroke="#d97706" stroke-width="2.5" fill="none"/>
  <text x="220" y="16" font-size="12" text-anchor="middle" fill="#92400e">전등</text>
  <circle cx="34" cy="86" r="15" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
  <path d="M27 86 q4 -6 7 0 q3 6 7 0" fill="none" stroke="#1e293b" stroke-width="2"/>
  <text x="34" y="120" font-size="11.5" text-anchor="middle" fill="#64748b">전원</text>
  <path d="M34 40 H201" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M34 40 V71" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M34 101 V140 H80" stroke="#1e293b" stroke-width="3" fill="none"/>
  <path d="M239 40 H406 V140 H360" stroke="#1e293b" stroke-width="3" fill="none"/>
  <circle cx="84" cy="140" r="5" fill="#1e293b"/>
  <path d="M84 140 L124 122" stroke="#dc2626" stroke-width="3" fill="none"/>
  <circle cx="128" cy="122" r="5" fill="#1e293b"/><circle cx="128" cy="162" r="5" fill="#1e293b"/>
  <text x="96" y="192" font-size="12" text-anchor="middle" fill="#dc2626">3로</text>
  <circle cx="356" cy="140" r="5" fill="#1e293b"/>
  <path d="M356 140 L316 122" stroke="#dc2626" stroke-width="3" fill="none"/>
  <circle cx="312" cy="122" r="5" fill="#1e293b"/><circle cx="312" cy="162" r="5" fill="#1e293b"/>
  <text x="344" y="192" font-size="12" text-anchor="middle" fill="#dc2626">3로</text>
  <rect x="184" y="106" width="72" height="72" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
  <path d="M134 122 H184 M134 162 H184 M256 122 H306 M256 162 H306" stroke="#0891b2" stroke-width="3" fill="none"/>
  <path d="M196 122 L244 162 M196 162 L244 122" stroke="#7c3aed" stroke-width="3" fill="none"/>
  <text x="220" y="196" font-size="12" text-anchor="middle" fill="#5b21b6">4로 (여행선을 교차)</text>
 </svg>`}
);
