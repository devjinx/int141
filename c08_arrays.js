function p(...a) { console.log(...a) }

// Execute functions
creating()
typingAndEmptySlots()
accessingAndLooping()
modifyingArrays()
searchingArrays()
functionalProgrammingWithArrays()
creatingNewArrays()
convertingArrays()

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
    
    // Accessing elements
    p("First element:", ar[0])
    p("Second element:", ar[1])
    p("Last element:", ar.at(-1))
    
    // Looping through array
    p("Looping using forEach:")
    ar.forEach((value, index) => p(index, value))

    p("Looping using for-of:")
    for (let value of ar) {
        p(value)
    }

    p("Looping using for-in:")
    for (let index in ar) {
        p(index, ar[index])
    }
}

function modifyingArrays() {
    let ar1 = [10, "two", false, 20, null, "two"]
    
    ar1.push("end")           
    p("After push:", ar1)

    let end = ar1.pop()       
    p("After pop:", ar1, "Removed:", end)

    ar1.unshift("front")      
    p("After unshift:", ar1)

    let front = ar1.shift()   
    p("After shift:", ar1, "Removed:", front)

    let removed = ar1.splice(2, 1, 100, 200)  
    p("After splice:", ar1, "Removed:", removed)

    let sliced = ar1.slice(1, 3)            
    p("Sliced array:", sliced)

    ar1.reverse()                          
    p("After reverse:", ar1)

    ar1.sort()                             
    p("After sort:", ar1)
}

function searchingArrays() {
    let ar1 = [10, "two", false, 20, null, "two"]

    p("Includes 'two':", ar1.includes("two"))
    p("Index of 'two':", ar1.indexOf("two"))
    p("Last index of 'two':", ar1.lastIndexOf("two"))
}

function functionalProgrammingWithArrays() {
    let ar1 = [10, 3, 7, 20, 15]

    p("Find first element > 2:", ar1.find(x => x > 2))
    p("Find index of first element > 2:", ar1.findIndex(x => x > 2))

    p("ForEach loop:")
    ar1.forEach((v, i) => p(i, v))

    let mapped = ar1.map(x => x * 2)
    p("Mapped (x2):", mapped)

    let filtered = ar1.filter(x => x > 10)
    p("Filtered (x > 10):", filtered)

    let reduced = ar1.reduce((sum, x) => sum + x, 0)
    p("Reduced (sum):", reduced)
}

function creatingNewArrays() {
    let ar1 = [10, "two", false]
    let ar2 = ["X", "Y", "Z"]

    let ar12 = ar1.concat(ar2)        
    p("Concatenated array:", ar12)

    let ar15 = [...ar1, ...ar2]       
    p("Spread operator array:", ar15)

    let sorted = ar1.toSorted()       
    p("New sorted array:", sorted)

    let spliced = ar1.toSpliced(1, 2)  
    p("New spliced array:", spliced)
}

function convertingArrays() {
    let ar1 = [10, "two", false]

    p("Joined with '-':", ar1.join("-"))
    p("To string:", ar1.toString())
}