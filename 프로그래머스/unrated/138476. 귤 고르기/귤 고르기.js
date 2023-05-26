function solution(k, tangerine) {
    let obj = {};
    
    // {크기:개수} 의 형태로 담아주기
    tangerine.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    })
    
    // 오름차순 정렬
    const values = Object.values(obj).sort((a,b) => b-a);

    let count = 0;
    for(let i=0; i<values.length; i++){
        count += values[i];
        if(count >= k) {
            return i+1;
        }
    }
}