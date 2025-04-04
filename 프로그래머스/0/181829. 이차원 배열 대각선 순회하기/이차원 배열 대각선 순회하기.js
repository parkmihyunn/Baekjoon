function solution(board, k) {
    const n = board.length;
    let anw = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if ( i + j <= k) anw += board[i][j]
        }
    }
    return anw;
}