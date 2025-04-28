function solution(numbers) {
    const number = [0,1,2,3,4,5,6,7,8,9];
    let anw = 0;
    for(const num of number) {
        if(numbers.indexOf(num) === -1) {
            anw += num;
        }
    }
    return anw;
}