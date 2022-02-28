// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length - 1) {
    let index = -1; // Make an int which saves last location of element
    // Set to -1 first so that upon no find, -1 will be returned
    if (fromIndex < 0) {
        // For searching from the back of the array
        // So -1 means searching just the last element
        // -2 ... the last 2 elements ... so on
        fromIndex = this.length + fromIndex; 
    }
    for (let i = fromIndex; i >= 0; i--) { // Search backwards
        if (this[i] === searchElement) {
            index = i; // Save the index
            break; // Break so that no earlier elements can overwrite this index
            // Only the first instance is what is needed anyways
        }
    }
    return index;
};

// The lastIndexOf() method returns the last index at which 
// a given element can be found in the array, or -1 if it is 
// not present. The array is searched backwards, starting at fromIndex.

// TEST //
// Test myLastIndexOf against the native LastIndexOf to ensure that it works
let myArray = [0,1,2,"snake",4,5,"cat","Scarlet Witch",2]; // Array called by the function

// Test with 1 parameter: element
console.log("myLastIndexOf (1 parameter): element");
console.log(myArray.myLastIndexOf(2)); // Parameter: 2 Returns 8
console.log(myArray);

console.log("LastIndexOf (1 parameter): element");
console.log(myArray.lastIndexOf(2)); // Parameter: 2 Returns 8
console.log(myArray);

// Test with 2 parameters: element, fromIndex
console.log("myLastIndexOf (2 parameters): element, fromIndex");
console.log(myArray.myLastIndexOf(1,3)); // Parameter: 1,3 Returns 1
console.log(myArray);

console.log("LastIndexOf (2 parameters): element, fromIndex");
console.log(myArray.lastIndexOf(1,3)); // Parameter: 1,3 Returns 1
console.log(myArray);

// Test with 2 parameters again: element, fromIndex
console.log("myLastIndexOf (2 parameters): element, fromIndex");
console.log(myArray.myLastIndexOf("cat",4)); // Parameter: "cat",4 Returns -1
console.log(myArray);

console.log("LastIndexOf (2 parameters): element, fromIndex");
console.log(myArray.lastIndexOf("cat",4)); // Parameter: "cat",4 Returns -1
console.log(myArray);

// Test with 2 parameters a third time: element, fromIndex
console.log("myLastIndexOf (2 parameters): element, fromIndex");
console.log(myArray.myLastIndexOf("Scarlet Witch",-1)); // Parameter: "Scarlet Witch",-1 Returns 7
console.log(myArray);

console.log("LastIndexOf (2 parameters): element, fromIndex");
console.log(myArray.lastIndexOf("Scarlet Witch",-1)); // Parameter: "Scarlet Witch",-1 Returns 7
console.log(myArray);

// Original array is not affected
console.log("Original array:");
console.log(myArray);