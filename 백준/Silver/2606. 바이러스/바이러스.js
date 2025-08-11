const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];
const lineNum = +input[1];
const pairs = input
  .slice(2, 2 + lineNum)
  .map((item) => item.split(" ").map(Number).sort());

const connected = Array.from({ length: N + 1 }, () => []);
for (const pair of pairs) {
  const [a, b] = pair;
  connected[a].push(b);
  connected[b].push(a);
}

const computers = new Array(N + 1).fill(false);
computers[1] = true;

const queue = [1];
for (let i = 0; i < queue.length; i++) {
  const now = queue[i];
  for (const next of connected[now]) {
    if (!computers[next]) {
      computers[next] = true;
      queue.push(next);
    }
  }
}

console.log(computers.filter((item) => item).length - 1);