function solution(sides) {
    let sorted = sides.sort((a,b)=>b-a);
    return sorted[0]<sorted[1]+sorted[2] ? 1 : 2;
}