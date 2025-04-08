function solution(score) {
    // 평균 점수 계산
    const avg = score.map(([eng, math]) => (eng + math) / 2);

    // 평균 점수를 내림차순 정렬한 배열 생성
    const sorted = [...avg].sort((a, b) => b - a);

    // 평균 점수에 따라 등수 부여
    return avg.map(v => sorted.indexOf(v) + 1);
}