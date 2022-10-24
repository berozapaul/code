/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    
    const getOneDigit = (n) => {
        const str = `${n}`;
        if (str.length < 2) {
            return n
        }
        
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += +str[i];
        }
        
        return getOneDigit(sum);
    }
    
    return getOneDigit(num)
};