/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var minSteps = function(s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    let cnt = 0;
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            const diff = map.get(t[i]) - 1; 
            (map.get(t[i]) - 1) === 0 ? map.delete(t[i]) : map.set(t[i], diff);
            
        } else {
            cnt++;
        }
    }    
    return cnt;
};