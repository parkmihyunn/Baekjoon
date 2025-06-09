function solution(m, n, puddles) {
    const MOD = 1e9 + 7;
    let coords = Array.from({length:n}, ()=> Array(m).fill(0));
    
    puddles.forEach(([x,y]) => {
        coords[y-1][x-1] = -1;
    });
    
    coords[0][0] = 1;
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) { 
            if (coords[i][j] === -1) {
                coords[i][j] = 0;
                continue;
            }
            if (i > 0) coords[i][j] = (coords[i][j] + coords[i-1][j]) % MOD;
            if (j > 0) coords[i][j] = (coords[i][j] + coords[i][j-1]) % MOD;
        }
    }
    
    return coords[n-1][m-1];
    
}