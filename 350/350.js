/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {

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
    
    const freq1 = getFreqMap(nums1);
    const freq2 = getFreqMap(nums2);
    
    const map = new Map();
    for(const key of freq1.keys()) {
        if (freq1.has(key) && freq2.has(key))
        map.set(key, Math.min(freq1.get(key), freq2.get(key)));
    }
    
    const output = [];
    for(const [key, value] of map.entries()) {
        for (let i = 0; i < value; i++) {
            output.push(key);
        }
    }    
    return output;
};