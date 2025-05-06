function solution(edges) {
    const map = {}

    for (const [start, end] of edges) {
        map[start] = map[start] ?? [0, 0]
        map[end] = map[end] ?? [0, 0]
        map[start][0]++
        map[end][1]++
    }

    let addedNode = 0
    let donutCnt = 0
    let lineCnt = 0
    let eightCnt = 0
    for (const [start, [given, received]] of Object.entries(map)) {
        if (given > 1 && received === 0) {
            addedNode = start
        } else if (given === 0) {
            lineCnt++
        } else if (given > 1 && received > 1) {
            eightCnt++
        }
    }

    donutCnt = map[addedNode][0] - lineCnt - eightCnt

    return [Number(addedNode), donutCnt, lineCnt, eightCnt]
}