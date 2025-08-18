const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const T = +input[0];
const answer = [];

for (let i = 0; i < T; i++) {
  let anw = 0;
  const N = +input[2 * i + 1];
  const arr = input[2 * i + 2]
    .split(" ")
    .map((item, idx) => [idx + 1, Number(item)]);
  const visited = Array(N).fill(false);
  const dfs = (index) => {
    if (visited[index]) return;
    visited[index] = true;
    if (!visited[arr[index][1] - 1]) {
      dfs(arr[index][1] - 1);
    } else {
      anw += 1;
    }
  };

  for (let j = 0; j < N; j++) {
    dfs(j);
  }

  answer.push(anw);
}
console.log(answer.join("\n"));
