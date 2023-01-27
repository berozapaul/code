/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    return findPosition(nums, 0, nums.length - 1, target);
};

const findPosition = (arr, start, end, target) => {
    if (start > end) return start; 

    const mid = Math.floor((end + start) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    else if (arr[mid] < target) {
        return findPosition(arr, mid + 1, end, target);
    }
    else if (arr[mid] > target) {
        return findPosition(arr, start, mid - 1,  target);
    }
}