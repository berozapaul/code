/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxK = function(nums) {
    const getFreqMap = (arr) => {
       const map = new Map();
       for(let i = 0; i < arr.length; i++) {
           const key = Math.abs(arr[i]);
           if (map.has(key)) {
               map.set(key, map.get(key) + 1);
           } else {
               map.set(key, 1);
           }
       }
       return map;
   }   
   const freqMap = getFreqMap(nums);
   const out = [-1];
   for(const [key, value] of freqMap) {
       if (value >= 2 && (nums.includes(key) && nums.includes(-key))) {
           out.push(key);
       }
   }
   return Math.max(...out);
};