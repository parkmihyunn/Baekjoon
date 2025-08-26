const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const sets = Array.from({ length: N }, (_, idx) => idx);

function getRoot(a) {
  if (sets[a] !== a) sets[a] = getRoot(sets[a]);
  return sets[a];
}

function union(a, b) {
  a = getRoot(a);
  b = getRoot(b);
  if (a === b) return false;
  sets[b] = a;
  return true;
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (!union(a, b)) {
    return console.log(i);
  }
}
console.log(0);