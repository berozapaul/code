/**
 * @param {number[]} nums
 * @return {number}
 */
 var countDistinctIntegers = function(nums) {
    const reverse = (s) => {
      let o = '';
      for (let i = s.length - 1; i >= 0; i--)
        o += s[i];
      return o;
    }    
    
    const set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        set.add(+reverse(`${nums[i]}`));
    }    

    return set.size;
};