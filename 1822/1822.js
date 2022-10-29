/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let out = 1;
    for (let i = 0; i < nums.length; i++) {
       out *= nums[i]
    }    
    
    if ( out < 0) {
        return -1;
    } else if (out > 0) {
        return 1
    }
    return 0;
};