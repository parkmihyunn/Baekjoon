function solution(absolutes, signs) {
    return absolutes.map((item, idx)=> {
        if(signs[idx]) return item;
        else return -item;
    }).reduce((acc,cur)=>acc+cur);
    
}