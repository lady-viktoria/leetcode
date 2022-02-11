var lengthOfLastWord = function (s) {
    let indexLastSpace = s.trim().lastIndexOf(" ");
    return s.trim().substring(indexLastSpace + 1).length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));