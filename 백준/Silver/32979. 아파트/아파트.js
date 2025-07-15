const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const hands = input[2].split(" ").map(Number);
const picked = input[3].split(" ").map(Number);

let time = 0;
while (time !== Number(input[1])) {
  for (let i = 0; i < picked[time] - 1; i++) {
    hands.push(hands.shift());
  }
  console.log(hands[0]);
  time += 1;
}