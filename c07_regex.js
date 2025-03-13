// c07_regex.js

function p(...a) { console.log(...a); }

/*
Regular Expression Methods
- text.match(/regex/g) = array of all matches (with option g)
- text.matchAll(/regex/g) = iterator of all matches (with option g)
- text.replace(/regex/, replacement) = replace the first match
- text.replaceAll(/regex/, replacement) = replace all matches
- text.search(/regex/) = index of the first match, or else -1
- text.split(/regex/) = array of string split by regex
- regex.test(text) = true or false
*/

function create() {
    p("Regular Expression Creation and Type --------------");
    let t = 'This is a string for testing regular expression in JavaScript.';
    p(`t: [${t}]`);

    // Create
    let r = /is/ig;
    let o = new RegExp("is", "ig");

    // Type
    p(`r: [${r}], typeof r: ${typeof r}`);
    p(`o: [${o}], typeof o: ${typeof o}`);
}

function match() {
    p("Regular Expression Matching --------------");
    let text = "The rain in Spain stays mainly in the plain.";
    
    // Match
    p("Matching 'ain' globally:", text.match(/ain/g));
    p("Matching all occurrences with details:", [...text.matchAll(/ain/g)]);
    
    // Test
    let regex = /rain/;
    p("Does 'rain' exist in text?", regex.test(text));
    
    // Search
    p("Index of 'Spain':", text.search(/Spain/));
    
    // Replace
    p("Replace 'rain' with 'snow':", text.replace(/rain/, "snow"));
    p("Replace all 'in' with 'OUT':", text.replaceAll(/in/g, "OUT"));
    
    // Split
    p("Split text at spaces:", text.split(/\s+/));
}

create();
match();


////////////////////////////////
// c07_arrays.js

function p(...a) { console.log(...a); }

function create() {
    p("Array Creation and Type ---------------");
    
    // Create arrays
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = new Array(3).fill(0);
    let arr3 = Array.from("hello");
    
    // Type
    p("arr1:", arr1, "Type:", typeof arr1);
    p("arr2:", arr2, "Type:", typeof arr2);
    p("arr3 (from string):", arr3);
}

function arrayAndString() {
    p("Array and String Similarity ---------------");
    
    let str = "Hello,World";
    let arr = str.split(",");
    
    p("String to Array:", arr);
    p("Array to String:", arr.join(" - "));
}

create();
arrayAndString();