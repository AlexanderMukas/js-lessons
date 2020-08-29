// First lesson - types of variables and loops
var someVar = 5;
let secondVar = 'Hello';

// constanta - not use twice
const arr = ['Alexander', 'Peter'];
console.log(`${secondVar} ${arr[0]} and ${arr[1]}!`);

//arr = ['John', 'Elisabeth'];
//console.log(`${secondVar} ${arr[0]} and ${arr[1]}!`);
// Arrays and Objects
let myArr = [1,2,3,4,5,6,7,8,9];

// print every item of list/array
myArr.forEach( item => console.log(item));
myArr.forEach( item => console.log(item*10));
// methods of List
console.log( myArr.length )
// Pop - delete last item
// push - add item in end of arr
myArr.pop();
myArr.push(666);
console.log(myArr);

let myObj = {key1: "This is ", key2: "JavaScript"};
//add new keys
myObj.key3 = 'Some else';
myObj.key4 = 'Some else again';
console.log(myObj);

// Logic like Java
let count = 4;
if(count === 5){
    console.log("This is very good");
} else if(count === 4){
    console.log("Not bad today");
} else {
    console.log("Learning not for you!");
}

