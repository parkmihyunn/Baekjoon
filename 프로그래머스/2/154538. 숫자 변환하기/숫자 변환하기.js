function solution(x, y, n) {
  if (x === y) return 0;

  const visited = Array(y + 1).fill(false);
  const queue = [];
  let temp = 0;

  queue.push([x, 0]);
  visited[x] = true;

  while (temp < queue.length) {
    const [value, count] = queue[temp++];
    const nexts = [value + n, value * 2, value * 3];
    for (const next of nexts) {
      if (next > y) continue;
      if (visited[next]) continue;
      if (next === y) return count + 1;
      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
  return -1;
}