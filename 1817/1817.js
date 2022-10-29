/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
 var findingUsersActiveMinutes = function(logs, k) {
    const map = new Map();
    logs.forEach(l => {     
        if (map.has(l[0])) {
            const setObj = map.get(l[0]);
            setObj.add(l[1]);
        } else {
            map.set(l[0], new Set([l[1]]));
        }
    })
    const out = new Array(k).fill(0);
    
    for (const [key, set] of map.entries()) {
        const pos = set.size;
        out[pos - 1] += 1;
    }
    return out;
};