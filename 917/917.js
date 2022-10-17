/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    const isLetter = (l) => {
        return l.toLowerCase() !== l.toUpperCase();
    }
    const arr = [];
    let str = '', out = '';
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            arr.push(s[i]);
            str += '|';
        } else {
            str += s[i];
        }
    } 
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '|') {
            out += arr.pop();
        } else {
            out += str[i];
        }
    } 

    return out;
};