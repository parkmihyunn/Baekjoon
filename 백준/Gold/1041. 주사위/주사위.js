const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let abc = [];
numbers[0] <= numbers[5] ? abc.push(numbers[0]) : abc.push(numbers[5]);
numbers[1] <= numbers[4] ? abc.push(numbers[1]) : abc.push(numbers[4]);
numbers[2] <= numbers[3] ? abc.push(numbers[2]) : abc.push(numbers[3]);
abc = abc.sort((a, b) => a - b);

if (N === 1) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(sum - Math.max(...numbers));
} else {
  console.log(
    (abc[0] + abc[1] + abc[2]) * 4 +
      (abc[0] + abc[1]) * (8 * N - 12) +
      abc[0] * (5 * N * N - 16 * N + 12)
  );
}