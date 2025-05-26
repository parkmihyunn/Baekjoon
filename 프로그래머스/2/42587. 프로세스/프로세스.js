function solution(priorities, location) {
    let anw = 0;
    let play = [];
    const pSet = priorities.map((priority, idx)=> {
        return [priority, idx];
    })
    
    while(pSet.length) {
        const [tempP, tempIdx] = pSet.shift();
        pSet.filter(item => item[0] > tempP).length === 0 ? play.push([tempP, tempIdx]) : pSet.push([tempP, tempIdx]);
    }
    
    play.forEach((item, idx) => {
        if(item[1] === location) return anw = idx+1;
    })
    
    return anw;
}