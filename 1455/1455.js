/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    const wordArr = sentence.split(' ');
    for(let i =0; i < wordArr.length; i++) {
        if (wordArr[i].indexOf(searchWord) === 0) {
            return i + 1; 
        }
    }
    return -1;
};