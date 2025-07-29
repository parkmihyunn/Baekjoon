const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
let idx = 0;
const T = +input[idx++];
let anw = [];

for (let t = 0; t < T; t++) {
  const [N, M] = input[idx++].split(" ").map(Number);
  idx += M;
  anw.push(N - 1);
}

console.log(anw.join("\n"));