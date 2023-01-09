/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
    const hexDigit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    if (num === 0) {
        return '0';
    }
 
    if (num < 0) {
        num += Math.pow(2,32);
    }
 
    let out = '';
    while(num > 0) {
        const rem = num % 16;
        out = hexDigit[rem] + out;
        num = Math.floor(num / 16);
    }
    return out;
 };