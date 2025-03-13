//Arrays

function p(...a) { console.log(...a) }

//1 creating
let ar1 = [10, "two", false, 20, null, "two"] // literal
let ar2 = new Array("X", "y", undefined)      // object initialization
let ar3 = Array(5)             // array of size 5
let ar4 = Array.of(5)         // array containing 1 element (i.e., 5) 
let ar5 = Array.from("hello") // can be from any iterable

//2 type checking
p(Array.isArray(ar1))    // true
p(ar1 instanceof Array)  // true

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