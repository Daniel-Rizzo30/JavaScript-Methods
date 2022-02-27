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
Array.prototype.mySome = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.myKeys = function() {

};

// VALUES //
Object.myValues = function() {

};