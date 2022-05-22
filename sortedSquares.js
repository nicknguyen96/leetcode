/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    var temp = nums.map((value,ind) => {
        return value*value;
    })
    return temp.sort((a,b) => a - b);
};

console.log(sortedSquares([-1,3, -2]))