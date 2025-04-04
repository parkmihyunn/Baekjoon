function solution(n) {
    let anw = [];
    let temp = 0;
    for(let i=0; i<n; i++){
        let tempArr = [];
        for(let j=0; j<n; j++) {
            if(j === temp) {
                tempArr.push(1);
            } else tempArr.push(0);
        }
        temp += 1;
        anw.push(tempArr);
    }
    return anw;
}