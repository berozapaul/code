/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    const getDigitSum = (n) => {
        if (n === 0) {
            return 0;
        } 

        return n % 10 + getDigitSum(Math.floor(n / 10));
    };
    
    const map = new Map();
    for (let i = lowLimit; i <= highLimit; i++) {
        const digiCnt = getDigitSum(i);
        const val = map.get(digiCnt) || 0;
        map.set(digiCnt, val + 1)
    } 

    return Math.max(...map.values());
};