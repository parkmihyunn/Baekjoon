function solution(diffs, times, limit) {
  const n = diffs.length;
  // spread operator 대신 loop로 최대 난이도 구하기
  let maxDiff = 0;
  for (let d of diffs) {
    if (d > maxDiff) maxDiff = d;
  }

  let left = 1, right = maxDiff, answer = maxDiff;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let total = 0;

    for (let i = 0; i < n; i++) {
      const diff = diffs[i], t = times[i];
      if (diff <= mid) {
        total += t;
      } else {
        const mistakes = diff - mid;
        // i > 0인 게 보장되지만 안전하게 처리
        const prevTime = i > 0 ? times[i - 1] : 0;
        total += mistakes * (t + prevTime) + t;
      }
      if (total > limit) break;  // early exit
    }

    if (total <= limit) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}