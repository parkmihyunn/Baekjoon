const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const [M, N, H] = input[0].split(" ").map((item) => Number(item));
let moves = [
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
  [1, 0, 0],
  [-1, 0, 0],
];

let container = [];
let floor = [];
input.forEach((arr, idx) => {
  if (idx !== 0) {
    if (floor.length === N) {
      container.push(floor);
      floor = [];
    }
    floor.push(arr.split(" "));
  }
});
container.push(floor);

// 초기 익은 토마토 좌표 모두 큐에 push, 0 개수 카운트
let queue = [];
let zeroCount = 0;
for (let f = 0; f < H; f++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (container[f][i][j] === "1") queue.push([f, i, j, 0]);
      if (container[f][i][j] === "0") zeroCount += 1;
    }
  }
}

let result = 0;
let changed = 0;
let head = 0;

while (head < queue.length) {
  const [f, i, j, day] = queue[head++];
  result = day;

  for (move of moves) {
    const [nf, ni, nj] = [f + move[0], i + move[1], j + move[2]];
    if (nf >= 0 && nf < H && ni >= 0 && ni < N && nj >= 0 && nj < M) {
      if (container[nf][ni][nj] === "0") {
        container[nf][ni][nj] = "1";
        changed += 1;
        queue.push([nf, ni, nj, day + 1]);
      }
    }
  }
}

changed !== zeroCount ? console.log(-1) : console.log(result);
