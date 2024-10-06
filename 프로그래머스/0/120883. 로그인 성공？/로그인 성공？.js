const solution = (id_pw, db) => {
    const dbMap = new Map(db);
    let result = '';
    for(pair of dbMap) {
        id_pw.join('') === pair.join('')
            ? result = 'login'
            : dbMap.has(id_pw[0]) ? result = 'wrong pw' : result = 'fail'
    }
    return result;
};