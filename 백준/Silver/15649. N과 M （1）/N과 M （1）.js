const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (_, idx) => idx + 1);

function nPr(array, r) {
  if (r === 1) return array.map((el) => [el]);

  const result = [];
  array.forEach((item, idx, origin) => {
    const rests = origin.slice(0, idx).concat(origin.slice(idx + 1));
    const restsPr = nPr(rests, r - 1);
    result.push(...restsPr.map((val) => [item, ...val]));
  });
  return result;
}

console.log(
  nPr(arr, M)
    .map((el) => el.join(" "))
    .join("\n")
);
