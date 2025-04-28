function solution(s){
    const string = s.toUpperCase();
    let pNum = 0;
    let yNum = 0;
    for(const char of string) {
        if(char === "P") pNum += 1;
        if(char === "Y") yNum += 1;
    }
    return pNum === yNum ? true : false;
}