function solution(cacheSize, cities) {
    const cityMap = new Map();
    let anw = 0;
    if(cacheSize === 0) return cities.length*5;
    
    cities.forEach((c, idx) => {
        if(!cityMap.has(c.toLowerCase())) {
            // 캐시가 꽉 차있는 경우,
            if(cityMap.size >= cacheSize) {
                const iterator = cityMap.keys();
                cityMap.delete(iterator.next().value);
            }
            cityMap.set(c.toLowerCase(), 0);
            anw += 5;
        } else {
            cityMap.delete(c.toLowerCase());
            cityMap.set(c.toLowerCase(), 0);
            anw += 1;
        }
    })
    
    return anw;
}