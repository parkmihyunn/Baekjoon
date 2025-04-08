function solution(dots) {
    const x = [...new Set(dots.map(dot => dot[0]))];
    const y = [...new Set(dots.map(dot => dot[1]))];

    const width = Math.abs(x[0] - x[1]);
    const height = Math.abs(y[0] - y[1]);

    return width * height;
}