// Approach #1
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    let max =0, min = 1001, output = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    
    while(1) {
        const rem = max % min;
        if (rem === 0) {
            output = min;
            break;
        }
        max = min;
        min = rem;
    }
    return output;
};