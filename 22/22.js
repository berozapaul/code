/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const out = [];
    const dfs = (str, open, close) => {
      if (open > close) return;
  
      if (open === 0 && close === 0) {
        out.push(str);
        return;
      }
  
      if (open > 0) dfs(`${str}(`, open - 1, close);
      if (close > 0) dfs(`${str})`, open, close - 1);
    };
  
    dfs('', n, n);
    return out;  
  };