const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];
const routes = input.slice(1, N).map((el) => el.split(" ").map((x) => Number(x) - 1));
const M = +input[N];
const pairs = input.slice(1 + N, 1 + N + M).map((el) => el.split(" ").map((x) => Number(x) - 1));

const LOG = Math.ceil(Math.log2(N));
const tree = Array.from({ length: N }, () => []);
for (const [a, b] of routes) {
  tree[a].push(b);
  tree[b].push(a);
}

const depth = new Int32Array(N);
const parent = new Int32Array(N * LOG).fill(-1);

// DFS로 depth와 1차 부모 채우기
const stack = [[0, 0]]; // [node, parent]
while (stack.length) {
  const [cur, par] = stack.pop();
  parent[cur * LOG] = par;
  for (const nxt of tree[cur]) {
    if (nxt === par) continue;
    depth[nxt] = depth[cur] + 1;
    stack.push([nxt, cur]);
  }
}

// 2^k 부모 채우기
for (let k = 1; k < LOG; k++) {
  for (let i = 0; i < N; i++) {
    const mid = parent[i * LOG + (k - 1)];
    parent[i * LOG + k] = parent[mid * LOG + (k - 1)];
  }
}

// LCA 함수
const lca = (a, b) => {
  if (depth[a] < depth[b]) [a, b] = [b, a];
  let diff = depth[a] - depth[b];
  for (let k = 0; diff; k++) {
    if (diff & 1) a = parent[a * LOG + k];
    diff >>= 1;
  }
  if (a === b) return a;
  for (let k = LOG - 1; k >= 0; k--) {
    if (parent[a * LOG + k] !== parent[b * LOG + k]) {
      a = parent[a * LOG + k];
      b = parent[b * LOG + k];
    }
  }
  return parent[a * LOG];
};

let out = "";
for (const [u, v] of pairs) {
  out += (lca(u, v) + 1) + "\n";
}
console.log(out.trim());