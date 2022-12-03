/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
    const stack = [[]];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push([]);    
        else if (s[i] === ')') {
            const cur = stack.pop().reverse();
            stack[stack.length-1].push(...cur);
        }
        else stack[stack.length-1].push(s[i]);   
    }
    return stack[0].join("");
};