/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    const out = [];
    for (let i = 0; i < words.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if (i === j || words[i].length >= words[j].length) continue;
            
            if (words[j].indexOf(words[i]) > -1 && out.indexOf(words[i]) < 0) {
                out.push(words[i])
            }
        }
    }
    return out;
};