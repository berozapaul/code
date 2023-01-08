/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
 var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
 
    const output = [];
    for(const target of queries) {
        let cnt = 0, sum = 0;
        for (let i = 0; i < nums.length; i++) {  
            sum += nums[i];
            if (sum <= target) {
                cnt++;
            }
        }
        output.push(cnt);
    }
    return output;
 };