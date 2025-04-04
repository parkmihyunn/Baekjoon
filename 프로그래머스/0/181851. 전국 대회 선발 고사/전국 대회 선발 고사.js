function solution(rank, attendance) {
    const filtered = rank.filter((item, idx) => attendance[idx] === true).sort((a,b)=>a-b);
    return rank.indexOf(filtered[0])*10000 + rank.indexOf(filtered[1])*100 + rank.indexOf(filtered[2]);
}