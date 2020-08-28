var cars = new Array("Saab", "Volvo", "BMW");
var x = cars.push("OPEL");
var y =  cars.pop(); // BMW
var z = cars.shift() // delete Saab
// Create myself Stack

var Stack = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value into the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++; 
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }






}