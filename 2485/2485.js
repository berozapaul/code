/**
 * @param {number} n
 * @return {number}
 */
 var pivotInteger = function(n) {
    for(let i = n; i > 0; i--) {
        let segment1 = 0, segment2 = 0;
        for(let j = 1; j <= i; j++) {
            segment1 += j;
        }
        for(let k = i; k <= n; k++) {
            segment2 += k;
        }
        if (segment1 === segment2) {
            return i;
        }
    }    
    return - 1;
};