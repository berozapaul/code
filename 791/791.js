/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
 var customSortString = function(order, s) {
    return s.split('')
     .sort((a, b) => order.indexOf(a) - order.indexOf(b))
     .join(''); 
 };