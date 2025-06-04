function solution(arr) {
    let anw = [];
    arr.forEach((item) => {
        if(anw[anw.length-1] !== item) anw.push(item);
    });
    return anw;
}