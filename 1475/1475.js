// Approach #1
/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
  
    const output = [];
    for( let i = 0; i < prices.length; i++) {
        let discount = false;
        for( let j = i + 1; j < prices.length; j++ ) {
            const diff = prices[i] - prices[j];
            if (diff >= 0) {
                output.push(diff);
                discount = true;
                break;
            } 
        }
        if (!discount) {
            output.push(prices[i])
        }
    }
    return output;
};