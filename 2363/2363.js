/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
 var mergeSimilarItems = function(items1, items2) {
    const iterationCnt = Math.max(items1.length, items2.length);
    const obj = {};
    
    for( let i = 0; i < iterationCnt ; i++) {

        if(items1[i]) {
            const item = items1[i];
            obj[item[0]] = obj[item[0]] ? obj[item[0]] +  item[1] : item[1];
        }
        
        if(items2[i]) {
            const item = items2[i];
            obj[item[0]] = obj[item[0]] ? obj[item[0]] +  item[1] : item[1];
        }
    }
    
    const output = [];
    Object.keys(obj).forEach((k) => output.push([k, obj[k]]))
    return output;
};