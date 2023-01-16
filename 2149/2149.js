/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    const positives = nums.filter(item => item > 0);
    const negatives = nums.filter(item => item < 0);
    const out = [];

    const loopCnt = nums.length / 2;
    for (let i = 0; i < loopCnt; i++) {  
       out.push(positives[i], negatives[i]);
    }  
    return out;  
};