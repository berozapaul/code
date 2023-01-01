/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
    let idx = 0; 
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === name[idx]) {
            idx++;
        } else if (typed[i] === typed[i -1]) {
            continue;
        } else {
            return false; 
        }
    }    
    return idx === name.length;
};