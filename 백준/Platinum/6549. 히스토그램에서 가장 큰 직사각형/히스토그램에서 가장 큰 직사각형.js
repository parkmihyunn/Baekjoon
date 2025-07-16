const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.forEach((line) => {
  const arr = line.split(" ").map(Number);
  const n = arr[0];
  if (n === 0) return;

  const heights = arr.slice(1);
  heights.push(0);
  const stack = [];
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const topIdx = stack.pop();
      const height = heights[topIdx];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, height * width);
    }
    stack.push(i);
  }

  console.log(max);
});