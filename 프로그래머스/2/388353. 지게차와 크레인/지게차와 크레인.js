function solution(storage, requests) {
  const h = storage.length, w = storage[0].length;
  const grid = storage.map(row => row.split(''));           // split() (MDN)
  let result = h * w;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];                  // 방향 벡터(direction vectors)

  for (const req of requests) {
    if (req.length === 1) {
      // 1) 외부 빈칸만 BFS로 표시
      const visited = Array.from({ length: h }, () => Array(w).fill(false));
      const queue = [];
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          if ((i===0||i===h-1||j===0||j===w-1) && grid[i][j]==='0') {
            visited[i][j] = true;
            queue.push([i,j]);
          }
        }
      }
      while (queue.length) {
        const [x,y] = queue.shift();                          // shift() (MDN)
        for (const [dx,dy] of dirs) {
          const nx = x+dx, ny = y+dy;
          if (nx>=0&&nx<h&&ny>=0&&ny<w && !visited[nx][ny] && grid[nx][ny]==='0') {
            visited[nx][ny] = true;
            queue.push([nx,ny]);
          }
        }
      }
      // 2) 접근 가능한 모든 req 컨테이너 제거
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          if (grid[i][j] === req && (
              i===0||i===h-1||j===0||j===w-1 ||
              dirs.some(([dx,dy]) => {
                const ni = i+dx, nj = j+dy;
                return ni>=0&&ni<h&&nj>=0&&nj<w && visited[ni][nj];
              })
            )) {
            grid[i][j] = '0';
            result--;
          }
        }
      }
    } else {
      // 크레인 요청: 종류(req[0]) 전체 제거
      const target = req[0];
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          if (grid[i][j] === target) {
            grid[i][j] = '0';
            result--;
          }
        }
      }
    }
  }
  
  return result;
}