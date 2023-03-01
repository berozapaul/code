/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(arr) {
    const max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === max[0] || arr[i] === max[1] || arr[i] === max[2]) continue;
  
      if (arr[i] > max[0]) {
        max[2] = max[1];
        max[1] = max[0];
        max[0] = arr[i];
      } else if (arr[i] > max[1]) {
        max[2] = max[1];
        max[1] = arr[i];
      } else if (arr[i] > max[2]) {
        max[2] = arr[i];
      }
    }
    return max[2] === -Infinity ? max[0] : max[2];    
  };