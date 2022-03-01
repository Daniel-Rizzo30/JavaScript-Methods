// Daniel Rizzo
// CSCI Web Development
// Assignment 2 - JavaScript Methods
// Professor Johnny Lai
// March 15th, 2022

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

// The Object.values() method returns an array of a given 
// object's own enumerable property values, in the same 
// order as that provided by a for...in loop. (The only 
// difference is that a for...in loop enumerates properties 
// in the prototype chain as well.)

// TEST //
// Test myValues against the native values to ensure that it works
let myArray = [0,1,2,"snake",4,5,"cat","Scarlet Witch",2]; // Array called by the function

const anObj = { 100: 'a', 2: 'b', 7: 'c' }; // Object called by the function

const myObj = Object.create({}, {
    getFoo: {
      value: function () { return this.foo; }
    }
  });
myObj.foo = 1; 

var buttons = {
  foo: 'bar',
  fiz: 'buz'
};

// Test with myArray
console.log("myValues (1 parameter): object");
console.log(Object.myValues(myArray)); // Parameter: myArray
console.log("Values (1 parameter): object");
console.log(Object.values(myArray)); // Parameter: myArray

// Test with anObj
console.log("myValues (1 parameter): object");
console.log(Object.myValues(anObj)); // Parameter: anObj
console.log("Values (1 parameter): object");
console.log(Object.values(anObj)); // Parameter: anObj

// Test with myObj
console.log("myValues (1 parameter): object");
console.log(Object.myValues(myObj)); // Parameter: myObj
console.log("Values (1 parameter): object");
console.log(Object.values(myObj)); // Parameter: myObj

// Test with buttons
console.log("myValues (1 parameter): object");
console.log(Object.myValues(buttons)); // Parameter: buttons
console.log("Values (1 parameter): object");
console.log(Object.values(buttons)); // Parameter: buttons