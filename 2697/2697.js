/**
 * @param {string} s
 * @return {string}
 */
const makeSmallestPalindrome = function(s) {
    const len = s.length;
    const loopCnt = Math.floor(len/2);
    const letterArr = s.split('');
    for( let i = 0; i < loopCnt; i++) {
        const leftCode = s[i].charCodeAt();
        const rightCode = s.at(-(i+1)).charCodeAt();
        if (leftCode > rightCode) {
            letterArr[i] = s.at(-(i+1));
        } else {
            letterArr[len - 1 - i] = s[i];
        }
    }
    return letterArr.join('');
};