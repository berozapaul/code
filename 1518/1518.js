/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let out = numBottles;
    while(numBottles >= numExchange) {
        const rem = numBottles % numExchange;
        numBottles = Math.floor(numBottles / numExchange);
        out += numBottles;
        numBottles += rem;
    }
    return out;
};