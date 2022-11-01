/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
    function bitCount (n) {
      return n.toString(2).match(/1/g).length;
    }  
    
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }    
    
    const map = new Map();
    for (let i = left; i <= right; i++) {
        map.set(i, bitCount(i));
    }    
    
    let cnt = 0;
    for(const value of map.values()) {
        if (isPrime(value)) {
            cnt++;
        }
    }
    return cnt;
};