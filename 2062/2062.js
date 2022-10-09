/**
 * @param {string} word
 * @return {number}
 */
 var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const set = new Set();
    let cnt = 0;
    
    for(let i = 0 ; i < word.length; i++) {
        set.clear();
        for(let j = i; j < word.length && vowels.has(word[j]) ; j++) {
            set.add(word[j]);
            if (set.size === vowels.size) {
                cnt++;
            }
        }
    }
    
    return cnt;
};