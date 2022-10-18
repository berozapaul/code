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


(function(){
    // Write a program to find GCD of two numbers using recursion

    const getGCD = (m, n) => {
        const remainder = m % n;
        if (remainder === 0) {
            return n;
        } 

        return getGCD(n, remainder);
    };
 
    console.log(getGCD(5, 25)) // 5
})();


(function(){
    // Write a program to get the largest element of an array using recursion

    const getLargest = (arr) => {
        if (arr.length < 1) {
            return 0;
        } 

        return Math.max(arr.pop(), getLargest(arr));
    };
 
    const a = [1, 5, 6, 3, 9, 7];
    console.log(getLargest(a)) // 9
})();


(function(){
    // Write a program to reverse a string using recursion

    const strReverse = (s) => {
        if (s.length < 1) {
            return '';
        } 

        return s.slice(-1) + strReverse(s.slice(0, -1));
    };
 
    const str = 'love';
    console.log(strReverse(str)) // evol
})();


(function(){
    // Write a program to find the Factorial of a number using recursion

    const getFact = (n) => {
        if (n < 1) {
            return 1;
        } 

        return n * getFact(n - 1);
    };
 
    console.log(getFact(5)) // 120
})();


(function(){
    // Write a program to convert a decimal number to binary using recursion

    const getBinary = (n) => {
        if (n < 1) {
            return 0;
        } 

        return (n%2) + 10 * getBinary(Math.floor(n / 2));
    };
 
    console.log(getBinary(5)) // 011
})();