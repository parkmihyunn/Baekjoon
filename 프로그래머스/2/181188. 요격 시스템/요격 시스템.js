function solution(targets) {
  // 1) 끝점 기준 정렬
  targets.sort((a, b) => a[1] - b[1]);

  let result = 0;
  let curr = -Infinity;     // 마지막으로 쏜 x 좌표

  for (const [s, e] of targets) {
    // curr가 (s, e) 안에 없으면 새로 요격
    if (!(s < curr && curr < e)) {
      result++;
      curr = e - 0.5;        // 구간 (s,e)의 실수 내부 아무 값, e-0.5 사용
    }
  }
  return result;
}