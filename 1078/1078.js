/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    const wordArr = text.split(' ');
    const qry = `${first}${second}`;
    const out = [];
    for (let i = 0; i < wordArr.length - 2; i++) {
        if (qry === `${wordArr[i]}${wordArr[i+1]}`) {
            out.push(wordArr[i+2]);
        }
    }  
    return out;  
};