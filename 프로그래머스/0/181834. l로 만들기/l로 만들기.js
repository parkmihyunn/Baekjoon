const solution = str => {
    return [...str].map(str => str <= 'l' ? 'l' : str ).join('');
};