/**
 * @param {string[]} bank
 * @return {number}
 */
 var numberOfBeams = function(bank) {
    let lastBitCnt = 0, total = 0;  

    const countBit = (s) => {
       return s.split("").filter((x) => x === "1").length;
    };

    
    for (let i = 0; i < bank.length; i++) {
       const currCnt = countBit(bank[i]);

       if (currCnt) {
          total = total + currCnt * lastBitCnt;
          lastBitCnt = currCnt;
       }
    }
    return total;
};