/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const map = new Map();
    const out = [];

    for(let i = 0; i < nums.length; i++) {
        const index = map.get(nums[i]) || 0;
        const tmpArr = out[index] || [];

        tmpArr.push(nums[i]);
        out[index] = tmpArr;
        map.set(nums[i], index + 1);
    }
    return out;
};