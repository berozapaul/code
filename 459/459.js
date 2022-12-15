/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    const str = s.slice(1) + s.slice(0, -1);
    return str.indexOf( s ) !== -1;
};