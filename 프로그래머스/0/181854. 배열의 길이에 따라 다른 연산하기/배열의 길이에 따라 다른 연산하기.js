function solution(arr, n) {
    if(arr.length %2 === 0) 
        return arr.map((item, idx) => {
            if(idx%2!==0) return item+n;
            else return item;
        })
    return arr.map((item, idx) => {
            if(idx%2===0) return item+n;
            else return item;
    })
}