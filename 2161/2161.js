/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
 var pivotArray = function(nums, pivot) {
    const left = [];
    const right = [];
    const mid = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > pivot) {
           right.push(nums[i])
        } else if (nums[i] === pivot) {
            mid.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }
    return left.concat(mid).concat(right);
    
};