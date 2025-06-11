const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
const customors = input.slice(1).map((line) => line.split(" ").map(Number));

let result = new Array(N + 2).fill(0);

for (let i = N; i > 0; i--) {
  const [t, p] = customors[i - 1];
  if (i + t - 1 > N) result[i] = result[i + 1];
  else result[i] = Math.max(result[i + 1], p + result[i + t]);
}

console.log(result[1]);

