/**
 * @param {number[]} nums
 * @return {number}
 */
 var unequalTriplets = function(nums) {
    const hashMap = {};
    for(const item of nums) {
        hashMap[item] = hashMap[item] ? hashMap[item] + 1 : 1;
    }
 
    let left = 0, right = nums.length, out = 0;
    for (const freq of Object.values(hashMap)) {
        right -= freq;
        out += left * freq * right;
        left += freq;
    }
    return out;
 };
 
 