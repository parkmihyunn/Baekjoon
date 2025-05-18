function solution(n, computers) {
    let anw = 0;
    const visited = new Array(n).fill(false);
    const connect = [];
    const dfs = (nodes, index) => {
        visited[index] = true;
        computers[index].forEach((item, idx) => {
            if(idx !== index && item === 1 && !visited[idx]) {
                dfs(computers[idx], idx);
            }
        });
        return;
    }
    
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            dfs(computers[i], i);
            anw += 1;
        }
    }
    
    return anw;
}