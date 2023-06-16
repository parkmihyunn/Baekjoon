function solution(maps) {
    // 가로, 세로 길이
    const xLen = maps[0].length;
    const yLen = maps.length;
    
    // 상하좌우로 이동할 시 칸 수
    const dy = [0, 0, 1, -1];
    const dx = [-1, 1, 0, 0];
    
    // x좌표, y좌표, 이동한 횟수
    const queue = [];
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        // queue에서 현재위치랑 칸수를 빼오면서
        const [curY, curX, move] = queue.shift();
        
        // 도착지점과 같으면 현재까지 이동한 칸수를 반환
        // yLen - 1, xLen - 1 : 목표지점 좌표
        if(curY === yLen - 1 && curX === xLen - 1) return move;
        
        // 그렇지 않으면 상, 하, 좌, 우로 이동
        // 이동 후의 좌표가 maps을 벗어나지 않고, 벽이 아니라면 (1이라면) 좌표와 이동한 칸 수를 1 증가 -> 해당칸 0으로 변경
        for(let i = 0; i < 4; i++) {
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            if(ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
                queue.push([ny, nx, move + 1]);
                maps[ny][nx] = 0;
            }
        }
    }
    return -1;
}
