function solution(dice) {
  const n = dice.length;
  const half = n / 2;
  const combos = [];
  const used = Array(n).fill(false);

  // 1) n/2개 조합(combination) 생성
  function dfs(start, cnt) {
    if (cnt === half) {
      combos.push(used.map((v,i) => v ? i : -1).filter(i => i >= 0));
      return;
    }
    for (let i = start; i < n; i++) {
      used[i] = true;
      dfs(i + 1, cnt + 1);
      used[i] = false;
    }
  }
  dfs(0, 0);

  // 2) 주사위 인덱스 배열(indices)에 대한 합 분포(counts) 계산
  function getCount(indices) {
    let dist = [1]; // dist[s] = 경우의 수
    for (const idx of indices) {
      const faces = dice[idx];
      const newLen = dist.length + Math.max(...faces);
      const next = Array(newLen).fill(0);
      for (let s = 0; s < dist.length; s++) {
        const c = dist[s];
        if (!c) continue;
        for (const f of faces) {
          next[s + f] += c;
        }
      }
      dist = next;
    }
    return dist;
  }

  let bestWin = -1;
  let bestCombo = null;

  // 3) 모든 조합에 대해 A 승리(case count) 계산
  for (const combo of combos) {
    const aCnt = getCount(combo);
    const bIndices = [];
    const inA = new Set(combo);
    for (let i = 0; i < n; i++) if (!inA.has(i)) bIndices.push(i);
    const bCnt = getCount(bIndices);

    // B 누적합(prefix sum) 만들어서 빠르게 덜 작은 경우 계산
    const prefix = [...bCnt];
    for (let i = 1; i < prefix.length; i++) prefix[i] += prefix[i - 1];

    let win = 0;
    for (let s = 0; s < aCnt.length; s++) {
      const cA = aCnt[s];
      if (!cA) continue;
      const less = s > 0 ? prefix[s - 1] : 0;
      win += cA * less;
    }

    if (win > bestWin) {
      bestWin = win;
      bestCombo = combo;
    }
  }

  // 1-based 인덱스 정렬해서 반환
  return bestCombo.map(i => i + 1).sort((a, b) => a - b);
}function solution(dice) {
  const n = dice.length;
  const half = n / 2;
  const combos = [];
  const used = Array(n).fill(false);

  // 1) n/2개 조합(combination) 생성
  function dfs(start, cnt) {
    if (cnt === half) {
      combos.push(used.map((v,i) => v ? i : -1).filter(i => i >= 0));
      return;
    }
    for (let i = start; i < n; i++) {
      used[i] = true;
      dfs(i + 1, cnt + 1);
      used[i] = false;
    }
  }
  dfs(0, 0);

  // 2) 주사위 인덱스 배열(indices)에 대한 합 분포(counts) 계산
  function getCount(indices) {
    let dist = [1]; // dist[s] = 경우의 수
    for (const idx of indices) {
      const faces = dice[idx];
      const newLen = dist.length + Math.max(...faces);
      const next = Array(newLen).fill(0);
      for (let s = 0; s < dist.length; s++) {
        const c = dist[s];
        if (!c) continue;
        for (const f of faces) {
          next[s + f] += c;
        }
      }
      dist = next;
    }
    return dist;
  }

  let bestWin = -1;
  let bestCombo = null;

  // 3) 모든 조합에 대해 A 승리(case count) 계산
  for (const combo of combos) {
    const aCnt = getCount(combo);
    const bIndices = [];
    const inA = new Set(combo);
    for (let i = 0; i < n; i++) if (!inA.has(i)) bIndices.push(i);
    const bCnt = getCount(bIndices);

    // B 누적합(prefix sum) 만들어서 빠르게 덜 작은 경우 계산
    const prefix = [...bCnt];
    for (let i = 1; i < prefix.length; i++) prefix[i] += prefix[i - 1];

    // win 계산 부분 수정
let win = 0;
for (let s = 0; s < aCnt.length; s++) {
  const cA = aCnt[s];
  if (!cA) continue;
  // s-1이 범위 초과 시 마지막 누적합 사용
  let less;
  if (s === 0) less = 0;
  else if (s - 1 >= prefix.length) less = prefix[prefix.length - 1];
  else less = prefix[s - 1];
  win += cA * less;
}

    if (win > bestWin) {
      bestWin = win;
      bestCombo = combo;
    }
  }

  // 1-based 인덱스 정렬해서 반환
  return bestCombo.map(i => i + 1).sort((a, b) => a - b);
}