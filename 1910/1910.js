/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
 var removeOccurrences = function(s, part) {
    if (!s.includes(part)) {
        return s;
    }

    return removeOccurrences(s.replace(part, ''), part);
};