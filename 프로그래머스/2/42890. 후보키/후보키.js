function solution(relation) {
    let N = relation[0].length;
    let attributes = Array.from({length:N}, (_, idx) => idx);
    let relations = Array.from({length:N}, () => []);
    relation.forEach(item => item.map((el, idx) => relations[idx].push(el)));
    const uniqueness = [];
    
    // 한가지 속성만으로 유일성과 최소성을 만족
    relations.forEach((row, idx) => {
        const temp = new Set(row);
        if(temp.size === row.length) uniqueness.push(String(idx));
    })
    
    const nCr = (arr, r) => {
        if(r === 1) return arr.map(el => [el]);
        let combinations = [];
        for(let i=0; i<arr.length; i++) {
            const choiced = arr[i];
            const restCombinations = nCr(arr.slice(i+1), r-1);
            combinations.push(restCombinations.map(el => [choiced, ...el]));        
        }
        return combinations.flat();
    }
    
    // uniqueness에 존재하는 속성을 포함한 조합은 최소성을 만족할 수 없으므로 제외하고 조합 후 유일성 확인
    for(let choicedNum = 2; choicedNum <= N; choicedNum++) {
        let combinations = nCr(attributes, choicedNum);
        uniqueness.forEach((unique) => {
            combinations = combinations.filter((combi) => {
                let temp = new Array(unique.length).fill(false);
                [...unique].forEach((el, idx) => {
                    if(combi.includes(Number(el))) temp[idx] = true; 
                });
                if(temp.includes(false)) return true;
                else return false;
            });
        });
        combinations.forEach((combi) => {
            const rows = relation.map((row) => row.filter((_, idx) => combi.includes(idx)).join(""));
            const tempSet = new Set(rows);
            if(tempSet.size === rows.length) uniqueness.push(combi.join(""));
        });
    }
    return uniqueness.length;
}