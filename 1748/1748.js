// Approach #1
/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const map = new Map();
    let output = 0;
    for(let i =0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    for (const [key, value] of map.entries()) {
        if (value === 1) {
            output += key;
        }
    }
    return output;
};