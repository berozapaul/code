/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    const loopCnt = Math.floor(n / 7);
    const rem = n % 7;
    let out = 0;
    
    for (let i = 1; i <= loopCnt; i++) {
        out += 7 * ( i + 3);
    }  

    for (let i = loopCnt + 1; i <= rem + loopCnt; i++) {
        out += i;
    }     

    return out;
};