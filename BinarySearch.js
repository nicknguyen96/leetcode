/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let head = 0;
    let tail = nums.length - 1;
    while (head <= tail) {

        let middle = (Math.floor((head + tail) / 2));

        // console.log("head and tail",head, tail);
        // console.log("middle ",middle);
        // console.log("nums[middle]", nums[middle])
        if (nums[middle] == target) {
            return middle;
        } else {
            if (nums[middle] > target) {
                tail = middle - 1;
            } else {
                head = middle + 1;
            }
        }
    }
    return -1;
};

let input = [-1, 0, 3, 5, 9, 12];
console.log(input)
console.log(search(input, 9))
if (search(input, 9) == 4) {
    console.log("correct")
} else {
    console.log("false")
}