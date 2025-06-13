function solution(name) {
    let anw = 0;
    let move = name.length - 1;
    
    [...name].map((char, idx) => {
        anw += Math.min(char.charCodeAt()-"A".charCodeAt(), "Z".charCodeAt()-char.charCodeAt()+1);
    });

    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
        // next가 A가 아닌곳을 찾기 위해 탐색 
        while (name[next] === 'A' && next < name.length) next++;
        // 바꿀곳을 기준으로 최소 이동 찾기
        // i = 바꿀 곳 까지 오른쪽 이동
        // name.length - next = 끝까지 이동해서 다시 돌아옴
        // 적은 쪽으로 꺾어서 이동하기
        move = Math.min( move, i + name.length - next + Math.min(i, name.length - next));
    }

    return anw + move;
}