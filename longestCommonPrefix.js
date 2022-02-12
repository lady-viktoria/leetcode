let strs = ['flbzghj', 'flbzouhb', 'flbzuhb'];

var longestCommonPrefix = function (strs) {
    for (let i = strs[0].length; i > 0; i--) {
        let sample = strs[0].substr(0, i);
        if (strs.every(el => el.startsWith(sample))) {
            return sample;
        }
    }
    return "";
}

console.log(longestCommonPrefix(strs));