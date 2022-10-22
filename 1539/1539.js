/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    const set = new Set(arr);
    
    let missingCnt = 0;
    for (let i = 1; i <= 2000 ; i++) {
       if (!set.has(i)) {
           missingCnt++;
           
           if (missingCnt === k) {
               return i;
           }
       }
    }  
};