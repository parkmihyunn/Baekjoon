function solution(arr) {
    let x = 0;
    let before = arr;
    let after = [];
    let same = false;
    while (1) {
        x += 1;
        after = before.map((item) => {
            if(item >= 50 && item%2 === 0) return item/2;
            if(item <50 && item%2 !== 0 ) return item*2+1;
            return item;
        });
        if (JSON.stringify(before) === JSON.stringify(after) ) break;
        else before = after;
    }
    return x-1;
}