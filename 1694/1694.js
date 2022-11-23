/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
    let digits = '';
    for (let i = 0; i < number.length; i++) {
        if(number[i] === ' ' || number[i] === '-') {
            continue;
        }
        digits += number[i];
    }  

    const out = [];
    const format = (str) => {
        const len = str.length;
        if (len <= 4) {
            if (len === 4) {
                out.push(str.slice(0, 2));
                out.push(str.slice(2));
            } else {
                out.push(str);
            }
            return;
        }
 
        out.push(str.slice(0, 3));
        format(str.slice(3));
    }  
    format(digits);
    return out.join('-');
};