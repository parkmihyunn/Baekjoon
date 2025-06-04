function solution(rectangle, characterX, characterY, itemX, itemY) {
    const MAX = 102;
    const coords = Array.from({ length: MAX }, () => Array(MAX).fill(0));
    const visited = Array.from({ length: MAX }, () => Array(MAX).fill(0));

    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1 * 2; i <= x2 * 2; i++) {
            for (let j = y1 * 2; j <= y2 * 2; j++) {
                coords[i][j] = 1;
            }
        }
    });
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1 * 2 + 1; i < x2 * 2; i++) {
            for (let j = y1 * 2 + 1; j < y2 * 2; j++) {
                coords[i][j] = 0;
            }
        }
    });

    const queue = [[characterX * 2, characterY * 2, 0]];
    visited[characterX * 2][characterY * 2] = 1;
    const moving = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    while (queue.length) {
        const [x, y, dist] = queue.shift();
        if (x === itemX * 2 && y === itemY * 2) return dist / 2;
        for (const [dx, dy] of moving) {
            const nx = x + dx, ny = y + dy;
            if (
                nx >= 0 && ny >= 0 && nx < MAX && ny < MAX &&
                coords[nx][ny] === 1 && !visited[nx][ny]
            ) {
                visited[nx][ny] = 1;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
}