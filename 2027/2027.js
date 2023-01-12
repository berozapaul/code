/**
 * @param {string} s
 * @return {number}
 */
 var minimumMoves = function(s) {
    let move = 0;
    for (let i = 0; i < s.length; i++) {  
        if (s[i] === "X") {
            move++;
            i += 2;
        }
    }   
    return move; 
};