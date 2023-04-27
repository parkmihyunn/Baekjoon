/*
-1 : 어떻게 해도 방법이 없는 경우 -> 큐를 전부다 이동시켰는데도 합이 같지 않으면?
 0 : 이동하지 않아도 괜찮은 경우 -> 이미 합이 같은 경우
*/

// // 큐 합이 큰곳에서 반복해서 dequeue 할것임
// function solution(queue1, queue2) {
//     var answer = 0;
//     const sum = (arr) => arr.reduce((acc,cur) => acc + cur, 0);
//     // queue1, queue2 배열 합체
//     let totalQueue = [...queue1, ...queue2];
//     let totalSum = sum(totalQueue);
//     // 목표값
//     let targetSum = parseInt(totalSum / 2);
//     // 합체된 큐에서 start와 end위치를 조정해가면서 찾아볼예정
//     let start=0, end=queue1.length;
//     // 부분 배열의 총 합
//     let sliceSum = sum(totalQueue.slice(start,end));
//     // 최대 반복횟수,, 주고 받고,,, 주고 받고,, 그래서 length의 두배?
//     let maxAnswer = queue1.length * 2;
//     while(answer < maxAnswer) {
//         if(targetSum < sliceSum){
//             sliceSum -= totalQueue[start];
//             start++;
//         }
//         else if(targetSum > sliceSum){
//             sliceSum += totalQueue[end];
//             end++;
//         }
//         else if( targetSum === sliceSum ){
//             return answer;
//         }
//         answer++;
//     }
//     return -1;
// }

function solution(queue1, queue2) {
    let totalArr = [...queue1, ...queue2];
    let maxCount = totalArr.length*2;
    let start = 0;
    let end = queue1.length;
    
    const sum = (arr)=>arr.reduce((a,b)=>a+b);
    let totalNum = sum(totalArr.slice(start, end));
    let goalNum = sum(totalArr)/2;
    let count = 0;
    
    while(count <= maxCount){
        if(totalNum < goalNum){
            totalNum += totalArr[end];
            end++;
        }else if(totalNum > goalNum){
            totalNum -= totalArr[start];
            start++;
        }else if(totalNum === goalNum){
            return count; 
        }
        count++;
    }
    
    return -1;
}
