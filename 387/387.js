/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
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
    
    const map = getFreqMap(s);

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }  
    return -1;
};