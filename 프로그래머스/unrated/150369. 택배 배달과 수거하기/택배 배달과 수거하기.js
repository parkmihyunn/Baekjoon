// deliveries 배열의 끝에서부터, 합이 cap과 같거나 넘지 않도록 골라야함
function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    
    // 잔여 배달수량, 수거수량
    let delSum = deliveries.reduce((acc,cur) => acc + cur, 0);
    let pickSum = pickups.reduce((acc,cur) => acc + cur, 0);

    // 배달수량, 수거수량 모두 0이되기전까지는 반복할것임
    while(delSum !== 0 || pickSum !== 0){
        // 무조건 가장 먼 곳을 포함해서 움직여야 효율적
        // 뭐가 가장 먼지 어떻게 알거죠...? 
        for(let i=deliveries.length-1; i>=0; i--){
            if(deliveries[i] === 0) deliveries.pop();
            else break;
        }
        for(let j=pickups.length-1; j>=0; j--){
            if(pickups[j] === 0) pickups.pop();
            else break;
        }
        let farthest = Math.max(deliveries.length, pickups.length);
        answer += farthest*2;
        
        delSum -= deleteItem(deliveries, cap);
        pickSum -= deleteItem(pickups, cap);
    }    
    return answer;
}

const deleteItem = (arr,cap) =>{
    let cnt = 0;
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] >= cap){
            arr[i] -= cap;
            cnt += cap;
            break;
        } 
        else{
            cap -= arr[i];
            cnt += arr[i];
            arr[i] = 0;
        } 
    }
    return cnt;
}