/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
    let out = '';
    const getChar = (arr) => {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < letters.length; i++) {  
            if (arr.indexOf(letters[i]) < 0) {
                return letters[i];
            }
        }
    }
    for (let i = 0; i < s.length; i++) {  
       if (s[i] === '?') {
           out += getChar([out.slice(-1), s[i+1]]);
       } else {
           out += s[i];
       }
    } 
    return out;   
};