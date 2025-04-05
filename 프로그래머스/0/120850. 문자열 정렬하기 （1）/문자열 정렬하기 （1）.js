function solution(my_string) {
    let anw = [];
    [...my_string].map((item) => {
        if(item.charCodeAt() >=48 && item.charCodeAt() <= 57) anw.push(Number(item));
    });
    return anw.sort((a,b)=>a-b);
}