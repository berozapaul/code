/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    const getFreqMap = (arr) => {
       const map = new Map();
       for(let i = 0; i < arr.length; i++) {
           if (map.has(arr[i])) {
               map.set(arr[i], map.get(arr[i]) + 1);
           } else {
               map.set(arr[i], 1);
           }
       }
       return map;
   }

   const freq = new Map([...getFreqMap(s)].sort((a, b) => b[1] - a[1]));
   let str = '';
   for(const [key, value] of freq.entries()) {
       str += key.repeat(value);
   }
   return str;   
};