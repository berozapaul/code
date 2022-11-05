(function(){
    // Write a program to sort an array using recursion.

    const quicksort = (arr) => {
        if (arr.length <= 1) {
          return arr;
        }
      
        const pivot = arr[0];
        
        const left = []; 
        const right = [];
      
        for (let i = 1; i < arr.length; i++) {
          arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
      
        return quicksort(left).concat(pivot, quicksort(right));
    };
      
    console.log(quicksort([19, 73, 33, 8, 21, 39, 83, 2, 51]));
})();
