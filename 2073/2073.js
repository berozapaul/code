/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let out = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i === k || tickets[i] < tickets[k]) {
            out += tickets[i];
        } else if (i > k) {
            out +=  tickets[k] - 1;
        } else {
            out += tickets[k];
        }
    }
    return out;
};