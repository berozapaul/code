/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    const countBit = (num) => {
        let sum = 0;
        while(num) {
            sum += num & 1;
            num = num >> 1;
        }
        return sum;
    };
    
    arr.sort((x, y) => countBit(x) - countBit(y) || x - y);
    return arr;
};