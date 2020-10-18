// oop - class
"use strict";
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    walk(){
        console.log(`animal ${this.name} go walking in area. Age: ${this.age}`);
    };

    talk() {};
}

class Cat extends Animal {
    constructor(name, age) 
}