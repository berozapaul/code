/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
    for (let i = 1; i < s.length; i++) {
        const shiftStr = `${s.slice(i)}${s.slice(0, i)}`;
        if (shiftStr === goal) {
           return true; 
        }        
    }    
    return false;
};