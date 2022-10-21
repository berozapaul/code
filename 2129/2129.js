/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    const lcTitle = title.toLowerCase();
    const parts = lcTitle.split(' ');
    
    const out = [];
    for(let i = 0; i < parts.length; i++) {
        if (parts[i].length > 2) {
            out.push(`${parts[i][0].toUpperCase()}${parts[i].slice(1)}`);
        } else {
            out.push(parts[i]);
        }
    }
    return out.join(' ');
};