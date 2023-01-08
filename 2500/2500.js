/**
 * @param {number[][]} grid
 * @return {number}
 */
 var deleteGreatestValue = function(grid) {
    let total = 0;
    while(grid[0].length > 0) {
        let maxInRow = 0;
        for (let i = 0; i < grid.length; i++) {  
            const max = Math.max(...grid[i]);
            maxInRow = Math.max(max, maxInRow);
            const index = grid[i].indexOf(max);
            grid[i].splice(index, 1);
        }
        total += maxInRow;
    }
    return total;
};