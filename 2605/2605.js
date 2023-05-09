/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    const intersect = nums2.map((x) => nums1.filter((y) => y == x)).flat();
    if (intersect.length > 0) return Math.min(...intersect);

    let min1 = Math.min(...nums1), min2 = Math.min(...nums2);
    return min1 < min2 ? `${min1}${min2}` : `${min2}${min1}`;
};