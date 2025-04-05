function solution(n) {
    let anw = 0;
    for(let i=1; i<=n; i++) {
        if(!isPrime(i)) anw += 1;
    }
    return anw-1;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
