/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
    let cnt = 0, tmpStr = s1;
    for (let i = 0; i < s1.length; i++) {
        tmpStr = tmpStr.replace(s2[i],'');
        if(s1[i] !== s2[i]) {
            cnt++;
        }
    }

    if ((cnt === 0 || cnt === 2) && (tmpStr.length === 0)) {
        return true;
    }

    return false;
};