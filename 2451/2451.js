/**
 * @param {string[]} words
 * @return {string}
 */
 var oddString = function(words) {
    let map = new Map();
    for( const word of words){
        let key = '';
        for(let i =0; i < word.length-1; i++) {
            key += word[i+1].charCodeAt(0) - word[i].charCodeAt(0) + '_';
        }

        const valueArr = map.get(key);
        const newValue = valueArr ? [...valueArr, word]: [word];
        map.set(key, newValue);
    }
    for(const value of map.values()) {
        if(value.length===1) return value[0];
    }
};