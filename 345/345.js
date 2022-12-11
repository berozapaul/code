/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const isVowel = (c) => {
       return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    };

    let vowelList = [];
    for (let i = 0; i < s.length ; i++) {
        if(isVowel(s[i])) {
            vowelList.push(s[i]);
        }
    }  

    let out = '';
    for (let i = 0; i < s.length; i++) {
        out += isVowel(s[i]) ? vowelList.pop() : s[i];
    }

    return out;      
};