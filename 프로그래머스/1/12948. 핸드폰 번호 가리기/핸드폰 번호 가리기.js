function solution(phone_number) {
    return [...phone_number].map((item, idx) => {
        if(idx < phone_number.length-4) return "*";
        return item;
    }).join('')
}