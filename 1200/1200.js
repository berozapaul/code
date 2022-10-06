/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity, out;
    
    for(let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i+1] - arr[i]);

        if(diff < minDiff) {
           minDiff = diff;
           out = new Array([arr[i], arr[i+1]]); 
        } else if(minDiff === diff) {
            out.push([arr[i], arr[i+1]]);
        }
    }
    return out;
};