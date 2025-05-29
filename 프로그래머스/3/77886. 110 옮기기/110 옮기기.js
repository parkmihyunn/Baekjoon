function solution(s) {
    let anw = s.map((numbers) => {
        const stack = [];
        let str = "";
        for (const char of numbers) {
            if(stack.length >= 2) {
                const mid = stack.pop();
                const left = stack.pop();
                const temp = left+mid+char;
                temp === "110" ? (str += "110") : stack.push(left, mid, char);
            } else {
                stack.push(char);
            }
        }
        const stackStr = stack.join("");
        const index = stackStr.lastIndexOf("0");
        return index === -1 
                    ? str + stackStr
                    : stackStr.slice(0, index+1) + str + stackStr.slice(index+1);
    });
    return anw;
}