/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var checkAlmostEquivalent = function(word1, word2) {
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
    
    const freqMap1 = getFreqMap(word1);
    const freqMap2 = getFreqMap(word2);
    
    for(const[key, value] of freqMap1) {
        const diff = Math.abs((freqMap1.get(key) || 0) - (freqMap2.get(key) || 0));
        if(diff > 3) {
            return false; 
        }        
    }
    
    for(const[key, value] of freqMap2) {
        const diff = Math.abs((freqMap2.get(key) || 0) - (freqMap1.get(key) || 0));
        if(diff > 3) {
            return false; 
        }        
    }    
    
    return true;
};