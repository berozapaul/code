/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    const dsum = (n) => {
        if (n === 0) {
            return 0;
        }
        
        return n % 10 + dsum(Math.floor(n / 10))
    }
    
    let cnt = 0;
    for (let i = 2; i <= num; i++) {
        const sum = dsum(i);
        if (~sum & 1) {
            cnt++;
        }
    }    
    return cnt;
};