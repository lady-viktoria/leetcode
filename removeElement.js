/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    var idx = nums.indexOf(val);
    while (idx != -1) {
        nums.splice(idx, 1);
        idx = nums.indexOf(val);
    }
    console.log(nums);

    //2 способ:
    // var indices = [];
    // var idx = nums.indexOf(val);
    // while (idx != -1) {
    //     indices.push(idx);
    //     idx = nums.indexOf(val, idx + 1);
    // }
    // console.log(indices);
    // let diff = 0;
    // for (let i = 0; i < indices.length; i++) {
    //     nums.splice(indices[i] - diff, 1);
    //     diff++;
    // }
    // console.log(nums);
};
console.log(removeElement([3, 3, 3, 1, 2, 3, 3, 4, 5, 6, 7], 3));