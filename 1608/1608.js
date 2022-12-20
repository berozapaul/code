/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    for (let i = 1; i <= nums.length; i++) {
        const arr = nums.filter(a => a >= i);
        if (arr.length === i) {
            return i;
        }
    }   
    return -1;
};