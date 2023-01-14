/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
 var displayTable = function(orders) {
    const foodSet = new Set();
    const itemObj = {};
    for (let i = 0; i < orders.length; i++) {  
       const [name, tableNo, itemName] = orders[i];
       foodSet.add(itemName);

       const tableObj = itemObj[tableNo] || {};
       if (tableObj[itemName]) {
           tableObj[itemName]++;
       } else {
           tableObj[itemName] = 1;
       }
       itemObj[tableNo] = tableObj;
    }  

    const foodList = Array.from(foodSet).sort();
    const out = [];
    for(const [key ,obj] of Object.entries(itemObj)) {
        const row = [];
        row.push(key);
        foodList.forEach(item => {
            row.push(obj[item] ? `${obj[item]}` : "0");
        })        
        out.push(row)
    }    
    const tableHeader = ['Table', ...foodList];
    return [tableHeader, ...out]; 
};