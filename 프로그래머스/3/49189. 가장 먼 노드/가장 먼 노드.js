function solution(n, edge) {
    const connected = Array.from({length: n+1}, () => []);
    for(const [a,b] of edge) {
        connected[a].push(b);
        connected[b].push(a);
    }
    
    const dist = Array(n+1).fill(-1);
    const queue = [];
    let head = 0;

    queue.push(1);
    dist[1] = 0;

    let maxDist = 0;
    let count = 0;
    while (head < queue.length) {
        const cur = queue[head++];
        const nextDist = dist[cur] + 1;
        for(const node of connected[cur]) {
            if(dist[node] !== -1) continue;
            dist[node] = nextDist;
            queue.push(node);
            if(nextDist > maxDist) { 
              maxDist = nextDist; 
              count = 1;
            }
            else if(nextDist === maxDist) count++;
        }
    }
    return count;
}