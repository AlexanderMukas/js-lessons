// oop - class
"use strict";
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.count++;
        console.log("Constructor done..." + this.count);
    };

    sayName(){
        console.log(`${this.firstName} ${this.lastName} - good person and human!`);
    };
}

let obj1 = new Person("Ivan", "Ivanov");
let obj2 = new Person("Peter", "Kawosov");
obj1.sayName();
obj2.sayName();