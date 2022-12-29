/**
 * @param {string[]} strs
 * @return {number}
 */
 var maximumValue = function(strs) {
    for (let i = 0; i < strs.length; i++) {
       const item = +strs[i];
       strs[i] = item >= 0 ? item : strs[i].length ;
    }    
    return Math.max(...strs);
};