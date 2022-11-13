/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
    const stack = [];
    for(let charater of s){
        if(charater === ']')    {
           stack.pop();
        }
        else if(charater === '[')   {
            stack.push(charater);
        }
    }

    return (stack.length) / 2    
};