/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let sum = 0;
    for (let i = 0; i <= n; i = i + 2) {
        console.log(i);
        sum = i;
    }
    return sum;
};
console.log(climbStairs(5));