function solution(keyinput, board) {
    let now = [0,0];
    for(const input of keyinput) {
        if(input === "left"){
            now[0] -= 1;
        }
        if(input === "right"){
            now[0] += 1;
        }
        if(input === "up"){
            now[1] += 1;
        }
        if(input === "down"){
            now[1] -= 1;
        }
        if(now[0]<-Math.floor(board[0]/2)) now[0] += 1;
        if(now[0]>Math.floor(board[0]/2)) now[0] -= 1;
        if(now[1]<-Math.floor(board[1]/2)) now[1] += 1;
        if(now[1]>Math.floor(board[1]/2)) now[1] -= 1;
    }
    return now;
}