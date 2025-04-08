function solution(my_string) {
    const splited = my_string.split(/\s+/);
    let cal = 1;
    let anw = 0;
    for( const item of splited ) {
        if(item === "+") cal = 1;
        else if(item === "-") cal = 0;
        else {
            if(cal) {
            anw += Number(item);
            } else {
                anw -= Number(item);
            }
        }
    }
    return anw;
}