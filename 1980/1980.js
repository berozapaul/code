/**
 * @param {string[]} nums
 * @return {string}
 */
 var findDifferentBinaryString = function(nums) {
    let out = '';
    for (let i = 0; i < nums.length; i++) {  
        const item = nums[i];
        out += item[i] === '0' ? '1' : '0';
    } 
    return out;   
};