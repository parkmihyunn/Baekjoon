function solution(land, height) {
    const N = land.length;
    const Lines = [];
    
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(j < N-1) Lines.push([i*N+j+1, i*N+j+2, Math.abs(land[i][j]-land[i][j+1])])        
            if(i < N-1)Lines.push([i*N+j+1, (i+1)*N+j+1, Math.abs(land[i][j]-land[i+1][j])])
        }
    }
    
    const graph = Array.from({ length: N*N+1 }, (_, idx) => idx);

    const find = (node) => {
        return graph[node] === node ? node : find(graph[node]);
    };

    const union = (node1, node2) => {
        const r1 = find(node1);
        const r2 = find(node2);
        return r1 > r2 ? (graph[r1] = r2) : (graph[r2] = r1);
    };
    
    let count = 0;
    let anw = 0;
    Lines.sort((a,b) => a[2]-b[2]).forEach(([node1, node2, weight]) => {
        if(find(node1) !== find(node2)) {
            if(weight > height) anw += weight;
            union(node1, node2);
        }
    })
    return anw;
}