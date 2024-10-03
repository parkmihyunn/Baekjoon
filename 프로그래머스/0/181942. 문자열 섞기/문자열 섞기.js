const solution = (str1, str2) => {
    let sol = [];
    for(let i=0; i<str1.length; i++){
        sol[2*i] = str1[i];
        sol[2*i+1]= str2[i];
    }
    return sol.join(''); 
};