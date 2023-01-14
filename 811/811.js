/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    const map = new Map();
    for (let i = 0; i < cpdomains.length; i++) {  
        const [visit, domain] = cpdomains[i].split(' ');
        const view = +visit;
        const domainParts = domain.split('.');
        let key = '';
        for (let j = domainParts.length - 1; j >= 0; j--) {  
            key = `${domainParts[j]}${key}`;
            map.has(key) ? map.set(key, map.get(key) + view) : map.set(key, view);
            if(j !== 0){
                key = `.${key}`;
            }
        }        
    }  

    const out = [];
    for(const [key, value] of map.entries()) {
        out.push(`${value} ${key}`);
    }
    return out;
};