function solution(clothes) {
    const obj = {};
    
    clothes.forEach((el) => {
        const type = el[1];
        
        if(obj[type] === undefined) obj[type] = 1;
        else obj[type] += 1;
    });
    
    let anw = 1;
    
    for(let key in obj) {
        anw *= obj[key] + 1;
    }
    
    return anw - 1;
}