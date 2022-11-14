/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const numReverse = (n, m) => {
       const out = n === 0 ? m : numReverse(Math.floor(n / 10), m * 10 +  n % 10);
       return out > 0x7FFFFFFF ? 0 : out;
   };
   if (x < 0) {
       return -Math.abs(numReverse(Math.abs(x), 0));
   }
   return numReverse(x, 0);
};