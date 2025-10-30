function solution(n, k, cmd) {
  const table = Array.from({ length: n }, (_, idx) => [idx, 'O']);

  const prev = Array(n);
  const next = Array(n);
  const alive = Array(n).fill(true);
  const stack = [];
  let point = k;
    
  for (let i = 0; i < n; i++) {
    prev[i] = i - 1;
    next[i] = i + 1 < n ? i + 1 : -1;
  }

  cmd.forEach((str) => {
    const op = str[0];

    if (op === 'U') {
      let x = Number(str.slice(2));
      while (x--) point = prev[point];
    }

    if (op === 'D') {
      let x = Number(str.slice(2));
      while (x--) point = next[point];
    }

    if (op === 'C') {
      stack.push(point);
      alive[point] = false;
      table[point][1] = 'X';

      const p = prev[point];
      const q = next[point];

      if (p !== -1) next[p] = q;
      if (q !== -1) prev[q] = p;

      point = (q !== -1) ? q : p;
    }

    if (op === 'Z') {
      const r = stack.pop();
      alive[r] = true;
      table[r][1] = 'O';

      const p = prev[r];
      const q = next[r];

      if (p !== -1) next[p] = r;
      if (q !== -1) prev[q] = r;
    }
  });

  return table.map(el => el[1]).join('');
}