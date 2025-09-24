function solution(commands) {
    let anw = [];
    let graph = Array.from({length: 51}, (_, i) => Array.from({length: 51}, (_, j) => [0, [[i, j]]]));

    commands.forEach((command) => {
        const arr = command.split(" ");
        if (arr[0] === "UPDATE") {
            if (arr.length === 4) {
                const [r, c] = [Number(arr[1]), Number(arr[2])];
                const cells = graph[r][c][1];
                cells.forEach(([x, y]) => {
                    graph[x][y][0] = String(arr[3]);
                });
            } else {
                let found = false;
                for (let i = 1; i <= 50 && !found; i++) {
                    for (let j = 1; j <= 50; j++) {
                        if (graph[i][j][0] === arr[1]) {
                            found = true;
                            break;
                        }
                    }
                }
                if (!found) return;

                for (let i = 1; i <= 50; i++) {
                    for (let j = 1; j <= 50; j++) {
                        if (graph[i][j][0] === arr[1]) {
                            graph[i][j][0] = String(arr[2]);
                        }
                    }
                }
            }
        }
        if (arr[0] === "MERGE") {
            const [r1, c1] = [Number(arr[1]), Number(arr[2])];
            const [r2, c2] = [Number(arr[3]), Number(arr[4])];
            if (r1 === r2 && c1 === c2) return;

            const value1 = graph[r1][c1][0];
            const value2 = graph[r2][c2][0];
            const mergedValue = value1 !== 0 ? value1 : value2;

            if (graph[r1][c1][1] === graph[r2][c2][1]) return;

            const mergedCells = [...graph[r1][c1][1], ...graph[r2][c2][1]];
            mergedCells.forEach(([x, y]) => {
                graph[x][y] = [mergedValue, mergedCells];
            });
        }
        if (arr[0] === "UNMERGE") {
            const [r1, c1] = [Number(arr[1]), Number(arr[2])];
            const value = graph[r1][c1][0];
            const cells = graph[r1][c1][1];
            cells.forEach(([x, y]) => {
                graph[x][y] = [0, [[x, y]]];
            });
            graph[r1][c1] = [value, [[r1, c1]]];
        }
        if (arr[0] === "PRINT") {
            const [r, c] = [Number(arr[1]), Number(arr[2])];
            anw.push(graph[r][c][0] === 0 ? "EMPTY" : graph[r][c][0]);
        }
    });
    return anw;
}