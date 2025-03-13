//c08_array_exercise.js

function sumUntilInfinity(ar) {
        //multiply all numbers in the array until you reach Infinity
        //skip anything that that is not a positive number
        //return the product (the result from multiplication)
        //(if you see Infinity, skip the rest of the array and return the product)
        let product = 1;
        for (let num of ar) {
            if (num === Infinity) break; // Stop when meet Infinity
            if (typeof num === "number" && num > 0) {
                product *= num;
            }
        }    
        return product;
}

function replaceAllNegativeValueWith(ar, increment) {
    //change all negative numbers in the array 
    //by adding "increment" to them until they are positive
    //everything else remain the same
    //return the result but do not change the original array
    return ar.map(num => {
        while(num < 0){
            num += increment;
        }
        return num;
    });
}
console.log(sumUntilInfinity([2, 3, -1, 4, Infinity, 5])); // Output: 24 (2 * 3 * 4)
console.log(replaceAllNegativeValueWith([-5, 10, -2, 3], 3)); // Output: [1, 10, 1, 3]