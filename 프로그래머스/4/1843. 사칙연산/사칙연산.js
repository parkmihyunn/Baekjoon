function solution(arr) {
    const n = arr.length;
    const minDP = Array.from({length: n}, () => Array(n).fill(Infinity));
    const maxDP = Array.from({length: n}, () => Array(n).fill(-Infinity));

    for(let i = 0; i < n; i += 2) {
        minDP[i][i] = maxDP[i][i] = Number(arr[i]);
    }

    for(let len = 3; len <= arr.length; len+=2) {
        for(let start = 0; start <=n-len; start+=2) {
            const end = start+len-1;
            for(let operator = start+1; operator<end; operator+=2) {
                // 덧셈
                if (arr[operator] === "+") {
                    maxDP[start][end] = Math.max(
                        maxDP[start][end],
                        maxDP[start][operator - 1] + maxDP[operator + 1][end]
                    );
                    minDP[start][end] = Math.min(
                        minDP[start][end],
                        minDP[start][operator - 1] + minDP[operator + 1][end]
                    );
                } 
                // 뺄셈
                else {
                    maxDP[start][end] = Math.max(
                        maxDP[start][end],
                        maxDP[start][operator - 1]
                        - minDP[operator + 1][end]
                    );
                    minDP[start][end] = Math.min(
                        minDP[start][end],
                        minDP[start][operator - 1] - maxDP[operator + 1][end]
                    );
                }
            }
        }
    }
    return maxDP[0][n - 1];
}