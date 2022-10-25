/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {

    const getFreqMap = (arr) => {
        const map = new Map();
        for(let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                map.set(arr[i], map.get(arr[i]) + 1);
            } else {
                map.set(arr[i], 1);
            }
        }
        return map;
    }
    
    const map = getFreqMap(nums);
    
    const out = [];
    for (let i = 1; i <= nums.length ; i++) {
        if (!map.has(i)) {
            out.push(i);
        }
    } 
    
    return out;
};