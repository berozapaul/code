/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
    const d = date.split(' ');
    const dObj = new Date(`${parseInt(d[0])} ${d[1]} ${d[2]}`);
    
    return `${dObj.getFullYear()}-${('0' + (dObj.getMonth()+1)).slice(-2)}-${('0' + dObj.getDate()).slice(-2)}`;
};