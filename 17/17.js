/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (!digits.length) return [];
  
    const map = new Map([
        ["0", ""],
        ["1", ""],
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ])
  
    const out = [];
    const backtrack = (i, s) => {
      if(i === digits.length) {
          out.push(s);
          return;
      }
  
      for (const char of map.get(digits[i])) {
          backtrack(i + 1, `${s}${char}`);
      }   
    }
  
    backtrack(0, '');
    return out;
  };