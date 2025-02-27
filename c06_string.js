//c06_string

let s = 'mystring'
let o = new String('mystring')
console.log(s, ":", typeof s)
console.log(o, ":", typeof o)

let t = 'mystring'
let p = new String('mystring')
console.log("o-p:" ,o==p , o===p)
console.log("s-t:" ,s==t , s===t)