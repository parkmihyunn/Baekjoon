function solution(a) {
    const l = a.length;
    if (l <= 2) return l;
    
    const leftMin = Array(l).fill(0);
    const rightMin = Array(l).fill(0);
    
    leftMin[0] = a[0];
    for(let i=1; i<l; i++) {
        leftMin[i] = Math.min(leftMin[i-1], a[i]);
    }
    
    rightMin[l-1] = a[l-1];
    for(let i=l-2; i>=0; i--) {
        rightMin[i] = Math.min(rightMin[i+1], a[i]);
    }
    
    let anw = 0;
    
    a.forEach((number, idx) => {
        if(idx === 0 || idx === l-1) anw += 1;
        else {
            const lmin = leftMin[idx-1];
            const rmin = rightMin[idx+1];
            
            if(number < lmin || number < rmin) anw += 1;
        }
    });
    
    return anw;
}