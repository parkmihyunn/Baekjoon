const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const points = input
  .slice(1)
  .map(el => el.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

function dist(a, b) {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
}

function closest(l, r) {
  const len = r - l;
  if (len <= 3) { // 브루트포스
    let minD = Infinity;
    for (let i = l; i < r; i++) {
      for (let j = i + 1; j < r; j++) {
        minD = Math.min(minD, dist(points[i], points[j]));
      }
    }
    const sorted = points.slice(l, r).sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < sorted.length; i++) points[l + i] = sorted[i];
    return minD;
  }

  const mid = Math.floor((l + r) / 2);
  const midX = points[mid][0];
  let d = Math.min(closest(l, mid), closest(mid, r));

  // y정렬 병합
  const tmp = [];
  let i = l, j = mid;
  while (i < mid && j < r) {
    if (points[i][1] < points[j][1]) tmp.push(points[i++]);
    else tmp.push(points[j++]);
  }
  while (i < mid) tmp.push(points[i++]);
  while (j < r) tmp.push(points[j++]);
  for (let k = 0; k < tmp.length; k++) points[l + k] = tmp[k];

  // strip 검사
  const strip = [];
  for (let i = l; i < r; i++) {
    if ((points[i][0] - midX) ** 2 < d) strip.push(points[i]);
  }

  for (let i = 0; i < strip.length; i++) {
    for (
      let j = i + 1;
      j < strip.length && (strip[j][1] - strip[i][1]) ** 2 < d;
      j++
    ) {
      d = Math.min(d, dist(strip[i], strip[j]));
    }
  }

  return d;
}

console.log(closest(0, N));
