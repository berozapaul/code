/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    const arr = [first];
    encoded.forEach(item => arr.push(item ^ arr.slice(-1)[0]))
    return arr;
};