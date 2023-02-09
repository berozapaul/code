/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const trimStr = (str) => {
        const stack = [];
        for (let i = 0; i < str.length; i++) {  
            (str[i] === '#') ? stack.pop() : stack.push(str[i]);
        } 
        return stack.join('');
    }
    return trimStr(s) === trimStr(t);
};