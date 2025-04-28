function solution(num) {
    let anw = 0;
    let temp = num;
    while (anw <= 500 && temp !== 1) {
        anw += 1;
        if(temp % 2 === 0) temp = temp / 2;
        else temp = temp*3 + 1;
        console.log(temp);
    }
    return anw > 500 ? -1 : anw;
}