/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let out = 1, loop = 0;;
    while (out < n) {
        out = Math.pow(2, loop);
        loop++;
    }
    return out === n;
};