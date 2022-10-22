/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const n = nums.length; 
    const sum = (n * ( n + 1) )  / 2
    
    let lessSum = 0;
    for (let i = 0; i < nums.length; i++) {
       lessSum += nums[i]
    }
    
    return sum - lessSum;
};