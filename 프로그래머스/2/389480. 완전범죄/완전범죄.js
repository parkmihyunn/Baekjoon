function solution(info, n, m) {
  const N = info.length;
  // A가 모두 훔쳤을 때 총 흔적
  const totalA = info.reduce((sum, [a]) => sum + a, 0);
  const capacity = m - 1;
  // dp[j]: B 흔적 합 j일 때 A 흔적 제거 최대값
  const dp = new Array(capacity + 1).fill(-Infinity);
  dp[0] = 0;
  
  for (let i = 0; i < N; i++) {
    const [a, b] = info[i];
    for (let j = capacity; j >= b; j--) {
      dp[j] = Math.max(dp[j], dp[j - b] + a);
    }
  }
  
  // B가 훔칠 최적 아이템으로 제거한 A 흔적량
  const bestRemoval = Math.max(...dp);
  const result = totalA - bestRemoval;
  return result < n ? result : -1;
}