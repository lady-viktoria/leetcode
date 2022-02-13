/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle != "") {
        haystack = haystack.split(needle);
        if (haystack.length == 1) {
            return -1;
        } else {
            return haystack[0].length;
        }
    } else return 0;
};
// Вариант 2: не эффективен по времени
// if (haystack != "" || needle != "") {
//     let partOfHaystack = "";
//     for (let i = 0; i < haystack.length; i++) {
//         for (let j = 0; j < haystack.length + 1; j++) {
//             partOfHaystack = haystack.split('').splice(i, j).join('');
//             if (partOfHaystack == needle) {
//                 return i;
//             }
//         }
//     }
//     if (partOfHaystack != needle) {
//         return -1
//     }
// } else return 0;
console.log(strStr("aaaaaba", "ba"));