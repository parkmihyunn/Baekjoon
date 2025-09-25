function solution(points, routes) {
    
    const getNextPosition = (r,c,targetR,targetC) => {
        if(r!==targetR) return r > targetR ? [r-1,c] : [r+1,c];
        if(c!==targetC) return c > targetC ? [r,c-1] : [r,c+1];
        return [r,c];
    }

    let arr = [];
    let maxIndex = 0;
    routes.forEach((route) => {
        let startPoint = route.shift();
        let history =[points[startPoint-1]];
        
        while(route.length) {
            let [nowR,nowC] = history.at(-1);
            let [targetR,targetC] = points[route[0]-1];
            
            let [nextR,nextC] = getNextPosition(nowR,nowC,targetR,targetC);
            
            history.push([nextR,nextC]);
            if(nextR === targetR && nextC === targetC) {
                route.shift();
            }
        }
        
        maxIndex = Math.max(maxIndex,history.length-1);
        arr.push(history);
    });

    let anw = 0;
    let index = 0;
    while(index <= maxIndex) {
        let crushPoints = [];
        for(let i=0; i<arr.length-1; i++) {
            for(let j=i+1; j<arr.length; j++) {
                if(arr[i][index] && arr[j][index] && arr[i][index][0]===arr[j][index][0] && arr[i][index][1]===arr[j][index][1]){               
                    let alreadyInclude = crushPoints.some((point) => point[0] === arr[i][index][0] && point[1] === arr[i][index][1])
                    if(!alreadyInclude){
                        crushPoints.push([arr[i][index][0],arr[i][index][1]]);
                        anw += 1;
                    }       
                }
            }
        }
        index += 1;
    }
    return anw;
}