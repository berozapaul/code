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


  /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const out = []; 
  const permute = (item, used) => {
      if (item.length === nums.length) {
          out.push(Array.from(item));
          return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (used[i]) {
              continue; 
          }

          item.push(nums[i]);
          used[i] = true;
          permute(item, used);

          used[i] = false;
          item.pop();
      }       
  };

  permute([], Array(nums.length).fill(false));
  return out;
};