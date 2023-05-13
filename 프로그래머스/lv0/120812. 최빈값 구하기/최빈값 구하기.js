function solution(array) {
    var answer = -1;
    let repeatCnt = 0, before = -1, cnt = 0;
    var isdup = false
    array = array.sort((a,b)=>a-b)

    for(let i=0; i<array.length; i++) {
        if(before !== array[i]) cnt = 1; 
        else cnt += 1;

        if(cnt === repeatCnt) {
            if(answer !== array[i]) isdup = true;
        }
        if(cnt > repeatCnt) {
            repeatCnt = cnt;
            answer = array[i];
            isdup = false;
        }
        before = array[i];
    }
    
    if(isdup) return -1;
    
    return answer;
}