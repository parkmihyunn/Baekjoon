function solution(numbers) {
    const sets = new Set();
    numbers.forEach((el, idx) => {
        for(let i=idx+1; i<numbers.length; i++) {
            sets.add(el + numbers[i]);
        }
    });
    return [...sets.keys()].sort((a,b) => a-b);
}