/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    let even = 0, odd = 1, out = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0 ) {
            out[even] = nums[i]; 
            even += 2;
        } else {
            out[odd] = nums[i]; 
            odd += 2;
        }
    }
    return out;
};