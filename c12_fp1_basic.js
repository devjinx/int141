//c12_fp1_basic.js

// a function is a first-class citizen

//1. store functions in variables
const p = console.log;

p("hello", "world");


//2. return functions from "another function" (higher-order function)
function operation(op) {
    switch (op) {
        case "plus": return function(a,b) { return a+b; }
        case "minus": return (a,b) => a-b;
        case "times": return (a,b) => a*b;
        case "div": return (a,b) => a/b;
        default: return (a,b) => undefined;        
    }
}

let x = operation("plus")
console.log(x(5,4))
console.log(operation("times")(30,12))

//3. sending functions (f1,f2) as parameters 
// to "another function" (higher-order function)
function compose(f1, f2, a, b) {
    return f1(a) + f2(b);
}
// f1,f2 ==> callback functions

console.log(compose(x => x*2, x => x**2, 10, 12))

//////////////////////////////////
// 1. function definition
function fname() { 
    return;
}

// 2. function expression
const fx = function func() { return ; }

// 3. arrow function (function expression) = anonymous function
const af = (x,y) => x+y; // lambda expression

// higher-order function : map, filter, reduce, forEach, every, some
