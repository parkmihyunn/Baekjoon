// BOJ 1865 웜홀
const fs = require("fs");
// 채점용은 0, 로컬 테스트는 경로로 바꿔도 됨
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const TC = +input[0];
const anws = [];
let temp = 1;

for (let _ = 0; _ < TC; _++) {
  const [N, M, W] = input[temp].split(" ").map(Number);

  // 간선 목록: [a, b, c]
  const Loads = [];

  // 도로: 양방향, 가중치 +c
  for (let i = 0; i < M; i++) {
    const [a, b, c] = input[temp + 1 + i].split(" ").map(Number);
    Loads.push([a, b, c]);
    Loads.push([b, a, c]);
  }

  // 웜홀: 단방향, 가중치 -c
  for (let i = 0; i < W; i++) {
    const [a, b, c] = input[temp + 1 + M + i].split(" ").map(Number);
    Loads.push([a, b, -c]);
  }

  temp += 1 + M + W;

  // 모든 정점을 0으로 시작: 그래프가 분리돼도 음수 사이클 탐지 가능
  const dist = new Array(N + 1).fill(0);
  let loop = false;

  // Bellman–Ford
  for (let i = 1; i <= N; i++) {
    let updated = false;
    for (let k = 0; k < Loads.length; k++) {
      const [a, b, c] = Loads[k];
      if (dist[b] > dist[a] + c) {
        dist[b] = dist[a] + c;
        updated = true;
        if (i === N) {
          loop = true; // N번째 완화 발생: 음수 사이클 존재
          break;
        }
      }
    }
    if (!updated) break; // 더 이상 갱신 없으면 종료
    if (loop) break;
  }

  anws.push(loop ? "YES" : "NO");
}

console.log(anws.join("\n"));