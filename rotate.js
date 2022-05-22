/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const len = nums.length
    k = (k % len)
    
    let end = nums.splice(len - k)
console.log(end)
console.log(nums)
    nums.splice(0,0,...end)
};

let nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotate(nums,k))
