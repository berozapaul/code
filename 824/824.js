/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    const isVowel = (c) => {
       return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    };

    const words = sentence.split(' ');
    const out = [];
    for (let i = 0; i < words.length; i++) {
        if (isVowel(words[i][0])) {
            out.push(`${words[i]}ma${'a'.repeat(i+1)}`);
        } else {
            out.push(`${words[i].slice(1)}${words[i][0]}ma${'a'.repeat(i+1)}`);
        }
    }    
    return out.join(' ');
};