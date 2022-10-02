/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);
    
    const map = new Map();
    const getFreq = (s) => {
        s.forEach(key => {
            if(map.has(key)) {
                map.set(key, map.get(key) + 1)
            } else {
                map.set(key, 1);
            }
        })
    }
    
    getFreq(set1);
    getFreq(set2);
    getFreq(set3);
    const output = [];
    for(const [key, value] of map.entries()){
        if (value >=2) {
            output.push(key)
        }
    }
    return output;
};