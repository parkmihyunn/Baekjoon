const solution = (my_string, indices) => {
    let copy_string = [...my_string];
    indices.map(index => delete copy_string[index]);
    return copy_string.join('');
};