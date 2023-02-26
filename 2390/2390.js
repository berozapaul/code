/**
 * @param {string} s
 * @return {string}
 */
 var removeStars = function(s) {
    const out = [];
    for (let i = 0; i < s.length; i++) {  
        s[i] == '*' ? out.pop() : out.push(s[i]);
    }    
    return out.join('');
};