const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const nCr = (arr, r) => {
  if (r === 1) return arr.map((el) => [el]);
  const combinations = [];
  for (let i = 0; i < arr.length; i++) {
    const choiced = arr[i];
    const restCombinations = nCr(arr.slice(i + 1), r - 1);
    combinations.push(restCombinations.map((el) => [choiced, ...el]));
  }
  return combinations.flat();
};

input.forEach((line, idx) => {
  const lineArr = line.split(" ");
  const K = lineArr[0];
  const S = lineArr.slice(1);
  console.log(
    nCr(S, 6)
      .map((el) => el.join(" "))
      .join("\n")
  );
  if (idx !== input.length - 2) console.log("");
});