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

class BlackCat extends Animal {
    constructor(name, age){
        super(name, age);
        this.color = 'black'
    }

    talk(){
        console.log( `Say meow of ${black} animal` );
    }
}

pet1 = new BlackCat('Murzik', 3);
pet1.walk();
pet1.talk();