/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    const obj = {
        0: 0, 
        1: 1, 
        2: 1
    }
    const tibo = (num) => {
        if (obj[num] !== undefined) {
            return obj[num];
        }
        
        return obj[num] = tibo(num - 1) + tibo(num - 2) + tibo(num - 3);
    }
    
    return tibo(n);
};