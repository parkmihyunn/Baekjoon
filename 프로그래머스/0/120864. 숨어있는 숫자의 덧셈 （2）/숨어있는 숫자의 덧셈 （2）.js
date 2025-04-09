function solution(my_string) {
    const numbers = my_string.match(/\d+/g); // 숫자 패턴 추출 (여러 자리도 가능)
    return numbers ? numbers.map(Number).reduce((a, b) => a + b, 0) : 0;
}