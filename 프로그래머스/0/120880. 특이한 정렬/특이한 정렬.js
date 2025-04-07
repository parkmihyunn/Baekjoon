function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    if (diffA !== diffB) return diffA - diffB;
    return b - a; // 거리 같으면 큰 수가 먼저
  });
}