/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let odd = 0, even = 0;
    position.forEach((x) => (x % 2 ? (odd += 1) : (even += 1)));
    return Math.min(odd, even);    
  };
  
  