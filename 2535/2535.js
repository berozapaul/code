/**
 * @param {number[]} nums
 * @return {number}
 */
 var differenceOfSum = function(nums) {
    let eSum = 0, dSum = 0;
    for (let i = 0; i < nums.length; i++) {  
       eSum += nums[i];
       const str = `${nums[i]}`;
       for (let j = 0; j < str.length; j++) {
           dSum += +str[j];
       }
    }  
    return Math.abs(eSum-dSum);  
};