// 갖고 있는 곡괭이의 개수를 나타내는 정수 배열 picks
// 각 곡괭이는 종류에 상관없이 광물 5개를 캔 후에는 더 이상 사용할 수 없음

// 광물들의 순서를 나타내는 문자열 배열 minerals
function solution(picks, minerals) {
    var answer = 0;
    // 총 곡괭이 갯수
    // acc : 콜백의 반환값을 누적. 콜백의 첫 번째 호출 initialValue의 값임
    // cur : 처리할 현재 요소
    const picksSum = picks.reduce((acc, cur) => acc + cur, 0);
    // slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 
    // 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 않음.
    const slicedMinerals = minerals.slice(0, picksSum * 5);
    
    const countedMinerals = slicedMinerals.reduce((acc, cur, idx) => {
        const index = Math.floor(idx / 5);
        if (!acc[index]) acc[index] = [0, 0, 0];
        if (cur === 'diamond') acc[index][0]++;
        else if (cur === 'iron') acc[index][1]++;
        else if (cur === 'stone') acc[index][2]++;
        return acc;
    }, []);
    
    // 배열을 내림차순으로 정렬
    const sortedMinerals = countedMinerals.sort((a, b) => {
        if (b[0] === a[0]) {
            return b[1] - a[1];
        }
        return b[0] - a[0];
    });

    for (const [dia, iron, stone] of sortedMinerals) {
        if (picks[0]) {
              answer += dia + iron + stone;
              picks[0]--;
        } else if (picks[1]) {
              answer += dia * 5 + iron + stone;
              picks[1]--;
        } else if (picks[2]) {
              answer += dia * 25 + iron * 5 + stone;
              picks[2]--;
        }
    }
    return answer;
}