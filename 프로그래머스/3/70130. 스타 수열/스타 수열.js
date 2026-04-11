function solution(a) {
    const count = new Map();
    
    a.forEach((num) => {
        count.set(num, (count.get(num) || 0) + 1);
    });
    
    let anw = 0;
    
    for (const [target, cnt] of count) {
        if (cnt * 2 <= anw) continue;
        
        let pair = 0;
        
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] !== a[i + 1] && (a[i] === target || a[i + 1] === target)) {
                pair += 1;
                i += 1;
            }
        }
        
        anw = Math.max(anw, pair * 2);
    }
    
    return anw;
}