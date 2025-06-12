const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = [];
const pos = new Array(N);

for (let i = 0; i < N; i++) {
  let start = 0;
  let end = dp.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (dp[mid] < arr[i]) start = mid + 1;
    else end = mid;
  }
  dp[start] = arr[i];
  pos[i] = start;
}

let maxLenght = dp.length;
let last = maxLenght - 1;
const maxArr = [];
for (let i = N - 1; i >= 0; i--) {
  if (pos[i] === last) {
    maxArr.push(arr[i]);
    last--;
  }
}
maxArr.reverse();

console.log(maxLenght);
console.log(maxArr.join(" "));
