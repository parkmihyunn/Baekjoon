const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const N = +input[0];

const pos = Array(N).fill(-1);
let anw = 0;

function dfs(r) {
  if (r === N) {
    anw++;
    return;
  }
  for (let c = 0; c < N; c++) {
    let check = true;
    for (let i = 0; i < r; i++) {
      if (pos[i] === c || Math.abs(r - i) === Math.abs(c - pos[i])) {
        check = false;
        break;
      }
    }
    if (!check) continue;
    pos[r] = c; 
    dfs(r + 1);
    pos[r] = -1; 
  }
}
dfs(0);
console.log(String(anw));