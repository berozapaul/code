/**
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let max = -1, oneCnt = s.split('1').length - 1, zeroCnt = 0;
    for (let i = 0; i < s.length - 1; i++) {  
        s[i] === '0' ? zeroCnt++ : oneCnt--;
        max = Math.max(zeroCnt + oneCnt, max);
    }    
    return max;
};