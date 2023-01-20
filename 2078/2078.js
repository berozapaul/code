/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
    const len = colors.length;

    let max = 0;
    for (let i = 0; i < len; i++) {
        if (colors[i] !== colors[0]) {
            max = Math.max(max, i);
        }
        if (colors[i] !== colors[len - 1]) {
            max = Math.max(max, len - 1 - i);
        }
    }
    return max;
};