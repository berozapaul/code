/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const arr = s.trim().split(' ').filter(word => word);
    return arr.reverse().join(' ');
};