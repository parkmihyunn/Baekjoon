// function solution(prices) {
//     let anw = [];
//     prices.forEach((price, idx) => {
//         let temp = price;
//         let time = 0;
//         for(let i=idx+1; i<prices.length; i++) {
//             time += 1;
//             if(temp > prices[i]) break;
//         }
//         anw.push(time);
//     })
//     return anw;
// }

function solution(prices) {
    const anw = [];
    const reversePrices = prices.reverse();
    while(reversePrices.length) {
        const price = reversePrices.pop();
        let cnt = 0;
        for (let i = reversePrices.length-1 ; i >= 0 ; i--) {
            cnt += 1
            if (price > reversePrices[i]) break;
        }
        anw.push(cnt);
    }
    return anw;
}
