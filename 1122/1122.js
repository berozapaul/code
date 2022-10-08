/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    
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
    
    const removeElm = (arr, item) => {
        const index = arr.indexOf(item);
        if (index !== -1) {
          arr.splice(index, 1);
        }        
    }
    
    const freqMap = getFreqMap(arr1);
    const out = [];
    
    arr2.forEach(item => {
        const freq = freqMap.get(item);
        for(let i = 0; i < freq; i++) {
            removeElm(arr1, item);
            out.push(item);
        }
    })
    return out.concat(arr1.sort((a,b)=> a - b ));
};