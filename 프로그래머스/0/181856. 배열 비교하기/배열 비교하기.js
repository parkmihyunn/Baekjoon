function solution(arr1, arr2) {
    const sumArr1 = arr1.reduce((a,b)=>a+b);
    const sumArr2 = arr2.reduce((a,b)=>a+b);
    return arr1.length === arr2.length 
        ? sumArr1 > sumArr2 
            ? 1 
            : sumArr1 === sumArr2 ? 0 : -1 
        : arr1.length > arr2.length ? 1 : -1;
}