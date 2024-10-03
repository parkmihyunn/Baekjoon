const solution = my_string => {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    return [...my_string].filter(str => vowel.indexOf(str) === -1).join('');
};