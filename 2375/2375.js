/**
 * @param {string} pattern
 * @return {string}
 */
 var smallestNumber = function(pattern) {
    const out = [];
    let stack = [];
    const len = pattern.length;

    for (let i = 0; i <= len; i++) {  
        stack.push(i + 1);
        if (pattern[i] == 'I' || i == len) {
            out.push(...stack.reverse());
            stack = [];
        }
    }    
    return out.join('');
};