/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
    
    if (~n & 1) return n;
    
    const gcd = (m, n) => {
        const re = m % n;
        if (re === 0) {
            return n;
        }
        return gcd(n, re);
    }
    
    return (2 * n) / gcd(n, 2);
    
};