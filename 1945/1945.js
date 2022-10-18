/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    const arr = [];
    [...Array(26)].forEach((e, i) => {
       arr.push([String.fromCharCode(i + 97), i + 1]);
    });

    const map = new Map(arr);
    let strNum = '';
    for (let i = 0; i < s.length; i++) {
        strNum += map.get(s[i]);
    } 
    
    const getSum = str => {
        let sum = 0;
        for (let j = 0; j < str.length; j++) {
            sum += Number(str[j]);
        }
        return sum;
    }

    for (let i = 0; i < k; i++) {
        strNum = getSum(strNum.toString())
    }
    return strNum;
};