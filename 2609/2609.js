/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(str) {
    let out = 0, counter = 0, stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            stack.push(str[i])
            continue;
        }

        if (stack.length && str[i] === '1') {
            counter += 2;
            stack.pop();
            out = Math.max(counter, out);
        }

        if (str[i + 1] === '0') {
            counter = 0;
            stack = [];
        }
    }
    return out;
};