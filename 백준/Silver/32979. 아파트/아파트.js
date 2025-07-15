const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const hands = input[2].split(" ").map(Number);
const picked = input[3].split(" ").map(Number);

for (let t = 0; t < Number(input[1]); t++) {
  for (let i = 0; i < picked[t] - 1; i++) {
    hands.push(hands.shift());
  }
  console.log(hands[0]);
}
