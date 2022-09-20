// Approach #1
var checkIfPangram = function(sentence) {
    const alpha = new Map();
    for(let i = 0; i < sentence.length; i++) {
        if(!alpha.has(sentence[i])) {
            alpha.set(sentence[i], true)
        }
    }
    return alpha.size === 26 ? true : false;
};

// Approach #2
const checkIfPangram = (sentence) => new Set(sentence).size === 26;