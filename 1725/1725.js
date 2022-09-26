// Approach #1
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    const sqrMap = new Map();
    for(let i =0; i < rectangles.length; i++) {
        const rect = rectangles[i];
        const edge = rect[0] > rect[1] ? rect[1] : rect[0]; 
        
        
        if (sqrMap.has(edge)) {
            sqrMap.set(edge, sqrMap.get(edge) + 1);
        } else {
            sqrMap.set(edge, 1);
        }
    }
    
    return sqrMap.get(Math.max(...sqrMap.keys()));

};