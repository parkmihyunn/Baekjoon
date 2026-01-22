function solution(board, aloc, bloc) {
    let anw = -1;
    
    const isInRange = (a, b) => {
        return a < 0 || b < 0 || a >= board.length || b >= board[0].length;
    }
    
    const d = [[0, 1], [1, 0], [-1, 0], [0, -1]]; 
    
    const play = (moveLoc, restLoc) => {      
        let moves = 0;
        if(board[moveLoc[0]][moveLoc[1]] === 0) return 0;
        board[moveLoc[0]][moveLoc[1]] = 0;
        
        for(let i=0; i < 4; ++i) {    
            if(isInRange(moveLoc[0] + d[i][0], moveLoc[1] + d[i][1]) || !board[moveLoc[0] + d[i][0]][moveLoc[1] + d[i][1]]) continue;
            
            let futureMoves = play(restLoc, [moveLoc[0] + d[i][0], moveLoc[1] + d[i][1]]) + 1;
            
            if(moves%2===0 && futureMoves%2===1){
                moves = futureMoves;
            }
            else if(moves%2===0 && futureMoves%2===0){
                moves = Math.max(moves, futureMoves);
            }
            else if(moves%2===1 && futureMoves%2===1){
                moves = Math.min(moves, futureMoves);
            }
        }
        
        board[moveLoc[0]][moveLoc[1]] = 1;
        return moves;
    }
    
    anw = play(aloc, bloc); 
       
    return anw;
}