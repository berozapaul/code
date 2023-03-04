/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function(nums) {
    let closestNum = nums[0];
    for(let i = 1; i < nums.length; i++){
        const num = Math.abs(nums[i]);
        const lastClosest = Math.abs(closestNum);
        if (num < lastClosest || (num === lastClosest && nums[i] > 0)){
            closestNum = nums[i];
        }
    }
    return closestNum;
};