function test1exponent1(a,b,c) {  // problem 1
    return a ** b ** c
}
function test1exponent2(a,b,c) {  // answer
    return a ** (b ** c)
}
function test2conditional1(a,b,c,d,e) {  // problem 2
    return a ? b : (c ? d : e) //ที่ถูกต้องทางmathคือขวาไปซ้าย แต่ถ้าหากตาม js ก็ ขวาไปซ้าย
}
function test3logicAndCompare1() { // ==, &&, ||, ! (must not be the last one)
    return (! a) || (((! b) && c) && (! d)) || ((! e) && f)
}

function test4comparison1() { // ==, !=, <=, >=
    return (a == (b <= c) != ((d > e) < f)) == d
}