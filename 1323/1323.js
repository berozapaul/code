/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    let numStr = `${num}`;
    let str = '';
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '6') {
            str = `${str}9${numStr.slice(i+1)}`
            break;
        } else {
            str += numStr[i];
        }
    }
    
    return +str;
};