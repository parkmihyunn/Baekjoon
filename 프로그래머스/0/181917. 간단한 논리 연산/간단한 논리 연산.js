function solution(x1, x2, x3, x4) {
    let y1 = false;
    let y2 = false;
    let result = false;
    if(x1 === true || x2 === true) y1 = true;
    if(x3 === true || x4 === true) y2 = true;
    if(y1 === true && y2 === true) result = true;
    return result;
}