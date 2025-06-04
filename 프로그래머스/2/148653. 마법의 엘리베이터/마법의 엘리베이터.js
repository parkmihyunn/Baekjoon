function solution(storey) {
    if (storey < 5) return storey;
    const rest = storey % 10;
    const m = Math.floor(storey/10);
    return Math.min(rest+solution(m), 10-rest+solution(m+1)); 
}