function solution(myStr) {
    return myStr.split(/a|b|c/).filter(item => item !== "").length === 0 ? ["EMPTY"] : myStr.split(/a|b|c/).filter(item => item !== "");
}