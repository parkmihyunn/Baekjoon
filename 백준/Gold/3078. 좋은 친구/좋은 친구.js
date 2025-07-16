const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const students = input.slice(1);

const lenMap = new Map();
students.map((el, idx) => {
  if (!lenMap.has(el.length)) lenMap.set(el.length, [idx]);
  else lenMap.get(el.length).push(idx);
});

let anw = 0;
lenMap.forEach((students) => {
  students.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < students.length; i++) {
    while (j < students.length && students[j] - students[i] <= K) j++;
    anw += j - i - 1;
  }
});

console.log(anw);