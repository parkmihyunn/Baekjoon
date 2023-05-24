function solution(numbers) {
    let answer = add(numbers) / numbers.length;
    return answer;
}
let add = arr => arr.reduce((a, b) => a + b, 0);