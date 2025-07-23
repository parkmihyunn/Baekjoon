const fs = require("fs");
const N = BigInt(fs.readFileSync("dev/stdin").toString().trim());
const MOD = 1000000007n;

function mul(A, B) {
  return [
    [
      (A[0][0] * B[0][0] + A[0][1] * B[1][0]) % MOD,
      (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % MOD,
    ],
    [
      (A[1][0] * B[0][0] + A[1][1] * B[1][0]) % MOD,
      (A[1][0] * B[0][1] + A[1][1] * B[1][1]) % MOD,
    ],
  ];
}

function power(matrix, n) {
  let result = [
    [1n, 0n],
    [0n, 1n],
  ];
  while (n > 0n) {
    if (n & 1n) result = mul(result, matrix);
    matrix = mul(matrix, matrix);
    n = n / 2n;
  }
  return result;
}

if (N === 0n) {
  console.log(0);
} else {
  const base = [
    [1n, 1n],
    [1n, 0n],
  ];
  const result = power(base, N - 1n);
  console.log(Number(result[0][0] % MOD));
}
