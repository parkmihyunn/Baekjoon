const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];
const arr2 = input.slice(1).map(Number);
arr2.unshift(0);

const visited = Array(N + 1).fill(false);
const finished = Array(N + 1).fill(false);
const anw = [];

const findCycle = (node, path) => {
  visited[node] = true;
  path.push(node);

  const next = arr2[node];
  if (!visited[next]) {
    findCycle(next, path);
  } else if (!finished[next]) {
    const idx = path.indexOf(next);
    anw.push(...path.slice(idx));
  }
  finished[node] = true;
  path.pop();
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) findCycle(i, []);
}

console.log(anw.length);
console.log(anw.sort((a, b) => a - b).join("\n"));