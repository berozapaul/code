/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    const out = [];
    for (let i = 0; i <= rowIndex; i++) {
        out.push([1]);
        for (let j = 1; j < i + 1; j++) {
            const prev = out[i -1];
            prev[j] ? out[i].push(prev[j] + prev[j-1]) : out[i].push(1);
        }
    } 
    return out[rowIndex]   
};