function solution(routes) {
    let anw = 0;
    
    routes.sort((a, b) => a[1] - b[1]);
    let camera = -30001;
    
    routes.forEach((route) => {
        const [start, end] = route;
        if (camera < start) {
            camera = end;
            anw += 1;
        }
    })
    
    return anw;
}