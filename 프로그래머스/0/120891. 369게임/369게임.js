function solution(order) {
    let anw = 0;
    return [...String(order)].filter(item => item==='3' || item === '6' || item === '9').length;
}