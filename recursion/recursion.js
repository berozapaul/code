(function(){
    // Write a program to print first 50 natural numbers using recursion.

    const printNumber = (num) => {
       if (num < 1) {
          return 1;
       }

       printNumber(num -1);
       console.log(num);
       return num;
    };

    printNumber(5)
})();

(function(){
    // Write a program to calculate the sum of numbers from 1 to n using recursion.

    const getSum = (arr) => {
       if (arr.length < 1) {
          return 0;
       }

       return arr.pop() + getSum(arr);
    };
 
    const a = [1, 2, 3, 5];
    console.log(getSum(a))
})();
