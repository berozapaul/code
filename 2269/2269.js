/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
 var divisorSubstrings = function(num, k) {
    const str = `${num}`;
    let out = 0;
    for (let i = 0; i <= str.length - k; i++) {
        const divisor = str.slice(i, i + k);
        if (num % divisor === 0) {
            out++;
        }
    }   
    return out;
};