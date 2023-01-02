/**
 * @param {string} word
 * @return {number}
 */
 var numDifferentIntegers = function(s) {
    let num = '';
    const set = new Set();
    const numSet = new Set('1234567890');
    for (let i = 0; i < s.length; i++) {
        if(numSet.has(s[i])) {
           num += s[i];
        }
        if (num && !numSet.has(s[i+1])) {
            set.add(num.replace(/^0+/, ''));
            num = '';
        }
    }  
    return set.size;
};