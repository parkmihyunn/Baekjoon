function solution(n) {
    let arr = Array.from({length: 3*n}, (_,i) => i );
    return arr.filter((item) => item%3 !== 0 && !String(item).includes("3"))[n-1];
}