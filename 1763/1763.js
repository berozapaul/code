/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    const isUpperCase = (c) => c === c.toUpperCase();
    const isLowerCase = (c) => c === c.toLowerCase();

    const isNiceStr = (str) => {
        strSet = new Set(str);
        for(let c of strSet) {
            if (isUpperCase(c) && !strSet.has(c.toLowerCase())) {
                return false;
            }
            if (isLowerCase(c) && !strSet.has(c.toUpperCase())) {
                return false;
            }            
        }
        return true;
    };
    let out = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substr = s.slice(i, j);
            if (isNiceStr(substr)) {
                out = substr.length > out.length ? substr : out;
            }
        }
    } 
    return out;
};