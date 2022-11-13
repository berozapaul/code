/**
 * @param {string} s
 * @return {number}
 */
 var numSplits = function(s) {
    const set = new Set();
    const leftSizes = [], rightSizes = [];
    
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
        leftSizes.push(set.size);
    }
    
    set.clear();
    for (let i = s.length-1; i >= 0; i--) {
        set.add(s[i]);
        rightSizes[i] = set.size;
    }
    
    let out = 0;
    for (let i = 1; i < s.length; i++) {
        if (leftSizes[i-1] === rightSizes[i])
            out++;
    }
    return out;
};