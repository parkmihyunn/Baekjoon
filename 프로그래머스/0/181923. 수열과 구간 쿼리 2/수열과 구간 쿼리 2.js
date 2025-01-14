function solution(arr, queries) {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const pickedArr = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > queries[i][2] && j >= queries[i][0] && j <= queries[i][1]) {
        pickedArr.push(arr[j]);
      }
    }
    if (pickedArr.length === 0) result.push(-1);
    else {
      pickedArr.sort((a, b) => a - b);
      result.push(pickedArr[0]);
    }
  }
  return result;
}