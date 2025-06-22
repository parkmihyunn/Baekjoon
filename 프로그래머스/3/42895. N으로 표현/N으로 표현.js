function solution(N, number) {
    // N을 index번 사용해서 나올 수 있는 모든 수 모음, 최대 8번 사용 가능
    const sets = Array.from({ length: 9 }, () => new Set());
    sets[0].add(0);
    sets[1].add(N);
    
    for(let i=1; i<=8; i++) {
        let temp = String(N);
        for(let k=1; k<i; k++){temp += String(N)}
        sets[i].add(Number(temp));
        for(let j=1; j<i; j++) {
            for(const num1 of sets[j]) {
                for(const num2 of sets[i - j]) {
                    sets[i].add(num1 + num2);
                    sets[i].add(num1 * num2);
                    sets[i].add(num1 - num2);
                    sets[i].add(Math.floor(num1 / num2));
                }
            }
        }
        if(sets[i].has(number)) {
            return i;
        }
    }
    return -1;
}