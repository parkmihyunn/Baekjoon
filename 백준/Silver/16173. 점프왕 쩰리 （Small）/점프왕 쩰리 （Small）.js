const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];
let coords = input.slice(1).map((item) => item.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
visited[0][0] = true;

const queue = [[0, 0]];
let head = 0;

while (head < queue.length) {
  const [x, y] = queue[head++];
  const moves = coords[x][y];

  if (moves === -1) {
    return console.log("HaruHaru");
  }
  if (moves === 0) continue;

  const newX = x + moves;
  const newY = y + moves;

  if (newX < N && !visited[newX][y]) {
    visited[newX][y] = true;
    queue.push([newX, y]);
  }
  if (newY < N && !visited[x][newY]) {
    visited[x][newY] = true;
    queue.push([x, newY]);
  }
}

console.log("Hing");