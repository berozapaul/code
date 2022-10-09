/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
 var convertTime = function(current, correct) {
    const hourMinParts = (s) => {
        return s.split(":").map(Number);      
    }
    
    const [h, m] = hourMinParts(current), [ch, cm] = hourMinParts(correct);
    let diff = ((ch * 60 + cm) - (h * 60 + m));
    
    let cnt = 0;
    [60, 15, 5].forEach(t => {
        cnt += parseInt(diff / t);
        diff = diff % t;
    })
    return cnt + diff;
};
