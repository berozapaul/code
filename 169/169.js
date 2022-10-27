/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
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
    
    const freqMap = getFreqMap(nums);
    const freq = nums.length / 2;
    for(const [key, value] of freqMap.entries()) {
        if (value >= freq) {
            return key;
        }
    }
};