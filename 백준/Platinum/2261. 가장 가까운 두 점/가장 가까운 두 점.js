const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const dots = input
  .slice(1)
  .map((el) => el.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

function getDistance(dot1, dot2) {
  return (dot1[0] - dot2[0]) ** 2 + (dot1[1] - dot2[1]) ** 2;
}

function getClosest(l, r) {
  const len = r - l;
  if (len <= 3) {
    let min = Infinity;
    for (let i = l; i < r; i++) {
      for (let j = i + 1; j < r; j++) {
        min = Math.min(min, getDistance(dots[i], dots[j]));
      }
    }
    const sorted = dots.slice(l, r).sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < sorted.length; i++) dots[l + i] = sorted[i];
    return min;
  }

  const mid = Math.floor((l + r) / 2);
  const midX = dots[mid][0];
  let d = Math.min(getClosest(l, mid), getClosest(mid, r));

  const tmp = [];
  let i = l,
    j = mid;
  while (i < mid && j < r) {
    if (dots[i][1] < dots[j][1]) tmp.push(dots[i++]);
    else tmp.push(dots[j++]);
  }
  while (i < mid) tmp.push(dots[i++]);
  while (j < r) tmp.push(dots[j++]);
  for (let k = 0; k < tmp.length; k++) dots[l + k] = tmp[k];

  const strip = [];
  for (let i = l; i < r; i++) {
    if ((dots[i][0] - midX) ** 2 < d) strip.push(dots[i]);
  }

  for (let i = 0; i < strip.length; i++) {
    for (
      let j = i + 1;
      j < strip.length && (strip[j][1] - strip[i][1]) ** 2 < d;
      j++
    ) {
      d = Math.min(d, getDistance(strip[i], strip[j]));
    }
  }

  return d;
}

console.log(getClosest(0, N));

