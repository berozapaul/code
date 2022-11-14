/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const out = [];
    const backtrack = (arr, tmp) => {
      if (arr.length === 0) {
        out.push(tmp);
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        backtrack([...arr.slice(0, i), ...arr.slice(i + 1)], [...tmp, arr[i]]);
      }
    }
    backtrack(nums, []);
    
    return out;
  };