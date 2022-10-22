/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
    const baseSix = (num) => {
        if ( num < 1) {
            return '';
        }
        
        const re = num % k; 
        return   baseSix(Math.floor( num / k)) + `${re}`;
    }
    
    const sixBaseNumStr = baseSix(n);
    let total = 0;
    for (let i = 0; i < sixBaseNumStr.length; i++) {
        total += +sixBaseNumStr[i];
    }
    
    return total;
};