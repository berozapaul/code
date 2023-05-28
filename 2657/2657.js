/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function(A, B) {
    const aSet = new Set(), bSet = new Set(), usedSet = new Set(), out = [];
    let count = 0;

    const markAsUsed = (element, setObj) => {
        if (setObj.has(element) && !usedSet.has(element)) {
            count++;
            usedSet.add(element);
        }
    }
    A.forEach((elementA, index) => {
        markAsUsed(A[index], bSet.add(B[index]));
        markAsUsed(B[index], aSet.add(A[index]));
        out.push(count);
    })
    return out;
};