const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const original = input[1].split(" ").map(Number);

const sumArr = Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  sumArr[i + 1] = sumArr[i] + original[i];
}

let maxValue = 0;
let minValueIdx = [];
for (let i = 0; i <= N; i++) {
  const curr = i < N ? original[i] : 0;
  while (
    minValueIdx.length &&
    original[minValueIdx[minValueIdx.length - 1]] >= curr
  ) {
    const minValue = original[minValueIdx.pop()];
    const left = minValueIdx.length
      ? minValueIdx[minValueIdx.length - 1] + 1
      : 0;
    const total = sumArr[i] - sumArr[left];
    if (total * minValue > maxValue) maxValue = total * minValue;
  }
  minValueIdx.push(i);
}
console.log(maxValue);
