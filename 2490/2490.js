/**
 * @param {string} sentence
 * @return {boolean}
 */
 var isCircularSentence = function(sentence) {
    const words = sentence.split(' ');
    const wordCnt = words.length;
    if (words[0][0] !== words[wordCnt -1].slice(-1)) {
        return false; 
    }

    for (let i = 0; i < wordCnt - 1 ; i++) {
        if (words[i].slice(-1) !== words[i+1][0]) {
            return false; 
        }         
    }   
    return true;
};