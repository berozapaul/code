/**
 * @param {string} num
 * @return {string}
 */
 var largestGoodInteger = function(num) {
    let str = '', out = '';
    for (let i = 0; i < num.length; i++) {
        str += num[i];
        if (num[i] !== num[i+1]) {
            if (str.length >= 3) {
                str = str.slice(0,3);
                if (+out <= +str) {
                    out = str;
                }
            }

            str = '';
        }
    }  
    return out;  
};