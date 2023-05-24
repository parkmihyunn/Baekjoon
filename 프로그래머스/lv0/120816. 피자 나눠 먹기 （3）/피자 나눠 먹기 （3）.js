function solution(slice, n) {
    let answer = 0;
    if(n%slice === 0) return n/slice;
    else {
        answer = Math.floor(n/slice)+1;
    }
    return answer;
}