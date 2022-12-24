/**
 * @param {number[]} arr
 * @return {number}
 */
 var findSpecialInteger = function(arr) {
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

    const freqMap = getFreqMap(arr);
    const arrLen = arr.length;

    let maxPercent = -1, result = 0;
    for(const [key, val] of freqMap)  {
         const percent = ( val / arrLen ) * 100;
         if ( percent >= 25 && percent > maxPercent) {
             maxPercent = percent;
             result = key;
         }
    } 
    return result; 
};