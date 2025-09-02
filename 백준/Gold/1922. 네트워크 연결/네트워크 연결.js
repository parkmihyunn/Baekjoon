const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];
const M = +input[1];
const Lines = input
  .slice(2)
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);
const graph = Array.from({ length: N + 1 }, (_, idx) => idx);

const find = (node) => {
  return graph[node] === node ? node : find(graph[node]);
};

const union = (node1, node2) => {
  r1 = find(node1);
  r2 = find(node2);
  return r1 > r2 ? (graph[r1] = r2) : (graph[r2] = r1);
};

let anw = 0;
Lines.forEach(([node1, node2, weight]) => {
  if (find(node1) !== find(node2)) {
    anw += weight;
    union(node1, node2);
  }
});
console.log(anw);