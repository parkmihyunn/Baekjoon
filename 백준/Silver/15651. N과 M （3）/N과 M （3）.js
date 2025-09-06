const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numbers = Array.from({ length: N }, (_, idx) => idx + 1);

const nPIr = (arr, r) => {
  if (r === 1) return arr.map((el) => [el]);
  const combinations = [];
  for (let i = 0; i < arr.length; i++) {
    const choiced = arr[i];
    const restCombinations = nPIr(arr, r - 1);
    combinations.push(restCombinations.map((el) => [choiced, ...el]));
  }
  return combinations.flat();
};

console.log(
  nPIr(numbers, M)
    .map((el) => el.join(" "))
    .join("\n")
);