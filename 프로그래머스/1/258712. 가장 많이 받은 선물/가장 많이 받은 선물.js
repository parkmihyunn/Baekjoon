function solution(friends, gifts) {
    const count = {};
    const giftScore = {};
    let anw = 0;
    
    friends.forEach((name) => giftScore[name] = 0);
    friends.forEach((name) => count[name] = JSON.parse(JSON.stringify(giftScore)));
    
    gifts.forEach((str) => {
        const [name, to] = str.split(" ");
        count[name][to] += 1;
    })
    
    Object.entries(giftScore).forEach(([key, value]) => {
        const give = Object.values(count[key]).reduce((a,b) => a+b);
        let receive = 0;
        Object.values(count).forEach((valueObj) => receive += valueObj[key]);
        giftScore[key] = give - receive; 
    })
    
    Object.entries(giftScore).forEach(([key, value]) => {
        let temp = 0;
        const rowObj = count[key];
        Object.entries(rowObj).forEach(([key2, value2]) => {
            if(key !== key2) {
                // 선물 기록이 없는 경우 && 내 선물지수가 큰 경우 선물 받음
                if(value2 === 0 && count[key2][key] === 0 && giftScore[key] > giftScore[key2]) {
                    temp += 1;
                }
                // 선물 기록이 같은 경우 && 내 선물지수가 큰 경우 선물 받음
                else if(value2 === count[key2][key] && giftScore[key] > giftScore[key2]) {
                    temp += 1;
                }
                // 선물 기록이 있는 경우 && 내가 더 많이 준 경우 선물 받음
                else if(value2 !== 0 || count[key2][key] !== 0) {
                    if(count[key][key2] > count[key2][key]) temp += 1;
                }
            }
        })
        if(temp > anw) anw = temp;
        console.log(key, temp)
    })
    return anw;
}