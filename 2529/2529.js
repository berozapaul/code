/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumCount = function(nums) {
    let negative = 0, positive = 0;
    for (let i = 0; i < nums.length; i++) {  
        if (nums[i] < 0) {
            negative++
        } else if (nums[i] > 0) {
            positive++;
        }
    } 
    return Math.max(negative, positive);
};