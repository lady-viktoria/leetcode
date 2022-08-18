/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let repeat = 0;
    for (let i = 0; i < nums.sort().length; i++) {
        if (nums.sort()[i] == nums.sort()[i + 1]) {
            repeat = repeat + 1;
        }
        console.log(nums);

    }
    return repeat + 1;
};
console.log(majorityElement([2, 3, 2, 5, 4, 2, 4]));