/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
 var daysBetweenDates = function(date1, date2) {
    return Math.ceil( Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24));  
};