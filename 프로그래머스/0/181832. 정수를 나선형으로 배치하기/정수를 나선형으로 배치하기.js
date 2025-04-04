function solution(n) {
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  let [x, y] = [0, 0];
  let [dx, dy] = [0, 1]; // 시작 방향: 오른쪽
  let num = 1;

  while (num <= n * n) {
    arr[x][y] = num++;

    const [nx, ny] = [x + dx, y + dy];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] !== 0) {
      // 방향 전환 (오→아→왼→위 순서)
      [dx, dy] = [dy, -dx];
    }

    x += dx;
    y += dy;
  }

  return arr;
}