// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

// MAP //
Array.prototype.myMap = function(callbackFn) {
    // Cannot use "let new_this = this" as this refers to the same address
    // It will also mutate "this" array - no good
    let new_this = [];
    for (let i = 0; i < this.length; i++) {
        new_this.push(this[i]); // Add new element
        if (new_this === null | new_this === undefined) {
            delete new_this[i]; // Trying to get empty item instead of undefined
        }
        if (this[i] === undefined | this [i] === null) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        new_this[i] = callbackFn(this[i], i, this); 
        // Do the callback Fn on the original array
        // The man page says that the callback Fn may mutate the original array
        // if that's what it calls for - implying that the callbackFn should be 
        // done on the original array.
    }
    return new_this; 
};

// TEST //
// Test myMap against the native map to ensure that it works
let myArray = [1,2,,4,5,6];   // Array called by the function

// Test with 1 parameter: element
console.log("myMap (1 parameter): element");
console.log(myArray.myMap(x => x * 2)); // Parameter: x => x * 2
console.log(myArray);

console.log("map (1 parameter): element");
console.log(myArray.map(x => x * 2)); // Parameter: x => x * 2
console.log(myArray);

// Test with 2 parameters: element, index
console.log("myMap (2 parameters): element, index");
console.log(myArray.myMap((x,i) => x * i)); // Parameter: (x,i) => x * i
console.log(myArray);

console.log("map (2 parameters): element, index");
console.log(myArray.map((x,i) => x * i)); // Parameter: (x,i) => x * i
console.log(myArray);

// Test with 3 parameters: element, index, array
console.log("myMap (3 parameters): element, index, array");
console.log(myArray.myMap((x,i,myArray) => x * i * i));   // Parameter: (x,i,myArray) => x * i * i
console.log(myArray);

console.log("map (3 parameters): element, index, array");
console.log(myArray.map((x,i,myArray) => x * i * i));   // Parameter: (x,i,myArray) => x * i * i
console.log(myArray);

// Original array is not affected
console.log("Original array:");
console.log(myArray);