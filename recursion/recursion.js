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


(function(){
    // Write a program to Print Fibonacci Series upto 20 using recursion.

    const getFibo = (n) => {
       if (n === 0) {
          return 0;
       } else if (n === 1) {
          return 1;
       }

       return getFibo(n - 1) + getFibo(n - 2);
    };
 
    // 0 1 1 2 3 5 8 13 21
    console.log(getFibo(6)) // 8
})();


(function(){
    // Write a program to count the digits of a given number using recursion.

    const getDigitCnt = (n) => {
       if (n === 0) {
          return 0;
       } 

       return 1 + getDigitCnt(Math.floor(n / 10));
    };
 
    console.log(getDigitCnt(253)) // 3
})();


(function(){
    // Write a program to find the sum of digits of a number using recursion

    const getDigitSum = (n) => {
        if (n === 0) {
            return 0;
        } 

        return n % 10 + getDigitSum(Math.floor(n / 10));
    };
 
    console.log(getDigitSum(254)) // 11
})();

