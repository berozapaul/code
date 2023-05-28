/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (vowels.includes(words[i][0]) && vowels.includes(words[i].at(-1))) {
            count++;
        }
    }
    return count;
};