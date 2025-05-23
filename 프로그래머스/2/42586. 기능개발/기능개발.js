function solution(progresses, speeds) {
    let anw = [];
    const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

    let stack = [];
    days.forEach((day) => {
        if( !stack.length || stack[0] >= day) {
            stack.push(day);
        } else {
            anw.push(stack.length);
            stack = [day];
        }
    });
    if(stack.length) anw.push(stack.length);
    return anw;
}