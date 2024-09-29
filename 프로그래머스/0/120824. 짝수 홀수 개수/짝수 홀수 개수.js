const solution = nums => {
    return [
        nums.filter((num) => num % 2 === 0).length,
        nums.filter((num) => num % 2 === 1).length
    ];
};
