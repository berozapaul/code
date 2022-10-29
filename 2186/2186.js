/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var minSteps = function(s, t) {
    let source = Array(26).fill(0), target = Array(26).fill(0);
    for (let char of s) source[char.charCodeAt() - 97]++;
    for (let char of t) target[char.charCodeAt() - 97]++;

    let ans = 0; 
    for (let i = 0; i < 26; i++) {
      ans += Math.abs(source[i] - target[i]);
    }
    return ans;    
};