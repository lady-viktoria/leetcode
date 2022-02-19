/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    if (digits[digits.length - 1] != 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
        return digits;
    } else {
        let lastNine = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] == 9) {
                digits[i] = 0;
                lastNine = i;
            } else break;
        }
        console.log(lastNine);
        if (digits[0] == 0) {
            digits.unshift(1);
        } else {
            digits[lastNine - 1] = digits[lastNine - 1] + 1
        };
        return digits;
    }
    // return +digits.join('') + 1;
};
console.log(plusOne([9, 9, 9, 9, 9, 9]));