/**
 * @param {string} time
 * @return {string}
 */
 var maximumTime = function(time) {
    const arr = time.split(':');
    let hourStr = arr[0];
    let minuteStr = arr[1];
    
    if (minuteStr[0] === '?') {
        minuteStr = minuteStr.replace('?', '5'); 
    }

    if (minuteStr[1] === '?') {
        minuteStr = minuteStr.replace('?', '9'); 
    }

    if (hourStr[0] === '?') {
        const re = parseInt(hourStr[1]) > 3 ? '1' : '2';
        hourStr = hourStr.replace('?', re); 
    }    

    if (hourStr[1] === '?') {
        const re = parseInt(hourStr[0]) > 1 ? '3' : '9';
        hourStr = hourStr.replace('?', re); 
    }     

    return `${hourStr}:${minuteStr}`;   
};