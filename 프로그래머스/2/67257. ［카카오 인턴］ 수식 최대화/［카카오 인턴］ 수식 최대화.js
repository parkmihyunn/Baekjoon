function solution(expression) {
    const priorities = ["-+*","-*+","+-*","+*-","*-+","*+-"];
    const anws = [];
    
    function cal(num1, op, num2) {
        if(op === "+")
            return Number(num1)+Number(num2);
        if(op === "-")
            return Number(num1)-Number(num2);
        return Number(num1)*Number(num2);
    }
    
    for (const priority of priorities) {
        const [op1, op2, op3] = [...priority];
        
        let splitExp = expression.split(/(\-|\+|\*)/g).reverse();
        let stack = [splitExp.pop()];
        while(splitExp.length) {
            const cur = splitExp.pop();
            if(stack[stack.length-1] === op1){
                const operator = stack.pop();
                const leftNum = stack.pop();
                stack.push(cal(leftNum, operator, cur));
            }
            else stack.push(cur);
        }
        
        splitExp = stack.reverse();
        stack = [splitExp.pop()];
        while(splitExp.length) {
            const cur = splitExp.pop();
            if(stack[stack.length-1] === op2){
                const operator = stack.pop();
                const leftNum = stack.pop(); 
                stack.push(cal(leftNum, operator, cur));
            }
            else stack.push(cur);
        }
        
        splitExp = stack.reverse();
        stack = [splitExp.pop()];
        while(splitExp.length) {
            const cur = splitExp.pop();
            if(stack[stack.length-1] === op3){
                const operator = stack.pop();
                const leftNum = stack.pop();
                stack.push(cal(leftNum, operator, cur));
            }
            else stack.push(cur);
        }
        
        anws.push(Math.abs(stack.pop()));
    }
    return Math.max(...anws);
}