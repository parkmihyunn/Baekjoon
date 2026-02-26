function solution(numbers, target) {

  let answer = 0
  let queue = []
  queue.push([0,0])

    for (let i = 0; i < queue.length; i++) {

      let [idx, sum] = queue[i]

      if (idx === numbers.length) {
        if (sum === target) {
          answer++
        }
        continue
      }
      queue.push([idx + 1, sum + numbers[idx]])
      queue.push([idx + 1, sum - numbers[idx]])
    }

  return answer
}