/**
 * @param {string} s
 * @return {string}
 */
 var makeFancyString = function(s) {
    let cnt = 0, out = '';
    for (let i = 0; i < s.length; i++) {
        cnt++;
        if (cnt < 3) {
            out += s[i];
        }
        if (s[i] !== s[i+1]) {
            cnt = 0;
        }
    }  
    return out;  
};
