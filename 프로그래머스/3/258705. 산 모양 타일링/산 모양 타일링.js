function solution(n, tops) {
  const MOD = 10007;
  // 1) 존재 마스크 생성
  const exbits = tops.map(x => (0b011 | (x ? 0b100 : 0))).concat(0b001);
  // 2) 마스크별 전이표(precompute)
  const transitions = {};
  for (const ex of new Set(exbits)) {
    transitions[ex] = getTransitions(ex);
  }
  // 3) DP[col][inMask] = 경우의 수
  let dp = { 0: 1 };
  for (const ex of exbits) {
    const next = {};
    for (const inMaskStr in dp) {
      const inMask = +inMaskStr;
      const ways   = dp[inMask];
      const tlist  = transitions[ex][inMask];
      if (!tlist) continue;
      for (const [outMask, cnt] of tlist) {
        // 수정: 곱하고 더할 때마다 MOD 처리
        const add = (ways * cnt) % MOD;
        next[outMask] = (next[outMask] || 0) + add;
        if (next[outMask] >= MOD) next[outMask] %= MOD;
      }
    }
    dp = next;
  }
  // 4) 최종 outMask=0인 경우만 합산
  return (dp[0] || 0) % MOD;

  // helper: exbit별 inMask→[(outMask, count)] 계산
  function getTransitions(exbit) {
    const map = {};
    let freq;
    function dfs(curMask, outMask) {
      let pos = -1;
      for (let b = 0; b < 3; b++) {
        if ((exbit >> b & 1) && !(curMask >> b & 1)) { pos = b; break; }
      }
      if (pos === -1) {
        freq[outMask] = (freq[outMask] || 0) + 1;
        return;
      }
      // 1) single
      dfs(curMask | (1 << pos), outMask);
      // 2) same-col diamond
      [[0,1],[1,2]].forEach(([u,v]) => {
        if ((pos===u||pos===v)
            && (exbit>>u&1)&&!(curMask>>u&1)
            && (exbit>>v&1)&&!(curMask>>v&1)) {
          dfs(curMask | (1<<u) | (1<<v), outMask);
        }
      });
      // 3) cross-col diamond
      if (pos===1 && !(curMask & 0b010)) {
        dfs(curMask | 0b010, outMask | 0b001);
      }
    }
    for (let inMask = 0; inMask < 8; inMask++) {
      if (inMask & ~exbit) continue;
      freq = {};
      dfs(inMask, 0);
      map[inMask] = Object.entries(freq).map(
        ([om, c]) => [ +om, c ]
      );
    }
    return map;
  }
}