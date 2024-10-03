const solution = str => {
    return [...str].map(str => str <= 'l' ? str = 'l' : str ).join('');
};