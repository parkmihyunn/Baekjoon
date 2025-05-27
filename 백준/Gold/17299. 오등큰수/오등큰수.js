const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = input[1].split(" ");

let count = {};
let stack = [];

let answer = new Array(N.length).fill(-1);

let arr = [...new Set(N)];
for (let i = 0; i < arr.length; i++) {
  count[arr[i]] = 0;
}
for (let i = 0; i < N.length; i++) {
  count[N[i]]++;
}

for (let i = 0; i < N.length; i++) {
  while (stack && count[N[stack[stack.length - 1]]] < count[N[i]]) {
    answer[stack[stack.length - 1]] = N[i];
    stack.pop();
  }
  stack.push(i);
}

console.log(answer.join(" "));