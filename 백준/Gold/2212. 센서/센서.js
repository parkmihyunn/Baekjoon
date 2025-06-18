const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const k = Number(input[1]);
const coords = input[2]
  .split(" ")
  .map((line) => Number(line.trim()))
  .sort((a, b) => a - b);

if (k >= n) {
  console.log(0);
} else {
    const diffs = [];
    for (let i = 1; i < n; i++) diffs.push(coords[i] - coords[i - 1]);
    diffs.sort((a, b) => b - a);

    let anw = coords[n - 1] - coords[0];
    for (let i = 0; i < k - 1; i++) anw -= diffs[i];
    console.log(anw);
}
