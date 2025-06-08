const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

const N = input[0];
const K = input[1];
let anw = [];

let numbers = Array.from({ length: N }, (_, idx) => idx + 1);
let head = 0;

for (let i = 0; i < N; i++) {
  head += K - 1;
  while (head >= numbers.length) {
    head = head - numbers.length;
  }
  anw.push(numbers[head]);
  numbers = numbers.slice(0, head).concat(numbers.slice(head + 1));
}

console.log("<" + anw.join(", ") + ">");
