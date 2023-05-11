/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const intersectCount = new Array(101).fill(0);

    logs.forEach(person => {
        intersectCount[person[0] - 1950]++;
        intersectCount[person[1] - 1950]--;
    });

    let maxIntersect = 0;
    for (let i = 1; i < intersectCount.length; i++) {
        intersectCount[i] += intersectCount[i - 1];

        if(intersectCount[i] > intersectCount[maxIntersect]) maxIntersect = i;
    }
    return 1950 + maxIntersect;
};

