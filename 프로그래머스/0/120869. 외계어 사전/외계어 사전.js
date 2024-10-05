const solution = (spell, dic) => {
    return dic.filter(word => JSON.stringify([...new Set(word)].sort()) === JSON.stringify([...new Set(spell)].sort())).length !== 0 ? 1 : 2;
};
