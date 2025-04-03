function solution(rny_string) {
    return [...rny_string].map(s => {
        if(s==="m") return "rn"
        else return s;
    }).join("")
}