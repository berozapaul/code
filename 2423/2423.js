/**
 * @param {string} word
 * @return {boolean}
 */
 var equalFrequency = function(word) {
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
    const freqMap = getFreqMap(word);
    let out = false;
    freqMap.forEach((value, key) => {
        const newMap = new Map(freqMap);
        if (value === 1) {
            newMap.delete(key)
        } else {
            newMap.set(key, newMap.get(key) - 1);
        }
        if (new Set([...newMap.values()]).size === 1) out = true;
    })
    return out;
};









