function solution(n, paths, gates, summits) {
    const graph = Array.from({ length : n+1 }, () => []);
    paths.forEach(([i, j, w]) => {
        graph[i].push([j, w]);
        graph[j].push([i, w]);
    });
    
    const summitSet = new Set(summits);
    const intensity = Array(n + 1).fill(Infinity);
    const pq = [];

    for (const gate of gates) {
        intensity[gate] = 0;
        pq.push([0, gate]);
    }

    while (pq.length) {
        const [curInt, node] = pq.shift();

        if (curInt > intensity[node]) continue;
        if (summitSet.has(node)) continue;

        for (const [next, w] of graph[node]) {
            const newInt = Math.max(curInt, w);
            if (newInt < intensity[next]) {
                intensity[next] = newInt;
                pq.push([newInt, next]);
            }
        }
    }

    summits.sort((a, b) => a - b);
    let anwSummit = 0, anwIntensity = Infinity;
    for (const s of summits) {
        if (intensity[s] < anwIntensity) {
            anwIntensity = intensity[s];
            anwSummit = s;
        }
    }

    return [anwSummit, anwIntensity];
}