function solution(nodeinfo) {
  const nodes = nodeinfo.map(([x, y], idx) => ({ x, y, idx: idx + 1 }));
  nodes.sort((a, b) => b.y - a.y || a.x - b.x); // y 내림차순, x 오름차순

  const root = nodes[0];
  for (let i = 1; i < nodes.length; i++) {
    insertNode(root, nodes[i]);
  }

  const preorder = [];
  const postorder = [];

  function preorderTraverse(node) {
    if (!node) return;
    preorder.push(node.idx);
    preorderTraverse(node.left);
    preorderTraverse(node.right);
  }

  function postorderTraverse(node) {
    if (!node) return;
    postorderTraverse(node.left);
    postorderTraverse(node.right);
    postorder.push(node.idx);
  }

  preorderTraverse(root);
  postorderTraverse(root);

  return [preorder, postorder];
}

function insertNode(parent, child) {
  if (child.x < parent.x) {
    if (!parent.left) parent.left = child;
    else insertNode(parent.left, child);
  } else {
    if (!parent.right) parent.right = child;
    else insertNode(parent.right, child);
  }
}