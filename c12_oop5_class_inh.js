//c12_oop5_class_inh.js

class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() { return this.name; }
}

class Employee extends Person {
    constructor(id, name, dept, salary) {
        super(id, name);
        this.dept = dept;
        this.salary = salary;
    }
    getSalary() { return this.salary; }
}

let e = new Employee(10, 'Emp', 'HR', 20000);
console.log(e);
console.log(e.getName())
console.log(e.getSalary())
console.log(e.constructor)
console.log(e.constructor.prototype)
console.log(e.__proto__)
