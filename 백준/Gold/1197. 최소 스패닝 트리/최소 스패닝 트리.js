const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const [V, E] = input[0].split(" ").map(Number);

const List = input
  .slice(1)
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);
const graph = Array.from({ length: V + 1 }, (_, idx) => idx);
let anw = 0;

const find = (node) => {
  if (graph[node] === node) return node;
  return (graph[node] = find(graph[node]));
};

const union = (node1, node2) => {
  const r1 = find(node1);
  const r2 = find(node2);
  if (r1 < r2) graph[r2] = r1;
  else graph[r1] = r2;
};

List.forEach(([node1, node2, weight]) => {
  if (find(node1) !== find(node2)) {
    anw += weight;
    union(node1, node2);
  }
});

console.log(anw);