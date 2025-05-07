function solution(r1, r2) {
  const r1sq = r1 * r1;
  const r2sq = r2 * r2;
  let subCount = 0;
  for (let x = 1; x <= r2; x++) {
    const yMinSq = r1sq - x * x;
    const yMaxSq = r2sq - x * x;
    // y=0 은 axisCount 에서 처리하므로, yMin 최소값을 1로 설정
    const yMin = yMinSq > 0 ? Math.ceil(Math.sqrt(yMinSq)) : 1;
    const yMax = yMaxSq >= 0 ? Math.floor(Math.sqrt(yMaxSq)) : -1;
    if (yMax >= yMin) subCount += (yMax - yMin + 1);
  }
  // 축 위 점: x=0 or y=0 인 (r1..r2) 범위, 4방향
  const axisCount = (r2 - r1 + 1) * 4;
  return subCount * 4 + axisCount;
}