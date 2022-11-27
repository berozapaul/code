/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
 var evaluate = function(s, knowledge) {
    const map = new Map(knowledge);
    let out = '', key = null;
    for(const c of s) {
        if (c === '(') {
           key = '';
        } else if (c === ')') {
            const mappedValue = map.get(key);
            out += mappedValue || '?'; 
            key = null;
        } else {
            (key === null) ? out += c : key += c;
        }
    }    
    return out;
};