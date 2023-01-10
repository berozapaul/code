/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    const numCnt = arr.length;
    const fivePercent = 0.05 * numCnt;
    let sum = 0;
    for (let i = fivePercent; i < numCnt - fivePercent; i++) {  
        sum += arr[i];
    }

    return sum / (numCnt - 2 * fivePercent);
};