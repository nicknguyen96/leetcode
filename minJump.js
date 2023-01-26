var jump = function(nums) {
    // maximum jumps
    let jumps = [];
    for (let i = 0; i < nums.length; i++){
        jumps[i] = i;
    }
    for (let i = 1; i < jumps.length; i++){
        for (let j = 0; j < nums[i-1]; j++){
            jumps[i+j] = Math.min(jumps[i+j], jumps[i-1]+1);
        }
    }
    return jumps[nums.length-1];
};
