/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const mapObj = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    for(let i = 0; i < s.length; i++){
        if (mapObj.has(s[i])) {
            if(stack.length > 0 && stack.at(-1) === mapObj.get(s[i])) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length == 0;
};