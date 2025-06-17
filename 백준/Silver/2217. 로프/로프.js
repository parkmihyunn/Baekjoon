const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
const loops = input
  .slice(1)
  .map((line) => Number(line.trim()))
  .filter((num) => num > 0)
  .sort((a, b) => a - b);

let weights = [];
let temp = 0;
while (n !== 0) {
  weights.push(loops[temp] * n);
  temp += 1;
  n -= 1;
}

console.log(Math.max(...weights));