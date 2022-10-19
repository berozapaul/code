/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    const getFreqMap = (arr) => {
        const map = new Map();
        for(let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                map.set(arr[i], map.get(arr[i]) + 1);
            } else {
                map.set(arr[i], 1);
            }
        }
        return map;
    };
    
    const mapT = getFreqMap(t);
    const mapS = getFreqMap(s);
    
    for(let i = 0; i < t.length; i++) {
        if (!mapS.has(t[i])) {
            return t[i];
        } else if (mapS.get(t[i]) !== mapT.get(t[i])) {
            return t[i]
        }
    }
    return false;
};