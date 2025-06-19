const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ");

let anw = [];

if (numbers.filter((el) => el !== "0").length === 0) console.log(0);
else {
  numbers.sort((a, b) => (b + a > a + b ? 1 : b + a < a + b ? -1 : 0));
  console.log(numbers.join(""));
}