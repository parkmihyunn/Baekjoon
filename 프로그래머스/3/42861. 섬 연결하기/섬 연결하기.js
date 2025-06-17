function solution(n, costs) {
  const parent = Array.from({ length: n }, (_, i) => i);

  function find(node) {
    if (parent[node] === node) return node;
    return (parent[node] = find(parent[node]));
  }

  let anw = 0;
  let temp = 0;
  costs.sort((a, b) => a[2] - b[2]);
  for (let [start, end, cost] of costs) {
    if (find(start) !== find(end)) {
      parent[find(end)]=find(start);
      anw += cost;
      temp += 1;
      if (temp === n - 1) break;
    }
  }
  return anw;
}