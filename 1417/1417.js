/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
    const letters = [], numbers = [];
    const isLetter = (l) => {
        return l.toLowerCase() !== l.toUpperCase();
    }    
    for (let i = 0; i < s.length; i++) {  
        isLetter(s[i]) ? letters.push(s[i]) : numbers.push(s[i]);
    }

    if (Math.abs(letters.length - numbers.length) > 1) {
        return "";
    }    

    
    const getReformatStr = (large, small) => {
        let out = '';
        for (let i = 0; i < large.length; i++) {  
        out += `${large[i] || ''}${small[i] || ''}`;
        }    
        return out;      
    }

    return numbers.length > letters.length ? getReformatStr(numbers, letters) : getReformatStr(letters, numbers) ; 
};