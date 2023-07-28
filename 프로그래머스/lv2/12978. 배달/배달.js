function solution(N, road, K) {
    // 노드별 거리를 Infinity로 갖는 배열을 생성 ( 1부터 사용하기 위해 N+1 배열 생성)
    const dist = Array(N + 1).fill(Infinity);
    // 인접한 노드별 시간 정보를 담고 있는 배열 생성
    // Array.from() : 얕은 복사 실행, 새로운 array 객체 생성
    const adj = Array.from({ length: N + 1 }, () => []);
    
    // adj 배열에 데이터를 추가하는 과정
    // Array.forEach() : 함수를 배열 요소 각각에 대해 실행
    road.forEach(([e1, e2, e3]) => {        
        adj[e1].push({ to: e2, time: e3 }); 
        adj[e2].push({ to: e1, time: e3 }); 
    });
    
    // 1번 마을에서부터 우선순위 큐 시작, 초기값 0 할당
    const pq = [{ to: 1, time: 0 }];
    dist[1] = 0;

    // 우선순위큐 배열에 값이없을 때 까지 반복
    while(pq.length) {
        let {to, time} = pq.pop();

        // 연결된 노드에서의 값 > 현재값 + 인접한 노드 시간
        // 값을 대체하고 우선순위 큐에 데이터 추가
        adj[to].forEach(next => {
            if(dist[next.to] > dist[to] + next.time) {
                dist[next.to] = dist[to] + next.time;
                pq.push(next);
            }
        })
    }

    // k시간 이하 갯수 filter
    // Array.filter() : 함수의 테스트를 통과하는 요소들을 모아 새로운 배열로 반환
    return dist.filter((item) => item <= K ).length;
}