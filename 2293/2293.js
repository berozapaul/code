/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    const out = []
    for (let i = 0; i < (n / 2); i++) {
        out[i] = i & 1 ? Math.max(nums[2*i], nums[2*i+1]) : Math.min(nums[2*i], nums[2*i+1]);
    }
    return minMaxGame(out);
};