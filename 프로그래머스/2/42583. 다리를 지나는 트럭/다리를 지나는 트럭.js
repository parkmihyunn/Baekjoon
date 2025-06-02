function solution(bridge_length, weight, truck_weights) {
    const trucks = [...truck_weights];
    const crossing = new Array(bridge_length).fill("");
    let numbers = 0, sum = 0, time = 0;
    let loop = true;
    while(loop) {
        time += 1;
        const shifted = crossing.shift();
        if(shifted !== "" ) {
            sum -= shifted;     
            numbers += 1;
        }
        // 대기 트럭이 한 개 이상 남은 경우
        if(trucks.length >= 1) {
            // 대기 트럭이 다리에 올라가지 못하는 경우
            if(trucks[0] + sum > weight) {
                crossing.push("");
            }
            // 대기 트럭이 다리에 올라갈 수 있는 경우
            else {
                const tempWeight = trucks.shift();
                crossing.push(tempWeight);
                sum += tempWeight;
            }
        } 
        // 대기 트럭이 존재하지 않는 경우
        else {
            numbers === truck_weights.length ? loop = false : crossing.push("");
        }
    }
    return time;
}