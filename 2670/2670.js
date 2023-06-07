/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distinctDifferenceArray = function(nums) {
    const out = [];
    for(let i = 0; i < nums.length; i ++) {
        const first = new Set(nums.slice(0, i+1));
        const last = new Set(nums.slice(i+1));
        out.push(first.size - last.size);
    }
    return out;
};

