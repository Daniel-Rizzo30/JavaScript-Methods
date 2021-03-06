// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

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

// SOME //
Array.prototype.mySome = function(callbackFn) {
    let any_flag = 0;
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            any_flag = 1;
            break;
        }
    }
    if (any_flag) {
        return true;
    }
    else {
        return false;
    }
};

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
// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

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

// KEYS //
Object.myKeys = function(obj) {
    let attr_list = []; // Set up empty array
    for (var attr in obj) { // for each attribute in the object
        attr_list.push(attr); // Push to the list
    } // Do not use "for (let attr of obj)" - this won't work
    return attr_list; // Return the full list
};

// VALUES //
Object.myValues = function(obj) { 
    // Cannot just "return obj;" as this will output both attr and value
    let value_list = []; // Set up empty array
    for (var value in obj) { // for each value in the object
        // Push to the list
        // Need to use [] to access the actual values of the attribute
        value_list.push(obj[value]);
    } // Do not use "for (let attr of obj)" - this won't work

    return value_list; // Return the full list
};