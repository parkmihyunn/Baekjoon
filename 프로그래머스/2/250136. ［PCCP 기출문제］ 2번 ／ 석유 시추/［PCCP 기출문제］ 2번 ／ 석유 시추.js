function solution(land) {
    let anw = 0;
    
    const N = land.length;
    const M = land[0].length;
    
    const visited = new Array(N).fill().map(_ => new Array(M).fill(0));
    const oilMap = new Map();
    let oilIndex = 1;
    function checkOil(i, j) {
        const dx = [-1, 0, 1, 0];
        const dy = [0, 1, 0, -1];
        
        let count = 0;
        const queue = [[i, j]];
        visited[i][j] = oilIndex;
        
        while(queue.length) {
            const [x, y] = queue.shift();
            if (land[x][y] === 1) {
                count++;
            }
            for(let k = 0; k < 4; k++) {
                const [nx, ny] = [x+dx[k], y+dy[k]];
                if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue;
                if (land[nx][ny] === 1) {
                    visited[nx][ny] = oilIndex;
                    queue.push([nx, ny]);
                }
            }
        }
        oilMap[oilIndex++] = count;
    }
    for(let i=0; i<N; i++) {
        for(let j=0; j<M; j++) {
            if (visited[i][j] === 0 && land[i][j] > 0) checkOil(i, j);
        }
    }
    
    for (let i=0; i<M; i++) {
        let sum = 0;
        const set = new Set();
        for(let j=0; j<N; j++) {
            if (visited[j][i] !== 0) set.add(visited[j][i]);
        }
        set.forEach(item => {
            sum += oilMap[item];
        })
        anw = sum > anw ? sum : anw;
    }
    return anw;
}