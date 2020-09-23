// 1) Functions

const greetings = document.getElementById('greetings');

// a. Function Declaration
function greet() {
    let name = document.querySelector('input').value || "somebody?";
    greetings.innerHTML = `<h1>Welcome user - ${name} ! </h1>`;
    // console.log(name);
};

// b. Function Expression
const greet2 = function someGreet(name) {
    console.log('Привет', name);
};

// someGreet('Alexa');    // error
greet2('Alexa');   // working
console.dir(greet);


// 2. Anonymous functions, Arrow functions (ES6)
// setInterval, setTimeout
let counter = 0;

const interval = setInterval( () => {
    if(counter === 5){
        clearInterval(interval);
    } else {
        console.log(++counter);
    }
}, 1000);

const pow = num => num ** 2;
console.log(`pow(5): ${pow(5)}`); // 25

// 3. Default params (ES6)
const sum = (a = 0, b = 0) => a+b;
console.log('sum(5,9) ->', sum(5,9) );
console.log( 'sum(a = 0, b = 0) ->', sum() );

function sumAll(...all) {
    //console.log(all);
    let result = 0;
    for (let num of all){
        result+=num;
    }
    console.log('sumAll(1,2,3,4,5) ->',result);
    //all.reduce()    
};
sumAll(1,2,3,4,5); // [1,2,3,4,5]

// 4. closure (замыкания)
