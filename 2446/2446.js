/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
 var haveConflict = function(event1, event2) {

    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
 
    const event1Start = event1[0].split(':');
    const event1End = event1[1].split(':');
 
    const event2Start = event2[0].split(':');
    const event2End = event2[1].split(':');
 
    const event1StartDate = new Date(year, month, day, event1Start[0], event1Start[1]);
    const event1EndDate = new Date(year, month, day, event1End[0], event1End[1]);
 
    const event2StartDate = new Date(year, month, day, event2Start[0], event2Start[1]);
    const event2EndDate = new Date(year, month, day, event2End[0], event2End[1]);
    
    return (event2StartDate > event1EndDate || event1StartDate > event2EndDate) ? false : true;
 };