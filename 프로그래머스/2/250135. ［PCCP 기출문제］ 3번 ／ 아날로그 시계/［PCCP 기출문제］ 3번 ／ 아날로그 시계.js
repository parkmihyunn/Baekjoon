function solution(h1, m1, s1, h2, m2, s2) {
    let count = 0;
    // 움직임 계산
    // 360 * 120 = 43200
    // 초침 6 도 / s 
    // 분침 1 / 10 도 / s
    // 시침 1 / 120 도 / s 
    // 이 시계에는 초침이 시침 혹은 분침과 겹칠 때마다 알람이 울리는 기능이 있습니다. 
    
    let startS = h1 * 3600 + m1 * 60 + s1;
    let endS = h2 * 3600 + m2 * 60 + s2;
    
    let pS = (720 * startS) % 43200;
    let pM = (12 * startS) % 43200;
    let pH = startS % 43200;
    
    if (pS === pM || pS === pH) count++;
    while (startS < endS) {
        pS = (720 * startS) % 43200; 
        pM = (12 * startS) % 43200; 
        pH = startS % 43200;
        const a = ((pS - pM + 43200) % 43200) > 0 && ((pS - pM + 43200) % 43200) + 708 >= 43200;
        const b = ((pS - pH + 43200) % 43200) > 0 && ((pS - pH + 43200) % 43200) + 719 >= 43200;
        if (a && b) count += (startS + 1) % 43200 === 0 ? 1 : 2;
        else if (a || b) count++;
        startS++;
    }
    return count;
}