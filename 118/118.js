/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const out = [[1]];

    for (let i = 1; i < numRows; i++) {
        const lastRow = out[out.length - 1];
        const left = [0, ...lastRow];
        const right = [...lastRow, 0]
        const row = left.map((val, i) => val + right[i]);
        out.push(row);
    }   
    return out;
};