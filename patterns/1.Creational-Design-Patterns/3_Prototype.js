// 3. Prototype

const car = {
    wheels: 4,

    init(){
        console.log(`I have a ${this.wheels} wheels, my owner is ${this.owner}`);
    }
};

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Alexander'
    }
});

console.log(carWithOwner.__proto__ === car);  // true
carWithOwner.init();                                    // I have a 4 wheels, my owner is Alexander