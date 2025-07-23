function solution(p) {
    
    const checkPair = (str) => {
        let stack = [];
        [...str].forEach((char) => {
            if(stack.length && stack[stack.length - 1] === "(" && char === ")") stack.pop();
            else stack.push(char);
        })
        return !stack.length;
    }
    
    const correctionFunc = (str) => {
        if(!str.length) return "";
        let u = "", v = "";
        let left = 0, right = 0;
        for(let i=0; i<str.length; i++) {
            const el = str[i];
            if(el === "(") left+= 1;
            else right += 1;
            u += el;
            if(right === left) break;
        }
        v = [...str].slice(right+left).join("");
        
        if(checkPair(u)) {
            const temp1 = correctionFunc(v);
            return u+temp1;
        } else {
            let tempStr = "(";
            const right = correctionFunc(v);
            tempStr += right + ")";
            const temp2 = [...u].slice(1, u.length-1).map((item) => {
                if(item === "(") return ")";
                else return "(";
            }).join("");
            tempStr += temp2;
            return tempStr;
        }   
    }
    return correctionFunc(p);
}