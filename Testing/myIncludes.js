// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
    let includes_flag = false; // Set flag for searching
    if (fromIndex < 0) {
        // For searching from the back of the array
        // So -1 means searching just the last element
        // -2 ... the last 2 elements ... so on
        fromIndex = this.length + fromIndex; 
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            includes_flag = true;
            break; // Condition satisfied, skip the rest
        }
    }
    return includes_flag;
};

// The includes() method determines whether an array includes 
// a certain value among its entries, returning true or false 
// as appropriate

// TEST //
// Test myIncludes against the native includes to ensure that it works
let myArray = [1,2,3,4,5,"cat"]; // Array called by the function

// Test with 1 parameter: element
console.log("myIncludes (1 parameter): element");
console.log(myArray.myIncludes(2)); // Parameter: 2
console.log(myArray);

console.log("Includes (1 parameter): element");
console.log(myArray.includes(2)); // Parameter: 2
console.log(myArray);

// Test with 2 parameters: element, fromIndex
console.log("myIncludes (2 parameters): element, fromIndex");
console.log(myArray.myIncludes(1,3)); // Parameter: 1,3 Returns false
console.log(myArray);

console.log("Includes (2 parameters): element, fromIndex");
console.log(myArray.includes(1,3)); // Parameter: 1,3 Returns false
console.log(myArray);

// Test with 2 parameters again: element, fromIndex
console.log("myIncludes (2 parameters): element, fromIndex");
console.log(myArray.myIncludes("cat",4)); // Parameter: "cat",4 Returns true
console.log(myArray);

console.log("Includes (2 parameters): element, fromIndex");
console.log(myArray.includes("cat",4)); // Parameter: "cat",4 Returns true
console.log(myArray);

// Test with 2 parameters a third time: element, fromIndex
console.log("myIncludes (2 parameters): element, fromIndex");
console.log(myArray.myIncludes(1,-1)); // Parameter: 1,-1 Returns false
console.log(myArray);

console.log("Includes (2 parameters): element, fromIndex");
console.log(myArray.includes(1,-1)); // Parameter: 1,-1 Returns false
console.log(myArray);

// Original array is not affected
console.log("Original array:");
console.log(myArray);