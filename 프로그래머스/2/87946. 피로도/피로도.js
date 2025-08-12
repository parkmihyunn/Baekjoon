function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array(n).fill(false);
  let anw = 0;
    
  const dfs = (energy, count) => {
    if (count > anw) anw = count;
    if (anw === n) return;
    for (let i = 0; i < n; i++) {
      const [miminum, use] = dungeons[i];
      if (!visited[i] && energy >= miminum) {
        visited[i] = true;
        dfs(energy - use, count + 1);
        visited[i] = false;
      }
    }
  }
  dfs(k, 0);
  return anw;
}