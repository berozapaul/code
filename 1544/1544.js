/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    const isUpperCase = (c) => c === c.toUpperCase();
    const isLowerCase = (c) => c === c.toLowerCase();
    
    const stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        const last = stack.pop();
        if ((isLowerCase(s[i]) && s[i].toUpperCase() === last) || (isUpperCase(s[i]) && s[i].toLowerCase() === last)) {
            continue;
        }
        stack.push(last);
        stack.push(s[i]);
    }
    return stack.join('');    
};