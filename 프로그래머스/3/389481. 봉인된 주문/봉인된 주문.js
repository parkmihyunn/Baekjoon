// n번째(1-based) 허용 문자열을 반환
function solution(n, bans) {
  const base = 26n;
  const aCode = 97;

  // 1) 길이별 금지어를 BigInt 인덱스로 변환해 정렬·중복제거
  const bannedMap = new Map(); // length -> BigInt[] (sorted, unique)
  for (const s of bans) {
    if (!/^[a-z]+$/.test(s)) continue; // 소문자만 허용
    const len = s.length;
    const idx = toIndex(s);
    if (!bannedMap.has(len)) bannedMap.set(len, []);
    bannedMap.get(len).push(idx);
  }
  for (const [len, arr] of bannedMap) {
    arr.sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));
    // 중복 제거
    let write = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) arr[write++] = arr[i];
    }
    arr.length = write;
  }

  // 2) 정답이 속한 길이 L 찾기 (길이별 "허용 개수"로 점프)
  let L = 1;
  let pow = 26n;            // 26^1
  let remain = BigInt(n);   // 남은 순번(1-based)
  while (true) {
    const bannedArr = bannedMap.get(L) || [];
    const total = pow; // 26^L
    const allowed = total - BigInt(bannedArr.length);
    if (remain > allowed) {
      remain -= allowed;
      L += 1;
      pow *= 26n; // 다음 길이로
    } else break;
  }

  // 3) 길이 L 내부에서 remain번째(1-based) 허용 인덱스 찾기
  const bannedArr = bannedMap.get(L) || [];
  const total = pow; // 26^L
  const r = remain;  // 1-based
  const idx = kthAllowedIndex(r, bannedArr, total);

  // 4) 인덱스를 길이 L 문자열로 변환
  return indexToString(idx, L);

  // ---- 헬퍼들 ----
  function toIndex(s) {
    let val = 0n;
    for (let i = 0; i < s.length; i++) {
      const digit = BigInt(s.charCodeAt(i) - aCode);
      val = val * base + digit;
    }
    return val; // 0..26^L-1
  }

  function indexToString(idx, len) {
    const chars = new Array(len);
    for (let i = len - 1; i >= 0; i--) {
      const d = idx % base;                  // 0..25
      chars[i] = String.fromCharCode(Number(d) + aCode);
      idx = idx / base;
    }
    return chars.join('');
  }

  function upperBound(arr, x) {
    // arr: BigInt[] 정렬됨, x: BigInt
    // 반환: arr에서 <= x 의 개수
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] <= x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function kthAllowedIndex(r1, bannedArr, total) {
    // r1: 1-based 허용 순번
    // 최소의 x를 찾아 (x 이하 허용 개수) >= r1
    let lo = 0n, hi = total - 1n;
    while (lo < hi) {
      const mid = (lo + hi) / 2n;
      const bannedLE = upperBound(bannedArr, mid); // Number
      const allowedInclusive = (mid + 1n) - BigInt(bannedLE); // 0..mid 중 허용 개수
      if (allowedInclusive >= r1) hi = mid;
      else lo = mid + 1n;
    }
    return lo; // 금지어가 아닌 인덱스로 보장됨
  }
}
