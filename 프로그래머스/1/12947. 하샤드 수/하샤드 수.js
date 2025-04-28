function solution(x) {
    return x%[...String(x)].reduce((acc,cur)=>Number(acc)+Number(cur),0)===0 ? true : false;
}