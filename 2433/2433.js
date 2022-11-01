/**
 * @param {number[]} pref
 * @return {number[]}
 */
 var findArray = function(pref) {
    let xor = pref[0];
    for (let i = 1; i < pref.length; i++) {
        pref[i] = pref[i] ^ xor;
        xor = xor ^ pref[i];
    }
    return pref;
};

