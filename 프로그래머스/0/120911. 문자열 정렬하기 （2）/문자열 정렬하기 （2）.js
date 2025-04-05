function solution(my_string) {
    return [...my_string].map(item => item.toLowerCase()).sort().join("");
}