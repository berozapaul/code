/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
    const out = [];
    let group = '';
    for(let i =0; i < s.length; i++) {
        group += s[i];
        if( (i+1) % k === 0) {
            out.push(group);
            group = '';
        }
    }
    if (group.length) {
        out.push(group.concat(fill.repeat(k - group.length)))
    }
    return out;
};