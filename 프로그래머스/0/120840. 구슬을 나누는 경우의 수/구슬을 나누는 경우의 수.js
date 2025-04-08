function solution(balls, share) {
    let top = [];
    let bottom = [];
    
    for (let i = 0; i < share; i++) {
        top.push(balls - i);
        bottom.push(share - i);
    }

    const numerator = top.reduce((a, b) => a * b, 1);
    const denominator = bottom.reduce((a, b) => a * b, 1);
    return numerator / denominator;
}