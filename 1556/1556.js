/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {
    const numStr = `${n}`;

    let out = '', cnt = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {  
        cnt++;
        out = (i && cnt && cnt % 3 === 0) ? `.${numStr[i]}${out}` : `${numStr[i]}${out}`;
    }    
    return out;
};