/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var orderlyQueue = function(s, k) {
    let res = s;

   if (k === 1) {
       for (let i = 0; i < s.length; i++) {
           let c = s[0];
           s = s.slice(1) + c;
           if (s < res)
               res = s; 
       }

       return res;
   }

   return [...s].sort().join('');
      
};