const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [L, C] = input[0].split(" ").map(Number);
const charArr = input[1].split(" ").sort();

const countV = (arr) => {
  let count = 0;
  arr.forEach((char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      count += 1;
  });
  return count;
};

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

console.log(
  nCr(charArr, L)
    .filter((item) => {
      const count = countV(item);
      if (count >= 1 && item.length - count >= 2) return true;
    })
    .map((el) => el.join(""))
    .join("\n")
);