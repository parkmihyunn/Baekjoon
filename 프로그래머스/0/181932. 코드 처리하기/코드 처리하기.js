function solution(code) {
    let mode = 0;
    let ret=[];
    for(let i=0; i<code.length; i++) {
        let char = code[i];
        if(char === "1") mode = !mode;
        else {
            if( mode && i%2 === 1 ) ret.push(char);
            else if ( !mode && i%2 === 0 ) ret.push(char);
        }
    }
    return ret.length===0 ? "EMPTY" : ret.join('');
}