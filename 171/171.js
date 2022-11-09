/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(s) {
    const letters = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26};
    const map = new Map(Object.entries(letters));
    const len = s.length;
    let cnt = 0, idx = 0;
    for (let i = len -1; i >= 0 ; i--) {
        if (idx === 0) {
            cnt += map.get(s[i])
        } else {
            cnt += map.get(s[i]) * 26 ** idx
        }
        idx++; 
    }
    return cnt;
};