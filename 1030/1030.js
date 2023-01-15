/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
 var allCellsDistOrder = function(r, c, r0, c0) {
    const buckets = [];
    const out = [];
    for (let i = 0; i < r; ++i) {
      for (let j = 0; j < c; ++j) {
        const dis = Math.abs(i - r0) + Math.abs(j - c0);
        
        if (buckets[dis] === undefined) buckets[dis] = [];
        buckets[dis].push([i, j]);
      }
    }
    for (const bucket of buckets) {
      out.push(...bucket);
    }
    return out;    
  };