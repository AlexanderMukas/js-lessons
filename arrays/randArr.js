
function random(min, max){
    return Math.random() * (max - min) + min;  
}

// arr with 1 milion elements
const startTime = Date.now();
const randArr = Array(1000000).fill.map( () => random(1, 100) );
const endTime = (Date.now() - start ) / 1000;
console.log('Finish - ', endTime, 'sec.');

console.log(randArr);