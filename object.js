'use strict'
let car = {
    color: 'red',
    ride : function() {
        console.log("Car go !..."); }
};

function corolChange(Object){
    Object.color = "violet";
};

console.log(`Color of car is : ${car.color}`);
car.ride();
//colorChange(car);
corolChange(car);
console.log(`Now is color of car is : ${car.color}!!!`);

let person = {
    firstName: "Bill",
    lastName: "Gates",
    getName(){
        return `${this.firstName} ${this.lastName}`;
    },
    getCompany(lastName){
        if(lastName === "Gates"){
            return "Microsoft";
        } else {
            return "I don't know name of Company."
        }
    }
}


console.log(person.getName());
console.log(person.getCompany());
console.log(person.getCompany("Gates"));
console.log(person.getCompany("Amstrong"));

