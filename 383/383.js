/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
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

    const ransomMap = getFreqMap(ransomNote);  
    const magazineMap = getFreqMap(magazine); 
    let match = true; 
    for(const[letter, freq] of ransomMap.entries()){
        const magFreq = magazineMap.get(letter);
        if (freq > magFreq || !magFreq) {
            match = false; 
            break;
        }
    }
    return match;
};