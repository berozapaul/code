/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    nums2.forEach(item => set1.has(item) ? set1.delete(item) : '');
    nums1.forEach(item => set2.has(item) ? set2.delete(item) : '');
    
    return [[...set1], [...set2]]
};