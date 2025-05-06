function solution(n, q, ans) {

     const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 
        arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1); 
          // 해당하는 fixed를 제외한 나머지 뒤
          const combinations = getCombinations(rest, selectNumber - 1); 
          // 나머지에 대해서 조합을 구한다.
          const attached = combinations.map((el) => [fixed, ...el]); 
          //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
          results.push(...attached); 
          // 배열 spread syntax 로 모두다 push
        });
        return results;
    }
    
    // n이하의 숫자 중 5개 조합 묶음 생성
    const nthArr = Array.from({ length: n }, (_, i) => i+1);
    const combination = getCombinations(nthArr, 5);
    
    // combination 을 순환
    let result = 0;
    for(const item of combination) {
        let isAble = true;
        for(let i=0; i<q.length; i++) {
            if(q[i].filter((number)=>item.indexOf(number)!==-1).length !== ans[i]) {
                isAble = false;
            }
        }
        if(isAble) {
            result += 1;
        }
    }
    return result;
}