/**
 * @param {number[]} amount
 * @return {number}
 */
 var fillCups = function(amount) {
    const sum = amount[0] + amount[1] + amount[2];
    amount.push(Math.floor((sum + 1) / 2));
    return Math.max.apply(null, amount);   
};