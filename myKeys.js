// KEYS //
Object.myKeys = function(obj) {
    let attr_list = []; // Set up empty array
    for (var attr in obj) { // for each attribute in the object
        attr_list.push(attr); // Push to the list
    } // Do not use "for (let attr of obj)" - this won't work
    return attr_list; // Return the full list
};

// The Object.keys() method returns an array of a given 
// object's own enumerable property names, iterated in the 
// same order that a normal loop would.

// TEST //
// Test myKeys against the native keys to ensure that it works
let myArray = [0,1,2,"snake",4,5,"cat","Scarlet Witch",2]; // Array called by the function
// Should just list 0 - 8 when used in keys function

const anObj = { 100: 'a', 2: 'b', 7: 'c' }; // Object called by the function
// Should list 2, 7, 100 when used in keys function

const myObj = Object.create({}, {
    getFoo: {
      value: function () { return this.foo; }
    }
  });
myObj.foo = 1; 
// Should just list foo when called in keys function

var buttons = {
  foo: 'bar',
  fiz: 'buz'
};
// Should list foo and fiz when called in keys function

// Test with myArray
console.log("myKeys (1 parameter): object");
console.log(Object.myKeys(myArray)); // Parameter: myArray
console.log("keys (1 parameter): object");
console.log(Object.keys(myArray)); // Parameter: myArray

// Test with anObj
console.log("myKeys (1 parameter): object");
console.log(Object.myKeys(anObj)); // Parameter: anObj
console.log("keys (1 parameter): object");
console.log(Object.keys(anObj)); // Parameter: anObj

// Test with myObj
console.log("myKeys (1 parameter): object");
console.log(Object.myKeys(myObj)); // Parameter: myObj
console.log("keys (1 parameter): object");
console.log(Object.keys(myObj)); // Parameter: myObj

// Test with buttons
console.log("myKeys (1 parameter): object");
console.log(Object.myKeys(buttons)); // Parameter: myObj
console.log("keys (1 parameter): object");
console.log(Object.keys(buttons)); // Parameter: myObj