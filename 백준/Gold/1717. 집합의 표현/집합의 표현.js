const fs = require("fs");
// 견고한 파서: fd(0) + 공백 기반 토큰화
const data = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let p = 0;
const N = data[p++], M = data[p++];

const sets = new Int32Array(N + 1).fill(-1);
const anw = [];

// 경로 압축 (path compression)
const find = (x) => {
  let r = x;
  while (sets[r] >= 0) r = sets[r];
  while (x !== r) {
    const parent = sets[x];
    sets[x] = r;
    x = parent;
  }
  return r;
};

// 사이즈 기준 합치기 (union by size)
const union = (a, b) => {
  a = find(a);
  b = find(b);
  if (a === b) return;
  if (sets[a] > sets[b]) [a, b] = [b, a]; // sets[root]는 음수(사이즈)
  sets[a] += sets[b];
  sets[b] = a;
};

// 정확히 M개 연산만 소비
for (let i = 0; i < M; i++) {
  const type = data[p++], a = data[p++], b = data[p++];
  if (type === 1) anw.push(find(a) === find(b) ? "YES" : "NO");
  else union(a, b);
}

console.log(anw.join("\n"));

