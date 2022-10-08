/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    
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
    
    const obj = {};
    for(let i = 0; i < mat.length; i++) {
        const freqMap = getFreqMap(mat[i]);
        obj[i] = freqMap.get(1) || 0;
    }

    const target = Object.entries(obj).sort(function(a, b) {
       return a[1] - b[1];
    });
    
    const out = [];
    target.filter((value, idx) => {
        if (idx < k) {
            out.push(value[0])
        }
    });
    return out;
};