const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];
const routes = input
  .slice(1)
  .map((el) => el.split(" ").map((item) => item.charCodeAt() - 65));

const tree = Array.from({ length: N }, () => [-1, -1]);
routes.forEach(([node, left, right]) => {
  tree[node] = [left, right];
});

let preOrder = "";
let inOrder = "";
let postOrder = "";

function traversal(node) {
  if (node < 0) return; // '.' 처리
  const [left, right] = tree[node];
  preOrder += String.fromCharCode(node + 65);
  traversal(left);
  inOrder += String.fromCharCode(node + 65);
  traversal(right);
  postOrder += String.fromCharCode(node + 65);
}
traversal(0);
console.log(preOrder);
console.log(inOrder);
console.log(postOrder);