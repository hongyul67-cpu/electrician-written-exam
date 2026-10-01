/* ══════════════════════════════════════════════════════════════
   전기기능사 필기 — 해설 그림 모음 (해설02 · 2026-10-01)
   공용 그리기 도우미 links/fig.js 를 쓴다. index.html 이 fig.js 다음에 부른다.

   무엇에 쓰나
     ① 기출 문제를 푼 뒤 열리는 「해설」 아래에 그 문제에 맞는 그림을 붙인다(최대 2장).
        학습 · 함께 풀기 · CBT 다시 보기 · 오답노트 · 반복기출 500제 배우기 — explHTML() 한 곳에서.
     ② 🧮 계산 문제 풀이 카드에 관련 그림을 붙인다(CALC_FIGS).
     ③ 새로 그린 그림은 🖼️ 그림으로 개념 잡기 목록에도 카드로 들어간다(con) → 슬라이드도 같은 그림.

   한 칸의 모양
     키: { cap:'캡션 한 줄', ex:/문제·보기·해설 글자에서 찾을 정규식/, not:/빼는 정규식/,
           con:{s,t,crit,f,pts} (개념 카드로도 쓸 때), draw:function(){…} }
     'c:제목' 키 = 이미 있는 개념 그림(data/concepts-*.js)을 그대로 가져다 쓴 것(새로 그리지 않음).
     EXPL_ORDER 순서 = 우선순위(좁은 주제가 앞).

   정답 유출 — 그림은 해설 칸 안에만 들어간다. 해설은 채점 뒤에 열린다.
   그림에 보기 번호(①~④)를 쓰지 않는다(보기 섞기 때 번호가 바뀐다).

   근거 — 수치 · 이름은 교재 「한눈에 보는 핵심이론」(images/theory p2~p26)과 기출 해설 · 정답에 있는 것만.
           교재 그림을 따라 그리지 않았다(개념을 새로 짬).
   ══════════════════════════════════════════════════════════════ */
var FIGS = (function () {
  var F = window.FIG;
  if (!F) return {};
  var C = F.C, t = F.t, box = F.box, line = F.line, arrow = F.arrow, path = F.path, circle = F.circle;
  function n(v) { return Math.round(v * 10) / 10; }

  /* ── 작은 도우미 ── */
  function dot(x, y, r, c) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 3.5) + '" fill="' + (c || C.ink) + '"/>'; }
  /* 저항(지그재그) — 가로 */
  function zig(x1, y, x2, o) {
    o = o || {}; var k = 6, w = (x2 - x1) / k, d = 'M' + x1 + ',' + y;
    for (var i = 0; i < k; i++) d += ' L' + n(x1 + w * (i + 0.5)) + ',' + (y + (i % 2 ? 8 : -8));
    return path(d + ' L' + x2 + ',' + y, { c: o.c || C.ink, w: o.w || 2.2 });
  }
  /* 저항 — 세로 */
  function zigV(x, y1, y2, o) {
    o = o || {}; var k = 6, h = (y2 - y1) / k, d = 'M' + x + ',' + y1;
    for (var i = 0; i < k; i++) d += ' L' + (x + (i % 2 ? 8 : -8)) + ',' + n(y1 + h * (i + 0.5));
    return path(d + ' L' + x + ',' + y2, { c: o.c || C.ink, w: o.w || 2.2 });
  }
  /* 코일 — 가로 혹 */
  function coilH(x1, y, x2, k, o) {
    o = o || {}; var w = (x2 - x1) / k, d = 'M' + x1 + ',' + y;
    for (var i = 0; i < k; i++) d += ' a' + n(w / 2) + ',' + n(w / 2) + ' 0 0 1 ' + n(w) + ',0';
    return path(d, { c: o.c || C.ink, w: o.w || 2.2 });
  }
  /* 코일 — 세로 혹 */
  function coilV(x, y1, y2, k, o) {
    o = o || {}; var h = (y2 - y1) / k, d = 'M' + x + ',' + y1;
    for (var i = 0; i < k; i++) d += ' a' + n(h / 2) + ',' + n(h / 2) + ' 0 0 1 0,' + n(h);
    return path(d, { c: o.c || C.ink, w: o.w || 2.2 });
  }
  /* 함수 그래프 → path */
  function plot(fn, x0, x1, step) {
    var d = '';
    for (var x = x0; x <= x1 + 0.01; x += (step || 2)) { var y = fn(x); d += (d ? ' L' : 'M') + n(x) + ',' + n(y); }
    return d;
  }
  /* 원호 화살표 (각도는 도, 시계 방향이 +) */
  function arcArrow(cx, cy, r, a0, a1, c) {
    var pts = [], k = 14;
    for (var i = 0; i <= k; i++) { var a = (a0 + (a1 - a0) * i / k) * Math.PI / 180; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    return F.route(pts, { c: c || C.green, w: 2.4, head: 11 });
  }
  /* 교류 전원 */
  function acSrc(x, y, r) {
    return circle(x, y, r || 16, { fill: '#fff', c: C.ink, w: 2 }) +
      path('M' + (x - 9) + ',' + y + ' q4.5,-9 9,0 q4.5,9 9,0', { w: 1.8 });
  }
  /* 다이오드형 삼각형 (오른쪽을 향함) */
  function tri(cx, cy, s, dir) {
    s = s || 13; dir = dir || 1;
    return F.poly([[cx - s * dir, cy - s], [cx - s * dir, cy + s], [cx + s * dir, cy]], { close: true, fill: C.ink, w: 1 });
  }

  return {

  /* ════════════════════════ 전기이론 ════════════════════════ */

  wireR: { cap: '전선의 저항 — 길수록 커지고, 굵을수록 작아진다 (R = ρ l / A)',
    ex: /고유 ?저항|저항률|도전율|\[Ω ?[·∙] ?m\]|전선의 ?(전기)?저항|길이.{0,25}(2배|3배|늘|줄)|(지름|단면적|반지름).{0,25}(2배|3배|1\/2|늘|줄)/,
    not: /절연|접지|애자|콘덴서|정전용량|코일|인덕턴스/,
    con: { s: '전기이론', t: '전선의 저항 (고유저항 · 도전율)', crit: '직류회로', f: 'R = ρ × l / A = ρ × 4l / πD² [Ω] · 도전율 σ = 1/ρ',
      pts: ['길이 l 이 길수록 저항이 크다 → 비례', '단면적 A 가 넓을수록 저항이 작다 → 반비례 (지름 D 가 2배면 단면적 4배 → 저항 1/4)',
        '고유저항 ρ 는 재료가 정한다. 도전율 σ 는 그 역수', '도체(구리·알루미늄)는 온도가 오르면 저항이 커진다(정온도계수), 반도체는 작아진다'] },
    draw: function () {
      var s = '';
      s += box(60, 66, 240, 50, { fill: C.orangeL, c: C.orange, r: 4 });
      s += '<ellipse cx="300" cy="91" rx="13" ry="25" fill="#fde2c4" stroke="' + C.orange + '" stroke-width="2"/>';
      s += t(180, 91, '고유저항 ρ', { b: 1, a: 'm', halo: false });
      s += arrow(60, 140, 300, 140, { both: true, w: 1.3, head: 9 });
      s += t(180, 158, '길이 l', { a: 'm', size: 15 });
      s += F.callout(306, 76, 352, 52, '단면적 A', { b: 1 });
      s += t(356, 74, '= πD² ÷ 4', { size: 14, c: C.sub });
      s += box(40, 180, 400, 42, { fill: C.blueL, c: C.blue, label: 'R = ρ × l ÷ A  [Ω]', size: 19 });
      s += t(240, 244, '길이 2배 → 저항 2배 · 지름 2배 → 단면적 4배 → 저항 1/4', { a: 'm', size: 14, c: C.sub });
      return F.svg(480, 262, s);
    } },

  eline: { cap: '전기력선 — (+)에서 나와 (−)로 들어가고, 서로 교차하지 않는다',
    ex: /전기력선|등전위|전계의 ?세기|전기장의 ?세기|가우스|전속 ?밀도|전속|전계 ?중|전위/,
    not: /전위차계|자기력선|자력선/,
    con: { s: '전기이론', t: '전기력선의 성질', crit: '전기의 성질과 전하에 의한 전기장', f: '전기력선 밀도 = 전계의 세기 · 전계 E = F / Q [V/m]',
      pts: ['양(+)전하에서 나와 음(−)전하에서 끝난다', '같은 전기력선끼리는 서로 밀어내고(반발) 교차하지 않는다',
        '도체 표면 · 등전위면에 수직으로 드나든다', '도체 내부에는 전기력선이 없다'] },
    draw: function () {
      var s = '', P = 140, Q = 340, Y = 140;
      /* 등전위면 */
      s += circle(P, Y, 52, { fill: 'none', c: C.purple, w: 1.4, dash: '5 4' }) + circle(Q, Y, 52, { fill: 'none', c: C.purple, w: 1.4, dash: '5 4' });
      /* 두 전하 사이 전기력선 */
      [-2, -1, 0, 1, 2].forEach(function (k) {
        var y0 = Y + k * 9, cy = Y + k * 58, ym = (2 * y0 + 2 * cy) / 4;
        s += path('M' + (P + 20) + ',' + y0 + ' Q240,' + cy + ' ' + (Q - 20) + ',' + y0, { c: C.orange, w: 1.8 });
        s += arrow(232, ym, 250, ym, { c: C.orange, w: 1.8, head: 10 });
      });
      /* 바깥쪽 */
      [150, 180, 210].forEach(function (d) {
        var a = d * Math.PI / 180;
        s += arrow(P + 24 * Math.cos(a), Y + 24 * Math.sin(a), P + 78 * Math.cos(a), Y + 78 * Math.sin(a), { c: C.orange, w: 1.8, head: 10 });
        var b = (180 - d) * Math.PI / 180;
        s += arrow(Q + 78 * Math.cos(b), Y + 78 * Math.sin(b), Q + 24 * Math.cos(b), Y + 24 * Math.sin(b), { c: C.orange, w: 1.8, head: 10 });
      });
      s += circle(P, Y, 19, { fill: C.redL, c: C.red, w: 2, label: '+', size: 22, lc: C.red });
      s += circle(Q, Y, 19, { fill: C.blueL, c: C.blue, w: 2, label: '−', size: 24, lc: C.blue });
      s += t(24, 34, '(+)에서 나와 (−)로 들어간다', { b: 1, size: 16 });
      s += t(P, 216, '등전위면', { a: 'm', size: 14, c: C.purple, b: 1 });
      s += t(240, 252, '서로 밀어내며 교차하지 않는다 · 밀도 = 전계의 세기', { a: 'm', size: 14 });
      s += t(240, 276, '등전위면(보라 점선)과 수직 · 도체 내부에는 없다', { a: 'm', size: 14, c: C.purple });
      return F.svg(480, 294, s);
    } },

  magmat: { cap: '자성체 세 가지 — 강하게 끌리는 것 · 약하게 끌리는 것 · 밀려나는 것',
    ex: /강자성|상자성|반자성|비자성|역자성|자성체|비투자율/,
    con: { s: '전기이론', t: '자성체의 종류', crit: '자기의 성질과 전류에 의한 자기장', f: '강자성체 μs ≫ 1 · 상자성체 μs > 1 · 반자성체 μs < 1',
      pts: ['강자성체: 철 · 니켈 · 코발트 · 망간 — 자석에 강하게 붙는다 (철심 · 영구자석)', '상자성체: 알루미늄 · 백금 · 주석 — 아주 약하게 끌린다',
        '반(역)자성체: 안티몬 · 비스무트 · 구리 · 아연 — 자계와 반대로 자화되어 밀려난다', '상자성체 + 반자성체를 합쳐 비자성체라 한다(자화가 거의 안 된다)'] },
    draw: function () {
      var s = '';
      var rows = [
        { y: 62, name: '강자성체  μs ≫ 1', ex: '철 · 니켈 · 코발트 · 망간', c: C.green, k: 'pull', w: 5 },
        { y: 148, name: '상자성체  μs > 1', ex: '알루미늄 · 백금 · 주석', c: C.green, k: 'pull', w: 2 },
        { y: 234, name: '반자성체  μs < 1', ex: '안티몬 · 비스무트 · 구리 · 아연', c: C.red, k: 'push', w: 3 }
      ];
      rows.forEach(function (r) {
        s += box(20, r.y - 24, 52, 48, { fill: C.redL, c: C.red, label: 'N', lc: C.red, size: 20 });
        s += circle(150, r.y, 17, { fill: C.grayM, c: C.ink, w: 1.6 });
        if (r.k === 'pull') s += arrow(126, r.y, 84, r.y, { c: r.c, w: r.w, head: 9 + r.w * 1.5 });
        else s += arrow(174, r.y, 220, r.y, { c: r.c, w: r.w, head: 13 });
        s += t(236, r.y - 12, r.name, { b: 1, size: 17 });
        s += t(236, r.y + 13, r.ex, { size: 14, c: C.sub });
      });
      s += line(20, 105, 460, 105, { c: C.edge, w: 1 }) + line(20, 191, 460, 191, { c: C.edge, w: 1 });
      s += t(240, 280, '상자성체 + 반자성체 = 비자성체 (거의 자화되지 않는다)', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 296, s);
    } },

  solenoid: { cap: '솔레노이드 — 코일 안쪽 자계는 감은 수 × 전류로 정해지고, 바깥은 0',
    ex: /솔레노이드|환상 ?철심|환상 ?코일|무한장/,
    con: { s: '전기이론', t: '솔레노이드의 자계', crit: '자기의 성질과 전류에 의한 자기장', f: '환상 H = NI / 2πr · 무한장 H = nI [AT/m] · 외부 H = 0',
      pts: ['환상(도넛 모양) 솔레노이드: 안쪽 자계 H = NI / l = NI / 2πr', '무한장 솔레노이드: 안쪽 자계 H = nI (n = 1m 당 감은 수)',
        '두 경우 모두 코일 바깥쪽 자계는 0', '원형 코일 중심은 H = NI / 2r'] },
    draw: function () {
      var s = '', cx = 120, cy = 128;
      s += circle(cx, cy, 72, { fill: C.grayL, c: C.ink, w: 1.6 }) + circle(cx, cy, 40, { fill: '#fff', c: C.ink, w: 1.6 });
      for (var i = 0; i < 16; i++) {
        var a = i * Math.PI / 8;
        s += line(cx + 36 * Math.cos(a), cy + 36 * Math.sin(a), cx + 76 * Math.cos(a), cy + 76 * Math.sin(a), { c: C.orange, w: 2.4 });
      }
      s += arcArrow(cx, cy, 56, 200, 330, C.blue);
      s += t(cx, cy, 'r', { a: 'm', size: 15, c: C.blue, b: 1 });
      s += t(cx, 30, '환상 솔레노이드', { a: 'm', b: 1, size: 17 });
      s += t(cx, 230, 'H = NI ÷ 2πr', { a: 'm', b: 1, size: 17, c: C.blue });
      s += line(240, 46, 240, 262, { c: C.edge, w: 1 });
      var x0 = 290;
      for (var k = 0; k < 9; k++) s += '<ellipse cx="' + (x0 + k * 18) + '" cy="128" rx="7" ry="36" fill="none" stroke="' + C.orange + '" stroke-width="2.4"/>';
      s += arrow(270, 128, 456, 128, { c: C.blue, w: 3, head: 13 });
      s += t(362, 30, '무한장 솔레노이드', { a: 'm', b: 1, size: 17 });
      s += t(362, 230, '안쪽 H = nI', { a: 'm', b: 1, size: 17, c: C.blue });
      s += t(362, 186, 'n = 1 m 당 감은 수', { a: 'm', size: 14, c: C.sub });
      s += t(240, 268, '두 경우 모두 코일 바깥 H = 0', { a: 'm', size: 14 });
      return F.svg(480, 286, s);
    } },

  phaseRLC: { cap: 'R · L · C 의 전압과 전류 — R 은 같이, L 은 전류가 뒤지고, C 는 전류가 앞선다',
    ex: /뒤진|앞선|뒤지|앞서|지상|진상|위상차|위상이|동상|유도성|용량성|90 ?\[?°/,
    not: /동기 ?(전동기|조상기)|과여자|부족 ?여자|선간 ?전압|상전압|V ?곡선|Y ?결선|△|Δ|전기자 ?반작용|정류|사이리스터|SCR/,
    con: { s: '전기이론', t: 'R · L · C 의 위상 (지상 · 진상)', crit: '교류회로', f: 'R: 동상 · L: 전류가 90° 뒤짐(지상) · C: 전류가 90° 앞섬(진상)',
      pts: ['저항 R 만 있으면 전압과 전류의 위상차가 0 (동상)', '코일 L(유도성): 전류가 전압보다 90° 뒤진다 → 지상 전류',
        '콘덴서 C(용량성): 전류가 전압보다 90° 앞선다 → 진상 전류', 'X_L = ωL = 2πfL · X_C = 1/ωC = 1/(2πfC)'] },
    draw: function () {
      var s = '';
      [{ x: 80, n: 'R  저항', k: 0 }, { x: 240, n: 'L  코일', k: 1 }, { x: 400, n: 'C  콘덴서', k: -1 }].forEach(function (p) {
        var ox = p.x - 50, oy = 138;
        s += t(p.x, 32, p.n, { a: 'm', b: 1, size: 17 });
        s += dot(ox, oy, 4);
        if (p.k === 0) {
          s += arrow(ox, oy - 7, ox + 104, oy - 7, { c: C.blue, w: 3, head: 13 }) + t(ox + 108, oy - 22, 'V', { b: 1, c: C.blue });
          s += arrow(ox, oy + 9, ox + 76, oy + 9, { c: C.red, w: 3, head: 13 }) + t(ox + 80, oy + 26, 'I', { b: 1, c: C.red });
        } else {
          s += arrow(ox, oy, ox + 104, oy, { c: C.blue, w: 3, head: 13 }) + t(ox + 96, oy - 16, 'V', { b: 1, c: C.blue });
          s += arrow(ox, oy, ox, oy + p.k * 70, { c: C.red, w: 3, head: 13 }) + t(ox + 12, oy + p.k * 66, 'I', { b: 1, c: C.red });
          s += path('M' + (ox + 26) + ',' + oy + ' A26,26 0 0 ' + (p.k > 0 ? 1 : 0) + ' ' + ox + ',' + (oy + p.k * 26), { c: C.sub, w: 1.3 });
          s += t(ox + 30, oy + p.k * 30, '90°', { size: 13, c: C.sub });
        }
      });
      s += t(80, 226, '동상', { a: 'm', b: 1, size: 16 }) + t(80, 250, '위상차 0°', { a: 'm', size: 14, c: C.sub });
      s += t(240, 226, '전류 90° 뒤짐', { a: 'm', b: 1, size: 16 }) + t(240, 250, '지상 · 유도성', { a: 'm', size: 14, c: C.sub });
      s += t(400, 226, '전류 90° 앞섬', { a: 'm', b: 1, size: 16 }) + t(400, 250, '진상 · 용량성', { a: 'm', size: 14, c: C.sub });
      s += line(160, 50, 160, 256, { c: C.edge, w: 1 }) + line(320, 50, 320, 256, { c: C.edge, w: 1 });
      return F.svg(480, 270, s);
    } },

  powerTri: { cap: '전력 삼각형 — 피상전력이 빗변, 유효전력이 밑변, 무효전력이 높이',
    ex: /유효 ?전력|무효 ?전력|피상 ?전력|\[Var\]|\[kVar\]|\[VA\]|\[kVA\]|역률/,
    not: /변압기|전동기|발전기|동기|정격 ?용량|조상|콘덴서 ?용량|수용률|부하율/,
    con: { s: '전기이론', t: '전력 삼각형 (피상 · 유효 · 무효전력)', crit: '교류회로', f: 'Pa = VI [VA] · P = VI cosθ [W] · Pr = VI sinθ [Var] · 역률 cosθ = P / Pa',
      pts: ['피상전력 Pa: 겉으로 보이는 전력 (전압 × 전류) [VA]', '유효전력 P: 실제로 일을 하는 전력 [W]',
        '무효전력 Pr: 오갈 뿐 일을 하지 않는 전력 [Var]', 'Pa² = P² + Pr² · 3상이면 모두 앞에 √3 을 곱한다'] },
    draw: function () {
      var s = '', A = [60, 196], B = [320, 196], T = [320, 62];
      s += line(A[0], A[1], B[0], B[1], { c: C.green, w: 4 });
      s += line(B[0], B[1], T[0], T[1], { c: C.red, w: 4 });
      s += line(A[0], A[1], T[0], T[1], { c: C.blue, w: 4 });
      s += path('M' + (B[0] - 14) + ',' + B[1] + ' V' + (B[1] - 14) + ' H' + B[0], { c: C.ink, w: 1.3 });
      s += path('M' + (A[0] + 52) + ',' + A[1] + ' A52,52 0 0 0 ' + n(A[0] + 52 * Math.cos(0.476)) + ',' + n(A[1] - 52 * Math.sin(0.476)), { c: C.ink, w: 1.4 });
      s += t(A[0] + 62, A[1] - 13, 'θ', { b: 1, size: 17 });
      s += t(190, 220, '유효전력 P = VI cosθ [W]', { a: 'm', b: 1, c: C.green });
      s += t(332, 116, '무효전력 Pr', { b: 1, c: C.red });
      s += t(332, 140, '= VI sinθ [Var]', { c: C.red, size: 15 });
      s += t(176, 110, '피상전력 Pa', { a: 'e', b: 1, c: C.blue });
      s += t(176, 134, '= VI [VA]', { a: 'e', c: C.blue, size: 15 });
      s += box(60, 238, 360, 36, { fill: C.yellowL, c: C.orange, label: '역률 cosθ = P ÷ Pa', size: 17 });
      return F.svg(480, 290, s);
    } },

  nonsine: { cap: '비정현파 = 직류분 + 기본파 + 고조파 (푸리에 급수)',
    ex: /비정현파|비사인파|왜형|고조파|푸리에|기본파|사각파|삼각파|구형파|펄스파/,
    not: /변압기|결선|Y-Y|정류/,
    con: { s: '전기이론', t: '비정현파 (왜형파)', crit: '교류회로', f: '비정현파 = 직류분 + 기본파 + 고조파 · 왜형률 = 고조파 실효값 / 기본파 실효값',
      pts: ['사인파가 아닌 일그러진 파형 (사각파 · 삼각파 · 펄스파 등)', '푸리에 급수로 여러 정현파의 합으로 나눈다',
        '생기는 원인: 전기자 반작용 · 철심의 자기포화와 히스테리시스 · 다이오드의 비직선성', '실효값 = √(각 성분 실효값의 제곱의 합)'] },
    draw: function () {
      var s = '', Y = 92, A = 30;
      function axis(x0, x1) { return line(x0, Y, x1, Y, { c: C.grayM, w: 1 }); }
      s += axis(20, 100) + line(22, Y - 18, 98, Y - 18, { c: C.purple, w: 3 });
      s += t(112, Y, '+', { a: 'm', b: 1, size: 22 });
      s += axis(124, 214) + path(plot(function (x) { return Y - A * Math.sin((x - 124) / 90 * 2 * Math.PI); }, 124, 214, 1.5), { c: C.blue, w: 2.6 });
      s += t(226, Y, '+', { a: 'm', b: 1, size: 22 });
      s += axis(238, 328) + path(plot(function (x) { return Y - 11 * Math.sin((x - 238) / 90 * 6 * Math.PI); }, 238, 328, 1), { c: C.orange, w: 2.4 });
      s += t(342, Y, '=', { a: 'm', b: 1, size: 22 });
      s += axis(354, 464) + path(plot(function (x) {
        var p = (x - 354) / 110 * 2 * Math.PI; return Y - 18 - A * Math.sin(p) - 11 * Math.sin(3 * p);
      }, 354, 464, 1), { c: C.ink, w: 2.6 });
      s += t(60, 146, '직류분', { a: 'm', b: 1, c: C.purple });
      s += t(169, 146, '기본파', { a: 'm', b: 1, c: C.blue });
      s += t(283, 146, '고조파', { a: 'm', b: 1, c: C.orange });
      s += t(409, 146, '비정현파', { a: 'm', b: 1 });
      s += t(283, 168, '(기본파의 정수배 주파수)', { a: 'm', size: 13, c: C.sub });
      s += box(30, 188, 420, 38, { fill: C.blueL, c: C.blue, label: '푸리에 급수 — 여러 정현파의 합으로 나눈다', size: 16 });
      s += t(240, 248, '왜형률 = 고조파 실효값 ÷ 기본파 실효값', { a: 'm', size: 15 });
      return F.svg(480, 266, s);
    } },

  divider: { cap: '전압 분배와 전류 분배 — 직렬은 큰 저항에 큰 전압, 병렬은 작은 저항에 큰 전류',
    ex: /분배|걸리는 ?전압|양단(의|에 ?걸리는)? ?전압|단자 ?전압|분류되는|나누어 ?흐르는|각 ?저항에 ?흐르는/,
    not: /인입|배전|전압 ?강하율|변압기|전동기|발전기|콘덴서/,
    con: { s: '전기이론', t: '전압 분배 · 전류 분배', crit: '직류회로', f: '직렬 V₁ = R₁/(R₁+R₂) × V · 병렬 I₁ = R₂/(R₁+R₂) × I',
      pts: ['직렬: 전류가 같고 전압은 저항 크기에 비례해 나뉜다 (큰 저항에 큰 전압)',
        '병렬: 전압이 같고 전류는 저항에 반비례해 나뉜다 (작은 저항에 큰 전류)', '병렬 전류 분배식은 분자에 반대쪽 저항이 들어간다 — 실수 단골'] },
    draw: function () {
      var s = '';
      /* 직렬 */
      s += t(120, 28, '직렬 — 전압이 나뉜다', { a: 'm', b: 1, size: 17 });
      s += line(36, 70, 36, 170) + line(36, 70, 60, 70) + zig(60, 70, 108, {}) + line(108, 70, 128, 70) + zig(128, 70, 176, {}) + line(176, 70, 210, 70);
      s += line(210, 70, 210, 170) + line(36, 170, 210, 170);
      s += box(22, 104, 28, 34, { fill: '#fff', c: C.ink, w: 1.6, label: 'V', size: 15 });
      s += t(84, 50, 'R₁', { a: 'm', b: 1 }) + t(152, 50, 'R₂', { a: 'm', b: 1 });
      s += arrow(60, 96, 108, 96, { both: true, w: 1, head: 8, c: C.blue }) + t(84, 112, 'V₁', { a: 'm', c: C.blue, b: 1 });
      s += arrow(128, 96, 176, 96, { both: true, w: 1, head: 8, c: C.blue }) + t(152, 112, 'V₂', { a: 'm', c: C.blue, b: 1 });
      s += t(120, 204, 'V₁ = R₁ ÷ (R₁+R₂) × V', { a: 'm', b: 1, size: 15, c: C.blue });
      s += t(120, 228, '큰 저항에 큰 전압', { a: 'm', size: 14, c: C.sub });
      s += line(240, 40, 240, 244, { c: C.edge, w: 1 });
      /* 병렬 */
      s += t(360, 28, '병렬 — 전류가 나뉜다', { a: 'm', b: 1, size: 17 });
      s += arrow(256, 120, 292, 120, { c: C.red, w: 2.2 }) + t(266, 102, 'I', { b: 1, c: C.red });
      s += line(292, 120, 300, 120) + dot(300, 120) + line(300, 76, 300, 164);
      s += line(300, 76, 336, 76) + zig(336, 76, 384, {}) + line(384, 76, 420, 76);
      s += line(300, 164, 336, 164) + zig(336, 164, 384, {}) + line(384, 164, 420, 164);
      s += line(420, 76, 420, 164) + dot(420, 120) + line(420, 120, 456, 120);
      s += t(360, 56, 'R₁', { a: 'm', b: 1 }) + t(360, 144, 'R₂', { a: 'm', b: 1 });
      s += arrow(306, 94, 328, 94, { c: C.red, w: 1.8, head: 9 }) + t(318, 108, 'I₁', { a: 'm', c: C.red, size: 14, b: 1 });
      s += arrow(306, 182, 328, 182, { c: C.red, w: 1.8, head: 9 }) + t(318, 196, 'I₂', { a: 'm', c: C.red, size: 14, b: 1 });
      s += t(360, 214, 'I₁ = R₂ ÷ (R₁+R₂) × I', { a: 'm', b: 1, size: 15, c: C.red });
      s += t(360, 238, '작은 저항에 큰 전류', { a: 'm', size: 14, c: C.sub });
      return F.svg(480, 256, s);
    } },

  energyLC: { cap: '저장되는 에너지 — 콘덴서는 전기장에 ½CV², 코일은 자기장에 ½LI²',
    ex: /(콘덴서|커패시터|정전 ?용량|코일|인덕턴스|정전).{0,50}(에너지|축적)|(에너지|축적).{0,50}(콘덴서|코일|인덕턴스)|½ ?[LC]|1\/2 ?[LC]|\[J\].{0,30}(코일|콘덴서)/,
    con: { s: '전기이론', t: '콘덴서 · 코일에 저장되는 에너지', crit: '전자력과 전자유도', f: '콘덴서 W = ½CV² = ½QV [J] · 코일 W = ½LI² [J]',
      pts: ['콘덴서는 전기장(전계) 속에 에너지를 저장한다 → W = ½CV²', '코일은 자기장(자계) 속에 에너지를 저장한다 → W = ½LI²',
        '전압 · 전류의 제곱에 비례 → 2배가 되면 에너지는 4배'] },
    draw: function () {
      var s = '';
      s += t(120, 30, '콘덴서 C', { a: 'm', b: 1, size: 17 });
      s += line(40, 108, 104, 108) + line(136, 108, 200, 108);
      s += line(104, 62, 104, 154, { w: 5, c: C.red }) + line(136, 62, 136, 154, { w: 5, c: C.blue });
      s += t(90, 70, '+', { a: 'm', b: 1, c: C.red, size: 18 }) + t(150, 70, '−', { a: 'm', b: 1, c: C.blue, size: 20 });
      [82, 108, 134].forEach(function (y) { s += arrow(109, y, 131, y, { c: C.orange, w: 1.6, head: 8 }); });
      s += t(120, 182, 'W = ½ C V²  [J]', { a: 'm', b: 1, size: 18, c: C.blue });
      s += t(120, 208, '전기장에 저장 (= ½ Q V)', { a: 'm', size: 14, c: C.sub });
      s += line(240, 44, 240, 236, { c: C.edge, w: 1 });
      s += t(360, 30, '코일 L', { a: 'm', b: 1, size: 17 });
      s += '<ellipse cx="360" cy="108" rx="84" ry="46" fill="none" stroke="' + C.purple + '" stroke-width="1.5" stroke-dasharray="6 4"/>';
      s += line(262, 116, 304, 116) + coilH(304, 116, 416, 6, { c: C.orange, w: 3 }) + line(416, 116, 458, 116);
      s += arrow(266, 136, 296, 136, { c: C.red, w: 2, head: 9 }) + t(281, 152, 'I', { a: 'm', b: 1, c: C.red });
      s += t(360, 72, '자속', { a: 'm', size: 14, c: C.purple });
      s += t(360, 182, 'W = ½ L I²  [J]', { a: 'm', b: 1, size: 18, c: C.blue });
      s += t(360, 208, '자기장에 저장', { a: 'm', size: 14, c: C.sub });
      s += t(240, 246, '전압 · 전류가 2배면 에너지는 4배', { a: 'm', size: 14 });
      return F.svg(480, 264, s);
    } },

  /* ════════════════════════ 전기기기 ════════════════════════ */

  dcMotorType: { cap: '직류전동기 — 분권은 속도가 거의 일정, 직권은 부하가 줄면 속도가 치솟는다',
    ex: /(분권|직권|복권|타여자) ?전동기|벨트|위험 ?속도|정속도 ?전동기|무부하.{0,20}(속도|운전)/,
    not: /유도 ?전동기|동기 ?전동기/,
    con: { s: '전기기기', t: '직류전동기의 종류와 특성', crit: '직류기', f: '분권: 정속도 · 직권: 토크 ∝ I² ∝ 1/N²',
      pts: ['분권전동기: 부하가 변해도 속도가 거의 일정(속도변동 가장 작다) → 환풍기 · 송풍기', '직권전동기: 토크가 전류의 제곱에 비례 → 기동토크가 커서 전기철도',
        '직권은 무부하가 되면 속도가 위험할 만큼 올라간다 → 벨트 운전 금지', '타여자 전동기: 속도 조정 범위가 넓다(압연기 · 엘리베이터)'] },
    draw: function () {
      var s = '', O = [64, 222];
      s += arrow(O[0], O[1], 300, O[1], { w: 1.6, head: 10 }) + arrow(O[0], O[1], O[0], 44, { w: 1.6, head: 10 });
      s += t(O[0] + 8, 46, '속도 N', { b: 1, size: 15 });
      s += t(300, 244, '부하 (전류 I) →', { a: 'e', size: 14, c: C.sub });
      s += path(plot(function (x) { return 112 + (x - 70) * 0.06; }, 72, 292), { c: C.blue, w: 3.2 });
      s += path(plot(function (x) { return 222 - 150 * 35 / (x - 50); }, 82, 292), { c: C.red, w: 3.2 });
      s += t(308, 118, '분권', { b: 1, c: C.blue, size: 17 });
      s += t(308, 140, '속도 거의 일정', { c: C.blue, size: 14 });
      s += t(308, 160, '(환풍기 · 송풍기)', { c: C.sub, size: 13 });
      s += t(308, 196, '직권', { b: 1, c: C.red, size: 17 });
      s += t(308, 218, '토크 ∝ I² (전기철도)', { c: C.red, size: 14 });
      s += box(94, 54, 196, 48, { fill: C.redL, c: C.red, r: 8 });
      s += t(192, 69, '부하가 없어지면 위험속도!', { a: 'm', b: 1, size: 14, c: C.red, halo: false });
      s += t(192, 89, '→ 직권은 벨트 운전 금지', { a: 'm', size: 14, c: C.red, halo: false });
      return F.svg(480, 262, s);
    } },

  dcSpeedCtrl: { cap: '직류전동기의 속도제어 3가지 — 전압 · 저항 · 계자(자속)',
    ex: /직류 ?전동기.{0,40}(속도 ?제어|역회전|역전|제동)|워드 ?레오나드|일그너|계자 ?제어|저항 ?제어|전압 ?제어|속도 ?제어법/,
    not: /유도 ?전동기|인버터|주파수 ?제어|극수|2차 ?저항|비례추이/,
    con: { s: '전기기기', t: '직류전동기의 속도제어', crit: '직류기', f: 'N = (V − Ia·Ra) ÷ kΦ → V · Ra · Φ 를 바꾼다',
      pts: ['전압제어: 전동기에 거는 전압 V 를 바꾼다 (워드 레오나드 · 일그너 방식)', '저항제어: 전기자 회로에 넣은 저항을 바꾼다',
        '계자제어: 계자 전류로 자속 Φ 를 바꾼다 (자속을 줄이면 빨라진다)', '역회전: 계자나 전기자 중 한 회로만 극성을 반대로'] },
    draw: function () {
      var s = '';
      s += line(60, 66, 60, 108) + line(60, 152, 60, 196) + line(60, 66, 130, 66) + zig(130, 66, 196, {}) + line(196, 66, 400, 66);
      s += line(60, 196, 400, 196);
      s += circle(60, 130, 22, { fill: '#fff', c: C.ink, w: 2, label: 'V', size: 17 });
      s += arrow(36, 156, 86, 104, { c: C.blue, w: 2, head: 10 });
      s += arrow(140, 86, 190, 44, { c: C.orange, w: 2, head: 10 });
      s += line(270, 66, 270, 106) + line(270, 154, 270, 196);
      s += circle(270, 130, 24, { fill: C.grayL, c: C.ink, w: 2, label: 'M', size: 18 });
      s += line(400, 66, 400, 88) + coilV(400, 88, 148, 5, { c: C.purple, w: 2.6 }) + line(400, 148, 400, 196);
      s += arrow(380, 150, 430, 96, { c: C.purple, w: 2, head: 10 });
      s += t(60, 226, '① 전압제어', { a: 'm', b: 1, c: C.blue, size: 15 });
      s += t(163, 30, '② 저항제어', { a: 'm', b: 1, c: C.orange, size: 15 });
      s += t(400, 226, '③ 계자제어 (Φ)', { a: 'm', b: 1, c: C.purple, size: 15 });
      s += t(270, 172, '전기자', { a: 'm', size: 13, c: C.sub });
      s += box(90, 238, 300, 34, { fill: C.yellowL, c: C.orange, label: 'N = (V − Ia·Ra) ÷ kΦ', size: 17 });
      return F.svg(480, 286, s);
    } },

  tsCurve: { cap: '비례추이 — 2차 저항을 키우면 최대토크는 그대로, 기동토크는 커진다',
    ex: /비례 ?추이|최대 ?토크|기동 ?토크|2차 ?저항|슬립.{0,30}토크|토크.{0,30}슬립/,
    not: /직류|직권|분권|단상/,
    con: { s: '전기기기', t: '비례추이 (토크-슬립 곡선)', crit: '유도전동기', f: '2차 저항 r₂ ↑ → 최대토크 그대로 · 기동토크 ↑ · 기동전류 ↓',
      pts: ['권선형 유도전동기의 2차 회로에 외부 저항을 넣으면 토크 곡선이 왼쪽(정지 쪽)으로 옮겨간다', '최대토크의 크기는 변하지 않는다',
        '기동토크는 커지고 기동전류는 줄어든다 → 2차 저항 기동법', '비례추이 가능: 1차 전류 · 1차 입력 · 역률 / 불가능: 2차 출력 · 효율 · 2차 동손'] },
    draw: function () {
      var s = '', O = [60, 240], W = 360, H = 140;
      function T(sv, sm) { return 2 / (sv / sm + sm / sv); }
      function curve(sm) { return plot(function (x) { var sv = 1 - (x - O[0]) / W; if (sv < 0.004) sv = 0.004; return O[1] - H * T(sv, sm); }, O[0], O[0] + W - 2, 2); }
      s += arrow(O[0], O[1], O[0] + W + 20, O[1], { w: 1.6, head: 10 }) + arrow(O[0], O[1], O[0], 28, { w: 1.6, head: 10 });
      s += t(O[0] + 8, 32, '토크', { b: 1, size: 15 });
      s += line(O[0], O[1] - H, O[0] + W, O[1] - H, { c: C.sub, w: 1.2, dash: '5 4' });
      s += t(O[0] + W, O[1] - H - 16, '최대토크는 같다', { a: 'e', size: 14, c: C.sub, b: 1 });
      s += path(curve(0.2), { c: C.blue, w: 3 });
      s += path(curve(0.6), { c: C.orange, w: 3 });
      s += arrow(330, 66, 222, 66, { c: C.orange, w: 2, head: 11 });
      s += t(214, 66, 'r₂ ↑', { a: 'e', b: 1, c: C.orange, size: 15 });
      s += t(300, 158, 'r₂ 작을 때', { a: 'e', b: 1, c: C.blue, size: 14 });
      s += t(O[0] + 10, 142, '기동토크 ↑', { b: 1, c: C.orange, size: 14 });
      s += t(O[0], 258, 's = 1 (정지)', { a: 'm', size: 13 });
      s += t(O[0] + W, 258, 's = 0 (동기속도)', { a: 'e', size: 13 });
      s += t(240, 282, '권선형 유도전동기 — 2차에 외부 저항을 넣는다', { a: 'm', size: 14 });
      return F.svg(480, 300, s);
    } },

  rotorType: { cap: '농형과 권선형 — 권선형은 슬립링으로 2차 회로를 밖으로 뽑아 저항을 넣는다',
    ex: /농형|권선형|슬립 ?링/,
    con: { s: '전기기기', t: '농형 · 권선형 유도전동기', crit: '유도전동기', f: '농형: 구조 간단 · 권선형: 슬립링 + 브러시로 2차 저항 조정',
      pts: ['농형: 회전자 도체 막대를 양 끝 단락환으로 묶은 구조 → 튼튼하고 값싸다', '농형 기동법: 전전압(직입) · Y-Δ · 리액터 · 기동보상기',
        '권선형: 회전자에 권선을 감고 슬립링 · 브러시로 외부 저항에 연결', '권선형 기동 · 속도제어: 2차 저항(비례추이) · 2차 여자법'] },
    draw: function () {
      var s = '';
      s += t(120, 28, '농형', { a: 'm', b: 1, size: 17 });
      [-30, -15, 0, 15, 30].forEach(function (d) { s += line(56, 118 + d, 184, 118 + d, { c: C.orange, w: 3 }); });
      s += '<ellipse cx="56" cy="118" rx="12" ry="40" fill="' + C.grayL + '" stroke="' + C.ink + '" stroke-width="2.2"/>';
      s += '<ellipse cx="184" cy="118" rx="12" ry="40" fill="' + C.grayL + '" stroke="' + C.ink + '" stroke-width="2.2"/>';
      s += F.callout(184, 80, 200, 56, '단락환', { a: 'e', size: 14 });
      s += F.callout(120, 133, 120, 172, '도체 막대', { a: 'm', size: 14 });
      s += t(120, 206, '구조 간단 · 튼튼', { a: 'm', b: 1, size: 15 });
      s += t(120, 230, 'Y-Δ · 리액터 · 기동보상기', { a: 'm', size: 13, c: C.sub });
      s += line(240, 40, 240, 244, { c: C.edge, w: 1 });
      s += t(360, 28, '권선형', { a: 'm', b: 1, size: 17 });
      s += line(250, 132, 464, 132, { w: 3 });
      s += box(256, 104, 70, 56, { fill: C.grayL, c: C.ink });
      s += coilH(264, 132, 318, 4, { c: C.orange, w: 2.4 });
      [350, 372, 394].forEach(function (x) {
        s += box(x - 5, 112, 10, 40, { fill: C.orangeL, c: C.orange, r: 2 });
        s += box(x - 6, 92, 12, 14, { fill: C.ink, c: C.ink, r: 1 });
        s += line(x, 92, x, 70, { w: 1.6 });
      });
      s += box(336, 46, 72, 24, { fill: C.yellowL, c: C.orange, r: 4 });
      s += zig(342, 58, 402, { c: C.orange, w: 1.6 });
      s += t(414, 58, '외부저항', { size: 13, b: 1 });
      s += F.callout(394, 152, 440, 178, '슬립링·브러시', { a: 'e', size: 13 });
      s += t(360, 206, '2차 저항으로 기동', { a: 'm', b: 1, size: 15 });
      s += t(360, 230, '(비례추이 · 속도제어)', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 250, s);
    } },

  reverse3: { cap: '회전 방향 바꾸기 — 3상은 세 선 중 아무 두 선을 바꿔 잇는다',
    ex: /회전 ?방향|역회전|역전 ?(시키|하려)|역방향으로 ?회전|반대 ?방향으로 ?회전/,
    not: /플레밍|단상 ?유도|셰이딩|세이딩/,
    con: { s: '전기기기', t: '회전 방향 바꾸기', crit: '유도전동기', f: '3상 유도전동기: 3선 중 2선을 바꾼다 · 직류전동기: 계자나 전기자 한쪽만 극성 반대',
      pts: ['3상 유도전동기는 회전자계 방향대로 돈다', '전원 3선 가운데 아무 2선을 서로 바꿔 연결하면 회전자계가 반대 → 역회전',
        '직류전동기는 계자나 전기자 중 한 회로의 극성만 반대로 한다 (둘 다 바꾸면 그대로)'] },
    draw: function () {
      var s = '', Y = [70, 104, 138], L = ['R', 'S', 'T'];
      function motor(cx, rev) {
        return circle(cx, 104, 38, { fill: C.grayL, c: C.ink, w: 2, label: 'M', size: 20 }) +
          (rev ? arcArrow(cx, 104, 52, 60, -60, C.red) : arcArrow(cx, 104, 52, -60, 60, C.green));
      }
      L.forEach(function (l, i) { s += t(26, Y[i], l, { a: 'm', b: 1 }) + line(40, Y[i], 132, Y[i]); });
      s += motor(170, false) + t(170, 178, '정회전', { a: 'm', b: 1, c: C.green });
      L.forEach(function (l, i) { s += t(266, Y[i], l, { a: 'm', b: 1 }); });
      s += line(280, 70, 382, 70);
      s += path('M280,104 L310,104 L340,138 L382,138', { c: C.red, w: 2.6 });
      s += path('M280,138 L310,138 L340,104 L382,104', { c: C.red, w: 2.6 });
      s += motor(420, true) + t(420, 178, '역회전', { a: 'm', b: 1, c: C.red });
      s += t(325, 168, '두 선 교체', { a: 'm', size: 13, c: C.red, b: 1 });
      s += line(240, 40, 240, 186, { c: C.edge, w: 1 });
      s += t(240, 212, '3상: 세 선 중 아무 두 선을 바꾸면 회전자계가 반대', { a: 'm', size: 15, b: 1 });
      s += t(240, 238, '직류전동기: 계자나 전기자 중 한쪽만 극성을 바꾼다', { a: 'm', size: 14, c: C.sub });
      return F.svg(480, 256, s);
    } },

  trOil: { cap: '변압기 절연유와 보호 — 콘서베이터 · 부흐홀츠 계전기 · 브리더',
    ex: /절연유|변압기유|콘서베이터|부흐홀츠|브리더|흡습 ?호흡기|질소 ?봉입|냉각 ?방식|유입 ?자냉|자냉식|열화/,
    con: { s: '전기기기', t: '변압기 절연유와 열화 방지', crit: '변압기', f: '부흐홀츠 계전기 = 본체와 콘서베이터 사이 · 열화 방지 = 콘서베이터 · 브리더 · 질소 봉입',
      pts: ['절연유 조건: 절연내력이 크고, 인화점은 높고, 응고점 · 점도는 낮고, 냉각효과가 클 것', '열화 방지: 콘서베이터 · 흡습호흡기(브리더) · 불활성 질소 봉입',
        '부흐홀츠 계전기: 본체와 콘서베이터 사이에 달아 내부 고장의 가스 · 유증기를 검출', '주상변압기 냉각방식: 유입자냉식'] },
    draw: function () {
      var s = '';
      s += box(40, 116, 180, 132, { fill: C.blueL, c: C.ink, r: 6 });
      s += box(70, 150, 40, 76, { fill: C.orangeL, c: C.orange, r: 3 }) + box(150, 150, 40, 76, { fill: C.orangeL, c: C.orange, r: 3 });
      s += t(130, 132, '절연유', { a: 'm', b: 1, c: C.blue, size: 15, halo: false });
      [80, 180].forEach(function (x) { s += box(x - 7, 92, 14, 24, { fill: C.grayM, c: C.ink, r: 3 }); });
      s += line(206, 116, 206, 74, { w: 6, c: C.sub }) + line(206, 74, 300, 74, { w: 6, c: C.sub });
      s += box(230, 62, 34, 24, { fill: C.orange, c: C.orange, r: 3 });
      s += box(300, 50, 150, 48, { fill: C.blueL, c: C.ink, r: 22, label: '콘서베이터', size: 15 });
      s += line(430, 98, 430, 112, { w: 3 }) + box(420, 112, 20, 34, { fill: C.yellowL, c: C.orange, r: 4 });
      s += F.callout(247, 62, 214, 34, '부흐홀츠 계전기', { a: 'e', b: 1, c: C.orange, size: 15 });
      s += t(214, 52, '(본체 ↔ 콘서베이터 사이)', { a: 'e', size: 12.5, c: C.sub });
      s += F.callout(440, 130, 452, 160, '브리더', { a: 'e', size: 14 });
      s += t(250, 178, '절연유의 조건', { b: 1, size: 15 });
      s += t(250, 202, '· 절연내력 · 냉각효과 클 것', { size: 14 });
      s += t(250, 224, '· 인화점 높을 것', { size: 14 });
      s += t(250, 246, '· 응고점 · 점도 낮을 것', { size: 14 });
      return F.svg(480, 266, s);
    } },

  trParallel: { cap: '변압기 병렬운전 — 극성 · 주파수 · 위상 · 파형(3상은 상회전)이 같아야 한다',
    ex: /변압기.{0,50}병렬 ?운전|병렬 ?운전.{0,50}변압기|3상 ?변압기.{0,30}(조합|결선)/,
    con: { s: '전기기기', t: '변압기 병렬운전 조건', crit: '변압기', f: '같아야 할 것: 극성 · 주파수 · 위상 · 파형 · 상회전 방향(3상)',
      pts: ['두 변압기를 같은 모선에 나란히 이어 부하를 나눠 맡긴다', '극성 · 주파수 · 위상 · 파형이 같아야 하고, 3상은 상회전 방향도 같아야 한다',
        '3상 결선 조합 — 불가능: Δ-Δ 와 Δ-Y · Y-Y 와 Δ-Y', '가능: 같은 결선끼리 · Δ-Δ 와 Y-Y · Δ-Y 와 Y-Δ'] },
    draw: function () {
      var s = '';
      s += line(30, 46, 290, 46, { w: 4 }) + line(30, 168, 290, 168, { w: 4 });
      s += t(30, 30, '1차 모선', { size: 13, c: C.sub }) + t(30, 186, '2차 모선', { size: 13, c: C.sub });
      [110, 210].forEach(function (x, i) {
        s += line(x, 46, x, 76) + line(x, 138, x, 168);
        s += circle(x, 94, 18, { fill: 'none', c: C.blue, w: 2.4 }) + circle(x, 120, 18, { fill: 'none', c: C.blue, w: 2.4 });
        s += t(x + 26, 107, i ? 'T₂' : 'T₁', { b: 1 });
      });
      s += line(160, 168, 160, 192) + box(130, 192, 60, 26, { fill: C.grayL, c: C.ink, label: '부하', size: 14 });
      s += t(310, 46, '같아야 할 것', { b: 1, size: 16, c: C.green });
      s += t(310, 74, '· 극성', { size: 15 }) + t(310, 98, '· 주파수 · 위상', { size: 15 });
      s += t(310, 122, '· 파형', { size: 15 }) + t(310, 146, '· 상회전 방향(3상)', { size: 15 });
      s += line(20, 230, 460, 230, { c: C.edge, w: 1 });
      s += t(24, 252, '3상 불가능', { b: 1, c: C.red, size: 15 });
      s += t(130, 252, 'Δ-Δ 와 Δ-Y  ·  Y-Y 와 Δ-Y', { size: 15, c: C.red });
      s += t(24, 278, '3상 가능', { b: 1, c: C.green, size: 15 });
      s += t(130, 278, '같은 결선끼리 · Δ-Δ 와 Y-Y · Δ-Y 와 Y-Δ', { size: 14 });
      return F.svg(480, 296, s);
    } },

  powerSemi: { cap: '전력용 반도체 소자 — 단자 수와 전류 방향(단방향 · 양방향)으로 구분한다',
    ex: /TRIAC|트라이액|DIAC|다이악|GTO|양방향|단방향|자기 ?소호|SSS|IGBT|MOSFET|사이리스터|SCR|다이오드|3단자|2단자/,
    not: /정류 ?회로|반파|전파|맥동|위상 ?제어|점호각/,
    con: { s: '전기기기', t: '전력용 반도체 소자 기호', crit: '정류기 및 제어기기', f: 'SCR · GTO: 3단자 단방향 · TRIAC: 3단자 양방향 · 다이오드: 2단자 단방향',
      pts: ['다이오드: 애노드(A) → 캐소드(K) 한쪽으로만 흐른다 (정류)', 'SCR: 게이트(G) 신호로 켠다, 3단자 · 단방향, 위상제어',
        'GTO: 게이트 신호로 끄기도 한다 → 자기소호 기능이 가장 좋다', 'TRIAC: SCR 2개를 역병렬로 — 3단자 · 양방향, 교류 위상제어 (양방향: TRIAC · DIAC · SSS)'] },
    draw: function () {
      var s = '', Y = 92;
      var P = [{ x: 60, n: '다이오드', a: '2단자 · 단방향', b: '정류' }, { x: 180, n: 'SCR', a: '3단자 · 단방향', b: '게이트로 켠다' },
        { x: 300, n: 'GTO', a: '3단자 · 단방향', b: '자기소호 가장 좋음' }, { x: 420, n: 'TRIAC', a: '3단자 · 양방향', b: '교류 위상제어' }];
      P.forEach(function (p, i) {
        var x = p.x;
        s += line(x - 46, Y, x + 46, Y);
        if (i < 3) {
          s += tri(x, Y, 13) + line(x + 13, Y - 15, x + 13, Y + 15, { w: 2.6 });
          if (i >= 1) {
            s += line(x + 13, Y + 10, x + 30, Y + 32, { w: 1.8 }) + t(x + 36, Y + 38, 'G', { size: 13, b: 1 });
            if (i === 2) s += line(x + 18, Y + 26, x + 30, Y + 18, { w: 1.8 });
          }
        } else {
          s += line(x - 13, Y - 26, x - 13, Y + 26, { w: 2.6 }) + line(x + 13, Y - 26, x + 13, Y + 26, { w: 2.6 });
          s += F.poly([[x - 13, Y - 24], [x - 13, Y - 2], [x + 13, Y - 13]], { close: true, fill: C.ink, w: 1 });
          s += F.poly([[x + 13, Y + 2], [x + 13, Y + 24], [x - 13, Y + 13]], { close: true, fill: C.ink, w: 1 });
          s += line(x + 13, Y + 18, x + 30, Y + 38, { w: 1.8 }) + t(x + 36, Y + 44, 'G', { size: 13, b: 1 });
        }
        s += t(x, 160, p.n, { a: 'm', b: 1, size: 17 });
        s += t(x, 184, p.a, { a: 'm', size: 13, c: i === 3 ? C.orange : C.blue, b: 1 });
        s += t(x, 206, p.b, { a: 'm', size: 13, c: C.sub });
      });
      s += t(16, Y - 22, 'A', { size: 13, b: 1, c: C.sub }) + t(98, Y - 22, 'K', { size: 13, b: 1, c: C.sub });
      s += line(120, 46, 120, 216, { c: C.edge, w: 1 }) + line(240, 46, 240, 216, { c: C.edge, w: 1 }) + line(360, 46, 360, 216, { c: C.edge, w: 1 });
      s += t(240, 30, '전류는 삼각형이 가리키는 쪽(A → K)으로 흐른다', { a: 'm', size: 14 });
      s += t(240, 240, '양방향 소자: TRIAC · DIAC · SSS', { a: 'm', size: 14, b: 1, c: C.orange });
      return F.svg(480, 258, s);
    } },

  syncRotField: { cap: '동기발전기는 회전계자형 — 전기자는 고정하고 계자(N·S)를 돌린다',
    ex: /회전 ?계자|회전 ?전기자|여자기|동기 ?발전기의 ?구조|동기 ?속도|동기속도/,
    not: /슬립|유도|정류자/,
    con: { s: '전기기기', t: '동기발전기 — 회전계자형', crit: '동기기', f: '고정자 = 전기자 · 회전자 = 계자 · 동기속도 Ns = 120f / P [rpm]',
      pts: ['전기자를 고정하고 자극 N · S(계자)를 회전시키는 방식', '전기자 권선의 절연이 쉽고, 고전압을 슬립링 없이 바로 밖으로 뽑아낸다 · 기계적으로 튼튼',
        '계자를 여자하기 위한 직류 여자기가 반드시 필요하다', '동기속도 Ns = 120f / P — 극수가 많을수록 느리다'] },
    draw: function () {
      var s = '', cx = 130, cy = 134;
      s += circle(cx, cy, 96, { fill: C.grayL, c: C.ink, w: 2 }) + circle(cx, cy, 70, { fill: '#fff', c: C.ink, w: 1.6 });
      for (var i = 0; i < 12; i++) {
        var a = i * Math.PI / 6;
        s += circle(cx + 80 * Math.cos(a), cy + 80 * Math.sin(a), 6, { fill: C.orangeL, c: C.orange, w: 1.6 });
      }
      s += box(cx - 20, cy - 58, 40, 56, { fill: C.redL, c: C.red, label: 'N', lc: C.red, size: 20, r: 6 });
      s += box(cx - 20, cy + 2, 40, 56, { fill: C.blueL, c: C.blue, label: 'S', lc: C.blue, size: 20, r: 6 });
      s += arcArrow(cx, cy, 42, 200, 300, C.green);
      s += F.callout(cx + 86, cy - 40, 250, 56, '고정자 = 전기자', { b: 1, size: 16 });
      s += t(256, 80, '고전압 → 절연 쉽고 바로 인출', { size: 13, c: C.sub });
      s += F.callout(cx + 20, cy + 20, 250, 134, '회전자 = 계자 (N · S)', { b: 1, size: 16 });
      s += t(256, 158, '직류 여자기가 반드시 필요', { size: 13, c: C.sub });
      s += box(244, 196, 222, 40, { fill: C.blueL, c: C.blue, label: 'Ns = 120 f ÷ P [rpm]', size: 17 });
      return F.svg(480, 262, s);
    } },

  /* ════════════════════════ 전기설비 ════════════════════════ */

  voltClass: { cap: '전압의 구분 — 저압 · 고압 · 특고압 (교류와 직류의 저압 한계가 다르다)',
    ex: /전압의 ?구분|(저압|고압|특고압|특별 ?고압)(에 ?속하는|의 ?범위|으로 ?구분|이란|은 ?(교류|직류))|(직류|교류).{0,30}저압에 ?속|저압에 ?속하는/,
    con: { s: '전기설비', t: '전압의 구분 (저압 · 고압 · 특고압)', crit: '전선 및 기계기구의 보안공사', f: '저압 AC 1kV · DC 1.5kV 이하 · 고압 ~ 7kV 이하 · 특고압 7kV 초과',
      pts: ['저압: 교류 1,000[V] 이하 · 직류 1,500[V] 이하', '고압: 저압을 넘고 교류 · 직류 모두 7[kV] 이하', '특고압: 교류 · 직류 모두 7[kV] 초과'] },
    draw: function () {
      var s = '';
      [{ y: 84, n: '교류 (AC)', b: '1 kV' }, { y: 168, n: '직류 (DC)', b: '1.5 kV' }].forEach(function (r) {
        s += t(20, r.y, r.n, { b: 1, size: 16 });
        s += box(118, r.y - 18, 112, 36, { fill: C.greenL, c: C.green, r: 0, label: '저압', size: 16 });
        s += box(230, r.y - 18, 116, 36, { fill: C.orangeL, c: C.orange, r: 0, label: '고압', size: 16 });
        s += box(346, r.y - 18, 116, 36, { fill: C.redL, c: C.red, r: 0, label: '특고압', size: 16 });
        s += line(230, r.y - 26, 230, r.y + 26, { w: 2.6 }) + line(346, r.y - 26, 346, r.y + 26, { w: 2.6 });
        s += t(230, r.y - 38, r.b, { a: 'm', b: 1, size: 15, c: C.green, ans: true });
        s += t(346, r.y - 38, '7 kV', { a: 'm', b: 1, size: 15, c: C.red, ans: true });
      });
      s += t(240, 220, '경계값은 「이하」까지 아래 칸 — 1 kV 는 저압, 7 kV 는 고압', { a: 'm', size: 14, c: C.sub });
      return F.svg(480, 240, s);
    } },

  pvcConduit: { cap: '합성수지관 공사 — 지지점 1.5 m 이하 · 삽입 깊이 바깥지름의 1.2배(접착제 0.8배)',
    ex: /합성수지관|경질 ?비닐 ?전선관|PVC/,
    not: /폭연성|가연성|위험물|먼지|분진|화약|셀룰로이드|성냥|석유|터널|흥행|접지 ?도체|접지선/,
    con: { s: '전기설비', t: '합성수지관 공사', crit: '배선설비공사 및 전선허용전류', f: '두께 2mm 이상 · 지지점 1.5m 이하 · 삽입 깊이 = 바깥지름 × 1.2배 (접착제 0.8배)',
      pts: ['호칭은 안지름(내경) · 짝수', '관의 두께 2[mm] 이상', '새들 등으로 지지할 때 지지점 간 거리 1.5[m] 이하',
        '관 상호 · 관과 박스 접속: 삽입 깊이 바깥지름의 1.2배 이상 (접착제를 쓰면 0.8배 이상)', '관 안에서 전선을 접속하지 않는다'] },
    draw: function () {
      var s = '';
      s += box(20, 30, 440, 14, { fill: C.grayM, c: C.grayM, r: 0 }) + F.hatch(20, 30, 440, 14, { gap: 10, c: C.sub });
      s += t(24, 22, '조영재', { size: 13, c: C.sub });
      s += box(30, 46, 420, 18, { fill: C.grayL, c: C.ink, r: 4 });
      [90, 330].forEach(function (x) { s += path('M' + (x - 14) + ',44 V' + 54 + ' A14,14 0 0 0 ' + (x + 14) + ',54 V44', { c: C.blue, w: 3 }); });
      s += t(90, 100, '새들', { a: 'm', size: 14, c: C.blue, b: 1 }) + t(330, 100, '새들', { a: 'm', size: 14, c: C.blue, b: 1 });
      s += F.dim(90, 112, 330, 112, '', { c: C.red });
      s += t(210, 128, '지지점 간 1.5 m 이하', { a: 'm', b: 1, c: C.red, size: 15, ans: true });
      /* 관 접속 확대 */
      s += t(24, 160, '관 상호 접속 (확대)', { b: 1, size: 15 });
      s += box(30, 178, 230, 44, { fill: '#fff', c: C.ink, r: 3 });
      s += box(180, 186, 250, 28, { fill: C.grayL, c: C.ink, r: 3 });
      s += line(180, 178, 180, 222, { c: C.ink, w: 1 });
      s += box(180, 178, 80, 44, { fill: C.orangeL, c: C.orange, r: 0, op: 0.6 }).replace('<rect', '<rect opacity="0.55"');
      s += F.dim(180, 236, 260, 236, '', { c: C.orange });
      s += t(220, 254, '삽입 깊이', { a: 'm', b: 1, c: C.orange, size: 14 });
      s += t(280, 248, '바깥지름 × 1.2배 이상', { b: 1, size: 15, ans: true });
      s += t(280, 272, '(접착제를 쓰면 0.8배)', { size: 14, c: C.sub, ans: true });
      s += t(24, 296, '관 두께 2 mm 이상 · 호칭은 안지름(짝수)', { size: 14 });
      return F.svg(480, 312, s);
    } },

  metalConduit: { cap: '금속관 공사 — 교류는 한 회로의 전선을 모두 같은 관에 넣는다',
    ex: /금속관/,
    not: /부속|커플링|부싱|새들|엔트런스|로크 ?너트|노멀 ?밴드|후강|박강|폭연성|가연성|위험물|먼지|분진|화약|셀룰로이드|터널|흥행|오스터|리머|공구|가요/,
    con: { s: '전기설비', t: '금속관 공사', crit: '배선설비공사 및 전선허용전류', f: '콘크리트 매입 두께 1.2mm 이상 · 교류 1회로 전선은 모두 같은 관에',
      pts: ['콘크리트에 매입하는 금속관의 두께는 1.2[mm] 이상', '교류회로는 1회로의 전선 전부를 같은 관에 넣어 전자적 불평형을 막는다',
        '전선은 절연전선(옥외용 비닐절연전선 OW 제외) · 관 안에 접속점이 없게', '연선이 원칙(단면적 10[mm²] 이하 연동선은 단선 가능)'] },
    draw: function () {
      var s = '';
      s += t(120, 28, '○ 한 관에 같이', { a: 'm', b: 1, size: 17, c: C.green });
      s += circle(120, 110, 52, { fill: C.grayL, c: C.ink, w: 5 });
      s += circle(100, 110, 12, { fill: '#fff', c: C.ink, w: 2 }) + dot(100, 110, 4);
      s += circle(140, 110, 12, { fill: '#fff', c: C.ink, w: 2 }) + t(140, 110, '×', { a: 'm', b: 1, size: 16, halo: false });
      s += t(120, 186, '왕복 전류의 자속이 상쇄', { a: 'm', size: 14, b: 1 });
      s += line(240, 40, 240, 210, { c: C.edge, w: 1 });
      s += t(360, 28, '× 나눠 넣으면', { a: 'm', b: 1, size: 17, c: C.red });
      [310, 410].forEach(function (x, i) {
        s += circle(x, 110, 40, { fill: C.redL, c: C.ink, w: 5 });
        s += circle(x, 110, 24, { fill: 'none', c: C.red, w: 1.4, dash: '4 3' });
        s += circle(x, 110, 11, { fill: '#fff', c: C.ink, w: 2 }) + (i ? t(x, 110, '×', { a: 'm', b: 1, size: 16, halo: false }) : dot(x, 110, 4));
      });
      s += t(360, 176, '관이 발열', { a: 'm', size: 14, b: 1, c: C.red });
      s += t(360, 198, '(전자적 불평형)', { a: 'm', size: 13, c: C.sub });
      s += box(30, 220, 420, 36, { fill: C.blueL, c: C.blue, label: '콘크리트 매입 금속관 두께 1.2 mm 이상', size: 16 });
      s += t(240, 276, '전선: 절연전선(OW 제외) · 관 안 접속점 없게', { a: 'm', size: 14, c: C.sub });
      return F.svg(480, 292, s);
    } },

  insulatorWork: { cap: '애자사용 공사 — 전선 상호 6 cm · 전선과 조영재 2.5 cm(400V 이하) 이상 띄운다',
    ex: /애자 ?사용|애자사용|조영재.{0,30}(간격|이격)|전선 ?상호 ?간/,
    not: /가공|지지물|전주|현수|핀 ?애자|인류/,
    con: { s: '전기설비', t: '애자사용 공사의 간격', crit: '배선설비공사 및 전선허용전류', f: '전선 상호 6cm(고압 8cm) · 전선-조영재 2.5cm(400V 이하) · 4.5cm(400V 초과, 건조한 곳 2.5cm)',
      pts: ['저압 전선 상호 간격 6[cm] 이상 (고압은 8[cm])', '전선과 조영재 사이: 400[V] 이하 2.5[cm] 이상',
        '400[V] 초과는 4.5[cm] 이상 (건조한 장소는 2.5[cm])', '사람이 상시 통행하는 터널: 2.5[mm²] 이상 연동선, 노면상 2.5[m] 이상'] },
    draw: function () {
      var s = '';
      s += box(20, 30, 440, 22, { fill: C.grayM, c: C.grayM, r: 0 }) + F.hatch(20, 30, 440, 22, { gap: 10, c: C.sub });
      s += t(24, 70, '조영재 (천장 · 벽)', { size: 13, c: C.sub });
      [170, 330].forEach(function (x) {
        s += line(x, 52, x, 82, { w: 3 });
        s += '<ellipse cx="' + x + '" cy="98" rx="20" ry="18" fill="#fff" stroke="' + C.ink + '" stroke-width="2.2"/>';
        s += circle(x, 128, 9, { fill: C.orange, c: C.ink, w: 1.6 });
      });
      s += t(110, 98, '애자', { a: 'm', size: 14, b: 1 });
      s += F.dim(170, 152, 330, 152, '', { c: C.blue });
      s += t(250, 172, '전선 상호 6 cm 이상', { a: 'm', b: 1, c: C.blue, size: 16, ans: true });
      s += F.dim(392, 52, 392, 128, '', { c: C.red });
      s += line(339, 128, 402, 128, { c: C.red, w: 1, dash: '3 3' });
      s += t(404, 84, '조영재와', { size: 13, c: C.red });
      s += t(404, 104, '2.5 cm', { size: 15, c: C.red, b: 1, ans: true });
      s += box(30, 196, 420, 64, { fill: C.yellowL, c: C.orange, r: 8 });
      s += t(240, 216, '전선 ↔ 조영재: 400 V 이하 2.5 cm · 400 V 초과 4.5 cm', { a: 'm', size: 14, halo: false });
      s += t(240, 240, '(400 V 초과라도 건조한 곳은 2.5 cm) · 고압 전선 상호 8 cm', { a: 'm', size: 13, c: C.sub, halo: false });
      return F.svg(480, 276, s);
    } },

  poleDepth: { cap: '전주가 땅에 묻히는 깊이 — 15 m 이하는 길이의 1/6, 15 m 초과는 2.5 m',
    ex: /(전주|지지물|콘크리트주|목주|철주).{0,80}(묻히는|근입|매설 ?깊이)|(묻히는|근입) ?깊이/,
    not: /접지/,
    con: { s: '전기설비', t: '전주의 근입 깊이 (땅에 묻히는 깊이)', crit: '가공인입선 및 배전선 공사', f: '전장 15m 이하: 전체 길이 × 1/6 이상 · 15m 초과: 2.5m 이상',
      pts: ['전장 16[m] 이하 · 설계하중 6.8[kN] 이하인 지지물에 적용 (기초 안전율 2 이상)', '전장 15[m] 이하: 전체 길이의 1/6 이상 묻는다',
        '전장 15[m] 초과: 2.5[m] 이상', '예) 12[m] 전주 → 2[m] · 7[m] 전주 → 약 1.2[m]'] },
    draw: function () {
      var s = '', G = 200;
      s += box(20, G, 220, 74, { fill: C.yellowL, c: C.yellowL, r: 0 }) + line(20, G, 240, G, { c: '#a16207', w: 3 });
      s += t(26, G + 16, '지표면', { size: 13, c: '#a16207', b: 1 });
      s += F.poly([[140, 36], [152, 36], [158, 266], [134, 266]], { close: true, fill: C.grayL, c: C.ink, w: 2 });
      s += line(108, 66, 184, 66, { w: 5 });
      s += F.dim(100, 36, 100, 266, '', { c: C.ink });
      s += t(92, 140, '전체 길이', { a: 'e', size: 14, b: 1 });
      s += t(92, 160, 'L', { a: 'e', size: 15, b: 1 });
      s += F.dim(186, G, 186, 266, '', { c: C.orange });
      s += t(196, 226, 'L × 1/6', { size: 15, b: 1, c: C.orange, ans: true });
      s += t(196, 246, '이상', { size: 13, c: C.orange });
      s += box(262, 46, 204, 88, { fill: C.blueL, c: C.blue, r: 8 });
      s += t(274, 70, '15 m 이하', { b: 1, size: 15, halo: false }) + t(454, 70, '길이 × 1/6', { a: 'e', b: 1, size: 15, c: C.orange, halo: false, ans: true });
      s += t(274, 108, '15 m 초과', { b: 1, size: 15, halo: false }) + t(454, 108, '2.5 m 이상', { a: 'e', b: 1, size: 15, c: C.orange, halo: false, ans: true });
      s += t(270, 166, '예) 12 m 전주 → 2 m', { size: 15 });
      s += t(270, 192, '예) 7 m 전주 → 약 1.2 m', { size: 15 });
      s += t(270, 228, '(전장 16 m 이하 ·', { size: 13, c: C.sub });
      s += t(270, 248, ' 설계하중 6.8 kN 이하)', { size: 13, c: C.sub });
      return F.svg(480, 286, s);
    } },

  linkDrop: { cap: '가공인입선과 이웃 연결(연접) 인입선 — 연접은 100 m 이하, 5 m 넘는 도로 횡단 · 옥내 관통 금지',
    ex: /연접|이웃 ?연결|가공 ?인입선(을|이란|이라|은)|인입선 ?접속점/,
    not: /높이|노면상|지표상/,
    con: { s: '전기설비', t: '가공인입선 · 이웃 연결(연접) 인입선', crit: '가공인입선 및 배전선 공사', f: '연접인입선: 분기점에서 100m 이하 · 폭 5m 넘는 도로 횡단 금지 · 옥내 관통 금지',
      pts: ['가공인입선: 전주(지지물)에서 다른 지지물을 거치지 않고 수용장소의 인입선 접속점까지 오는 전선', '이웃 연결(연접)인입선: 한 수용장소의 인입선에서 분기해 다른 수용장소 인입구까지 가는 전선',
        '연접인입선(저압): 분기점에서 100[m]를 넘지 말 것 · 폭 5[m]를 넘는 도로 횡단 금지 · 다른 수용가 옥내 관통 금지', '가공인입선 굵기: 저압 2.6[mm] 이상 절연전선 (경간 15[m] 이하는 2.0[mm])'] },
    draw: function () {
      var s = '', G = 224;
      s += line(20, G, 460, G, { c: '#a16207', w: 3 });
      s += box(292, G - 2, 70, 12, { fill: C.grayM, c: C.grayM, r: 0 });
      s += box(46, 46, 12, 178, { fill: C.grayL, c: C.ink, r: 2 }) + line(26, 60, 78, 60, { w: 4 });
      function house(x) { return F.poly([[x, 150], [x + 45, 112], [x + 90, 150]], { close: true, fill: C.orangeL, c: C.ink, w: 2 }) + box(x + 8, 150, 74, G - 150, { fill: '#fff', c: C.ink, r: 0 }); }
      s += house(170) + house(372);
      s += path('M70,60 Q130,100 180,132', { c: C.blue, w: 3 }) + dot(180, 132, 4.5, C.blue);
      s += path('M250,132 Q316,148 382,132', { c: C.orange, w: 3 }) + dot(250, 132, 4.5, C.orange) + dot(382, 132, 4.5, C.orange);
      s += t(122, 44, '가공인입선', { a: 'm', b: 1, c: C.blue, size: 15 });
      s += t(316, 84, '이웃 연결(연접) 인입선', { a: 'm', b: 1, c: C.orange, size: 15 });
      s += t(316, 106, '분기점에서 100 m 이하', { a: 'm', size: 14, c: C.orange, ans: true });
      s += t(327, 246, '폭 5 m 넘는 도로 횡단 금지', { a: 'm', size: 13, c: C.red, b: 1 });
      s += t(215, 196, '수용가 A', { a: 'm', size: 13, halo: false }) + t(417, 196, '수용가 B', { a: 'm', size: 13, halo: false });
      s += t(240, 272, '다른 수용가의 옥내를 관통하지 않는다', { a: 'm', size: 14 });
      return F.svg(480, 290, s);
    } },

  earthElectrode: { cap: '접지극 시설 — 지하 75 cm 이상에 묻고, 접지도체는 지하 75 cm ~ 지상 2 m 를 합성수지관으로 보호',
    ex: /접지극|접지봉|접지 ?도체|접지선.{0,40}(매설|깊이|합성수지관|몰드|보호)|75 ?\[cm\]|접지 ?저항.{0,30}(저감|감소|낮추)|저감 ?대책/,
    not: /측정|콜라우시|어스 ?테스터|메거|단면적|녹색|색/,
    con: { s: '전기설비', t: '접지극의 시설', crit: '전선 및 기계기구의 보안공사', f: '매설 깊이 75cm 이상 · 접지도체 보호 = 지하 75cm ~ 지상 2m 합성수지관 · 금속체와 1m 이격',
      pts: ['접지극은 지하 75[cm] 이상 깊이에 묻는다 (동결 깊이 고려)', '사람이 닿을 우려가 있는 곳의 접지도체는 지하 75[cm] ~ 지상 2[m] 를 합성수지관 등으로 덮는다',
        '접지극을 금속제 지지물 옆에 묻을 때는 1[m] 이상 띄운다', '접지저항 낮추기: 접지봉의 개수 · 길이 · 접지판 면적을 늘리고, 깊게 묻고, 저감제를 쓴다'] },
    draw: function () {
      var s = '', G = 120;
      s += box(20, G, 440, 156, { fill: C.yellowL, c: C.yellowL, r: 0 }) + line(20, G, 460, G, { c: '#a16207', w: 3 });
      s += t(456, G + 16, '지표면', { a: 'e', size: 13, c: '#a16207', b: 1 });
      s += box(24, 50, 84, 46, { fill: C.grayL, c: C.ink, label: '기기 외함', size: 14 });
      s += box(162, 52, 16, 154, { fill: C.grayM, c: C.ink, w: 1.4, r: 3 });
      s += path('M108,72 H170 V206', { c: C.green, w: 3 });
      s += line(170, 206, 170, 262, { w: 7, c: C.sub });
      s += t(160, 244, '접지극', { a: 'e', b: 1, size: 14 });
      s += F.dim(130, G, 130, 206, '', { c: C.red });
      s += t(122, 166, '75 cm', { a: 'e', b: 1, size: 15, c: C.red, ans: true });
      s += t(122, 186, '이상', { a: 'e', size: 13, c: C.red });
      s += F.dim(210, 52, 210, G, '', { c: C.blue });
      s += t(220, 78, '지상 2 m', { b: 1, size: 14, c: C.blue, ans: true });
      s += F.callout(178, 150, 222, 150, '합성수지관으로 보호', { size: 14 });
      s += box(372, 30, 16, 246, { fill: C.grayL, c: C.ink, r: 2 });
      s += t(380, 22, '금속제 지지물', { a: 'm', size: 13, c: C.sub });
      s += F.dim(170, 262, 372, 262, '', { c: C.purple });
      s += t(280, 248, '1 m 이상 띄운다', { a: 'm', b: 1, size: 14, c: C.purple, ans: true });
      return F.svg(480, 288, s);
    } },

  branch3m: { cap: '분기회로 보호장치 — 분기점에 두는 것이 원칙, 조건을 갖추면 3 m 까지 옮길 수 있다',
    ex: /분기점|분기 ?회로.{0,60}(보호 ?장치|과전류|차단기|이동|설치)|분기회로의 ?보호/,
    not: /인입선|연접|이웃 ?연결/,
    con: { s: '전기설비', t: '분기회로 과전류 보호장치의 위치', crit: '고압 및 저압 배전반 공사', f: '분기점(O)에 설치가 원칙 · 사이에 다른 분기 · 콘센트가 없으면 3m 까지 이동 가능',
      pts: ['간선에서 갈라지는 곳(분기점 O)에 분기회로 보호장치(P₂)를 두는 것이 원칙', '분기점과 P₂ 사이에 다른 분기회로 · 콘센트가 없고 단락 · 화재 · 인체 위험이 최소화되면 3[m] 까지 옮길 수 있다',
        '분기회로 보호: 과전류차단기(퓨즈) · 배선용 차단기'] },
    draw: function () {
      var s = '';
      s += line(20, 70, 460, 70, { w: 3 });
      s += box(56, 54, 56, 32, { fill: C.blueL, c: C.blue, label: 'P₁', size: 16 });
      s += t(140, 50, '간선', { size: 14, c: C.sub, b: 1 });
      s += dot(250, 70, 6, C.red) + t(262, 52, 'O 분기점', { b: 1, size: 15, c: C.red });
      s += line(250, 70, 250, 240, { w: 3 });
      s += box(224, 154, 52, 32, { fill: C.orangeL, c: C.orange, label: 'P₂', size: 16 });
      s += F.dim(214, 70, 214, 154, '', { c: C.red });
      s += t(204, 104, '3 m', { a: 'e', b: 1, size: 17, c: C.red, ans: true });
      s += t(204, 126, '까지', { a: 'e', size: 14, c: C.red });
      s += t(240, 226, '분기회로', { a: 'e', size: 14, c: C.sub, b: 1 });
      s += t(292, 160, 'P₂ = 분기회로 보호장치', { b: 1, size: 14 });
      s += t(292, 184, '원칙: 분기점에 설치', { size: 14 });
      s += t(292, 206, '사이에 다른 분기 · 콘센트가', { size: 13, c: C.sub });
      s += t(292, 226, '없으면 3 m 까지 이동', { size: 13, c: C.sub });
      return F.svg(480, 256, s);
    } }
  };
})();

/* ══════════════════════════════════════════════════════════════
   이미 있는 개념 그림 55장(data/concepts-*.js)을 해설에도 쓴다 — 'c:제목' 키.
   새로 그리지 않고 그 SVG 를 그대로 가져온다(fig.js 의 크게 보기 · 캡션만 씌움).
   CONCEPT_EX[제목] = [찾을 정규식, 뺄 정규식]
   ══════════════════════════════════════════════════════════════ */
var CONCEPT_EX = {
  '옴의 법칙': [/옴의 ?법칙/],
  '직렬 접속 · 병렬 접속': [/합성 ?저항|저항.{0,15}(직렬|병렬)|(직렬|병렬).{0,15}저항/, /콘덴서|정전 ?용량|인덕턴스|코일|전지|배율기|분류기|접지/],
  '키르히호프 법칙': [/키르히호프/],
  '콘덴서(정전용량)': [/정전 ?용량|콘덴서|커패시터|유전율|유전체|극판/, /직렬|병렬|역률|진상|전동기|조상|에너지|기동/],
  '콘덴서 직렬·병렬 합성': [/(콘덴서|정전 ?용량|커패시터).{0,50}(직렬|병렬)|(직렬|병렬).{0,50}(콘덴서|정전 ?용량|커패시터)/, /전동기|기동|역률/],
  '전류가 만드는 자기장 (오른나사 법칙)': [/오른나사|앙페르|직선 ?(도체|전류|도선)|원형 ?코일|자계의 ?세기|자기장의 ?세기|비오/, /솔레노이드|환상/],
  '플레밍의 왼손·오른손 법칙': [/플레밍|전자력|F ?= ?BI/],
  '전자유도 (패러데이 · 렌츠 법칙)': [/전자 ?유도|패러데이|렌츠|유도 ?기전력|유기 ?기전력|자기 ?유도|와전류|와류/, /전기 ?분해|변압기/],
  '정현파 교류 (최대값·실효값·평균값)': [/실효값|평균값|최대값|순시값|파형률|파고율|주기|각속도|주파수.{0,10}\[Hz\]/, /비정현파|고조파/],
  '임피던스와 역률': [/임피던스|리액턴스|역률|어드미턴스/, /동기 ?임피던스|%|퍼센트|변압기|전동기|발전기|조상/],
  '3상 Y결선 · Δ결선': [/Y ?결선|△ ?결선|Δ ?결선|델타|성형 ?결선|선간 ?전압|상전압|선전류|상전류|3상 ?(전력|교류|회로)/, /변압기|V ?결선|기동/],
  '쿨롱의 법칙 (정전기 힘)': [/쿨롱|정전력|흡인력|반발력/],
  '자기회로와 기자력': [/자기 ?회로|기자력|자기 ?저항|자로|자속 ?밀도|투자율/, /자성체/],
  '히스테리시스 곡선 (B-H 곡선)': [/히스테리시스|잔류 ?자기|보자력|B-H|자화 ?곡선/],
  '인덕턴스 가동접속 · 차동접속': [/가동 ?접속|차동 ?접속|상호 ?인덕턴스|합성 ?인덕턴스|결합 ?계수|인덕턴스/, /에너지/],
  '배율기와 분류기': [/배율기|분류기|배율|전압계|전류계/, /변류기|계기용/],
  'R-L-C 직렬 공진': [/공진/],
  '줄의 법칙과 전력량': [/줄의 ?법칙|줄열|전력량|열량|\[kWh\]|\[kcal\]|\[cal\]|전열기|소비 ?전력/],
  '전지와 열전효과': [/전지|국부 ?작용|분극|성극|감극제|제백|펠티에|톰슨|열전|전기 ?분해|전해/],
  '직류기의 구조': [/정류자|브러시|계자|전기자 ?(권선|철심)|직류기의 ?(구조|3요소|구성)|중권|파권|균압/, /동기|유도|반작용/],
  '직류전동기 · 발전기 원리': [/역기전력|직류 ?(전동기|발전기).{0,10}원리|유기 ?기전력/],
  '변압기 원리와 권수비': [/권수비|변압비|권선비|변압기의 ?원리|감은 ?횟수/],
  'V결선 (단상 변압기 2대로 3상)': [/V ?결선|이용률|출력비/],
  '3상 유도전동기와 슬립': [/슬립|회전 ?자계|회전 ?자기장|유도 ?전동기의 ?(원리|회전)|2차 ?(입력|동손|효율|주파수)|등가 ?부하/, /비례 ?추이/],
  '단상 유도전동기 기동법 (토크 순서)': [/분상|콘덴서 ?기동|반발|셰이딩|세이딩|단상 ?유도/],
  '단상 정류회로 (반파 · 전파)': [/반파|전파 ?정류|정류 ?회로|맥동|브리지 ?정류|평활/],
  'SCR(사이리스터) 위상제어': [/위상 ?제어|점호각|점호|SCR|사이리스터|턴 ?온/, /TRIAC|트라이액|GTO|양방향/],
  '직류발전기의 종류': [/(타여자|분권|직권|복권|자여자|과복권|평복권).{0,8}발전기|발전기.{0,30}(타여자|분권|직권|복권)|외부 ?특성/],
  '전기자 반작용': [/전기자 ?반작용|보극|보상 ?권선|중성축|감자 ?작용|교차 ?자화|증자 ?작용/],
  '변압기 3상 결선': [/변압기.{0,40}결선|결선.{0,40}변압기|제3 ?고조파|위상차 ?30|스코트|포크/, /V ?결선|병렬 ?운전/],
  '변압기 손실과 효율': [/철손|동손|와류손|와전류손|무부하손|부하손|최대 ?효율|규약 ?효율|단락 ?시험|무부하 ?시험|%임피던스|퍼센트 ?임피던스|여자 ?전류/],
  '3상 유도전동기 기동법': [/Y-?△ ?기동|Y-?Δ ?기동|기동 ?보상기|리액터 ?기동|전전압 ?기동|직입 ?기동|기동법|기동 ?방법|기동 ?전류/, /단상|직류/],
  '동기발전기 병렬운전 조건': [/(동기|발전기).{0,40}병렬 ?운전|병렬 ?운전.{0,40}(동기|기전력)|순환 ?전류|동기화 ?전류|난조|제동 ?권선|단락비|동기 ?임피던스|동기 ?리액턴스/, /변압기|직류/],
  '동기전동기 위상특성 (V곡선)': [/V ?곡선|위상 ?특성|동기 ?조상기|과여자|부족 ?여자|동기 ?전동기/],
  '계기용변성기 CT · PT · ZCT': [/변류기|계기용 ?변압기|계기용 ?변성기|\bCT\b|\bPT\b|ZCT|영상 ?변류기|MOF/],
  '보호계전기의 종류': [/계전기|계전 ?방식|OCR|OVR|UVR|EOCR/],
  '전등 1개를 2개소에서 점멸 (3로 스위치)': [/3로|2개소/, /4로|3개소|4개소/],
  '접지공사 (접지선은 녹색)': [/접지/, /측정|콜라우시|어스 ?테스터|매설|75 ?\[cm\]|접지극|저감/],
  '전선관 공사의 종류': [/후강|박강|전선관의 ?(종류|호칭|규격|굵기)|가요 ?전선관|전선관/, /부속|커플링|부싱/],
  '옥내배선용 그림기호 (심벌)': [/심벌|그림 ?기호|도면 ?기호|배선용 ?기호/],
  '가공전선로 장주 (전주 세우기)': [/장주|완금|완철|발판 ?볼트|지지선|지선|건주|경간|랙 ?배선|지지물/, /근입|묻히는|매설 ?깊이|인입선/],
  '전선 접속 방법': [/트위스트|브리타니아|쥐꼬리|종단 ?접속|직선 ?접속|분기 ?접속|슬리브|와이어 ?커넥터|전선 ?접속|전선의 ?접속|접속 ?방법|납땜/],
  '전선 약호 (이름 외우기)': [/약호|\bVV\b|\bDV\b|\bOW\b|\bNR\b|\bCV\b|캡타이어/],
  '과전류차단기와 분전반': [/분전반|배선용 ?차단기|MCCB|과전류 ?차단기|퓨즈|분기 ?회로/, /분기점/],
  '전기공사 공구': [/공구|펜치|커터|스트리퍼|오스터|녹아웃|리머|벤더|클리퍼|홀소|파이프 ?바이스|와이어 ?게이지|드라이브 ?이트|피시 ?테이프|토치 ?램프|플라이어|프레셔 ?툴|히키/],
  '금속관 부속품': [/커플링|부싱|새들|엔트런스 ?캡|노멀 ?밴드|로크 ?너트|링 ?리듀서|유니버설 ?엘보|픽스처|터미널 ?캡/, /합성수지관/],
  '케이블트레이 · 덕트 공사': [/덕트|케이블 ?트레이|트렁킹|몰드/],
  '과전류차단기 · 누전차단기 동작': [/누전 ?차단기|ELB|정격 ?감도 ?전류|\[mA\]|인체 ?감전 ?보호/],
  '피뢰설비 (낙뢰 보호)': [/피뢰|낙뢰|수뢰부|인하 ?도선|돌침/, /피뢰기/],
  '절연저항 · 접지저항 측정': [/메거|절연 ?저항|콜라우시|어스 ?테스터|접지 ?저항.{0,10}측정|누설 ?전류|절연 ?내력/],
  '가공인입선의 높이': [/인입선.{0,60}(높이|횡단|노면|지표)|(높이|횡단).{0,60}인입선|가공 ?전선.{0,30}높이/],
  '수변전설비 단선도': [/수변전|수전 ?설비|큐비클|피뢰기|\bLA\b|COS|컷 ?아웃|단선도|배전반|진상용 ?콘덴서/],
  '특수장소 공사방법': [/폭연성|가연성|분진|먼지|화약|위험물|셀룰로이드|성냥|석유|흥행|광산|부식성|터널|특수 ?장소/],
  '조명 용어 (광속·광도·조도)': [/조도|광속|광도|휘도|\[lx\]|\[lm\]|\[cd\]|조명|램프|형광등/],
  '3개소 점멸 (4로 스위치)': [/4로|3개소|4개소/]
};
(function () {
  if (!window.FIG || !window.FIGS) return;
  var C = window.CONCEPTS || [];
  function wrap(svg) { return svg.replace(/^\s*<svg\b/, '<svg class="fig-svg" width="100%" role="img"'); }
  C.forEach(function (c) {
    var r = CONCEPT_EX[c.t]; if (!r) return;
    var svg = c.svg;
    FIGS['c:' + c.t] = { concept: c.t, ex: r[0], not: r[1], cap: c.t + (c.f ? ' — ' + c.f : ''),
      draw: function () { return wrap(svg); } };
  });

  /* 새로 그린 그림을 「그림으로 개념 잡기」 목록에도 카드로 넣는다 — 같은 과목의 맨 뒤에 */
  Object.keys(FIGS).forEach(function (k) {
    var e = FIGS[k]; if (!e || !e.con) return;
    if (C.some(function (c) { return c.t === e.con.t; })) return;
    var item = { s: e.con.s, t: e.con.t, crit: e.con.crit, f: e.con.f, pts: e.con.pts, fig: k, isNew: true };
    Object.defineProperty(item, 'svg', { enumerable: true, get: function () { return window.FIG.svgOf(k); } });
    var at = -1; C.forEach(function (c, i) { if (c.s === item.s) at = i; });
    C.splice(at + 1, 0, item);
  });
  window.CONCEPTS = C;
})();

/* 해설에 붙일 순서 — 좁은 주제가 앞. 한 해설에 최대 2장. */
var EXPL_ORDER = [
  'poleDepth', 'linkDrop', 'branch3m', 'earthElectrode', 'insulatorWork', 'pvcConduit', 'metalConduit', 'voltClass',
  'trOil', 'trParallel', 'rotorType', 'tsCurve', 'reverse3', 'dcSpeedCtrl', 'dcMotorType', 'syncRotField', 'powerSemi',
  'magmat', 'solenoid', 'nonsine', 'energyLC', 'wireR', 'eline',
  'c:3개소 점멸 (4로 스위치)', 'c:전등 1개를 2개소에서 점멸 (3로 스위치)', 'c:V결선 (단상 변압기 2대로 3상)', 'c:배율기와 분류기',
  'c:키르히호프 법칙', 'c:쿨롱의 법칙 (정전기 힘)', 'c:플레밍의 왼손·오른손 법칙', 'c:R-L-C 직렬 공진', 'c:히스테리시스 곡선 (B-H 곡선)',
  'c:인덕턴스 가동접속 · 차동접속', 'c:전기자 반작용', 'c:동기전동기 위상특성 (V곡선)', 'c:동기발전기 병렬운전 조건',
  'c:계기용변성기 CT · PT · ZCT', 'c:단상 유도전동기 기동법 (토크 순서)', 'c:3상 유도전동기 기동법', 'c:3상 유도전동기와 슬립',
  'c:변압기 원리와 권수비', 'c:변압기 손실과 효율', 'c:변압기 3상 결선', 'c:직류발전기의 종류', 'c:직류기의 구조', 'c:직류전동기 · 발전기 원리',
  'c:단상 정류회로 (반파 · 전파)', 'c:SCR(사이리스터) 위상제어', 'c:보호계전기의 종류', 'c:피뢰설비 (낙뢰 보호)', 'c:가공인입선의 높이',
  'c:가공전선로 장주 (전주 세우기)', 'c:수변전설비 단선도', 'c:특수장소 공사방법', 'c:조명 용어 (광속·광도·조도)', 'c:옥내배선용 그림기호 (심벌)',
  'c:전선 접속 방법', 'c:전선 약호 (이름 외우기)', 'c:전기공사 공구', 'c:금속관 부속품', 'c:전선관 공사의 종류', 'c:케이블트레이 · 덕트 공사',
  'c:과전류차단기 · 누전차단기 동작', 'c:과전류차단기와 분전반', 'c:절연저항 · 접지저항 측정', 'c:접지공사 (접지선은 녹색)',
  'c:전지와 열전효과', 'c:줄의 법칙과 전력량', 'c:자기회로와 기자력', 'c:전류가 만드는 자기장 (오른나사 법칙)', 'c:전자유도 (패러데이 · 렌츠 법칙)',
  'c:콘덴서 직렬·병렬 합성', 'c:콘덴서(정전용량)', 'divider', 'phaseRLC', 'powerTri', 'c:정현파 교류 (최대값·실효값·평균값)', 'c:3상 Y결선 · Δ결선',
  'c:임피던스와 역률', 'c:직렬 접속 · 병렬 접속', 'c:옴의 법칙'
];

/* 문항 → 그림 키들 (문제 · 보기 · 해설 글자로 찾는다) */
window.explFigKeys = function (q, max) {
  if (!q || !window.FIGS) return [];
  var txt = (q.q || '') + ' ' + (q.choices || []).join(' ') + ' ' + (q.explain || ''), out = [];
  for (var i = 0; i < EXPL_ORDER.length && out.length < (max || 2); i++) {
    var e = FIGS[EXPL_ORDER[i]];
    if (!e || !e.ex || !e.ex.test(txt) || (e.not && e.not.test(txt))) continue;
    out.push(EXPL_ORDER[i]);
  }
  return out;
};

/* 해설 아래에 붙는 그림 묶음 HTML — 해설이 열린 뒤에만 보인다 */
window.explFigHTML = function (q) {
  if (!window.FIG) return '';
  var ks = window.explFigKeys(q);
  if (!ks.length) return '';
  return '<div class="explfig"><div class="explfig-h">🖼️ 그림으로 다시 보기</div>' + window.FIG.gallery(ks) + '</div>';
};

/* 🧮 계산 풀이 유형 → 그림 */
var CALC_FIGS = {
  '합성저항 — 직렬': ['c:직렬 접속 · 병렬 접속'],
  '합성저항 — 병렬': ['c:직렬 접속 · 병렬 접속'],
  '정전용량 C = Q / V': ['c:콘덴서(정전용량)'],
  '콘덴서 병렬 — 전하 분배': ['c:콘덴서 직렬·병렬 합성'],
  '코일에 저장되는 에너지 W = ½LI²': ['energyLC'],
  '합성 인덕턴스 (가동·차동)': ['c:인덕턴스 가동접속 · 차동접속'],
  '평균값 → 실효값': ['c:정현파 교류 (최대값·실효값·평균값)'],
  'R-L 직렬 — 임피던스·전류·역률': ['c:임피던스와 역률', 'powerTri'],
  '전력량 [kWh]': ['c:줄의 법칙과 전력량'],
  '발생 열량 [kcal]': ['c:줄의 법칙과 전력량'],
  '전속밀도 D = Q / 4πr²': ['eline'],
  '권수비 a': ['c:변압기 원리와 권수비'],
  'V결선 출력': ['c:V결선 (단상 변압기 2대로 3상)'],
  '동기속도 · 극수': ['syncRotField'],
  '회전수(동기속도) 구하기': ['c:3상 유도전동기와 슬립'],
  '슬립과 등가 부하저항': ['c:3상 유도전동기와 슬립', 'tsCurve'],
  '유효순환전류(동기화전류)': ['c:동기발전기 병렬운전 조건'],
  '직권전동기 토크와 회전수': ['dcMotorType'],
  'Y결선 — 선간전압과 상전압': ['c:3상 Y결선 · Δ결선'],
  '3상 전력': ['c:3상 Y결선 · Δ결선', 'powerTri'],
  '전압 분배 (직렬)': ['divider'],
  'R-L-C 직렬 공진주파수': ['c:R-L-C 직렬 공진']
};
window.calcFigHTML = function (title) {
  if (!window.FIG || !window.FIGS) return '';
  var ks = (CALC_FIGS[title] || []).filter(function (k) { return window.FIGS[k]; });
  return ks.length ? '<div class="calcfig">' + window.FIG.gallery(ks) + '</div>' : '';
};
