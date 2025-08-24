function solution(maze) {
    let anw = 0;
    const N = maze.length;
    const M = maze[0].length;
    
//     let nowRX = 0, nowRY = 0, nowBX = 0, nowBY = 0;
    let nowR = [], nowB = [];
    let targetR = [], targetB = [];
    maze.forEach((el, i) => {
        el.forEach((item, j) => {
            if(item === 1) nowR = [i, j]; 
            if(item === 2) nowB = [i, j];
            if(item === 3) targetR = [i, j];
            if(item === 4) targetB = [i, j];
        })
    });
    const [rgy, rgx] = targetR, [bgy, bgx] = targetB;
    const [rsy, rsx] = nowR,   [bsy, bsx] = nowB;
    
    const d = [[1,0], [0,1], [-1,0], [0,-1]];
    const inside = (y, x) => y >= 0 && y < N && x >= 0 && x < M && maze[y][x] !== 5;
    const posKey = (y, x) => `${y},${x}`;

    // 초기 상태
    const rStartSet = new Set([posKey(rsy, rsx)]);
    const bStartSet = new Set([posKey(bsy, bsx)]);
    const queue = [[rsy, rsx, bsy, bsx, rStartSet, bStartSet, 0]];

    const seen = new Set();
    const setToKey = (S) => [...S].sort().join('|');
    seen.add(`${rsy},${rsx}|${bsy},${bsx}|${setToKey(rStartSet)}|${setToKey(bStartSet)}`);

    for (let head = 0; head < queue.length; head++) {
        const [ry, rx, by, bx, rSet, bSet, t] = queue[head];
        
        if (ry === rgy && rx === rgx && by === bgy && bx === bgx) {
          anw = t;
          return anw;
        }

        const rMoves = (ry === rgy && rx === rgx)
          ? [[ry, rx]]
          : d.map(([dy, dx]) => [ry + dy, rx + dx])
             .filter(([ny, nx]) => inside(ny, nx) && !rSet.has(posKey(ny, nx)));

        const bMoves = (by === bgy && bx === bgx)
          ? [[by, bx]]
          : d.map(([dy, dx]) => [by + dy, bx + dx])
             .filter(([ny, nx]) => inside(ny, nx) && !bSet.has(posKey(ny, nx)));

        for (const [nry, nrx] of rMoves) {
            for (const [nby, nbx] of bMoves) {
                if (nry === nby && nrx === nbx) continue;
                if (nry === by && nrx === bx && nby === ry && nbx === rx) continue;

                const newRSet = new Set(rSet);
                const newBSet = new Set(bSet);
                newRSet.add(posKey(nry, nrx));
                newBSet.add(posKey(nby, nbx));

                const key = `${nry},${nrx}|${nby},${nbx}|${setToKey(newRSet)}|${setToKey(newBSet)}`;
                if (seen.has(key)) continue;
                seen.add(key);

                queue.push([nry, nrx, nby, nbx, newRSet, newBSet, t + 1]);
            }
        }
    }
    return 0;
}