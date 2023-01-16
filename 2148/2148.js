/**
 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
    nums.sort((a, b) => a - b);
    const largeIndex = nums.indexOf(nums.slice(-1)[0]);
    const smallIndex = nums.lastIndexOf(nums[0]);
    return nums.slice(smallIndex + 1, largeIndex).length;
};