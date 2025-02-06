/*
boolean: true, false
number: 0, non-zero, NaN, Infinity, -Infinity 
string: "0", "", "non-zero", "non-number"
array: [], [4], [5,2]
object: {}, {k: 3}
undefined
null
*/
plusSign()
arithmetic()
logic()
equality()
comparison()
function plusSign() { // +
    var x = null + undefined //nan
    console.log(typeof x, x) // at least 5 cases
    // conclusion: ...
    console.log(x + x) //nan
    console.log( null + null ) //0
    console.log( undefined + undefined ) //nan
    console.log(( undefined + undefined )+( null + null )) //nan
}
function arithmetic() { // -, *, /, %, **
    console.log(null * undefined) //nan
    console.log(2 ** 4) //16
    console.log(13 % 4) //1
    console.log(8**3/24/3*2) //14.222222222222221
}
function logic() { // !, &&, ||
    console.log(true || true)//true
    console.log(false || true)//true
    console.log(true || false)//true
    console.log(true && 2)//true
    console.log(!2)//false
}
function equality() { // ==, !=, ===, !==  
    console.log(undefined != null)//false
    console.log(null == undefined) //true
    console.log(undefined == true) //false
    console.log((null === undefined) == (null === undefined)) //true
    console.log(null !== null) //false
}
function comparison() { // <, >, <=, >=
    console.log(null >= undefined) //false
    console.log(null > undefined) //false
    console.log(null <= undefined) //false
    console.log(false >= true) //false
    console.log(false <= true) //true
}
