const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const numbers = input.filter((_, idx) => idx !== 0).map(Number);
const fibArr = [0, 1];
while (fibArr[fibArr.length - 1] <= 1000000000) {
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
}

numbers.forEach((number) => {
  const fibs = [];
  while (number !== 0) {
    const temp = fibArr.filter((item) => item <= number).pop();
    number -= temp;
    fibs.push(temp);
  }
  console.log(fibs.reverse().join(" "));
});