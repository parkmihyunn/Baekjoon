function solution(maze) {
    const N = maze.length;
    const M = maze[0].length;
    
    let nowRX = 0, nowRY = 0, nowBX = 0, nowBY = 0;
    let targetRX = 0, targetRY = 0, targetBX = 0, targetBY = 0;
    let nowR = [], nowB = [];
    let targetR = [], targetB = [];
    maze.forEach((el, i) => {
        el.forEach((item, j) => {
            if(item === 1) nowRX = j, nowRY = i;
            if(item === 2) nowBX = j, nowBY = i;
            if(item === 3) targetRX = j, targetRY = i;
            if(item === 4) targetBX = j, targetBY = i;
        })
    });
    
    const rSet = new Set([`${nowRY}, ${nowRX}`]);
    const bSet = new Set([`${nowBY}, ${nowBX}`]);
    const queue = [[nowRX, nowRY, nowBX, nowBY, rSet, bSet, 0]];

    const visited = new Set();
    const setToKey = (set) => [...set].sort().join('+');
    visited.add(`${nowRY},${nowRX}+${nowBY},${nowBX}+${setToKey(rSet)}+${setToKey(bSet)}`);
    
    const checkInside = (y, x) => y >= 0 && y < N && x >= 0 && x < M && maze[y][x] !== 5;
    const d = [[1,0], [0,1], [-1,0], [0,-1]];
    
    for (let head = 0; head < queue.length; head++) {
        const [curRX, curRY, curBX, curBY, curRSet, curBSet, turn] = queue[head];
        
        if (curRX === targetRX && curRY === targetRY && curBX === targetBX && curBY === targetBY) {
          return turn;
        }

        const rMoves = (curRX === targetRX && curRY === targetRY)
          ? [[curRY, curRX]]
          : d.map(([dy, dx]) => [curRY + dy, curRX + dx])
             .filter(([ny, nx]) => checkInside(ny, nx) && !curRSet.has(`${ny}, ${nx}`));

        const bMoves = (curBX === targetBX && curBY === targetBY)
          ? [[curBY, curBX]]
          : d.map(([dy, dx]) => [curBY + dy, curBX + dx])
             .filter(([ny, nx]) => checkInside(ny, nx) && !curBSet.has(`${ny}, ${nx}`));

        for (const [nextRY, nextRX] of rMoves) {
            for (const [nextBY, nextBX] of bMoves) {
                // 같은 칸 도달
                if (nextRY === nextBY && nextRX === nextBX) continue;
                // 서로 위치만 바꾸는 경우
                if (nextRY === curBY && nextRX === curBX && nextBY === curRY && nextBX === curRX) continue;

                const nextRSet = new Set(curRSet);
                const nextBSet = new Set(curBSet);
                nextRSet.add(`${nextRY}, ${nextRX}`);
                nextBSet.add(`${nextBY}, ${nextBX}`);

                const key = `${nextRY},${nextRX}+${nextBY},${nextBX}+${setToKey(nextRSet)}+${setToKey(nextBSet)}`;
                if(visited.has(key)) continue;
                visited.add(key);
                queue.push([nextRX, nextRY, nextBX, nextBY, nextRSet, nextBSet, turn+ 1]);
            }
        }
    }
    return 0;
}