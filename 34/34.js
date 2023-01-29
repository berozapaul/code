/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    const binarySearch = (start, end) => {
        if (start > end) {
            return [-1, -1];
        }

        const mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            let first = last = mid;
            while(nums[first - 1] === target) {
                first--;
            }
            while(nums[last + 1] === target) {
                last++;
            }
            return [first, last];
        }
        else if (nums[mid] < target) {
            return binarySearch(mid + 1, end);
        } 
        else if (nums[mid] > target) {
            return binarySearch(0, mid - 1);
        } 
    };

    return binarySearch(0, nums.length - 1);
};