/**
 * @param {string[]} words
 * @return {number}
 */
 var similarPairs = function(words) {
    words.forEach((w, i) => words[i] = [...new Set(w)].sort().join('')); 
    const wordCnt = words.length;
    let pairCnt = 0;
    for (let i = 0; i < wordCnt; i++) {  
        for (let j = i + 1; j < wordCnt; j++) {  
            if (words[i] == words[j]) {
                pairCnt++;
            }
        }
    }
    return pairCnt;
};