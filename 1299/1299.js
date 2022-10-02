/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    const out = [];
    let large = -1
    for(let i = arr.length - 1; i >= 0; i--) {
        out[i] = large;
        large = Math.max(arr[i], large);
    }
    return out;
};