const solution = str => {
    let count = new Map();
    let only = [];
    for(const char of [...str]) {
       count.set(char, (count.get(char) || 0) + 1);
    }
    for(const key of count.keys()) {
        count.get(key) !== 1 ? count.delete(key) : only.push(key)
    }
    return only.sort().join('');
};