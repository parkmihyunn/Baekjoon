function solution(myString) {
    return [...myString].map((item) => {
        if(item === "a" || item === "A") return "A"
        return item.toLowerCase();
    }).join("");
}