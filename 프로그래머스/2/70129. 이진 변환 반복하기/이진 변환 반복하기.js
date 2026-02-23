function solution(s) {
    let count = 0;
    let numZero = 0;
    
    const convert = (str) => {
        if (str === "1") return;
        let zeroNum = 0;
        let temp = "";
        
        for(const char of str) {
            if (char === "0") zeroNum++;
            else temp += "1";
        }
        
        count += 1;
        numZero += zeroNum;
        
        convert(temp.length.toString(2));
    };
    
    convert(s);
    return [count, numZero];
}