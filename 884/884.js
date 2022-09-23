// Approach #1
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    const arr1 = s1.split(' ');
    const arr2 = s2.split(' ');
    const strLen1 = s1.length;
    const strLen2 = s2.length;
    const output = [];
    
    for(let i = 0; i < arr1.length; i++) {
        const reg = new RegExp(`\\b${arr1[i]}\\b`, "g");
        const mstr1 = s1.replaceAll(reg, '');

        if ( mstr1.length + arr1[i].length < strLen1) {
            continue; 
        }
        
        const mstr2 = s2.replaceAll(reg, '');
        if ( mstr2.length < strLen2) {
            continue; 
        }
        
        output.push(arr1[i]);
    }
    
    
    for(let i = 0; i < arr2.length; i++) {
        const reg = new RegExp(`\\b${arr2[i]}\\b`, "g");
        const mstr2 = s2.replaceAll(reg, '');
        if ( mstr2.length + arr2[i].length < strLen2) {
            continue; 
        }
        
        const mstr1 = s1.replaceAll(reg, '');
        if ( mstr1.length < strLen1) {
            continue; 
        }
        
        output.push(arr2[i]);
    }    
    return output;
};

// Approach #2
    /**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
     var uncommonFromSentences = function(s1, s2) {
        const arr = [...s1.split(' '), ...s2.split(' ')];
        const map = new Map();
        const output = [];
        
        for(let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                let freq = map.get(arr[i]);
                map.set(arr[i], ++freq);
            } else {
                map.set(arr[i], 1);
            }
        }
    
        for (const [key, value] of map.entries()) {
           if(value === 1) output.push(key);
        }
        return output;
    };