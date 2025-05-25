function solution(s){
    const str = [...s].reverse();
    let stack = [str.pop()];
    while(str.length) {
        const temp = str.pop();
        if(temp === ")" && stack[stack.length-1] === "(") {
            stack.pop();
        } else {
            stack.push(temp);
        }
    }
    return stack.length !== 0 ? false : true;
}