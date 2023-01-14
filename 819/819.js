/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const getFreqMap = (item) => {
        const map = new Map();
        for(let i = 0; i < item.length; i++) {
            if(!item[i]) continue;
            map.set(item[i], map.has(item[i]) ? map.get(item[i]) + 1 : 1);
        }
        return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    }

    const txt = paragraph.toLowerCase().replaceAll(/[\!\?\'\,\;\.]/g, ' ');
    const words = txt.trim().split(' ');
    const freqMap = getFreqMap(words);
    for(const key of freqMap.keys()) {
        if(banned.indexOf(key) === -1) {
            return key;
        }
    }
    return txt;
};