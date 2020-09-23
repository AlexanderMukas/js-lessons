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


// 2. Anonymous functions, Arrow functions
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