/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    const map = new Map();
    const arrSize = nums.length;
    
    for(let i = 0; i < arrSize; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    const freq = arrSize / 2;
    
    for(const[key, value] of map.entries()) {
        if (value === freq) return key; 
    }
    return null;
};