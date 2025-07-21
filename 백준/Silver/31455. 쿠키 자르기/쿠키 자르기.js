const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);
let temp = 0;
for (let i = 0; i < T; i++) {
  let len = Number(input[1 + temp]);
  let arr = input
    .slice(2 + temp, 2 + temp + len)
    .map((v) => v.split("").map(Number));
  temp = 1 + temp + len;

  let anw = 0;
  const cookie = (n, x, y) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        sum += arr[y + j][x + i];
      }
    }
    sum = sum % 4;
    if (n === 2) {
      if (sum === 0) {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            if (i === 0 && j === 0) continue;
            anw += arr[y + j][x + i];
          }
        }
      }
      if (sum === 1) {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            if (i === 1 && j === 0) continue;
            anw += arr[y + j][x + i];
          }
        }
      }
      if (sum === 2) {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            if (i === 0 && j === 1) continue;
            anw += arr[y + j][x + i];
          }
        }
      }
      if (sum === 3) {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            if (i === 1 && j === 1) continue;
            anw += arr[y + j][x + i];
          }
        }
      }
    } else {
      if (sum === 0) {
        n = n / 2;
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            arr[y + j][x + i] = 0;
          }
        }
        cookie(n, x + n, y);
        cookie(n, x, y + n);
        cookie(n, x + n, y + n);
      } else if (sum === 1) {
        for (let i = n / 2; i < n; i++) {
          for (let j = 0; j < n / 2; j++) {
            arr[y + j][x + i] = 0;
          }
        }
        n = n / 2;
        cookie(n, x, y);
        cookie(n, x, y + n);
        cookie(n, x + n, y + n);
      } else if (sum === 2) {
        for (let i = 0; i < n / 2; i++) {
          for (let j = n / 2; j < n; j++) {
            arr[y + j][x + i] = 0;
          }
        }
        n = n / 2;
        cookie(n, x, y);
        cookie(n, x + n, y);
        cookie(n, x + n, y + n);
      } else {
        for (let i = n / 2; i < n; i++) {
          for (let j = n / 2; j < n; j++) {
            arr[y + j][x + i] = 0;
          }
        }
        n = n / 2;
        cookie(n, x, y);
        cookie(n, x, y + n);
        cookie(n, x + n, y);
      }
    }
  };

  cookie(len, 0, 0);
  console.log(anw);
}
