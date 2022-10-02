/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    const map = new Map();
    
    nums.forEach(num => {
        if (map.has(num)) {
            map.delete(num);
        } else {
            map.set(num, 1);
        }
    });
    
    return map.size === 0
};