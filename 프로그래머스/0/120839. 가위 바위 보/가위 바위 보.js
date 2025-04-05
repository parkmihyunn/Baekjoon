function solution(rsp) {
    const winning = new Map([["2","0"],["0","5"],["5","2"]]);
    return [...rsp].map((item)=>winning.get(item)).join("");
}