function solution(quiz) {
    return quiz.map(expression => {
        // 수식을 공백을 기준으로 분리
        const parts = expression.split(' ');

        // X, 연산자, Y, '=', Z 추출
        const X = parseInt(parts[0], 10);
        const operator = parts[1];
        const Y = parseInt(parts[2], 10);
        const Z = parseInt(parts[4], 10);

        // 연산자에 따라 계산 수행
        let result;
        if (operator === '+') {
            result = X + Y;
        } else if (operator === '-') {
            result = X - Y;
        } else {
            // 지원하지 않는 연산자가 있을 경우 예외 처리
            throw new Error(`Unsupported operator: ${operator}`);
        }

        // 계산 결과와 Z 비교하여 'O' 또는 'X' 반환
        return result === Z ? 'O' : 'X';
    });
}