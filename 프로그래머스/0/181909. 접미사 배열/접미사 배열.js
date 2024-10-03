const solution = str => {
    let sol = [];
    for(let i=0; i<str.length; i++){
        sol[i]=str.slice(i);
    }
    return sol.sort();
};