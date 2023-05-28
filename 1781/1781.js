/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    const len = s.length;
    const freq = new Array(26).fill(0);
    let out = 0;

    for(let i = 0; i < len; i++) {
        freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        for(let j = i + 1; j < len; j++) {
            freq[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            out += minMaxDiff(freq);
        }
        freq.fill(0);
    }

    function minMaxDiff(letterFreq) {
        letterFreq = letterFreq.filter(f => f);
        return Math.max(...letterFreq) - Math.min(...letterFreq);
    }

    return out;
};

