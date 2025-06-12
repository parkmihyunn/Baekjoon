const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const chapters = [];
input.forEach((row, index) => {
  if (index !== 0 && index % 2 === 0) {
    chapters.push(row.split(" ").map(Number));
  }
});

chapters.forEach((chapter) => {
  const N = chapter.length;

  // accSum = index번째 파일까지 합치는 비용
  const accSum = [0];
  for (let i = 0; i < N; i++) {
    accSum[i + 1] = accSum[i] + chapter[i];
  }

  // i번째부터 j번째 파일을 합치는 최소 비용
  const dp = Array.from({ length: N }, () => Array(N).fill(0));

  for (let len = 2; len <= N; len++) {
    for (let i = 0; i <= N - len; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + accSum[j + 1] - accSum[i]
        );
      }
    }
  }

  console.log(dp[0][N - 1]);
});