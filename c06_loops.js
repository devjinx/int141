//c06_loops.js

/*
• write a countDigit() function that receives a num (a non-negative integer) and a digit
(i.e., 0-9). This function returns the number of occurrences of the digit in the num;
and returns null if the inputs are invalid. E.g., countDigit(406705,0) returns 2.
Do NOT use functions related to strings.
*/

function countDigit(num,digit){
    //input validation ----
    if(!Number.isInteger(num)) return null;
    if(num < 0) return null;
    if(!Number.isInteger(digit)) return null;
    if(digit < 0 || digit > 9) return null;

    // counting the number of occurrences of <digit> in <num>
    let counter = 0;
    while (num > 0){
        let lastDigit = num % 10;
        if (lastDigit == digit) counter++;
        num = Math.trunc(num/10);
    }
    return counter;
}

//Testing
function t(func, num, digit) {
    console.log(`countDigit(${num}, ${digit}) = ${func(num, digit)}`);
}

function testCountDigit(){
    console.log("Test countDigit(num,digit) ---------")
    t(countDigit, 235310054, 0)
    t(countDigit, 235310054, 1)
    t(countDigit, 235310054, 2)
    t(countDigit, 235310054, 3)
    t(countDigit, 235310054, 4)
    t(countDigit, 235310054, 5)
    t(countDigit, 235310054, 6)
    t(countDigit, 235310054, 7)
    t(countDigit, 235310054, 8)
    t(countDigit, 235310054, 9)
    t(countDigit, 0, 5)
    t(countDigit, 5, 5)
    t(countDigit, 5, 0)
    t(countDigit, 0, 0)
    t(countDigit, -5, 5)
    t(countDigit, 5, -5)
    t(countDigit, Infinity, -5)
}
testCountDigit()

/* • write a sumDigit() function that receives a value and returns the summation of the
product of each digit and its position: e.g., sumDigit(705) = 7*3+0*2+5*1 = 26;
returns null if the input value is not a non-negative integer.
Do NOT use functions related to strings.*/

//input validation ----
function sumDigit(value){

    //input validation ----
    if(!Number.isInteger(value) || value < 0) return null;

    //processing
    let sum = 0;
    let pos = 1;

    //while loop
    /*
    while (value > 0){
        let lastDigit = value % 10;
        sum += pos++ * lastDigit;
        value = (value - lastDigit) / 10;
    }
    */
   //for loop but it isn't for loop it's while loop just use while loop
    for (;value > 0;){
        let lastDigit = value % 10;
        sum += pos++ * lastDigit;
        value = (value - lastDigit) / 10;
    }
    return sum;

}

function testSumDigit(){
    console.log("Test sumDigit(value) ---------")
    t(sumDigit, 20) //4
    t(sumDigit, 305) //14
    t(sumDigit, 0) //0
}
testSumDigit()

/*• write a isPrime() function that receives a value and returns true if the input value is
a prime number, otherwise returns false. A prime number is a positive integer > 1 and
divisible by itself and 1 only and no other positive integers that can divide a prime number.*/

function isPrime(value){
    //input validation ----
    if(!Number.isInteger(value) || value < 2) return false;
    if(value == 2) return true;
    if(value % 2 ==0)return false;
    //main processing
    for (let i = 3 ; i <= Math.sqrt(value); i++){
        if (value % i == 0) return false;
    }
    return true;
}

function testIsPrime(){
    console.log("Test isPrime(value) ---------")
    t(isPrime, -1) 
    t(isPrime, 0) 
    t(isPrime, 1) 
    t(isPrime, 2) 
    t(isPrime, 3) 
    t(isPrime, 4) 
    t(isPrime, 5) 
}

testIsPrime()
/*• write a nextPrime() function that receives a value and returns the smallest prime number
that is greater than the input value. Return null if the input value is not an integer.
Use isPrime() function to check if a number is a prime number.*/

