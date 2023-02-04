/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return newS === newS.split("").reverse().join("");
};