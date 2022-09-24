// Approach #1
/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    const arr = s.split(" ");
    let lastNum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        
        if (num) {
            if (num <= lastNum) {
                return false;
            } else {
                lastNum = num;
            }
        }
    }
    return true;
};