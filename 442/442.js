/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const out = []; 
    for(let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if(nums[idx] < 0) {
            out.push(idx + 1);
        }
        nums[idx] *= -1;
    }
    return out;  
};