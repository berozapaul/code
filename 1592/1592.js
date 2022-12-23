/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
    let spaceCnt = 0, wordCnt = -1, word = '' , wordArr = [];
    const strLen = text.length;
    for (let i = 0; i < strLen; i++) {
        if(text[i] === ' ') {
            spaceCnt++;
            continue;
        }
        
        word += text[i];
        if((text[i + 1] === ' ') || (i + 1 === strLen)) {
            wordCnt++;
            wordArr.push(word);
            word = '';
        }
    }  
    let evenlySpaceCnt = 0;
    let extra = spaceCnt;

    if (wordCnt > 0) {
       evenlySpaceCnt = Math.floor(spaceCnt / wordCnt);
       extra = spaceCnt % wordCnt;
    }

    const str = wordArr.join(''.padEnd(evenlySpaceCnt));
    return str.concat(''.padEnd(extra));
};










