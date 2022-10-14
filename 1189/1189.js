/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
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
    }
    
    const freq = getFreqMap(text);
    
    return Math.floor(Math.min(freq.get('b') || 0, freq.get('a') || 0, freq.get('l')/2 || 0, freq.get('o')/2 || 0, freq.get('n') || 0)); 
};