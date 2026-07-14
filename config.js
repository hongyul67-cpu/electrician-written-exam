// ─────────────────────────────────────────────────────────────
//  교사 설정 파일 — 따옴표 안에 Apps Script /exec URL을 붙여넣으면 됩니다.
//  (배포 방법은 TEACHER-SETUP.md 참고)
//
//  syncUrl        : 학생 진도·오답노트를 구글 시트로 이어하기/교사 확인 (선택)
//  resultEndpoint : 시험 결과 "제출" 기능. 채우면 결과 화면에 [📤 결과 제출] 버튼이
//                   항상 뜨고, 학생이 반·번호로 제출하면 교사 구글 시트에 모입니다.
//                   비워두면 ?rc=<exec URL> 링크로 접속할 때만 제출 버튼이 뜹니다.
//  두 곳에 같은 /exec URL을 넣어도 됩니다(같은 시트로 모임, 탭만 다름).
// ─────────────────────────────────────────────────────────────
window.ELECEXAM_CONFIG = {
  syncUrl: "",         // 예: "https://script.google.com/macros/s/AKfy..../exec"
  resultEndpoint: "https://script.google.com/macros/s/AKfycbxcNlg5DKf6gbsmHqc-gFJ2acr4SWYz_7yIS-Af2CH-ZP_0RgWOYer4siEKQw_7YQ5mCQ/exec"
};
