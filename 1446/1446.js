/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let cnt = 0;
    let cur = '';
    let maxCnt = -1;
    for (let i = 0; i < s.length; i++) {
       if (!cur) {
           cur = s[i];
           cnt = 1;
       } else if (cur === s[i]) {
           cnt++;
       } else if (cur !== s[i]) {
           cur = s[i];
           cnt = 1;
       } 

       maxCnt = Math.max(maxCnt, cnt);
    }
    return maxCnt;
};