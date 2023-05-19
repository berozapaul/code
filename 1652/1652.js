/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
    const len = code.length;
    const out = new Array(len).fill(0)
    const sign = k > 0 ? 1 : -1;
    const limit = k > 0 ? len : -1;

    for(let i = 0; i < len; i++) {
        let count = 0, j = i + sign;
        while(k > 0 ? count < k : count > k) {
            if (j === limit) {
                j = k > 0 ? 0 : len - 1;
            }
            out[i] += code[j];
            count = count + sign;
            j = j + sign;
        }
    }
    return out;
};