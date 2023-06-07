/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function(candies, num_people) {
    let candyCount = 1, turnCount = 1;
    const out = new Array(num_people).fill(0);

    while(candyCount < candies) {
        const index = turnCount % num_people || num_people;
        out[index - 1] += turnCount;
        turnCount++;
        candyCount += turnCount;
    }
    if (candyCount >= candies) {
        const index = turnCount % num_people || num_people;
        out[index - 1] += candies -  (candyCount - turnCount);
    }
    return out;
};