const solution = nums  => {
    let count = [0,0];
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 === 0) count[0] += 1;
        else count[1] += 1;
    }
    return count;
};
