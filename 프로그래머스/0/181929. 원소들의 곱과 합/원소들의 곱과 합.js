const solution = nums => {
    let multi = nums[0];
    let sum = nums[0];
    for (let i=1; i<nums.length; i++){
        multi *= nums[i];
        sum += nums[i];
    }
    if(multi < sum ** 2) return 1;
    return 0;
};