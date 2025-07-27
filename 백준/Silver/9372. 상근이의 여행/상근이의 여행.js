const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const T = +input[0];
let anw = [];
let temp = 0;
for (let i = 0; i < T; i++) {
  const [N, M] = input[1 + temp].split(" ").map(Number);
  const routes = input
    .slice(2 + temp, 2 + temp + M)
    .map((el) => el.split(" ").map((el) => Number(el) - 1));
  temp += M + 1;

  let count = 0;
  const countries = new Array(N).fill(false);

  countries[0] = true;
  const queue = [0];

  while (queue.length) {
    const shifted = queue.shift();
    for (let route of routes) {
      const [start, end] = route;
      if (start === shifted && !countries[end]) {
        queue.push(end);
        countries[end] = true;
        count++;
      } else if (end === shifted && !countries[start]) {
        queue.push(start);
        countries[start] = true;
        count++;
      }
    }
    if (!countries.includes(false)) break;
  }
  anw[i] = count;
}
console.log(anw.join("\n"));