const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const [N, M, K] = input[0].split(" ").map(Number);
let numbers = input.slice(1, N + 1).map(BigInt);
const changes = input
  .slice(N + 1, N + 1 + M + K) // 정확히 M+K개만
  .filter((line) => line.trim() !== "") // 빈 줄 제거
  .map((line) => {
    const [a, b, c] = line.split(" ");
    return [Number(a), Number(b), BigInt(c)];
  });

const tree = Array(N * 4).fill(0n);
function makeTree(node, start, end) {
  if (start === end) {
    tree[node] = numbers[start];
    return;
  }
  const mid = Math.floor((start + end) / 2);
  makeTree(node * 2, start, mid);
  makeTree(node * 2 + 1, mid + 1, end);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
}

function update(node, start, end, idx, val) {
  if (idx < start || idx > end) return;
  if (start === end) {
    tree[node] = val;
    return;
  }
  const mid = Math.floor((start + end) / 2);
  update(node * 2, start, mid, idx, val);
  update(node * 2 + 1, mid + 1, end, idx, val);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
}

function getSums(node, start, end, l, r) {
  if (r < start || l > end) return 0n;
  if (l <= start && end <= r) return tree[node];
  const mid = Math.floor((start + end) / 2);
  return (
    getSums(node * 2, start, mid, l, r) +
    getSums(node * 2 + 1, mid + 1, end, l, r)
  );
}

makeTree(1, 0, N - 1);

let output = [];
for (const [a, b, c] of changes) {
  if (a === 1) {
    numbers[Number(b) - 1] = c;
    update(1, 0, N - 1, Number(b) - 1, c);
  } else {
    output.push(String(getSums(1, 0, N - 1, Number(b) - 1, Number(c) - 1)));
  }
}
console.log(output.join("\n"));
