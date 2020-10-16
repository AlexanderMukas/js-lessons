// 16. Strategy

class Vehicle {
    travelTine() {
        return this.timeTaken;
    }
}

class Bus extends Vehicle {
    constructor(){
        super();
        this.timeTaken = 10;
    }
}

class Taxi extends Vehicle {
    constructor(){
        super();
        this.timeTaken = 5;
    }
}

class SelfCar extends Vehicle {
    constructor(){
        super();
        this.timeTaken = 3;
    }
}