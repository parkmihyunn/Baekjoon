const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const Lines = input
  .slice(1)
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

let anw = [];
Lines.forEach(([node1, node2, weight]) => {
  if (find(node1) !== find(node2)) {
    anw.push(weight);
    union(node1, node2);
  }
});
console.log(
  N === 2
    ? 0
    : anw
        .sort((a, b) => b - a)
        .slice(1)
        .reduce((a, b) => a + b)
);
