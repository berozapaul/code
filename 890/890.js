/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let matches = [];

    words.forEach((word) => {
        let map = new Map(), set = new Set(), equals = true;
        for(let i = 0; i < pattern.length; i++) {
            if(map.has(pattern[i])){
                if(map.get(pattern[i]) !== word[i]){
                    equals = false;
                    break;                    
                }
            }else{
                if(set.has(word[i])) {
                    equals = false;
                    break;
                }
                map.set(pattern[i], word[i]);
                set.add(word[i]);
            }
            
        }
        
        if(equals) {
            matches.push(word);
        }        
    });
    
    return matches    
};