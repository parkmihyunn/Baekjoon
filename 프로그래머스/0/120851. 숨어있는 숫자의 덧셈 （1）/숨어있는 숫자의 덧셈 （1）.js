function solution(my_string) {
    return my_string.match(/\d/g).reduce((a,b)=>Number(a)+Number(b));
}