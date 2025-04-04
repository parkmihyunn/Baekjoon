function solution(arr, flag) {
    let X = [];
    flag.map((item, idx) => {
        if(item) {
            for(let i=0; i<arr[idx]*2; i++) X.push(arr[idx]);
        } else {
            X = X.slice(0, X.length-arr[idx]);
        }
    })
    return X;
}