function solution(hp) {
    if(hp%5 === 0) return hp/5;
    let ant = Math.floor(hp/5);
    let remain = hp - ant*5;
    if(remain % 3 === 0) return ant + remain/3;
    ant += Math.floor(remain/3);
    remain -= Math.floor(remain/3)*3;
    return ant + remain;
}