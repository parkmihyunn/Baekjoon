function solution(arr) {
    let anw = [];
    arr.map((item)=>{
        for(let i=0; i<item; i++) anw.push(item);
    })
    return anw;
}