/**
 * @param {string} s
 * @return {number[][]}
 */
 var largeGroupPositions = function(s) {
    let cnt = 0;
    const out = [];
    for (let i = 0; i < s.length; i++) {
       if (cnt === 0) {
           out.push([i]);
       }
       cnt++;
       
       if (s[i] !== s[i+1]) {
           const last = out.pop();
           if (cnt >= 3) {
               last.push(i);
               out.push(last);
           }
           cnt = 0;
       }
    }   
    return out;
};