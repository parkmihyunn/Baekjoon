function solution(n, k) {
    var answer = 0;
    // k진수로 변환 -> 0을 기준으로 숫자 나누기 -> 숫자가 소수면 answer++
    //k진수로 변환
    let number = n.toString(k);
    //0을 기준으로 숫자 나누기
    let numberArr = number.split("0");
    for(let i=0; i<numberArr.length; i++){
        if(isPrime(Number(numberArr[i]))){
            answer++;
        }
    }
    return answer;
}

//소수 판별 함수
function isPrime(number){
    if(number <=1) {
        return false;
    }
    //주어진 숫자의 제곱근까지 확인
    for(let i=2; i<=Math.sqrt(number); i++){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}