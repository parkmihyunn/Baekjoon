function solution(prices) {
    let anw = [];
    prices.forEach((price, idx) => {
        let temp = price;
        let time = 0;
        for(let i=idx+1; i<prices.length; i++) {
            time += 1;
            if(temp > prices[i]) break;
        }
        anw.push(time);
    })
    return anw;
}