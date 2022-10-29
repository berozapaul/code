/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    const map = new Map();
    let cnt = 0;
    for (let i = 0; i < rings.length - 1; i = i + 2) {
        if (map.has(rings[i+1])) {
            const set = map.get(rings[i+1]);
            set.add(rings[i]);
        } else {
            map.set(rings[i+1], new Set(rings[i]))
        }
    }  
    
    for(const [key, set] of map.entries()) {
        if (set.size === 3) {
            cnt++;
        }
    }
    
    return cnt;
};