/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let head = 0;
    let tail = nums.length-1;
    if (nums[head] > target) return 0;
    if (nums[tail] < target) return tail+1;
    while (head < tail) {
        let middle = Math.floor((head + tail) / 2);
        if (nums[middle] == target) return middle;
        if (nums[middle] > target) {
            tail = middle - 1;
        } else {
            head = middle + 1;
        }
    }
    
    if (nums[head] >= target) {
        return head;
    } else {
        return head + 1;
    }
    
};

let array = [1, 3, 5 , 6];

let target = 7;
console.log(array);
console.log(searchInsert(array, target))