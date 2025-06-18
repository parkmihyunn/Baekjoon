const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input[0].split(" ").map(Number);
const orders = input[1].split(" ").map(Number);

let anw = 0;
let plugs = [];

for (let i = 0; i < orders.length; i++) {
  const order = orders[i];
  if (plugs.includes(order)) continue;
  if (plugs.length < n) {
    plugs.push(order);
    continue;
  }
  const rest = orders.slice(i + 1);
  const unplug = plugs
    .map((item) => {
      return [
        item,
        rest.indexOf(item) === -1 ? 1000000000 : rest.indexOf(item),
      ];
    })
    .sort((a, b) => a[1] - b[1])
    .pop();
  plugs[plugs.indexOf(unplug[0])] = order;
  anw += 1;
}

console.log(anw);