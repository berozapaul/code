/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
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
    
    const freq = getFreqMap(arr);
    let out = -1;
    for (const [key, value] of freq.entries()) {
        if (key === value && value > out) {
            out = value;
        } 
    }
    return out;
};