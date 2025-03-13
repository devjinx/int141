//c08_arrays.js

function p(...a) { console.log(...a) }

//creating()
//typingAndEmptySlots()
accessingAndLooping()

// -------------------------
function creating() {
    let ar1 = [10, "two", false, 20, null, "two"] // literal
    let ar2 = new Array("X", "y", undefined)      // object initialization
    let ar3 = Array(5)                        // array of size 5 with empty slots
    let ar4 = Array(5, 7)                     // array of size 2 = [5,7]
    let ar5 = Array.of(5)            // array containing 1 element (i.e., 5) 
    let ar6 = Array.of(5, 7)         // array containing 2 elements (i.e., 5, 7) 
    let ar7 = Array.from("hello")    // can be from any iterable: ['h','e','l','l','o']
    let ar8 = Array.from([9,8,7])    // can be from any iterable: [9,8,7]
    p("ar1 (log):", ar1)
    p(`ar1: [${ar1}], length: ${ar1.length}`)
    p(`ar2: [${ar2}], length: ${ar2.length}`)
    p("ar3 (log):", ar3)
    p(`ar3: [${ar3}], length: ${ar3.length}`)
    p(`ar4: [${ar4}], length: ${ar4.length}`)
    p(`ar5: [${ar5}], length: ${ar5.length}`)
    p(`ar6: [${ar6}], length: ${ar6.length}`)
    p(`ar7: [${ar7}], length: ${ar7.length}`)
    p(`ar8: [${ar8}], length: ${ar8.length}`)
}

function typingAndEmptySlots() {
    let ar = [10, "two", false, 20, null, "two"]
    p("ar:", ar)
    p("typeof ar:", typeof ar)
    p("typeof ar === 'object':", typeof ar === 'object')
    p("ar instanceof Array:", ar instanceof Array)
    p("Array.isArray(ar):", Array.isArray(ar))
    p("ar.constructor === Array:", ar.constructor === Array)
    p("ar.length:", ar.length)
    ar.length = 3
    p("ar.length:", ar.length)
    p("ar:", ar)
    ar.length = 5
    p("ar.length:", ar.length)
    p("ar:", ar)
    ar[9] = "nine"
    p("ar.length:", ar.length)
    p("ar:", ar)
}

function accessingAndLooping() {
    let ar = ["zero", 10, 20, undefined, null, Infinity]
    p("ar:", ar, ", length:", ar.length)
}

/*

//3 accessing
p(ar1[0])       // by position
p(ar1.at(-2))   // from the back

//4 adding/removing elements
ar1.push("end")           // add to the end
let end = ar1.pop()       // remove from the end
ar1.unshift("front")      // add to the front
let front = ar1.shift()   // remove from the front

//5 modifying arrays
let removed = ar1.splice(2,1,100,200)  // .splice(start, deleteCount, ...newitemlist)
let sliced = ar1.slice(1,3)            // .slice(start, end) -> [start,end)
ar1.reverse()                          // .reverse() reverse order in place
ar1.sort()                             // sort in place, lexicographically

//6 searching
p(ar1.includes("two"))
p(ar1.indexOf("two"))
p(ar1.lastIndexOf("two"))

//7 functional
p(ar1.find(x => x > 2))
p(ar1.findIndex(x => x > 2))
ar1.forEach((v, i) => p(i, v))
let mapped = ar1.map(x => x * 2)
let filtered = ar1.filter(x => x > 2)
let reduced = ar1.reduce((sum, x) => sum + x, 0)

//8 creating new arrays from old
let ar12 = ar1.concat(ar2)        // merge
let ar15 = [...ar1, ...ar5]       // spread/rest operator
let sorted = ar1.toSorted()       // new sorted array
let spliced = ar1.toSpliced(1,3)  // new spliced array

//9 converting arrays
p(ar1.join("-"))
p(ar1.toString())

*/