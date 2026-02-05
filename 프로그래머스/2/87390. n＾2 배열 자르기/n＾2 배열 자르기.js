function solution(n, left, right) {
    const anw = [];
    for (let i = left; i <= right; i++) {
        const r = Math.floor(i / n);
        const c = i % n;
        anw.push(Math.max(r, c) + 1);
    }
    return anw;
}