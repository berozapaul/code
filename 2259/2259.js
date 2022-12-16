/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigit = function(number, digit) {
    let max = -1;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            const generatedNum = `${number.slice(0, i)}${number.slice(i+1)}`;
            if (generatedNum > max) {
                max = generatedNum; 
            }
        }
    } 
    return `${max}`;   
};