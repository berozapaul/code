/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const out = [];
    let lastSortedWord = '';

    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (sortedWord === lastSortedWord) {
            return;
        }
        lastSortedWord = sortedWord;
        out.push(word);
    })
    return out;
};