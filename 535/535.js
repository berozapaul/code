const map = new Map();

const encode = function(longUrl) {
    let uniqueKey = Date.now().toString(36);
    map.set(uniqueKey, longUrl);
    return "http://tinyurl.com/" + uniqueKey;
};

const decode = function(shortUrl) {
    return map.get(shortUrl.split("com/")[1]);
};