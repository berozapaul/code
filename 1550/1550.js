/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    return arr.map(n => n % 2).join('').includes('111');
};