/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    const out = [];
    for (let i = left; i <= right; i++) {
        let numStr = `${i}`;
        let selfDivi = true;
        for (let j = 0; j < numStr.length; j++) {
            if (i % +numStr[j] !== 0) {
                selfDivi = false;
                break;
            }
        }
        if (selfDivi) {
            out.push(i);
        }
    }
    return out;
};