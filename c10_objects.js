//c10_objects.js

function p(...a) { console.log(...a) }

creation()
objectLiteral()
objectConstructor()
objectClass()
constructorWithStatic()
classWithStatic()
objectIterator()

// object creation and type
function creation() {
    let o = { name: 'Somchai', lastname: 'Klahan' }
    p(o)
    p('typeof:', typeof o)
    p(typeof o === 'object')
    let f = function() { }
    p(typeof f === 'object')
    p(typeof f === 'function')
    p(f instanceof Object)
    p(f instanceof Function)
}

// object literal
function objectLiteral() {
    let s = { 
        sid: 70123456, name: 'Somchai', lastname: 'Klahan', 
        getId: function() { return this.sid },
        rename: function(newname) { this.name = newname }
    }
    p(s)
    s.nickname = 'chai'
    delete s.lastname
    s.rename('Sompong')
    p(s)
    s.renick = function (newnick) { this.nickname = newnick }
    s.renick('Pong')
    p(s)
    s.sid = 70654321
    p(s)
    p(s.sid) // hardcode property
    let att = 'nickname' //'sid'
    p(s[att])  // computed property
}

// object constructor
function objectConstructor() {
    function Student(sid, name, lastname) { // object constructor
        this.sid = sid
        this.name = name
        this.lastname = lastname
        this.getId = function() { return this.sid }
        this.rename = function(newname) { this.name = newname }
    }
    let sc = new Student(70123456, 'Somchai', 'Klahan')
    let sp = new Student(70654321, 'Sompong', 'Jaidee')
    p('somchai:', sc)
    p('sompong:', sp)
    sp.rename('Somsri')
    delete sp.lastname
    sp.nickname = 'Sri'
    p('somchai:', sc)
    p('sompong:', sp)
}

// object class  // ES6  --- ECMAScript version 6 
function objectClass() {
    class Student {
        constructor(sid, name, lastname) {
            this.sid = sid
            this.name = name
            this.lastname = lastname
        } 
        getId() { return this.sid }
        rename(newname) { this.name = newname }
    }
    let sc = new Student(70123456, 'Somchai', 'Klahan')
    let sp = new Student(70654321, 'Sompong', 'Jaidee')
    p('somchai:', sc)
    p('sompong:', sp)
    sp.rename('Somsri')
    delete sp.lastname
    sp.nickname = 'Sri'
    p('somchai:', sc)
    p('sompong:', sp)
}

// static property and method (constructor)
function constructorWithStatic() {
    function Student(sid, name, lastname) {
        this.sid = sid
        this.name = name
        this.lastname = lastname
        Student.counter++
        this.rename = function (newname) { this.name = newname }
        //this.getStudentCount = function () { return Student.counter }
    }
    Student.counter = 0 // static property
    Student.getCount = function () { return Student.counter } // static method

    let sc = new Student(70123456,'Somchai','Klahan')
    let sp = new Student(70654321,'Sompong','Jaidee')
    p(sc)
    p(sp)
    p(Student.getCount())
    p(Student.counter)
    //sc.getCount() does not work; cannot access static property through object
}

// static property and method (class)
function classWithStatic() {
    class Student {
        static counter = 0
        constructor (sid, name, lastname) {
            this.sid = sid
            this.name = name
            this.lastname = lastname
            Student.counter++
        }
        rename(newname) { this.name = newname }
        static getCounter() { return Student.counter }
    }
    let sc = new Student(70123456,'Somchai','Klahan')
    let sp = new Student(70654321,'Sompong','Jaidee')
    p(sc)
    p(sp)
    p(Student.getCounter())
    p(Student.counter)
}

function objectIterator() {
    let sc = { 
        sid: 70123456, name: 'Somchai', lastname: 'Klahan', 
        rename: function(newname) { this.name = newname }
    }
    p(sc)
    p("========")
    for (const a in sc) {
        if (typeof sc[a] !== 'function')
            p(`sc.${a}: ${sc[a]}`)
    }
}