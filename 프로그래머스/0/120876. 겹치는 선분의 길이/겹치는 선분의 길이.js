function solution(lines) {
  const board = Array(201).fill(0);  // -100 ~ 100 커버

  for (const [start, end] of lines) {
    for (let i = start; i < end; i++) {
      board[i + 100]++;
    }
  }

  return board.filter(x => x >= 2).length;
}