function solution(numbers) {
    let anw = "";
    const number = {
        zero: 0,
        one:1,
        two:2,
        three:3,
        four:4,
        five:5,
        six:6,
        seven:7,
        eight:8,
        nine:9
    };
    let temp = "";
    for(const char of numbers) {
        temp += char;
        if(Object.keys(number).indexOf(temp) !== -1) {
            anw += number[temp];
            temp = "";
        }
    }
    return Number(anw);
}