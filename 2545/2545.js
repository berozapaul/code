/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
 var sortTheStudents = function(score, k) {
    const compareSpecificScore = (a, b) => {
        if (a[k] === b[k]) {
            return 0;
        }
        else {
            return (a[k] > b[k]) ? -1 : 1;
        }
    }
    score.sort(compareSpecificScore);
    return score;
};