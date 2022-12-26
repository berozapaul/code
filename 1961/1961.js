/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 var isPrefixString = function(s, w) {
    let wordStr = '';
    for (let i = 0; i < w.length; i++) {
        wordStr += w[i];
        if (wordStr === s) {
            return true;
        } else if (wordStr.length > s.length) {
            break;
        }
    }   
    return false;     
};