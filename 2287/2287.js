/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
 var rearrangeCharacters = function(s, target) {
    const getFreqMap = (arr) => {
        const map = new Map();
        for(let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                map.set(arr[i], map.get(arr[i]) + 1);
            } else {
                map.set(arr[i], 1);
            }
        }
        return map;
    }
    
    const freqS = getFreqMap(s);
    const freqT = getFreqMap(target);
    const set = new Set(target);
    

    let cnt = Infinity;
    for(const k of set) {
        const val = Math.floor(freqS.get(k) / freqT.get(k)) || 0;
        if (val <= cnt) {
            cnt = val;
        }        
    }
    return cnt;
};