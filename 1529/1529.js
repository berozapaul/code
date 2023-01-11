/**
 * @param {string} target
 * @return {number}
 */
 var minFlips = function(target) {
    let flips = 0;
    target = target.replace(/^0+/, '');
     for (let i = 0; i < target.length; i++) {  
         if (target[i] !== target[i+1]) {
             flips++;
         }
     }
     return flips;
 };