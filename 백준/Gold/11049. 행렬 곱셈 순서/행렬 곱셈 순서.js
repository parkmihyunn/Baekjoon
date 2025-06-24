const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const matrix = input.slice(1).map((item) => item.split(" ").map(Number));
const multi = Array.from({ length: N }, () => Array(N).fill(Infinity));

for (let i = 0; i < N; i++) multi[i][i] = 0;

for (let len = 1; len < N; len++) {
  for (let i = 0; i + len < N; i++) {
    let j = i + len;
    for (let k = i; k < j; k++) {
      multi[i][j] = Math.min(
        multi[i][j],
        multi[i][k] +
          multi[k + 1][j] +
          matrix[i][0] * matrix[k][1] * matrix[j][1]
      );
    }
  }
}

console.log(multi[0][N - 1]);
