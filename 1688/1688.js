/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
  
    const re = n % 2; 
    const divi = Math.floor(n / 2);
    
    if (n < 2) {
        return 0;
    }
    
    return divi + numberOfMatches( divi + re);
};