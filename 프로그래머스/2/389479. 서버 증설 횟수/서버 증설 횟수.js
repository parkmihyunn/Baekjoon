function solution(players, m, k) {
  let result = 0;
  const expQueue = []; // 서버 만료 시각(expiration time) 저장 큐
  for (let t = 0; t < players.length; t++) {
    // 만료된 서버 제거
    while (expQueue.length && expQueue[0] <= t) expQueue.shift();  // shift() (MDN)
    
    const active = expQueue.length;
    if (players[t] > active * m) {
      const need = Math.floor((players[t] - active * m) / m);      // Math.floor() (MDN)
      result += need;
      // 필요 서버 수만큼 만료 시점 기록
      for (let i = 0; i < need; i++) {
        expQueue.push(t + k);
      }
    }
  }
  return result;
}






