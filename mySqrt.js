/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let sqrRoot = 0;
    while (sqrRoot * sqrRoot < x) {
        sqrRoot++;
    }
    if (sqrRoot * sqrRoot == x) {
        return sqrRoot;
    } else return sqrRoot - 1;

};
console.log(mySqrt(8));