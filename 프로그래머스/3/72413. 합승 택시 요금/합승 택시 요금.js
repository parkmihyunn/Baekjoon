function solution(n, s, a, b, fares) {
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    for(let i = 1; i <= n; i++) graph[i][i] = 0;
    fares.forEach(([node1, node2, weight]) => {
        graph[node1][node2] = weight;
        graph[node2][node1] = weight;
    })
    
    for(let k=1; k<=n; k++) {
        for(let i=1; i<=n; i++) {
            for(let j=1; j<=n; j++) {
                const temp = graph[i][k] + graph[k][j];
                if(temp < graph[i][j]) {
                    graph[i][j] = temp;
                }
            }
        }
    }
    
    let anw = graph[s][a] + graph[s][b];
    for(let point=1; point<=n; point++) {
        const temp = graph[s][point] + graph[point][a] + graph[point][b];
        if (temp < anw) anw = temp;
    }
    return anw;
}