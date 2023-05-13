function solution(n) {
    var answer = [];
    for(let i=0; i<50; i++){
        if(i*2 + 1 <= n) {
            answer[i] = i*2 + 1;    
        } else break;
    }
    return answer;
}