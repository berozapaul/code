/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    const charCode = 'Z'.charCodeAt();
    let capsCnt = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].charCodeAt() <= charCode) {
            capsCnt++;
        }
    }    

    if (capsCnt === 0) {
        return true; 
    } else if (capsCnt === word.length) {
        return true; 
    } else if (capsCnt === 1 && word[0].charCodeAt() < charCode) {
        return true; 
    }
    return false; 
};