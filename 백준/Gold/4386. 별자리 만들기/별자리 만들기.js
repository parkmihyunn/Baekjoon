const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +input[0];
const Coords = input.slice(1).map((item) => item.split(" ").map(Number));
const Lines = [];
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const [x1, y1] = Coords[i];
    const [x2, y2] = Coords[j];
    Lines.push([
      i,
      j,
      Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)),
    ]);
  }
}
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
Lines.sort((a, b) => a[2] - b[2]).forEach(([node1, node2, weight]) => {
  if (find(node1) !== find(node2)) {
    anw += weight;
    union(node1, node2);
  }
});
console.log(anw);
