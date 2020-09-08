// oop - class

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        console.log("Constructor done...")
    };

    sayName(){
        console.log(`${this.firstName} ${this.lastName} - good person and human!`);
    };
    //let firstName;
    //let lastName;

}

let obj1 = new Person("Ivan", "Ivanov");

obj1.sayName();