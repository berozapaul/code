/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
    const out = [];
    const map = new Map();
      
    for (let i = 0; i < groupSizes.length; i++) {
      const groupSize = groupSizes[i];
      
      const groupList = map.get(groupSize);
      (groupList) ? groupList.push(i) : map.set(groupSize, [i]);
      
      if (map.get(groupSize).length === groupSize) {
        out.push(map.get(groupSize));
        map.delete(groupSize);
      }
    }
      
    return out;  
  };