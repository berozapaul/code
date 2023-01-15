/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let isLand = 0, neighbour = 0;
    for (let i = 0; i < grid.length; i++) {  
        for (let j = 0; j < grid[i].length; j++) {  
            if (grid[i][j] == 1) {
                isLand++;
                if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbour++;
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1) neighbour++;
            }
        }
    }  
    return 4 * isLand - 2 * neighbour;  
};