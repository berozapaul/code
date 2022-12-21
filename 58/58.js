/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const wordArr = s.trim().split(' ');
    const lastWord = wordArr.slice(-1);
    return lastWord[0].length;
};