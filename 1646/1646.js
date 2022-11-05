/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    const out = [0, 1];
    for (let i = 2; i <= n; i++) {
        const idx = Math.floor(i / 2);
        if (i % 2 === 0) {
            out[idx * 2] = out[idx];
        } else {
            out[idx * 2 + 1] = out[idx] + out[idx + 1];
        }
    }  
    return n === 0 ? 0 : Math.max(...out); 
};