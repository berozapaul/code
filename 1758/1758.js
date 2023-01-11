/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
    let opr = 0;
    for (let i = 0; i < s.length; i++) {  
        if (`${i % 2}` !== s[i]) {
           opr++;
        }
    }
    return Math.min(opr, s.length - opr);
};