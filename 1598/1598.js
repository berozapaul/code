/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let cnt = 0;
    const pd = '../', sd = './';
    for(let i =0; i < logs.length; i++) {
        if (logs[i] === pd) {
            if ( cnt > 0) cnt--;
        } else if(logs[i] === sd) {
            continue; 
        } else {
            cnt++;
        }
    }
    return cnt;
};