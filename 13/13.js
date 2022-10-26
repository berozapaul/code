/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let dec = 0;
    for (let i = 0; i < s.length; i++) {
        const val = map.get(s[i]);
        (val < map.get(s[i+1])) ? dec-= val : dec+= val;
    }    
    return dec;
};