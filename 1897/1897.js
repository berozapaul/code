/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
    const getFreqMap = (item) => {
        const map = new Map();
        for(let i = 0; i < item.length; i++) {
            map.set(item[i], map.has(item[i]) ? map.get(item[i]) + 1 : 1);
        }
        return map;
    }
    if (words.length === 1) {
        return true; 
    }
    const freqMap = getFreqMap(words.join(''));
    for(const freq of freqMap.values()) {
        if (freq % words.length !== 0) {
            return false;
        }
    }
    return true; 
};