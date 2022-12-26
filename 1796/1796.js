/**
 * @param {string} s
 * @return {number}
 */
 var secondHighest = function(s) {
    let firstLarge = -1, secondLarge = -1;
    for (let i = 0; i < s.length; i++) {
       const num = +s[i];
       if (!Number.isInteger(num)) {
           continue;
       }
       
       if (num > firstLarge) {
           secondLarge = firstLarge;
           firstLarge = num;
       } else if (num !== firstLarge && num > secondLarge) {
           secondLarge = num;
       }
    }    
    return secondLarge;
};