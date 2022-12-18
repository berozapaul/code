/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    const arrCopy = [...arr];
    const map = {};
    const out = [];

    arrCopy.sort((a, b) => a - b);
    let initRank = 1;

    for (let i = 0; i < arrCopy.length; i++) {
        if (!map[arrCopy[i]]) {
            map[arrCopy[i]] = initRank++;
        }
    } 

    for (let i = 0; i < arr.length; i++) {
        out.push(map[arr[i]]);
    }   
    
    return out;
};