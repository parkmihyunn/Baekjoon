function solution(n, m, x, y, r, c, k) {
    let [sx, sy] = [x - 1, y - 1];
    const [tx, ty] = [r - 1, c - 1];

  const dist = (a, b) => Math.abs(a - tx) + Math.abs(b - ty);

  const d0 = Math.abs(sx - tx) + Math.abs(sy - ty);
  if (d0 > k) return "impossible";
  if ((k - d0) % 2 !== 0) return "impossible";

  const inRange = (a, b) => a >= 0 && a < n && b >= 0 && b < m;

  const d = [[1, 0, "d"], [0, -1, "l"], [0, 1, "r"], [-1, 0, "u"]];

  let anw = "";

  for (let step = 0; step < k; step++) {
    for (let i = 0; i < 4; i++) {
      const nx = sx + d[i][0];
      const ny = sy + d[i][1];
      if (!inRange(nx, ny)) continue;

      const remain = k - (step + 1);
      const need = Math.abs(nx - tx) + Math.abs(ny - ty);

      if (need <= remain && (remain - need) % 2 === 0) {
        anw += d[i][2];
        sx = nx;
        sy = ny;
        break;
      }
    }
  }

  return anw;
}
