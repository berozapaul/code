/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    
    const reverse = (n) => {
        if (n < 1) {
            return '';
        }
        
        return n % 10 + reverse( Math.floor(n / 10));
    }
    
    const rev1 = reverse(num);
    const rev2 = reverse(+rev1);
    return +rev2 === num
};