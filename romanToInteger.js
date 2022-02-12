/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const digits = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    if (!/^[IVXLCDM]+$/i.test(s)) throw new Error('Incorrect roman number format: ' + s)
    return s.toUpperCase().split('').reduce(function (r, v, i, arr) {
        const [a, b] = [digits[arr[i]], digits[arr[i + 1]]];
        console.log(a, b, r);
        return b > a ? r - a : r + a;
    }, 0)
};
console.log(romanToInt("MCMXCIV"));