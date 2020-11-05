// Filter, map, find, forEach, some, every, reduce, includes methods here!
// FILTER METHOD
const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 666},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
];
// filter items only price <= 100
const filteredItems = items.filter( (item)=> {
    return item.price <= 100;
});
// console.log(items);
// console.log(filteredItems);

//MAP METHOD
// Map only names or prices in new list
const itemNames = items.map( (item)=> {
    return item.name;
});
//console.log(itemNames);

//FIND METHOD
const foundItem = items.find( (item)=> {
    return item.name === 'Book';
});
//console.log(foundItem);

// FOREACH METHOD (like loop function)
// items.forEach( (item)=> {
//     console.log(`${item.name} with price - ${item.price} $`);
// });

// SOME METHOD
// return true if find
const hasInexpensiveItems = items.some( (item)=> {
    return item.price === 5;
    //return item.price <= 0;  // false
});
// console.log(hasInexpensiveItems); // true

// EVERY METHOD
// true is every item is frue expression
const hasInexpensiveItems2 = items.every( (item)=> {
    return item.price === 200;
    //return item.price <= 0;  
});
// console.log(hasInexpensiveItems2); 

// REDUCE METHOD
// total price for example
const total = items.reduce( (currentTotal, item) => {
    return item.price + currentTotal;
}, 0);                                    // zero is currentTotal

console.log(total);

let items2 = [1,2,3,4,5];

//const includesTwo = items2.includes(2)  // true, 2 includes in list items2
const includesTwo = items2.includes(6)  // false, 6 not includes
console.log(includesTwo);
