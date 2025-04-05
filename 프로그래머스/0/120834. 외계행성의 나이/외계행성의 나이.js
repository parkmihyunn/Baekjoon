function solution(age) {
    let anw = "";
    let arr = ['a','b','c','d','e','f','g','h','i',"j"];
    for(let i=0; i<String(age).length; i++) {
        anw += arr[[...String(age)][i]];
    }
    return anw;
}