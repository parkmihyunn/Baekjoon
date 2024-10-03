const solution = (str1, str2) => {
    return [...str1].map((item, idx) => item+str2[idx]).join("");
};