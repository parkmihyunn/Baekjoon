const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const coords = input.slice(1).map((el) => el.split("").map(Number));
const [targetY, targetX] = [N - 1, M - 1];
const d = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const bfs = () => {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (targetY === curY && targetX === curX) return move;

    for (let i = 0; i < 4; i++) {
      const ny = curY + d[i][1];
      const nx = curX + d[i][0];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && coords[ny][nx]) {
        coords[ny][nx] = 0;
        queue.push([ny, nx, move + 1]);
      }
    }
  }
};

console.log(bfs());