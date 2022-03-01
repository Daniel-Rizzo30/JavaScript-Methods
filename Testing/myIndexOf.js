// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    let index = -1; // Make an int which saves first location of element
    // Set to -1 first so that upon no find, -1 will be returned
    if (fromIndex < 0) {
        // For searching from the back of the array
        // So -1 means searching just the last element
        // -2 ... the last 2 elements ... so on
        fromIndex = this.length + fromIndex; 
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            index = i; // Save the index
            break; // Break so that no later elements can overwrite this index
            // Only the first instance is what is needed anyways
        }
    }
    return index;
};

// The indexOf() method returns the first index at which a 
// given element can be found in the array, or -1 if it is 
// not present.

// TEST //
// Test myIndexOf against the native indexOf to ensure that it works
let myArray = [0,1,2,"snake",4,5,"cat","Scarlet Witch",2]; // Array called by the function

// Test with 1 parameter: element
console.log("myIndexOf (1 parameter): element");
console.log(myArray.myIndexOf(2)); // Parameter: 2 Returns 2
console.log(myArray);

console.log("IndexOf (1 parameter): element");
console.log(myArray.indexOf(2)); // Parameter: 2 Returns 2
console.log(myArray);

// Test with 2 parameters: element, fromIndex
console.log("myIndexOf (2 parameters): element, fromIndex");
console.log(myArray.myIndexOf(1,3)); // Parameter: 1,3 Returns -1
console.log(myArray);

console.log("IndexOf (2 parameters): element, fromIndex");
console.log(myArray.indexOf(1,3)); // Parameter: 1,3 Returns -1
console.log(myArray);

// Test with 2 parameters again: element, fromIndex
console.log("myIndexOf (2 parameters): element, fromIndex");
console.log(myArray.myIndexOf("cat",4)); // Parameter: "cat",4 Returns 6
console.log(myArray);

console.log("IndexOf (2 parameters): element, fromIndex");
console.log(myArray.indexOf("cat",4)); // Parameter: "cat",4 Returns 6
console.log(myArray);

// Test with 2 parameters a third time: element, fromIndex
console.log("myIndexOf (2 parameters): element, fromIndex");
console.log(myArray.myIndexOf("Scarlet Witch",-2)); // Parameter: "Scarlet Witch",-2 Returns 7
console.log(myArray);

console.log("IndexOf (2 parameters): element, fromIndex");
console.log(myArray.indexOf("Scarlet Witch",-2)); // Parameter: "Scarlet Witch",-2 Returns 7
console.log(myArray);

// Original array is not affected
console.log("Original array:");
console.log(myArray);