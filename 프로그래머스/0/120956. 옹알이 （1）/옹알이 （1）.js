const solution = babbling => {
    let count = 0;
    babbling.map(string => 
        string.replace(/aya|ye|woo|ma/g,'') === ''
        ? count += 1
        : string
    );
    return count;
};