//  Функции

const greetings = document.getElementById('greetings');
function greet() {
    let name = document.querySelector('input').value;
    greetings.innerHTML = `<h1>Welcome user - ${name} ! </h1>`;
    // console.log(name);
}