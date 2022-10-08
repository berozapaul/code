/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
    for(let i = 0; i < nums.length;i++) {
        const leftSum = nums.slice(0, i).reduce((p, c) => p + c, 0);
        const rightSum = nums.slice(i+1).reduce((p, c) => p + c, 0);
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};