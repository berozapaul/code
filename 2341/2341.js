// Approach #1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    let pairCnt = 0, leftoverCnt = 0;
    for(const value of map.values()) {
        const remainder = value % 2;
        const quotient = Math.floor(value / 2);
        pairCnt += quotient;
        
        if ( remainder !== 0) {
            leftoverCnt += remainder;
        } 
    }

    return [pairCnt, leftoverCnt];
};