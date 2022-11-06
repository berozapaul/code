/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    const out = [];
    backtrack(out, 0, s.split(''));
    return out;
};

const isLetter = (l) => {
return l.toLowerCase() !== l.toUpperCase();
}

const backtrack = (out, i, str) => {
if(i === str.length)
    out.push(str.join(''));
else{
    if(isLetter(str[i])) { 
        str[i] = str[i].toUpperCase();
        backtrack(out, i+1, str); 
        str[i] =  str[i].toLowerCase();
        backtrack(out, i+1, str); 
    }
    else {
        backtrack(out, i+1, str); 
    } 
}
};