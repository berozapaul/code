/**
 * @param {string} time
 * @return {number}
 */
 var countTime = function(time) {
    const arr = time.split(':');
    let hourStr = arr[0];
    let minuteStr = arr[1];
    let cnt = 1;
    
    if (minuteStr[0] === '?') {
        cnt *= 6;
    }

    if (minuteStr[1] === '?') {
        cnt *= 10;
    }

    if (hourStr == '??') {
        cnt *= 24;
    } else {
        if (hourStr[0] === '?') {
            cnt *= +hourStr[1] > 3 ? 2 : 3
        }    

        if (hourStr[1] === '?') {
            cnt *= +hourStr[0] > 1 ? 4 : 10;
        }     
    }


    return cnt;     
};