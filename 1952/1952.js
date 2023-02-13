/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
      if (count < 3) {
          if (n % i === 0) count++;
      } else {
          return false;
      }
  }

  return count == 3;
};