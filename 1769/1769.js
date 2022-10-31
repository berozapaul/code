/**
 * @param {string} boxes
 * @return {number[]}
 */
 var minOperations = function(boxes) {
    const out = Array(boxes.length).fill(0);
    
    let oneCnt = 0;
    let totalCnt = 0;
    
    for (let i = 0; i < boxes.length; i++) {
        out[i] += totalCnt; 
        if (boxes[i] === '1') {
            oneCnt++;
        }
        totalCnt += oneCnt;
    }    
    
    oneCnt = 0;
    totalCnt = 0;
    for (let i = boxes.length - 1; i > -1; i--) {
        out[i] += totalCnt; 
        if (boxes[i] === '1') {
            oneCnt++;
        }
        totalCnt += oneCnt;
    }       
    return out;
};