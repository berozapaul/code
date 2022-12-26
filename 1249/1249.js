/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    const out = [...s], open = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
           open.push(i);
        } else if (s[i] === ')') {
           open.length > 0 ? open.pop() : out[i] = '';
        }
    } 
    open.forEach(idx => out[idx] = '');
    return out.join('');
};