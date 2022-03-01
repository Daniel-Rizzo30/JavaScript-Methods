// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

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

// The some() method tests whether at least one element in the array 
// passes the test implemented by the provided function. It returns true if, 
// in the array, it finds an element for which the provided function returns 
// true; otherwise it returns false. It doesn't modify the array.

// TEST //
// Test mySome against the native some to ensure that it works
let myArray = [1,2,,9];   // Array called by the function

// Test with 1 parameter: element
console.log("mySome (1 parameter): element");
console.log(myArray.mySome(x => x > 10)); // Parameter: x => x > 10
console.log(myArray);

console.log("some (1 parameter): element");
console.log(myArray.some(x => x > 10)); // Parameter: x => x > 10
console.log(myArray);

// Test with 2 parameters: element, index
console.log("mySome (2 parameters): element, index");
console.log(myArray.mySome((x,i) => x > i)); // Parameter: (x,i) => x > i
console.log(myArray);

console.log("some (2 parameters): element, index");
console.log(myArray.some((x,i) => x > i)); // Parameter: (x,i) => x > i
console.log(myArray);

// Test with 3 parameters: element, index, array
console.log("mySome (3 parameters): element, index, array");
console.log(myArray.mySome((x,i,myArray) => x !== i + 1));   // Parameter: (x,i,myArray) => x !== i + 1
console.log(myArray);

console.log("some (3 parameters): element, index, array");
console.log(myArray.some((x,i,myArray) => x !== i + 1));   // Parameter: (x,i,myArray) => x !== i + 1
console.log(myArray);

// Original array is not affected
console.log("Original array:");
console.log(myArray);




const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

function checkMyAvailability(arr, val) {
    return arr.mySome(arrVal => val === arrVal);
}

console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true
console.log(checkMyAvailability(fruits, 'kela'));   // false
console.log(checkMyAvailability(fruits, 'banana')); // true