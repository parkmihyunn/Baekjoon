function solution(stones, k) {
    let min = 1;
    let max = 0;
    for (let item of stones) if(item > max) max = item;

    const canCross = (num) => {
        let count = 0;
        for (let stone of stones) {
            if (stone < num) {
                count++;
                if (count >= k) return false;
            }
            else count = 0;
        }
        return true;
    };
    
    let anw = 0;
    while (min <= max) {
        let mid = (min + max) >> 1;
        if(canCross(mid)) {
            anw = mid;
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return anw;
}