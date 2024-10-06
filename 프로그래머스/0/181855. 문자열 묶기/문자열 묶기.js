const solution = strings => {
    let count = [0];
    for(string of strings){
        count[string.length] 
            ? count[string.length] += 1
            : count[string.length] = 1
    }
    return Math.max(...count);
};