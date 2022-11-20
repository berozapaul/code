/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
    const out = [];
    for(let i = 0; i < operations.length; i++) {
        if (Number(operations[i])) {
            out.push(+operations[i]);
        } else if (operations[i] === 'C') {
            out.pop();
        } else if (operations[i] === 'D') {
            out.push(out.slice(-1) * 2);
        } else if (operations[i] === '+') {
            const tmp = out.slice(-2);
            out.push(tmp[0] + tmp[1]);
        }
        
    }  

    return out.reduce((a, b) => a + b, 0);
};