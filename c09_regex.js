console.log("==== JavaScript Array Coding Practice ====\n");

// 1. Create an array containing numbers from 1 to 10
function createArray() {
    return Array.from({ length: 10 }, (_, i) => i + 1);
}
console.log("1. Create an array of numbers 1-10:", createArray());

// 2. Write a function that returns the sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log("2. Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));

// 3. Write a function to filter out numbers greater than 50
function filterNumbers(arr) {
    return arr.filter(num => num > 50);
}
console.log("3. Filter numbers greater than 50 in [10, 55, 60, 30, 80]:", filterNumbers([10, 55, 60, 30, 80]));

// 4. Write a function that doubles each element in an array
function doubleArray(arr) {
    return arr.map(num => num * 2);
}
console.log("4. Double each element in [1, 2, 3]:", doubleArray([1, 2, 3]));

// 5. Find the largest number in an array
function maxNumber(arr) {
    return Math.max(...arr);
}
console.log("5. Largest number in [10, 20, 30, 50, 5]:", maxNumber([10, 20, 30, 50, 5]));

// 6. Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("6. Remove duplicates from [1, 2, 2, 3, 4, 4, 5]:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 7. Find the index of a given number in an array (if not found, return -1)
function findIndex(arr, num) {
    return arr.indexOf(num);
}
console.log("7. Index of 30 in [10, 20, 30, 40]:", findIndex([10, 20, 30, 40], 30));

// 8. Check if an array contains a specific number
function containsNumber(arr, num) {
    return arr.includes(num);
}
console.log("8. Does [5, 10, 15] contain 10?:", containsNumber([5, 10, 15], 10));

// 9. Reverse an array without using `.reverse()`
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log("9. Reverse [1, 2, 3, 4]:", reverseArray([1, 2, 3, 4]));

// 10. Sort an array of numbers in ascending order
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log("10. Sort [40, 10, 50, 30]:", sortArray([40, 10, 50, 30]));

console.log("\n==== Practice Finished ====");
console.log("==== JavaScript Array Coding Practice ====\n");

// 1. Create an array containing numbers from 1 to 10
function createArray() {
    return Array.from({ length: 10 }, (_, i) => i + 1);
}
console.log("1. Create an array of numbers 1-10:", createArray());

// 2. Write a function that returns the sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log("2. Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));

// 3. Write a function to filter out numbers greater than 50
function filterNumbers(arr) {
    return arr.filter(num => num > 50);
}
console.log("3. Filter numbers greater than 50 in [10, 55, 60, 30, 80]:", filterNumbers([10, 55, 60, 30, 80]));

// 4. Write a function that doubles each element in an array
function doubleArray(arr) {
    return arr.map(num => num * 2);
}
console.log("4. Double each element in [1, 2, 3]:", doubleArray([1, 2, 3]));

// 5. Find the largest number in an array
function maxNumber(arr) {
    return Math.max(...arr);
}
console.log("5. Largest number in [10, 20, 30, 50, 5]:", maxNumber([10, 20, 30, 50, 5]));

// 6. Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("6. Remove duplicates from [1, 2, 2, 3, 4, 4, 5]:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 7. Find the index of a given number in an array (if not found, return -1)
function findIndex(arr, num) {
    return arr.indexOf(num);
}
console.log("7. Index of 30 in [10, 20, 30, 40]:", findIndex([10, 20, 30, 40], 30));

// 8. Check if an array contains a specific number
function containsNumber(arr, num) {
    return arr.includes(num);
}
console.log("8. Does [5, 10, 15] contain 10?:", containsNumber([5, 10, 15], 10));

// 9. Reverse an array without using `.reverse()`
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log("9. Reverse [1, 2, 3, 4]:", reverseArray([1, 2, 3, 4]));

// 10. Sort an array of numbers in ascending order
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log("10. Sort [40, 10, 50, 30]:", sortArray([40, 10, 50, 30]));

console.log("\n==== Practice Finished ====");
