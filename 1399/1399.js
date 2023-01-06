/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    const getDigitCount = (j) => {
        if ( j <= 9 ) return j;
        let cnt = 0, numStr = `${j}`;
        for (let i = 0; i < numStr.length; i++) { 
           cnt += +numStr[i];
        }   
        return cnt;     
    }

    const map = new Map();
    for (let i = 1; i <= n; i++) {  
        let item = [];
        const digiCnt = getDigitCount(i);
        if (map.has(digiCnt)) {
            item = map.get(digiCnt);
        }

        item.push(digiCnt)
        map.set(digiCnt, item);
    }
    
    let max = -1, out = [];
    for(const item of map.values()) {
        const len = item.length;
        out.push(len);
        if (len >= max) {
            max = len;
        }
    }

    let outCnt =0;
    for (let i = 0; i < out.length; i++) {  
        if (out[i] == max) outCnt++;
    }    

    return outCnt;  
};