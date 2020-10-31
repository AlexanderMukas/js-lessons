// function

function myFunc(Obj){
    Obj.brand = "Toyota";
}

/* new var myCar 
*/
let myCar = {
    brand: "BMW",
    model: "340d",
    year: 1995
};
console.log(`My car is - ${myCar.brand} ${myCar.model} `);

myFunc(myCar); // rewrite variable brand
console.log(myCar);

let x = 20;
x = x => {return x * 20;}
console.log(x);

let materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  materials.map(function(material) { 
    return material.length; 
  }); // [8, 6, 7, 9]
  
  materials.map((material) => {
    return material.length;
  }); // [8, 6, 7, 9]
  
  materials.map(material => material.length); // [8, 6, 7, 9]

  // An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')(); 
// Returns "foobar"
// (this is an Immediately Invoked Function Expression 
// see 'IIFE' in glossary)

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);  
// 66

var even = arr.filter(v => v % 2 == 0); 
// [6, 0, 18]

const x = 20;
const y; // error
x = 22; // error

var double = arr.map(v => v * 2);       
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);  