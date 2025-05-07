let person = { firstname: 'Nm', lastname: 'LN', id: 1000 }
for (const p in person) {
    console.log(`${p} : ${person[p]}`);
}

let {lastname, id, firstname } = person; // object destructure

let employee = { salary: 10000, ...person } // spread operator
let car = { income: 2000, owner: person }
console.log(firstname);
console.log(lastname);
console.log(s);
person.firstname = 'xxx'
car.owner.lastname = 'ttt'
console.log(s);
console.log(person);
console.log(car);