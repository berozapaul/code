/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
    const obj = {};
    for(let i = 0; i < names.length; i++) {
        obj[heights[i]] = names[i];
    }
    
    const output = [];
    for (let [height, name] of Object.entries(obj)) {
       output.unshift(name);
    }
    return output;
};