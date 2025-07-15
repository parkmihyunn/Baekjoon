const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input[0];
const reversed = input.slice(1).reverse();
let minH = 0;
let anw = 0;
for (let i = 0; i < N; i++) {
  let temp = reversed[i];
  if (temp > minH) {
    minH = temp;
    anw += 1;
  }
}
console.log(anw);
