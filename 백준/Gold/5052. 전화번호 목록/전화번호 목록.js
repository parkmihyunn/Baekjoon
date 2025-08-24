const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const T = +input[0];
let temp = 1;
const anw = [];

const checkFront = (str, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== str[0] || arr[i][str.length - 1] !== str[str.length - 1])
      continue;
    if (arr[i].slice(0, str.length) === str) return true;
  }
  return false;
};

const checkConsistency = (arr) => {
  const sortedArr = arr.sort((a, b) => a.length - b.length);
  const n = sortedArr.length;
  for (let i = 0; i < n - 1; i++) {
    if (checkFront(sortedArr[i], sortedArr.slice(i + 1))) return false;
  }
  return true;
};

for (let i = 0; i < T; i++) {
  const N = +input[temp];
  const phNums = input.slice(temp + 1, temp + 1 + N);
  temp += N + 1;
  if (checkConsistency(phNums)) anw.push("YES");
  else anw.push("NO");
}
console.log(anw.join("\n"));