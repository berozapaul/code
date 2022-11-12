/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangularSum = function(nums) {
    const backtrack = (numberArr) => {
        if (numberArr.length < 2) {
            return numberArr[0];
        }

        const arr = [];
        for (let i = 0; i < numberArr.length - 1; i++) {
            arr.push((numberArr[i] + numberArr[i+1]) % 10);
        }     

        return backtrack(arr);
    }
    return backtrack(nums);
};