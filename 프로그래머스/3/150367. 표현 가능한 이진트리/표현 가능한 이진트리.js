function solution(numbers) {
    let anw = [];
    const checkTree = (arr, start, end) => {
        if (start > end) return 1;
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === "0") {
            for (let i = start; i <= end; i++) if (arr[i] === "1") return 0;
            return 1;
        }
        const left = checkTree(arr, start, mid - 1);
        const right = checkTree(arr, mid + 1, end);
        return left && right;
    }
    numbers.forEach((number) => {
        let binary = number.toString(2);
        let len = 1;
        while (len < binary.length) len = len * 2 + 1;
        binary = binary.padStart(len, "0");
        anw.push(checkTree([...binary], 0, binary.length-1));
    })
    return anw;
}