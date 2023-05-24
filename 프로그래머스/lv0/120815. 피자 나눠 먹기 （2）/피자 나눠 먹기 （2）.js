function solution(n) {
    let answer = 0;
    if(n % 6 === 0) {
        return n/6;
    } else {
        return getLCM(n, 6)/6;
    }
    return answer;
}

let getLCM = (num1, num2) =>{
	let lcm = 1;
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm;
}