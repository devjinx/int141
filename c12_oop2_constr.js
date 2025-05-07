//c12_oop2_constr.js

// constructor function syntax
function Simple(name) {
    this.name = name;
    //this.getName = function() { return "<" + this.name + ">"} // NOT RECOMMENDED
}
Simple.prototype.getName = function() { return this.name; }; 
Simple.prototype.rename = function(newname) { this.name = newname; };
//Simple.prototype.nickname = 'Nick' // NOT RECOMMENDED

let s = new Simple('Sim');
console.log(s);
console.log(typeof s);
console.log(s.constructor);
console.log(s.constructor.name);
console.log(s.constructor.prototype);
console.log(s.getName());
console.log(s.nickname)
