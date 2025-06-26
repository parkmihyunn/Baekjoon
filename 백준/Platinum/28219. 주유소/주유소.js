const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);

const edges = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  edges[a].push(b);
  edges[b].push(a);
}

if (K > 1) {
  let anw = 0;
  function findLength(node, parent) {
    let maxLength = 0;
    for (let next of edges[node]) {
      if (next === parent) continue;
      let length = findLength(next, node);
      if (length === K - 1) {
        anw++;
      } else if (length !== -1) {
        maxLength = Math.max(maxLength, length + 1);
      }
    }
    return maxLength;
  }
  findLength(1, 0);
  console.log(anw);
} else {
  const DP = Array.from({ length: N + 1 }, () => [0, 0]);
  function dfs(node, parent) {
    DP[node][0] = 0;
    DP[node][1] = 1;
    for (const next of edges[node]) {
      if (next === parent) continue;
      dfs(next, node);
      DP[node][0] += DP[next][1];
      DP[node][1] += Math.min(DP[next][0], DP[next][1]);
    }
  }
  dfs(1, 0);
  console.log(Math.min(DP[1][0], DP[1][1]));
}