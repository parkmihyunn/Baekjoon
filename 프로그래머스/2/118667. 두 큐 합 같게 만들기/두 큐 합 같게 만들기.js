function solution(queue1, queue2) {
    let answer = 0;
    let totalQueue = [...queue1, ...queue2];
    
    let start = 0;
    let end = queue1.length;
    
    const sum = (arr) => arr.reduce((acc,cur) => acc + cur);
    const targetSum = parseInt(sum(totalQueue) / 2);
    
    let sliceSum = sum(totalQueue.slice(start,end));
    let maxAnswer = totalQueue.length * (3/2)-1;
    
    while(answer <= maxAnswer) {
        if( targetSum === sliceSum ){
            return answer;
        }
        if(targetSum < sliceSum){
            sliceSum -= totalQueue[start];
            start++;
        } else {
            sliceSum += totalQueue[end];
            end++;
        }
        answer++;
    }
    
    return -1;
}