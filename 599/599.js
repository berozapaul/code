/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    const map = new Map();
    const getFreqMap = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                const val = map.get(arr[i]).split(':');
                map.set(arr[i], `${+val[0] + 1}:${+val[1] + i}`);
            } else {
                map.set(arr[i], `1:${i}`);
            }
        }
    }  

    getFreqMap(list1); 
    getFreqMap(list2); 

    const freq = 2;
    let min = Infinity, out = [];
    for(const [key, value] of map.entries()) {
        const valParts = value.split(':');
        if (+valParts[0] === freq) {
            if (+valParts[1] < min) {
                out = [key];
                min = +valParts[1];
            } else if (+valParts[1] === min) {
                out.push(key);
            }
        }
    }
    return out;
};