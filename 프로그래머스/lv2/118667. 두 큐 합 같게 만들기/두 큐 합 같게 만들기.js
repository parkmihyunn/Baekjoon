function solution(queue1, queue2) {
    let answer = 0;
    // queue1, queue2 배열 합체
    let totalQueue = [...queue1, ...queue2];
    // 합체된 큐에서 start와 end위치를 조정해가면서 찾아볼예정
    let start = 0;
    let end = queue1.length;
    
    const sum = (arr) => arr.reduce((acc,cur) => acc + cur);
    // 목표값
    let targetSum = parseInt(sum(totalQueue) / 2);
    // 선택할 구간 start부터 end 미포함 구간 부분배열의 총 합
    let sliceSum = sum(totalQueue.slice(start,end));
    // 두개 선택?
    let maxAnswer = totalQueue.length * (3/2)-1;
    while(answer <= maxAnswer) {
        if(targetSum < sliceSum){
            sliceSum -= totalQueue[start];
            start++;
        }
        else if(targetSum > sliceSum){
            sliceSum += totalQueue[end];
            end++;
        }
        else if( targetSum === sliceSum ){
            return answer;
        }
        answer++;
    }
    return -1;
}