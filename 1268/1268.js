/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    products.sort();
    
    const out = [];
    let str = '';
    for (let i = 0; i < searchWord.length; i++) {
        str += searchWord[i];

        const row = [];
        for (let j = 0; j < products.length; j++) {
           if (products[j].indexOf(str) === 0) {
               row.push(products[j]);
               if (row.length === 3) break;
           } 
        }
        out.push(row);
    }
    return out;
};