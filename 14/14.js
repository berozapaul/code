/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    const firstItem = strs[0];
    let prefix = '';
    for (let i = 0; i < firstItem.length; i++) {
        prefix += firstItem[i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].indexOf(prefix) !== 0) {
                return prefix.slice(0,-1);
            }
        }
        
    }

    return prefix;
};