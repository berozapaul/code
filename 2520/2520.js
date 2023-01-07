/**
 * @param {number} num
 * @return {number}
 */
 var countDigits = function(num) {
    const numStr = `${num}`;
    let cnt = 0;
    for (let i = 0; i < numStr.length; i++) {  
        if(num % +numStr[i] === 0) cnt++;
    }    
    return cnt;
};