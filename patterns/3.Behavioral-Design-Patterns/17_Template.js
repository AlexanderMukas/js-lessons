// 17. Template 

// this is like Template of some Employee
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsobilities() {};

    work(){
        return `${this.name} do: ${this.responsobilities()}`;
    }

    getPaid() {
        return `${this.name} has salary: ${this.salary}!`;
    }
}

class Developer extends Employee {
    constructor(name, salary){
        super(name, salary)
    }

    responsobilities() {
        return 'the build software process';
    }
}

class Tester extends Employee {
    constructor(name, salary){
        super(name, salary)
    }

    responsobilities() {
        return 'the testing software process';
    }
}

const dev = new Developer('Vasiliy', 2000);
const tester = new Tester('Alexander', 1000);

console.log( dev.work() );
console.log( dev.getPaid() );

console.log( tester.work() );
console.log( tester.getPaid() );



