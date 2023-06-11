/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = function(s1, s2) {
    const str1 = s1.split('').sort().join('');
    const str2 = s2.split('').sort().join('');

    const isBreakable = (a, b) => {
        for(let i = 0; i < a.length; i++) {
            if (b[i] < a[i]) {
                return false;
            }
        }
        return true;
    }

    return isBreakable(str1, str2) || isBreakable(str2, str1);
};