const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const List = input.slice(1).map((item) => item.split(" ").map(Number));
const dist = Array.from({ length: N + 1 }, () => Infinity);
dist[1] = 0;

let loop = false;
for (let i = 1; i <= N; i++) {
  List.forEach(([a, b, c]) => {
    if (dist[a] !== Infinity && dist[b] > dist[a] + c) {
      dist[b] = dist[a] + c;
      if (i === N) loop = true;
    }
  });
}

if (loop) console.log(-1);
else {
  for (let i = 2; i <= N; i++) {
    console.log(dist[i] === Infinity ? -1 : dist[i]);
  }
}