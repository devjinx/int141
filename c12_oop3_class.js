//c12_oop3_class.js

// class syntax
class Simple {
    constructor(name) {
        this.name = name;
        //this.getName = function() { return "<" + this.name + ">"} // NOT RECOMMENDED
    }
    getName() { return this.name; }; 
    rename(newname) { this.name = newname; };
}

let s = new Simple('Sim');
console.log(s);
console.log(typeof s);
console.log(s instanceof Object);
console.log(s instanceof Array);
console.log(s instanceof Simple);
console.log(s.constructor);
console.log(s.constructor.name);
console.log("%o", s.constructor.prototype);
console.log(s.getName());
