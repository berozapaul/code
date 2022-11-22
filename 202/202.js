const squareMap = new Map([ 
    ['0', 0],
    ['1', 1], 
    ['2', 4], 
    ['3', 9], 
    ['4', 16], 
    ['5', 25], 
    ['6', 36], 
    ['7', 49], 
    ['8', 64], 
    ['9', 81]
]);
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while (!set.has(n)) {
        set.add(n);
        const s = `${n}`;
        n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += squareMap.get(s[i]);
        }

        if (n === 1) return true;
    }
	
    return false; 
};