/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const st = Math.sqrt(i ** 2 + j ** 2);
            if (Number.isInteger(st) && st <= n) {
                cnt++;
            }
        }
    } 
    return cnt;
};