/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
    const uniqueSet = new Set(nums);
    return uniqueSet.has(0) ? uniqueSet.size - 1 : uniqueSet.size;
};