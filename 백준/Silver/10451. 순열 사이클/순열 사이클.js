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
  const queue = [0];
  while (queue.length) {
    const cur = queue.shift();
    visited[cur] = true;
    const next = arr[cur][1] - 1;
    arr[cur] = [];
    if (!arr[next]) {
      anw += 1;
      if (visited.filter((item) => !item).length === 0) break;
      else {
        let temp = 0;
        for (let j = 0; j < N; j++) {
          if (!visited[j]) {
            temp = j;
            break;
          }
        }
        queue.push(temp);
      }
    } else queue.push(next);
  }
  answer.push(anw);
}
console.log(answer.join("\n"));