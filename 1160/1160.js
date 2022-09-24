// Approach #1
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    
    const getCharFreqMap = (ch) => {
       const map = new Map();
       [...ch].map( c => map.get(c) ? map.set(c, map.get(c) + 1) : map.set(c,1) );
       return map;
    }

    const srcMap = getCharFreqMap(chars);
    let sum = 0;
    
    for( let i =0; i < words.length; i++) {
        const word = words[i]
        const wordMap = getCharFreqMap(word);

        for(let j = 0; j < word.length ; j++) {
            const char = word[j];
            if (!srcMap.has(char) || srcMap.get(char) < wordMap.get(char)) {
                break;
            }
            
            if (j === (word.length - 1)) {
                sum += word.length;
            }
        }
    }
    return sum;
};