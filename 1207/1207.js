/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    const getFreqMap = (arr) => {
        const map = new Map();
        for(let i = 0; i < arr.length; i++) {
           map.has(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1);
        }
        return map;
    }
    
    const freq = getFreqMap(arr);
    const freqArr = [...freq.values()];
    const uniqueSet = new Set(freqArr);
    
    return freqArr.length === uniqueSet.size;
};