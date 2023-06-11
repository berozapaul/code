/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const smallestEquivalentString = function(s1, s2, baseStr) {
    const findPosition = (u, arr) => {
        return arr[u] === u ? u : findPosition(arr[u], arr);
    };

    const alphabet = [...Array(26).keys()];
    for (let i = 0; i < s1.length; i++) {
        const u = findPosition(s1.charCodeAt(i) - 97, alphabet);
        const v = findPosition(s2.charCodeAt(i) - 97, alphabet);
        if (u < v) {
            alphabet[v] = u;
        } else if (u > v) {
            alphabet[u] = v;
        }
    }

    let out = "";
    for (let i = 0; i < baseStr.length; i++) {
        out += String.fromCharCode(findPosition(baseStr.charCodeAt(i) - 97, alphabet) + 97);
    }
    return out;
};