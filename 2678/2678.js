/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let passengerCount = 0;
    details.forEach((item) => {
        if (item.slice(11, 13) > 60) {
            passengerCount++;
        }
    });

    return passengerCount;
};