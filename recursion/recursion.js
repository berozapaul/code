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


(function(){
    // Write a program to check a number is a prime using recursion

    const getPrime = (n, i) => {
        if (~n & 1) {
           return false;
        }

        if ( i < 2) {
            return true;
        }

        return n % i === 0 ? false : getPrime(n, i - 1);

    };
 
    console.log(getPrime(21, 20)) // false
})();


(function(){
    // Write a program to calculate the power of any number using recursion

    const getPower = (n, m) => {
        if (m < 1) {
           return 1;
        }

        return n *  getPower(n, m - 1);

    };
 
    console.log(getPower(2, 3)) // 8
})();


(function(){
    // Write a program to find the Hailstone Sequence of a given number upto 1

    const getHailstone = (n) => {
        if (n < 2) {
           return [];
        }

        n = (n & 1) ? n * 3 + 1 : n / 2;
        return [n].concat(getHailstone(n));

    };
 
    console.log(getHailstone(13)) // [40, 20, 10, 5, 16, 8, 4, 2, 1]
})();


(function(){
    // Write a program to find the first capital letter in a string using recursion

    const getCapital = (s) => {
        if (s.length < 1) {
           return '';
        }

        return s[0] === s[0].toUpperCase() ? s[0] : getCapital(s.slice(1));
    };
 
    console.log(getCapital('tEstDtRing')) // E
})();

(function(){
    // Write a program to reverse an integer number using recursion

    const numReverse = (n, m) => {
        return n === 0 ? m : numReverse(Math.floor(n / 10), m * 10 +  n % 10);
    };
    const num = 735;
    console.log(numReverse(num, 0)) // 537
})();


(function(){
    // Write a program to convert a binary number to decimal number using recursion

    const getDecimal = (n) => {
        if (!n) {
            return 0;
        } 
        return  n[0] * (2 ** (n.length - 1)) + getDecimal(n.slice(1))
    };
 
    console.log(getDecimal('111')) // 7
})();
