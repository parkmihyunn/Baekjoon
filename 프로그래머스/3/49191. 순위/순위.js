function solution(n, results) {
    let anw = 0;
    const match = Array.from({length:n}, () => Array.from({length:n}, () => false));
    for(const result of results) {
        match[result[0]-1][result[1]-1] = true;
    }

    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
          for(let j = 0; j < n; j++) {
            if(match[i][k] && match[k][j]) {
              match[i][j] = true;
            }
          }
        }
    }

    for(let i = 0; i < n; i++) {
        let count = 0;  
        for(let j = 0; j < n; j++) {
          if(match[i][j] || match[j][i]) count++;
        }
        if(count === n-1) anw++;
    }
    return anw;
}