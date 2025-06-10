function solution(money) {
    const n = money.length;
    // 1번 집을 터는 경우와 안 터는 경우로 나눔 (원형이므로)
    const dp1 = Array(n).fill(0);
    const dp2 = Array(n).fill(0);
    
    // 1번 집을 터는 경우: 마지막 집은 못 털음
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1]);
    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + money[i]);
    }
    
    // 1번 집을 안 터는 경우: 마지막 집은 가능
    dp2[0] = 0;
    dp2[1] = money[1];
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + money[i]);
    }
    
    return Math.max(dp1[n-2], dp2[n-1]);
}