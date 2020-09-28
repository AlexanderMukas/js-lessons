
function random(min, max){
    return Math.random() * (max - min) + min;  
}

function getRandomArr(numElem = 10) {
    return Array(numElem).fill().map( () => Math.trunc( random(1, 10000) ));
}

function getSortedArr(arr){
    return arr.sort( (a, b) => a - b);
}

function start(){
    
}
// arr with 1 milion elements
const numEl = 2000000;

const startTime = Date.now();
const randArr = getRandomArr(2000000);
const endTime = (Date.now() - startTime ) / 1000;

console.log(`Creating ${numEl} random(1,10000) elements in Array : Finish - ', ${endTime} sec.`);

// console.log(randArr);

// Time of sorting
const startTime2 = Date.now();
const sortedRandArr = getSortedArr(randArr);
const endTime2 = (Date.now() - startTime ) / 1000;
console.log(`Sorting ${numEl} random(1,10000) elements in Array : Finish - ', ${endTime2} sec.`);
// console.log(sortedRandArr);