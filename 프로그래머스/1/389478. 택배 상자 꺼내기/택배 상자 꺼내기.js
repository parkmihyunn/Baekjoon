function solution(n, w, num) {
  const idx = num - 1;
  const row = Math.floor(idx / w);
  const isReverse = row % 2 === 1;

  let col = idx % w;
  if (isReverse) col = w - 1 - col;

  let count = 0;
  const maxRow = Math.ceil(n / w) - 1;

  for (let r = row; r <= maxRow; r++) {
    const rev = r % 2 === 1;
    let base = r * w;
    let c = rev ? (w - 1 - col) : col;

    let box = base + c + 1;
    if (box <= n) count++;
  }

  return count;
}