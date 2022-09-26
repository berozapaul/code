// Approach #1
/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let cnt = 0;
    for(let i = 0; i < nums.length; i++) {
        const diff = nums[i + 1] - nums[i];
        if( diff === 0) {
            cnt++;
            nums[i + 1] = nums[i + 1] + 1;
            continue;
        } else if(diff < 0) {
            const steps = nums[i] - nums[i +1] + 1;
            nums[i + 1] = nums[i +1] + steps;
            cnt = cnt + steps;
            continue;
        } 
    }
    return cnt;
};