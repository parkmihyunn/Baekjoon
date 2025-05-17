function solution(tickets) {
    const routes = [];
    const used = Array(tickets.length).fill(false);

    function dfs(cur, path, cnt) {
        if (cnt === tickets.length) {
            routes.push([...path]);
            return;
        }
        const next = [];
        for (let i = 0; i < tickets.length; i++) {
            if (!used[i] && tickets[i][0] === cur) {
                next.push([tickets[i][1], i]);
            }
        }
        next.sort();

        for (const [to, idx] of next) {
            used[idx] = true;
            path.push(to);
            dfs(to, path, cnt + 1);
            path.pop();
            used[idx] = false;
        }
    }

    dfs("ICN", ["ICN"], 0);
    // 사전순으로 이미 정렬됐으니 첫 번째만 반환
    return routes[0];
}