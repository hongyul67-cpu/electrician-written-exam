# 기출 회차(data/YYYY-N.js)와 문제·풀이 그림(images/, images/expl/) -> 암호화(bank.enc · enc/*.enc)
#
#   python build_lock.py
#
# 왜 이렇게 하나:
#   정적 호스팅(GitHub Pages)에서는 화면에 암호 칸을 두어도 보호가 되지 않는다.
#   data/2020-1.js 주소를 직접 치면 그대로 받아지기 때문이다.
#   그래서 파일 자체를 AES-GCM 으로 암호화해 올리고, 브라우저에서 WebCrypto 로 푼다.
#   (같은 방식을 신재생·ITQ·공업일반·반도체설비보전이 이미 쓰고 있다)
#
# 무엇을 잠그고 무엇을 여는가:
#   잠근다 — 기출 회차 문항(data/20NN-N.js)과 문제 그림(images/*)  = 외부 저작물
#   연다   — 이론·개념(data/theory·concepts·lessons·calcs·bank-500)  = 직접 만든 것
#   그래서 코드 없이도 이론 공부는 되고, 기출만 코드가 필요하다.
#
# 암호 두 종류 (도구 공용 · _weekly/secret.json):
#   교사용 - 문구형, 만료 없음
#   학생용 - 8자리 숫자, 그 주 월요일 ~ 다음 월요일 7일만
#
# 주의: 평문 data/20NN-N.js 와 images/ 는 .gitignore 에 있다. 절대 커밋하지 말 것.
import io, os, re, json, gzip, base64, argparse, sys, secrets, subprocess, tempfile
from datetime import date
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), "_weekly"))
import weekly                                   # 도구 공용 주간 코드

OUT = os.path.join(HERE, "bank.enc")
DATA = os.path.join(HERE, "data")
IMG = os.path.join(HERE, "images")
ENC = os.path.join(HERE, "enc")
ITER = 200_000
ROUND_RE = re.compile(r"^\d{4}-\d+\.js$")       # 기출 회차 파일만


def round_files():
    return sorted(f for f in os.listdir(DATA) if ROUND_RE.match(f))


def extract_json():
    """회차 파일들을 node 로 평가해 EXAMS 배열 하나로 만든다.
    파일마다 window.EXAMS.push(...) 꼴이라 window 를 흉내 내 준다."""
    files = round_files()
    if not files:
        raise SystemExit("data/ 에 기출 회차 파일(YYYY-N.js)이 없습니다")
    driver = "global.window = global;\nwindow.EXAMS = [];\n"
    for f in files:
        driver += "require('./data/%s');\n" % f
    driver += "process.stdout.write(JSON.stringify({v:1, exams:window.EXAMS}));\n"
    with tempfile.NamedTemporaryFile("w", suffix=".js", dir=HERE, delete=False, encoding="utf-8") as fh:
        fh.write(driver)
        tmp = fh.name
    try:
        r = subprocess.run(["node", tmp], capture_output=True, text=True,
                           encoding="utf-8", cwd=HERE)
        if r.returncode:
            raise SystemExit("node 평가 실패:\n" + r.stderr)
        return r.stdout, files
    finally:
        os.remove(tmp)


def enc_name(rel):
    """images/expl/a.png -> expl__a.png.enc  (폴더가 달라도 이름이 겹치지 않게)"""
    return rel.replace("\\", "/").replace("/", "__") + ".enc"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pw", help="교사용 암호. 생략하면 _weekly/secret.json 의 teacher_pw")
    a = ap.parse_args()

    cfg = weekly.load()
    if not a.pw:
        a.pw = cfg.get("teacher_pw")
        if not a.pw:
            raise SystemExit("교사용 암호가 없습니다 - --pw 로 주거나 _weekly/secret.json 에 넣으세요")
    start = date.fromisoformat(cfg["epoch"])
    nweeks = cfg["weeks"]

    payload, files = extract_json()
    exams = json.loads(payload)["exams"]
    raw = payload.encode("utf-8")
    gz = gzip.compress(raw, 9)

    # 1) 본문을 임의의 내용키(CK)로 한 번만 암호화
    CK = secrets.token_bytes(32)
    nonce = secrets.token_bytes(12)
    body = nonce + AESGCM(CK).encrypt(nonce, gz, None)

    # 2) 암호마다 CK 를 감싼다 (salt 공유 → 해제 시 PBKDF2 는 1회)
    salt = secrets.token_bytes(16)
    MASTER = base64.b64decode(cfg["secret"])

    def derive(p):
        return PBKDF2HMAC(algorithm=hashes.SHA256(), length=32,
                          salt=salt, iterations=ITER).derive(p.encode("utf-8"))

    def wrap(p, info):
        iv = secrets.token_bytes(12)
        blob = AESGCM(derive(p)).encrypt(iv, json.dumps(info).encode("utf-8"), None)
        return {"iv": base64.b64encode(iv).decode(),
                "blob": base64.b64encode(blob).decode()}

    ck_b64 = base64.b64encode(CK).decode()
    keys = [wrap(a.pw, {"ck": ck_b64, "exp": None, "role": "teacher", "label": "교사용",
                        "ms": base64.b64encode(MASTER).decode(),
                        "epoch": start.isoformat(), "weeks": nweeks,
                        "prefix": cfg["prefix"]})]
    print("  키 감싸기 교사용 1개 + 학생용 %d주치 ..." % nweeks, end="", flush=True)
    sheet = weekly.weeks(cfg)
    for n, d0, d1, c in sheet:
        keys.append(wrap(c, {"ck": ck_b64, "nbf": d0.isoformat(), "exp": d1.isoformat(),
                             "role": "student", "label": d0.isoformat()}))
    print(" 완료")
    secrets.SystemRandom().shuffle(keys)

    # 3) 그림도 같은 CK 로 잠근다. images/**/* -> enc/*.enc
    #    ⚠️ 캐시 함정 — 다시 빌드하면 CK 가 바뀌는데 브라우저가 옛 .enc 를 캐시에서
    #    꺼내 쓰면 복호화가 조용히 실패해 그림이 빈 칸이 된다. 그래서 빌드 표식(?b=)을 붙인다.
    build_id = secrets.token_hex(4)
    if os.path.isdir(ENC):
        for f in os.listdir(ENC):
            os.remove(os.path.join(ENC, f))
    else:
        os.makedirs(ENC)
    nimg = 0
    if os.path.isdir(IMG):
        for root, dirs, fnames in os.walk(IMG):
            for name in sorted(fnames):
                p = os.path.join(root, name)
                rel = os.path.relpath(p, HERE)
                iv = secrets.token_bytes(12)
                io.open(os.path.join(ENC, enc_name(rel)), "wb").write(
                    iv + AESGCM(CK).encrypt(iv, io.open(p, "rb").read(), None))
                nimg += 1

    io.open(OUT, "w", encoding="utf-8").write(json.dumps({
        "v": 1, "build": build_id,
        "kdf": {"iter": ITER, "salt": base64.b64encode(salt).decode()},
        "data": base64.b64encode(body).decode(),
        "keys": keys,
    }))

    # 화면이 부르는 주소에도 표식을 박아 캐시를 피한다
    fp = os.path.join(HERE, "index.html")
    html = io.open(fp, encoding="utf-8").read()
    fixed = re.sub(r'(<body[^>]*data-build=")[^"]*(")', r'\g<1>' + build_id + r'\g<2>', html)
    if fixed != html:
        io.open(fp, "w", encoding="utf-8").write(fixed)

    nq = sum(len(e.get("questions") or []) for e in exams)
    print("  기출 %d회차 · %d문항 · 원본 %dKB -> gzip %dKB -> bank.enc %dKB"
          % (len(exams), nq, len(raw) // 1024, len(gz) // 1024, os.path.getsize(OUT) // 1024))
    print("  문제 그림 %d장 -> enc/*.enc  (빌드 표식 %s)" % (nimg, build_id))
    print("")
    print("  교사용 암호 : %s   (만료 없음)" % a.pw)
    cur = weekly.this_week(cfg)
    if cur:
        print("  이번 주 코드: %s %s   (%s ~ %s)" % (cur[3][:4], cur[3][4:], cur[1], cur[2]))


if __name__ == "__main__":
    main()
