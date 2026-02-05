const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

let input = [];

rl.on('line', function(line){
  input.push(line);
})
.on("close", function(){
  // 코드 작성
  const anw = [];

  for(let i=0; i<input.length; i++) {
    const N = Number(input[i]);

    if (N === 0) {
      anw.push("-")
      continue;
    }

    let blank = [];

    for (let k = 0; k < N; k++) {
      const mid = 3 ** k;                
      blank = blank.concat([mid], blank); 
    }

    let anwStr = "-";
    for (let j = 0; j < blank.length; j++) {
      anwStr += " ".repeat(blank[j]) + "-";
    }
  
    anw.push(anwStr);
  }

  console.log(anw.join("\n"));
  process.exit();
});