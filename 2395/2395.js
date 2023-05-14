/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const setObj = new Set();
    for (let i = 0; i < nums.length; i++) {
        const sum = nums[i] + nums[i+1];
        if(setObj.has(sum)) {
            return true;
        }
        setObj.add(sum);
    }
    return false;
};