function solution(today, terms, privacies) {
    const cases = {};
    terms.forEach((item) => {
        const [key, value] = item.split(" ");
        cases[key] = Number(value);
    })
    
    const [ty, tm, td] = today.split(".").map(Number);
    const anw = [];
    privacies.forEach((item, idx) => {
        const [get, term] = item.split(" ");
        let [year, month, day] = get.split(".").map(Number);
        month += cases[term];
        day -= 1;
        if(month > 12) {
            const temp = Math.floor(month / 12);
            if(month % 12 === 0) {
                year += temp - 1;
                month -= (temp-1)*12;
            }
            else {
                year += temp;
            month -= temp*12;
            }
        }
        if(day === 0) {
            month -= 1;
            day = 28;
        }
        if(ty > year || ty === year && tm > month || ty === year && tm === month && td > day ) {
            anw.push(idx+1);
        }
    });
    return anw;
}

 "2020.12.17", ["A 12"], ["2010.01.01 A", "2020.24.16 A"]
 "[1, 2]"