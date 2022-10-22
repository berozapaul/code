/**
 * @param {string} s
 * @return {number[]}
 */
 const partitionLabels = function(s) {
    let lastOccar = -1; 
    let anchor = 0;
    const out = [];
    
    for (let i = 0; i < s.length; i++) {
        lastOccar = Math.max(s.lastIndexOf(s[i]), lastOccar);
        if (i === lastOccar) {
            out.push(i + 1 - anchor);
            anchor = i + 1;
        }
    }
    return out;
};