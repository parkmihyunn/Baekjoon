const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(input[0]); // 도시의 갯수
let shortest = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => {
    if (i === j) return [0, []];
    else return [Infinity, []];
  })
);

input.slice(2).forEach((item) => {
  const [a, b, c] = item.split(" ");
  shortest[a - 1][b - 1] = [
    Math.min(Number(c), shortest[a - 1][b - 1][0]),
    [a, b],
  ];
});

while (1) {
  let changed = false;
  for (let s = 0; s < n; s++) {
    for (let e = 0; e < n; e++) {
      for (let c = 0; c < n; c++) {
        if (s === e) continue;
        if (shortest[s][c][0] === Infinity || shortest[c][e][0] === Infinity)
          continue;
        const layover = shortest[s][c][0] + shortest[c][e][0];
        if (layover < shortest[s][e][0]) {
          shortest[s][e] = [
            layover,
            shortest[s][c][1].concat(shortest[c][e][1].slice(1)),
          ];
          changed = true;
        }
      }
    }
  }
  if (!changed) break;
}

for (let i = 0; i < n; i++) {
  let temp = "";
  for (let j = 0; j < n; j++) {
    if (j !== 0) temp += " ";
    if (shortest[i][j][0] === Infinity) temp += "0";
    else temp += shortest[i][j][0];
  }
  console.log(temp);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (shortest[i][j][0] === Infinity) console.log(0);
    else if (shortest[i][j][0] === 0) console.log(0);
    else {
      const length = shortest[i][j][1].length;
      console.log(length + " " + shortest[i][j][1].join(" "));
    }
  }
}