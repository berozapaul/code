/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const bitCount = (num) => {
      return num.toString(2).replace(/0/g,"").length
    }
    
    const out = [0];
    for (let i = 1; i <= n; i++) {
        out.push(bitCount(i));
    } 
    
    return out;
};