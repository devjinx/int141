/* 
an <Iterator> is an object that contains a <next> function.
Each call to the <next> function return an object 
with two properties (<value> and <done>).
If <done> is true, it means that no more <next> should be called.
*/
function learnArrayAsIterable(){
    let iter = { // <iter> is an <Iterator>
        _value: 5,
        _done: false,
        next() {
            if (this._value == 0) this._done = true;
            let out = {};
            out.value = this._value;
            out.done = this._done;
            this._value--;
            return out;
        }
    };
    
    // use of the <iter> (<Iterator>)
    let o;
    do {
        o = iter.next();
        console.log(" iter:", o.value, " done?" , o.done);
    } while (!o.done);
    
}
// Symbol and Object's Property Name (String or Symbol)

function learnSymbol() {
    let s = Symbol('x');
    let t = Symbol('x');
    let u = Symbol.iterator;
    let v = Symbol.iterator;
    let w = t;
    console.log("s===t:", s === t);
    console.log("u===v:", u === v);
    console.log("w===t:", w === t);
}

function learnObjectProperty() {
    let ddd = 'd d';
    let eee = Symbol('e e');
    let o = { // property : <name> (string or symbol) and <value>
        'a'     : 'aa',
        'b_b'   : 'bb', // literal form
        ['c-c'] : 'cc', // computed form
        [1+2] : 'dd',
        [eee] : 'ee' // computed form
    }
    console.log(o);
}
// A <Generator> is both an <Iterator> and an <Iterable>. 

function learnGenerator() {
    function* counter() {
        let _counter = 0;
        while (_counter<10) yield _counter++;
        return "nothing";
    }
    let gen = counter();
    let out;
    do {
        out = gen.next();
        console.log(out);
    } while (!out.done);
}
 
// use getter/setter to guard properties

function learnGetterSetter() {
    let o = {
        _value: 'test',
        get v() { return this._value.toUpperCase(); },
        set v(newV) { if (newV.trim()!=='') this._value = newV.trim(); }
    };

    console.log(o);
    console.log(o.v);
    o.v = '   New     Value   ';
    console.log(o);
    console.log(o.v);
}
 
learnGetterSetter()
learnArrayAsIterable()
learnSymbol()
learnObjectProperty()
learnGenerator()