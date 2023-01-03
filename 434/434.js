/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && (s[i+1] === ' ' || !s[i+1])) {
            cnt++;
        } else {
           continue;
        }
    }
    return cnt;
};


var countSegments = function(s) {
    return s.split(" ").filter(x => x !== "").length;
};