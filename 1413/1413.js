/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let min = 1000, sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < min) {
            min = sum;
        }
    }

    return min <= 0 ? Math.abs(min) + 1 : 1;
};