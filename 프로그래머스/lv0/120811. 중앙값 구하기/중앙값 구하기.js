function solution(array) {
    var answer = 0;
    array.sort(function(a, b)  {
      return a - b;
    });
    return array[Math.floor(array.length/2)];
}