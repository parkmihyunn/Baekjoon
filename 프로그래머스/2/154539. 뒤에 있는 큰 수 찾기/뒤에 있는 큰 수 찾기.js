function solution(numbers) {
    const n = numbers.length;
    const anw = Array(n).fill(-1);
    const stack = [];

    for(let i = 0; i < n; i++) {
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
          anw[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }

    return anw;
}