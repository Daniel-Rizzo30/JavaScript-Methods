// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    let reduced = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined | this [i] === null) continue;
        if (i === 0) {
            // Copy and continue on first go so that any multiplication reductions 
            // won't get clobbered by stating with a 0
            reduced = this[i]; 
            continue;
        }
        reduced = callbackFn(reduced, this[i], i, this) // Uses 4 params
    }
    return reduced;
};

// The reduce() method executes a user-supplied "reducer" callback function 
// on each element of the array, in order, passing in the return value 
// from the calculation on the preceding element. The final result of 
// running the reducer across all elements of the array is a single value.

// TEST //
// Test myReduce against the native reduce to ensure that it works
let myArray = [10,5,2,4,12]; // Array called by the function

// Test with 1 parameter: element
console.log("myReduce (1 parameter): element");
console.log(myArray.myReduce((x,y) => x + y)); // Parameter: (x,y) => x + y 
console.log(myArray);

console.log("reduce (1 parameter): element");
console.log(myArray.reduce((x,y) => x + y)); // Parameter: (x,y) => x + y
console.log(myArray);

// Test with 2 parameters: element, index
console.log("myReduce (2 parameters): element, index");
console.log(myArray.myReduce((x,y,i) => x * y)); // Parameter: (x,y,i) => x * y
console.log(myArray);

console.log("reduce (2 parameters): element, index");
console.log(myArray.reduce((x,y,i) => x * y)); // Parameter: (x,y,i) => x * y
console.log(myArray);

// Test with 3 parameters: element, index, array
console.log("myReduce (3 parameters): element, index, array");
console.log(myArray.myReduce((x,y,i,myArray) => x - y));   // Parameter: (x,y,i,myArray) => x - y
console.log(myArray);

console.log("reduce (3 parameters): element, index, array");
console.log(myArray.reduce((x,y,i,myArray) => x - y));   // Parameter: (x,y,i,myArray) => x - y
console.log(myArray);

// Original array is not affected
console.log("Original array:");
console.log(myArray);