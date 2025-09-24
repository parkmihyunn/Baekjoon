function solution(users, emoticons) {
    // anw = [이모티콘 플러스 서비스 가입 수, 이모티콘 매출액]
    const discount = [10, 20, 30, 40];
    const temp = [0.9, 0.8, 0.7, 0.6];
    const N = emoticons.length;
    
    const nPr = (arr, r) => {
        if(r === 1) return arr.map(el => [el]);
        let combinations = [];
        for(let i=0; i<arr.length; i++) {
            let fixed = arr[i];
            const restCombinations = nPr(arr, r-1);
            combinations.push(restCombinations.map((el) => [fixed, ...el]));
        }
        return combinations.flat();
    }
    const combinations = nPr(discount, N);
    
    let anw = [0, 0];
    combinations.forEach((combi) => {
        let subNum = 0;
        let restAmount = 0;
        users.forEach(([cPercentage, cAmount]) => {
            let amount = 0;
            combi.map((percentage, idx) => {
                if(percentage >= cPercentage) amount += emoticons[idx]*((100-percentage)/100);
            })
            if(amount >= cAmount) subNum += 1;
            else restAmount += amount;
        })
        if(anw[0] < subNum || anw[0] === subNum && anw[1] < restAmount) {
            anw = [subNum, restAmount];
        }
    });
    return anw;
}