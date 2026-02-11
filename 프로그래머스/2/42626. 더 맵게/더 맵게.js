function solution(scoville, K) {
  const h = [];

  const push = (x) => {
    h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  };

  const pop = () => {
    const top = h[0];
    const last = h.pop();
    if (h.length) {
      h[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1, r = l + 1, m = i;
        if (l < h.length && h[l] < h[m]) m = l;
        if (r < h.length && h[r] < h[m]) m = r;
        if (m === i) break;
        [h[i], h[m]] = [h[m], h[i]];
        i = m;
      }
    }
    return top;
  };

  for (const x of scoville) push(x);

  let count = 0;
  while (h[0] < K) {
    if (h.length < 2) return -1;
    push(pop() + pop() * 2);
    count++;
  }
  return count;
}
