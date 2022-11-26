/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
 var garbageCollection = function(garbage, travel) {
    let time = 0;
    let lastM = -1;
    let lastP = -1;
    let lastG = -1;
    for (let i = garbage.length - 1; i >= 0; i--){
        if (lastM < 0) {
            if (garbage[i].includes("M")){
                lastM = i;
            }
        }
        if (lastP < 0) {
            if (garbage[i].includes("P")){
                lastP = i;
            }
        }
        if (lastG < 0) {
            if (garbage[i].includes("G")){
                lastG = i;
            }
        }
        time += garbage[i].length;
    }


    for (let i = 0; i<travel.length; i++){
        if(i < lastM){
            time += travel[i];
        }
        if(i < lastP){
            time += travel[i];
        }
        if(i < lastG){
            time += travel[i];
        }
    }

    return time;
};