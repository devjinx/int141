//c12_oop4_constr_inh.js

// class syntax for super type ------------
class PersonC {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() { return this.name; }
}

// constructor function syntax for super type -------------
function PersonP(id, name) {
    this.id = id;
    this.name = name;
}
PersonP.prototype.getName = function() { return this.name; }

// class syntax for sub type ------------------
class EmployeeC extends PersonC {
    constructor(id, name, dept, salary) {
        super(id, name);
        this.dept = dept;
        this.salary = salary;
    }
    getSalary() { return this.salary; }
}

// constructor function syntax for sub type --------
function EmployeeP(id, name, dept, salary) {
    PersonP.call(this, id, name); // this = new PersonP(id,name)
    this.dept = dept;
    this.salary = salary;
}
EmployeeP.prototype = Object.create(PersonP.prototype);
EmployeeP.prototype.constructor = EmployeeP

EmployeeP.prototype.getSalary = function() { return this.salary; }

let e = new EmployeeP(10, 'Emp', 'HR', 20000);
console.log(e);
console.log(e.getName())
console.log(e.getSalary())
console.log(e.constructor)
console.log(e.constructor.prototype)
console.log(e.__proto__)
