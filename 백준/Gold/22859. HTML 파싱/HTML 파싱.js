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
  const main = input[0].match(/<main>([\s\S]*?)<\/main>/)[1];

  const out = [];
  const divExp = /<div title="(.*?)">([\s\S]*?)<\/div>/g;
  let div;
  
  while ((div = divExp.exec(main))) {
    const title = div[1];
    const body = div[2];
  
    out.push(`title : ${title}`);
  
    const pExp = /<p>([\s\S]*?)<\/p>/g;
    let p;
  
    while ((p = pExp.exec(body))) {
      const text = p[1].replace(/<.*?>/g, "").replace(/ +/g, " ").trim();
  
      out.push(text);
    }
  }
  
  console.log(out.join("\n"));
  
  process.exit();
});