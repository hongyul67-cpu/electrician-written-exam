// 전기기능사 - 그림으로 보는 개념 (전기설비)
window.CONCEPTS = window.CONCEPTS || [];
window.CONCEPTS.push(

{s:"전기설비", t:"전등 1개를 2개소에서 점멸 (3로 스위치)", crit:"전기응용시설 공사",
 f:"3로 스위치 2개 + 공통선 2개 (여행선)",
 pts:["계단·복도처럼 양쪽에서 켜고 끌 때 쓰는 배선",
      "3로 스위치 2개를 여행선(트래블러) 2선으로 연결한다",
      "어느 쪽 스위치를 눌러도 상태가 바뀐다"],
 svg:`<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="220" fill="#fff"/>
  <circle cx="40" cy="84" r="17" fill="#fff" stroke="#1e293b" stroke-width="3"/>
  <path d="M32 84 q4 -7 8 0 q4 7 8 0" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <text x="12" y="120" font-size="12.5" fill="#64748b">전원</text>
  <path d="M40 46 V67" stroke="#1e293b" stroke-width="3"/>
  <path d="M40 101 V132" stroke="#1e293b" stroke-width="3"/>
  <path d="M40 132 H100" stroke="#1e293b" stroke-width="3"/>
  <path d="M40 46 H198" stroke="#1e293b" stroke-width="3"/>
  <circle cx="220" cy="46" r="21" fill="#fef9c3" stroke="#d97706" stroke-width="3"/>
  <path d="M211 37 l18 18 M229 37 l-18 18" stroke="#d97706" stroke-width="2.5"/>
  <text x="220" y="20" font-size="12.5" text-anchor="middle" fill="#92400e">전등</text>
  <path d="M241 46 H404 V132 H348" fill="none" stroke="#1e293b" stroke-width="3"/>
  <circle cx="100" cy="132" r="5.5" fill="#1e293b"/>
  <path d="M100 132 L148 110" stroke="#dc2626" stroke-width="3.5"/>
  <circle cx="152" cy="110" r="5.5" fill="#1e293b"/>
  <circle cx="152" cy="154" r="5.5" fill="#1e293b"/>
  <text x="120" y="186" font-size="12.5" text-anchor="middle" fill="#dc2626">3로 스위치 S1</text>
  <circle cx="344" cy="132" r="5.5" fill="#1e293b"/>
  <path d="M344 132 L296 110" stroke="#dc2626" stroke-width="3.5"/>
  <circle cx="292" cy="110" r="5.5" fill="#1e293b"/>
  <circle cx="292" cy="154" r="5.5" fill="#1e293b"/>
  <text x="322" y="186" font-size="12.5" text-anchor="middle" fill="#dc2626">3로 스위치 S2</text>
  <path d="M158 110 H286" stroke="#0891b2" stroke-width="3"/>
  <path d="M158 154 H286" stroke="#0891b2" stroke-width="3"/>
  <text x="222" y="100" font-size="12" text-anchor="middle" fill="#0891b2">여행선(트래블러) 2본</text>
  <text x="222" y="212" font-size="13" text-anchor="middle" fill="#166534">지금은 위쪽 여행선으로 연결 → 전등 ON</text>
 </svg>`},

{s:"전기설비", t:"접지공사 (접지선은 녹색)", crit:"전선 및 기계기구의 보안공사",
 f:"접지선 색 = 녹색(녹황 얼룩) · 접지저항 측정 = 콜라우시 브리지법",
 pts:["기기 외함에 새는 전기를 땅으로 흘려보내 감전을 막는다",
      "접지선은 녹색(또는 녹황 얼룩) 절연전선을 사용한다",
      "접지저항은 작을수록 좋다 → 접지극을 깊고 여러 개로"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <rect x="60" y="40" width="120" height="90" rx="6" fill="#f1f5f9" stroke="#334155" stroke-width="3"/>
  <text x="120" y="82" font-size="14" font-weight="700" text-anchor="middle" fill="#334155">전기기기</text>
  <text x="120" y="104" font-size="12" text-anchor="middle" fill="#64748b">(금속 외함)</text>
  <path d="M120 130 V186" stroke="#16a34a" stroke-width="5"/>
  <text x="136" y="164" font-size="13" font-weight="700" fill="#16a34a">접지선(녹색)</text>
  <path d="M20 186 H420" fill="none" stroke="#a16207" stroke-width="4"/>
  <rect x="20" y="190" width="400" height="34" fill="#fef3c7"/>
  <text x="380" y="212" font-size="12.5" fill="#a16207">대지</text>
  <path d="M100 200 H140 M106 210 H134 M112 220 H128" stroke="#16a34a" stroke-width="4"/>
  <text x="120" y="176" font-size="11.5" text-anchor="middle" fill="#166534">접지극</text>
  <path d="M180 70 H250" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="292" y="66" font-size="12.5" fill="#dc2626">누전 전류가</text>
  <text x="292" y="84" font-size="12.5" fill="#dc2626">사람 대신 땅으로!</text>
  <g transform="translate(300,110)">
    <circle cx="20" cy="20" r="17" fill="#fff" stroke="#334155" stroke-width="2.5"/>
    <text x="20" y="26" font-size="15" text-anchor="middle">🧍</text>
    <path d="M4 4 l32 32 M36 4 l-32 32" stroke="#16a34a" stroke-width="3"/>
    <text x="20" y="58" font-size="11.5" text-anchor="middle" fill="#166534">감전 예방</text>
  </g>
 </svg>`},

{s:"전기설비", t:"전선관 공사의 종류", crit:"배선설비공사 및 전선허용전류",
 f:"후강: 짝수 외경(16·22·28·36·42·54·70) · 박강: 홀수(19·25·31·39·51·63·75)",
 pts:["금속관: 튼튼하고 기계적 보호 우수 (후강·박강으로 구분)",
      "합성수지관: 가볍고 부식에 강함, 지지점 간 거리 1.5m 이하",
      "가요전선관: 잘 휘어져 진동 있는 곳·굽은 곳에 사용"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <g>
    <rect x="30" y="50" width="110" height="34" rx="6" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
    <text x="85" y="73" font-size="13" font-weight="700" text-anchor="middle" fill="#334155">금속관</text>
    <text x="85" y="104" font-size="11.5" text-anchor="middle" fill="#64748b">후강 · 박강</text>
    <text x="85" y="122" font-size="11.5" text-anchor="middle" fill="#64748b">기계적 보호 ↑</text>
  </g>
  <g>
    <rect x="165" y="50" width="110" height="34" rx="16" fill="#e0f2fe" stroke="#0891b2" stroke-width="3"/>
    <text x="220" y="73" font-size="13" font-weight="700" text-anchor="middle" fill="#155e75">합성수지관</text>
    <text x="220" y="104" font-size="11.5" text-anchor="middle" fill="#64748b">가볍고 부식 X</text>
    <text x="220" y="122" font-size="11.5" text-anchor="middle" fill="#64748b">지지점 1.5m 이하</text>
  </g>
  <g>
    <path d="M300 67 q10 -14 20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#d97706" stroke-width="9"/>
    <text x="360" y="104" font-size="11.5" text-anchor="middle" fill="#64748b">잘 휘어짐</text>
    <text x="360" y="122" font-size="11.5" text-anchor="middle" fill="#64748b">진동·굽은 곳</text>
    <text x="360" y="44" font-size="13" font-weight="700" text-anchor="middle" fill="#92400e">가요전선관</text>
  </g>
  <rect x="30" y="150" width="380" height="60" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="46" y="172" font-size="12.5" font-weight="700" fill="#92400e">접속에 쓰는 커플링</text>
  <text x="46" y="192" font-size="12" fill="#78350f">가요 ↔ 가요 : 스플릿 커플링 / 가요 ↔ 금속관 : 콤비네이션 커플링</text>
 </svg>`},

{s:"전기설비", t:"옥내배선용 그림기호 (심벌)", crit:"전기응용시설 공사",
 f:"시험에 자주 나오는 기본 심벌 모음",
 pts:["도면에서 기구를 나타내는 약속된 기호",
      "점멸기(스위치)는 S, 콘센트는 반원 모양이 기본",
      "EQ는 지진감지기, 누전경보기·차단기 기호와 구분해서 외우기"],
 svg:`<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="250" fill="#fff"/>
  <g stroke="#1e293b" fill="none" stroke-width="2.6">
    <circle cx="60" cy="45" r="16"/><path d="M49 34 l22 22 M71 34 l-22 22"/>
    <text x="60" y="82" font-size="12" text-anchor="middle" fill="#334155" stroke="none">전등(백열)</text>
    <path d="M150 60 a16 16 0 0 1 32 0 z"/><path d="M166 60 V76"/>
    <text x="166" y="94" font-size="12" text-anchor="middle" fill="#334155" stroke="none">콘센트</text>
    <circle cx="270" cy="45" r="15"/>
    <text x="270" y="51" font-size="14" font-weight="700" text-anchor="middle" fill="#334155" stroke="none">S</text>
    <text x="270" y="82" font-size="12" text-anchor="middle" fill="#334155" stroke="none">점멸기</text>
    <circle cx="370" cy="45" r="15"/>
    <text x="370" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#334155" stroke="none">EQ</text>
    <text x="370" y="82" font-size="12" text-anchor="middle" fill="#334155" stroke="none">지진감지기</text>
    <rect x="42" y="140" width="36" height="26"/>
    <text x="60" y="158" font-size="11.5" font-weight="700" text-anchor="middle" fill="#334155" stroke="none">B</text>
    <text x="60" y="186" font-size="12" text-anchor="middle" fill="#334155" stroke="none">배선용차단기</text>
    <rect x="148" y="140" width="36" height="26"/>
    <text x="166" y="158" font-size="11" font-weight="700" text-anchor="middle" fill="#334155" stroke="none">E</text>
    <text x="166" y="186" font-size="12" text-anchor="middle" fill="#334155" stroke="none">누전차단기</text>
    <path d="M252 152 H288 M258 140 V166"/>
    <text x="270" y="186" font-size="12" text-anchor="middle" fill="#334155" stroke="none">분전반</text>
    <rect x="252" y="140" width="36" height="26"/>
    <circle cx="370" cy="153" r="16"/>
    <path d="M362 145 h16 v16 h-16 z"/>
    <text x="370" y="186" font-size="12" text-anchor="middle" fill="#334155" stroke="none">환기팬</text>
  </g>
  <text x="220" y="228" font-size="12.5" text-anchor="middle" fill="#64748b">※ 실제 시험에서는 그림만 보고 이름을 골라야 합니다</text>
 </svg>`},

{s:"전기설비", t:"가공전선로 장주 (전주 세우기)", crit:"가공인입선 및 배전선 공사",
 f:"발판 볼트: 지표상 1.8m 이상 · 지지선(지선) 2.6mm 이상 3조 이상 · 7m 전주 매설 1.2m",
 pts:["완금(암)에 애자를 달고 전선을 지지한다",
      "발판 볼트는 지표상 1.8m 이상 높이부터 설치 (아이들 오르기 방지)",
      "지지선(지선)은 소선 3가닥 이상을 꼬아서 사용"],
 svg:`<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="250" fill="#fff"/>
  <path d="M20 210 H420" stroke="#a16207" stroke-width="4"/>
  <rect x="20" y="214" width="400" height="34" fill="#fef3c7"/>
  <rect x="196" y="30" width="16" height="180" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
  <path d="M204 210 V244" stroke="#94a3b8" stroke-width="6" stroke-dasharray="5 4"/>
  <text x="228" y="240" font-size="11.5" fill="#a16207">매설 1.2m (7m 전주)</text>
  <path d="M140 56 H268" stroke="#475569" stroke-width="7"/>
  <text x="112" y="52" font-size="12" fill="#64748b">완금</text>
  <g fill="#e0f2fe" stroke="#0891b2" stroke-width="2.5">
    <circle cx="152" cy="46" r="7"/><circle cx="204" cy="46" r="7"/><circle cx="256" cy="46" r="7"/>
  </g>
  <text x="296" y="32" font-size="12" fill="#155e75">애자</text>
  <path d="M20 40 H152 M256 40 H420" stroke="#1e293b" stroke-width="2.5"/>
  <path d="M204 120 L104 208" stroke="#d97706" stroke-width="4"/>
  <text x="30" y="172" font-size="12" font-weight="700" fill="#92400e">지지선(지선)</text>
  <text x="30" y="190" font-size="11" fill="#92400e">3조 이상</text>
  <path d="M212 168 h14 M212 180 h14 M212 192 h14" stroke="#dc2626" stroke-width="3.5"/>
  <text x="234" y="184" font-size="11.5" fill="#dc2626">발판 볼트</text>
  <path d="M300 168 V210" stroke="#166534" stroke-width="2"/>
  <path d="M296 168 h8 M296 210 h8" stroke="#166534" stroke-width="2"/>
  <text x="310" y="192" font-size="11.5" fill="#166534">1.8m 이상</text>
 </svg>`},

{s:"전기설비", t:"전선 접속 방법", crit:"전선접속",
 f:"단선 직선접속: 트위스트(6mm² 이하) / 브리타니아(10mm² 이상) · 종단: 쥐꼬리접속",
 pts:["트위스트 접속: 가는 단선(6mm² 이하)을 서로 꼬아서 접속",
      "브리타니아 접속: 굵은 단선(10mm² 이상)에 첨선을 대고 조인선으로 감음",
      "쥐꼬리 접속: 박스 안에서 여러 전선 끝을 모아 꼬는 종단접속"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <text x="20" y="26" font-size="13" font-weight="700" fill="#1e293b">트위스트 접속 (가는 선)</text>
  <path d="M20 56 H150" stroke="#b45309" stroke-width="4"/>
  <path d="M290 56 H420" stroke="#b45309" stroke-width="4"/>
  <path d="M150 56 q12 -12 24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#b45309" stroke-width="4"/>
  <path d="M150 56 q12 12 24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#d97706" stroke-width="4"/>
  <text x="20" y="112" font-size="13" font-weight="700" fill="#1e293b">브리타니아 접속 (굵은 선)</text>
  <path d="M20 142 H170 M270 142 H420" stroke="#b45309" stroke-width="6"/>
  <rect x="170" y="136" width="100" height="12" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
  <g stroke="#334155" stroke-width="2.4">
    <path d="M180 130 v24 M196 130 v24 M212 130 v24 M228 130 v24 M244 130 v24 M260 130 v24"/>
  </g>
  <text x="220" y="124" font-size="11.5" text-anchor="middle" fill="#64748b">첨선 + 조인선으로 감기</text>
  <text x="20" y="196" font-size="13" font-weight="700" fill="#1e293b">쥐꼬리 접속 (박스 안 종단)</text>
  <rect x="300" y="168" width="60" height="50" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="2.5"/>
  <path d="M240 194 H316" stroke="#b45309" stroke-width="4"/>
  <path d="M240 206 H316" stroke="#d97706" stroke-width="4"/>
  <path d="M316 194 q10 6 0 12 q-10 -6 0 -12" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="330" y="164" font-size="11.5" text-anchor="middle" fill="#64748b">박스</text>
 </svg>`},

{s:"전기설비", t:"전선 약호 (이름 외우기)", crit:"배선재료 및 공구",
 f:"VV=비닐절연 비닐외장 케이블 · DV=인입용 · OW=옥외용 · NR=일반용 단심",
 pts:["앞글자만 기억: D(Drop=인입), O(Outdoor=옥외), V(Vinyl=비닐)",
      "경동선은 강해서 옥외, 연동선은 부드러워서 옥내배선",
      "MI 케이블·개장 케이블은 폭연성 먼지 장소에 사용"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <g font-size="13.5">
    <rect x="20" y="30" width="400" height="34" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="34" y="53" font-weight="700" fill="#92400e">VV</text>
    <text x="110" y="53" fill="#78350f">비닐절연 비닐외장 케이블 (0.6/1kV)</text>
    <rect x="20" y="70" width="400" height="34" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
    <text x="34" y="93" font-weight="700" fill="#155e75">DV</text>
    <text x="110" y="93" fill="#0c4a6e">인입용 비닐절연전선 (Drop)</text>
    <rect x="20" y="110" width="400" height="34" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="34" y="133" font-weight="700" fill="#166534">OW</text>
    <text x="110" y="133" fill="#14532d">옥외용 비닐절연전선 (Outdoor)</text>
    <rect x="20" y="150" width="400" height="34" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
    <text x="34" y="173" font-weight="700" fill="#334155">NR</text>
    <text x="110" y="173" fill="#334155">일반용 단심 비닐절연전선</text>
  </g>
  <text x="220" y="212" font-size="12.5" text-anchor="middle" fill="#64748b">D는 인입(Drop), O는 옥외(Outdoor)로 기억하면 쉬워요</text>
 </svg>`},

{s:"전기설비", t:"과전류차단기와 분전반", crit:"전선 및 기계기구의 보안공사",
 f:"누전차단기 정격감도전류 30mA 이하 (조명·32A 이하 콘센트 분기회로)",
 pts:["배선용차단기(MCCB): 과부하·단락 시 회로를 끊어 전선을 보호",
      "누전차단기(ELB): 누전 시 사람을 보호 (감도 30mA 이하가 기본)",
      "분전반에서 간선 → 분기회로로 나눠 각 방으로 보낸다"],
 svg:`<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="440" height="230" fill="#fff"/>
  <rect x="120" y="30" width="200" height="150" rx="8" fill="#f8fafc" stroke="#334155" stroke-width="3"/>
  <text x="220" y="24" font-size="13" text-anchor="middle" fill="#64748b">분전반</text>
  <rect x="140" y="50" width="70" height="34" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
  <text x="175" y="72" font-size="12" font-weight="700" text-anchor="middle" fill="#dc2626">주 차단기</text>
  <path d="M60 67 H140" stroke="#1e293b" stroke-width="4"/>
  <text x="66" y="56" font-size="12" fill="#64748b">간선 인입</text>
  <path d="M175 84 V104 H290" fill="none" stroke="#1e293b" stroke-width="3"/>
  <g>
    <rect x="150" y="118" width="46" height="26" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="173" y="136" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">ELB</text>
    <rect x="206" y="118" width="46" height="26" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <text x="229" y="136" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">MCCB</text>
    <rect x="262" y="118" width="46" height="26" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <text x="285" y="136" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">MCCB</text>
  </g>
  <path d="M173 144 V190 M229 144 V190 M285 144 V190" stroke="#1e293b" stroke-width="2.5"/>
  <text x="173" y="208" font-size="11.5" text-anchor="middle" fill="#64748b">콘센트</text>
  <text x="229" y="208" font-size="11.5" text-anchor="middle" fill="#64748b">조명</text>
  <text x="285" y="208" font-size="11.5" text-anchor="middle" fill="#64748b">동력</text>
  <text x="355" y="120" font-size="12.5" font-weight="700" fill="#2563eb">ELB = 사람 보호</text>
  <text x="355" y="142" font-size="12.5" font-weight="700" fill="#334155">MCCB = 전선 보호</text>
  <text x="355" y="170" font-size="12" fill="#dc2626">감도 30mA 이하</text>
 </svg>`}
);
