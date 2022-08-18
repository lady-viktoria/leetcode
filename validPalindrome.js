/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const check = [];
    const curArr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "").split("");
    console.log(curArr);
    // console.log(s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").split(""));
    for (let i = curArr.length - 1; i >= 0; i--) {
        check.push(curArr[i]);

    }
    console.log(check);
    console.log(JSON.stringify(curArr) == JSON.stringify(check));
};
isPalindrome("A man, a plan, a canal: Panama");