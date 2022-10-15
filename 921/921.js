/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else if (!open) {
            close++;
        } else {
            open--;
        }
    }
    return open + close;
};