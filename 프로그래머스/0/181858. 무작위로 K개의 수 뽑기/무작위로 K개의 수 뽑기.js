function solution(arr, k) {
    let anw = [];
     for (const item of arr) {
         if(anw.indexOf(item) === -1) anw.push(item);
         if(anw.length === k) break;
     }
    while (anw.length < k) anw.push(-1);
    return anw;
}