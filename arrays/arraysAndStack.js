var cars = new Array("Saab", "Volvo", "BMW");
// var x = cars.push("OPEL");
// var y =  cars.pop(); // BMW
// var z = cars.shift() // delete Saab
// // Create myself Stack

// var Stack = function(){
//     this.count = 0;
//     this.storage = {};

//     // Adds a value into the end of the stack
//     this.push = function(value){
//         this.storage[this.count] = value;
//         this.count++; 
//     }

//     // Removes and returns the value at the end of the stack
//     this.pop = function(){
//         if(this.count === 0){
//             return undefined;
//         }

//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function(){
//         return this.count;
//     }
//     // Returns the value at the end of the stack - last eliment
//     this.peek = function(){
//         return this.storage[this.count-1];
//     }
// }

// let myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// console.log(myStack);
// console.log(`Size of stack : ${myStack.size()} !`);
// console.log(myStack.peek());var cars = new Array("Saab", "Volvo", "BMW");
// var x = cars.push("OPEL");
// var y =  cars.pop(); // BMW
// var z = cars.shift() // delete Saab
// // Create myself Stack

// var Stack = function(){
//     this.count = 0;
//     this.storage = {};

//     // Adds a value into the end of the stack
//     this.push = function(value){
//         this.storage[this.count] = value;
//         this.count++; 
//     }

//     // Removes and returns the value at the end of the stack
//     this.pop = function(){
//         if(this.count === 0){
//             return undefined;
//         }

//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function(){
//         return this.count;
//     }
//     // Returns the value at the end of the stack - last eliment
//     this.peek = function(){
//         return this.storage[this.count-1];
//     }
// }

// let myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// console.log(myStack);
// console.log(`Size of stack : ${myStack.size()} !`);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

// Some Arrays (24.09.2020)
//const cars = ["BMW", "Volvo", "Infiniti"];
const peoples = [
    {name: "Ivan", salary: 3000},
    {name: "Elena", salary: 5030},
    {name: "Alexander", salary: 9920}
];

const index = cars.indexOf('BMW');
// console.log(index); // 2

// a... full syntax
// const index2 = peoples.findIndex( (person) => {
//     return person.salary <= 3000; 
// });

// b... smart syntax
const index2 = peoples.findIndex( person => person.salary <= 3000 );

// console.log(index2); // 0
console.log(peoples[index2] ); // { name: 'Ivan', salary: 3000 }