/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    let oneCnt = -1, zeroCnt = -1, lastDigit = -1, cnt = 0;
    for (let i = 0; i < s.length; i++) {
        cnt++;
        if (s[i] === s[i + 1]) {
            continue;
        }

        if (s[i] === '0' && cnt > zeroCnt) {
            zeroCnt = cnt;
        } else if (cnt > oneCnt) {
            oneCnt = cnt;
        }


        cnt  = 0;
    }    
    return oneCnt > zeroCnt;
};