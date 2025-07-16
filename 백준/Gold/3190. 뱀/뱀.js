const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const K = Number(input[1]);
let apple = [];
for (let i = 2; i < 2 + K; i++) {
  apple.push(input[i].split(" ").map(Number));
}
const L = Number(input[2 + K]);
let turnInfo = [];
for (let i = 3 + K; i < input.length; i++) {
  turnInfo.push(input[i].split(" "));
}

let coords = Array.from({ length: N + 2 }, () => Array(N + 2).fill(0));
coords = coords.map((item, i) =>
  item.map((_, j) => {
    if (i === 1 && j === 1) return 1;
    if (i === 0 || i === N + 1) return -1;
    else if (j === 0 || j === N + 1) return -1;
    else return 0;
  })
);
apple.map(([a, b]) => {
  coords[a][b] = 2;
});

let roots = [[1, 1]];
let now = [1, 1];
let d = [0, 1];
let dir = "right";
let time = 0;
for (let i = 0; i < turnInfo.length; i++) {
  let limit = Number(turnInfo[i][0]);
  while (time < limit) {
    now = now.map((el, idx) => el + d[idx]);
    const [a, b] = now;
    if (coords[a][b] === -1 || coords[a][b] === 1) return console.log(time + 1);
    if (coords[a][b] === 2) {
      coords[a][b] = 1;
      roots.push([...now]);
    } else {
      coords[a][b] = 1;
      roots.push([...now]);
      const shifts = roots.shift();
      coords[shifts[0]][shifts[1]] = 0;
    }
    time++;
  }
  switch (dir) {
    case "up":
      if (turnInfo[i][1] === "L") {
        d = [0, -1];
        dir = "left";
      } else {
        d = [0, 1];
        dir = "right";
      }
      break;
    case "down":
      if (turnInfo[i][1] === "L") {
        d = [0, 1];
        dir = "right";
      } else {
        d = [0, -1];
        dir = "left";
      }
      break;
    case "right":
      if (turnInfo[i][1] === "L") {
        d = [-1, 0];
        dir = "up";
      } else {
        d = [1, 0];
        dir = "down";
      }
      break;
    case "left":
      if (turnInfo[i][1] === "L") {
        d = [1, 0];
        dir = "down";
      } else {
        d = [-1, 0];
        dir = "up";
      }
      break;
  }
}
while (1) {
  now = now.map((el, idx) => el + d[idx]);
  if (coords[now[0]][now[1]] === 2) {
    coords[now[0]][now[1]] = 1;
    roots.push(now.slice());
    time += 1;
  } else if (coords[now[0]][now[1]] === 1 || coords[now[0]][now[1]] === -1) {
    return console.log(time + 1);
  } else {
    coords[now[0]][now[1]] = 1;
    roots.push(now.slice());
    let shifts = roots.shift();
    coords[shifts[0]][shifts[1]] = 0;
    time += 1;
  }
}