/**
 * @param {string} password
 * @return {boolean}
 */
 var strongPasswordCheckerII = function(password) {
    const seen = new Set();
    const isCharNumber = (c) => {
        return c >= '0' && c <= '9';
    }

    const isLetter = (l) => {
        return l.toLowerCase() !== l.toUpperCase();
    }

    for (let i = 0; i < password.length; ++i) {
        c = password.charAt(i);
        if (i > 0 && c == password.charAt(i - 1)) {
            return false;
        }

        if (isLetter(c) && c === c.toLowerCase()) {
            seen.add('l');
        } else if (isLetter(c) && c === c.toUpperCase()) {
            seen.add('u');
        } else if (isCharNumber(c)) {
            seen.add('d');
        } else {
            seen.add('s');
        }
    }

    return password.length >= 8 && seen.size == 4;   
};