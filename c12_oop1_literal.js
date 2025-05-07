//c12_oop1_literal.js

let o = {
    name: 'Simple',
    getName() { return this.name; }, // ES6, ECMAScript version 6
    rename(newname) { this.name = newname; }
}

console.log(o.getName());
o.rename('New Name');
console.log(o.getName());
console.log(o);
console.log(typeof o);
console.log(o.constructor);

let p = {}
p.name = 'PName';
p.getName = function() { return this.name; }
console.log("=====");
console.log(p);
console.log(typeof p);
console.log(p.constructor);

