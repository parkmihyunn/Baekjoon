const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(input[0]);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const x = Number(input[2]);

let [left, right] = [0, nums.length - 1];
let anw = 0;

while (left < right) {
  if (nums[left] + nums[right] === x) {
    anw += 1;
    left += 1;
    right -= 1;
  } else if (nums[left] + nums[right] < x) left += 1;
  else right -= 1;
}

console.log(anw);