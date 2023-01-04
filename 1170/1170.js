/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
 var numSmallerByFrequency = function(queries, words) {
    
    const getSmallCharFreq = (str) => {
        const obj = {};
        let smallChar = 'z';
        for (let i = 0; i < str.length; i++) {
            if (str[i] < smallChar) {
                smallChar = str[i];
            }
           obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;
        } 
        return obj[smallChar];
    };

     const qryFreq = [];
     for (let i = 0; i < queries.length; i++) {
        qryFreq.push(getSmallCharFreq(queries[i]));
     } 

     const wordFreq = [];
     for (let i = 0; i < words.length; i++) {
        wordFreq.push(getSmallCharFreq(words[i]));
     } 

    let out = [];
    for (let i = 0; i < qryFreq.length; i++) { 
         let cnt = 0;
         for (let j = 0; j < wordFreq.length; j++) {
             if (qryFreq[i] < wordFreq[j]) {
                cnt++;
             }
         }
         out.push(cnt); 
    }
    return out; 
};