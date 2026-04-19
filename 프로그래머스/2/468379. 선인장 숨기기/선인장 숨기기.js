function solution(m, n, h, w, drops) {
    const coords = Array.from({ length: m }, () => Array(n).fill(Infinity));
    
    drops.forEach((item, idx) => {
        coords[item[0]][item[1]] = idx + 1;
    });

    const rowMin = Array.from({ length: m }, () => Array(n - w + 1).fill(Infinity));

    for (let i = 0; i < m; i++) {
        const deque = [];
        let head = 0;

        for (let k = 0; k < n; k++) {
            while (head < deque.length && coords[i][deque[deque.length - 1]] >= coords[i][k]) {
                deque.pop();
            }
            deque.push(k);

            while (head < deque.length && deque[head] <= k - w) {
                head++;
            }

            if (k >= w - 1) {
                rowMin[i][k - w + 1] = coords[i][deque[head]];
            }
        }
    }

    // 각 (i, k) 시작점의 h*w 직사각형 최소값
    const finalMin = Array.from({ length: m - h + 1 }, () => Array(n - w + 1).fill(Infinity));

    for (let k = 0; k <= n - w; k++) {
        const deque = [];
        let head = 0;

        for (let i = 0; i < m; i++) {
            while (head < deque.length && rowMin[deque[deque.length - 1]][k] >= rowMin[i][k]) {
                deque.pop();
            }
            deque.push(i);

            while (head < deque.length && deque[head] <= i - h) {
                head++;
            }

            if (i >= h - 1) {
                finalMin[i - h + 1][k] = rowMin[deque[head]][k];
            }
        }
    }

    let temp = 0;
    let anw = [Infinity, Infinity];

    for (let i = 0; i <= m - h; i++) {
        for (let k = 0; k <= n - w; k++) {
            if (temp < finalMin[i][k]) {
                temp = finalMin[i][k];
                anw = [i, k];
            }
        }
    }

    return anw;
}