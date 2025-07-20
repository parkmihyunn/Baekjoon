const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let len = Number(input[0]);
let arr = input.slice(1).map((v) => v.split("").map(Number));
const anw = [];
const quadTree = (n, x, y) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += arr[y + j][x + i];
    }
  }
  if (sum === 0) anw.push("0");
  else if (sum === n * n) anw.push("1");
  else {
    n /= 2;
    anw.push("(");
    quadTree(n, x, y);
    quadTree(n, x + n, y);
    quadTree(n, x, y + n);
    quadTree(n, x + n, y + n);
    anw.push(")");
  }
};

quadTree(len, 0, 0);
console.log(anw.join(""));