/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
    const result = [];
    
    for (const [x, y, r] of queries) {
        let count = 0;
        for (const [a,b] of points) {
            count += (x- a) ** 2 + (y-b) ** 2 <= r ** 2 ? 1 : 0;
        }
        result.push(count);
    }
    return result;    
};