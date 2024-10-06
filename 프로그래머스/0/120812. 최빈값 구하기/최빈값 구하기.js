function solution(array) {
    let answer = -1;
    let repeatCnt = 0, before = -1, cnt = 0;
    let isdup = false;
    array = array.sort((a,b)=>a-b);

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
    
    return isdup ? -1 : answer;
}