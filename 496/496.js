/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    const out = [];
    for(let i = 0; i < nums1.length; i++) {
        let isMatch = false; 
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                out.push(nums2[j]);
                isMatch = true; 
                break;
            }
        }
        if (!isMatch) {
            out.push(-1);
        }
    }
    return out;
};